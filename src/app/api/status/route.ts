import { NextRequest, NextResponse } from 'next/server';

// Detailed status endpoint for monitoring and debugging
export async function GET(request: NextRequest) {
  try {
    const startTime = Date.now();
    
    // Collect system information
    const systemInfo = {
      platform: process.platform,
      nodeVersion: process.version,
      architecture: process.arch,
      uptime: process.uptime(),
      pid: process.pid,
      memory: {
        rss: Math.round(process.memoryUsage().rss / 1024 / 1024),
        heapTotal: Math.round(process.memoryUsage().heapTotal / 1024 / 1024),
        heapUsed: Math.round(process.memoryUsage().heapUsed / 1024 / 1024),
        external: Math.round(process.memoryUsage().external / 1024 / 1024),
        arrayBuffers: Math.round(process.memoryUsage().arrayBuffers / 1024 / 1024),
      },
      cpu: process.cpuUsage(),
    };

    // Environment information
    const environmentInfo = {
      nodeEnv: process.env.NODE_ENV,
      platform: process.env.RENDER ? 'Render' : 'Other',
      timezone: process.env.NEXT_PUBLIC_DEFAULT_TIMEZONE,
      locale: process.env.NEXT_PUBLIC_DEFAULT_LOCALE,
      supportedLocales: process.env.NEXT_PUBLIC_SUPPORTED_LOCALES?.split(',') || [],
      features: {
        pwa: process.env.NEXT_PUBLIC_ENABLE_PWA === 'true',
        offline: process.env.NEXT_PUBLIC_ENABLE_OFFLINE_MODE === 'true',
        analytics: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true',
        geolocation: process.env.NEXT_PUBLIC_ENABLE_GEOLOCATION === 'true',
      },
    };

    // Emergency services configuration
    const emergencyServices = {
      police: process.env.NEXT_PUBLIC_EMERGENCY_POLICE,
      medical: process.env.NEXT_PUBLIC_EMERGENCY_MEDICAL,
      fire: process.env.NEXT_PUBLIC_EMERGENCY_FIRE,
      crisis: process.env.NEXT_PUBLIC_CRISIS_HOTLINE,
    };

    // Application information
    const appInfo = {
      name: process.env.NEXT_PUBLIC_APP_NAME,
      version: process.env.NEXT_PUBLIC_APP_VERSION,
      environment: process.env.NEXT_PUBLIC_ENVIRONMENT,
      url: process.env.NEXT_PUBLIC_APP_URL,
      buildTime: process.env.BUILD_TIME || 'Unknown',
      commitHash: process.env.COMMIT_HASH || 'Unknown',
    };

    // Security checks
    const securityChecks = {
      httpsEnforced: process.env.NODE_ENV === 'production',
      authSecretConfigured: !!process.env.NEXTAUTH_SECRET,
      appUrlConfigured: !!process.env.NEXT_PUBLIC_APP_URL,
      emergencyServicesConfigured: Object.values(emergencyServices).every(service => !!service),
    };

    // Performance metrics
    const responseTime = Date.now() - startTime;

    const statusData: any = {
      status: 'operational',
      timestamp: new Date().toISOString(),
      responseTime: `${responseTime}ms`,
      system: systemInfo,
      environment: environmentInfo,
      application: appInfo,
      emergencyServices,
      security: securityChecks,
      endpoints: {
        health: '/api/health',
        status: '/api/status',
        emergency: '/emergency/crisis',
        crisis: '/crisis-support',
        medical: '/medical-support',
      },
    };

    // Check for any critical issues
    const criticalIssues = [];
    
    if (!securityChecks.authSecretConfigured) {
      criticalIssues.push('NEXTAUTH_SECRET not configured');
    }
    
    if (!securityChecks.emergencyServicesConfigured) {
      criticalIssues.push('Emergency services not fully configured');
    }
    
    if (systemInfo.memory.heapUsed > 400) {
      criticalIssues.push('High memory usage detected');
    }

    if (criticalIssues.length > 0) {
      statusData.status = 'degraded';
      statusData.issues = criticalIssues;
    }

    return NextResponse.json(statusData, {
      status: criticalIssues.length > 0 ? 503 : 200,
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
    });
  } catch (error) {
    console.error('Status check failed:', error);
    
    return NextResponse.json(
      {
        status: 'error',
        timestamp: new Date().toISOString(),
        error: error instanceof Error ? error.message : 'Unknown error',
        message: 'Status check failed',
      },
      { status: 500 }
    );
  }
}

// Support OPTIONS for CORS
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
