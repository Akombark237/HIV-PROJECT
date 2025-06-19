import { NextRequest, NextResponse } from 'next/server';

// Health check endpoint for Render monitoring
export async function GET(request: NextRequest) {
  try {
    const healthData = {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      service: 'HIV Crisis Support - Cameroon',
      version: process.env.NEXT_PUBLIC_APP_VERSION || '1.0.0',
      environment: process.env.NEXT_PUBLIC_ENVIRONMENT || 'production',
      uptime: process.uptime(),
      memory: {
        used: Math.round(process.memoryUsage().heapUsed / 1024 / 1024),
        total: Math.round(process.memoryUsage().heapTotal / 1024 / 1024),
        external: Math.round(process.memoryUsage().external / 1024 / 1024),
      },
      checks: {
        server: 'ok',
        environment: process.env.NODE_ENV === 'production' ? 'ok' : 'warning',
        emergencyServices: {
          police: process.env.NEXT_PUBLIC_EMERGENCY_POLICE === '117' ? 'ok' : 'error',
          medical: process.env.NEXT_PUBLIC_EMERGENCY_MEDICAL === '115' ? 'ok' : 'error',
          fire: process.env.NEXT_PUBLIC_EMERGENCY_FIRE === '118' ? 'ok' : 'error',
          crisis: process.env.NEXT_PUBLIC_CRISIS_HOTLINE?.includes('+237') ? 'ok' : 'error',
        },
        features: {
          pwa: process.env.NEXT_PUBLIC_ENABLE_PWA === 'true' ? 'ok' : 'disabled',
          offline: process.env.NEXT_PUBLIC_ENABLE_OFFLINE_MODE === 'true' ? 'ok' : 'disabled',
          localization: process.env.NEXT_PUBLIC_SUPPORTED_LOCALES?.includes('fr') ? 'ok' : 'warning',
        },
      },
    };

    // Check if all critical emergency services are configured
    const emergencyChecks = Object.values(healthData.checks.emergencyServices);
    const hasErrors = emergencyChecks.includes('error');

    if (hasErrors) {
      return NextResponse.json(
        {
          ...healthData,
          status: 'degraded',
          message: 'Some emergency services are not properly configured',
        },
        { status: 503 }
      );
    }

    return NextResponse.json(healthData, {
      status: 200,
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
    });
  } catch (error) {
    console.error('Health check failed:', error);
    
    return NextResponse.json(
      {
        status: 'unhealthy',
        timestamp: new Date().toISOString(),
        service: 'HIV Crisis Support - Cameroon',
        error: error instanceof Error ? error.message : 'Unknown error',
        checks: {
          server: 'error',
        },
      },
      { status: 503 }
    );
  }
}

// Support HEAD requests for simple health checks
export async function HEAD(request: NextRequest) {
  try {
    // Simple check - if we can respond, we're healthy
    return new NextResponse(null, {
      status: 200,
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
    });
  } catch (error) {
    return new NextResponse(null, { status: 503 });
  }
}
