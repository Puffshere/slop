const path = require('path');
const SitemapPlugin = require('sitemap-webpack-plugin').default;

// You can write the paths as an array of strings or an array of objects
const paths = [
  {
    path: '/',
    lastmod: '2021-11-22',
    priority: 1.0,
    changefreq: 'yearly'
  },
  {
    path: '/records/',
    lastmod: '2021-11-22',
    priority: 0.9,
    changefreq: 'yearly'
  },
  {
    path: '/rules/',
    lastmod: '2021-11-22',
    priority: 0.8,
    changefreq: 'yearly'
  }
];

module.exports = {
  configureWebpack: {
    plugins: [
      new SitemapPlugin({ base: 'https://sloppygolf.com', paths })
    ]
  },
  outputDir: path.resolve(__dirname, '../server/public'),
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000'
      }
    }
  }
};
