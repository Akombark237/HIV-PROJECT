/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_APP_URL || 'https://hiv-crisis-support.vercel.app',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: [
    '/admin-dashboard*',
    '/authentication/profile*',
    '/api/*',
    '/server-sitemap.xml',
  ],
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
    await config.transform(config, '/crisis-support'),
    await config.transform(config, '/medical-support'),
    await config.transform(config, '/hiv-care-integration'),
    await config.transform(config, '/safety-security'),
    await config.transform(config, '/educational-content'),
    await config.transform(config, '/communication-tools'),
    await config.transform(config, '/support-resources'),
    await config.transform(config, '/GBV/Hub'),
    await config.transform(config, '/emergency/crisis'),
    await config.transform(config, '/providers/police-gbv-unit'),
    await config.transform(config, '/providers/legal-aid-council'),
    await config.transform(config, '/providers/wrapa'),
    await config.transform(config, '/providers/fmc-yola-hiv'),
    await config.transform(config, '/providers/ministry-women-affairs'),
    await config.transform(config, '/help-support'),
    await config.transform(config, '/accessibility'),
    await config.transform(config, '/localization'),
    await config.transform(config, '/offline'),
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin-dashboard',
          '/authentication/profile',
          '/api/',
          '/_next/',
          '/private/',
        ],
      },
    ],
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_APP_URL || 'https://hiv-crisis-support.vercel.app'}/sitemap.xml`,
    ],
  },
  transform: async (config, path) => {
    // Custom priority and changefreq based on page importance
    const priorities = {
      '/': 1.0,
      '/crisis-support': 1.0,
      '/emergency/crisis': 1.0,
      '/medical-support': 0.9,
      '/hiv-care-integration': 0.9,
      '/safety-security': 0.9,
      '/GBV/Hub': 0.8,
      '/support-resources': 0.8,
      '/educational-content': 0.7,
      '/communication-tools': 0.7,
      '/help-support': 0.6,
      '/accessibility': 0.5,
      '/localization': 0.5,
      '/offline': 0.3,
    };

    const changefreqs = {
      '/': 'daily',
      '/crisis-support': 'daily',
      '/emergency/crisis': 'daily',
      '/medical-support': 'weekly',
      '/hiv-care-integration': 'weekly',
      '/safety-security': 'weekly',
      '/GBV/Hub': 'weekly',
      '/support-resources': 'monthly',
      '/educational-content': 'monthly',
      '/communication-tools': 'weekly',
      '/help-support': 'monthly',
      '/accessibility': 'yearly',
      '/localization': 'yearly',
      '/offline': 'yearly',
    };

    return {
      loc: path,
      changefreq: changefreqs[path] || 'monthly',
      priority: priorities[path] || 0.5,
      lastmod: new Date().toISOString(),
    };
  },
};
