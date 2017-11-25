RD /S /Q wwwroot\dist
RD /S /Q ClientApp\dist
node node_modules/webpack/bin/webpack.js --config webpack.config.vendor.js
