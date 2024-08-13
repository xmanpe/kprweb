const HtmlWebpackPlugin = require('html-webpack-plugin');
const InlineChunkHtmlPlugin = require('react-dev-utils/InlineChunkHtmlPlugin');
const HTMLInlineCSSWebpackPlugin = require('html-inline-css-webpack-plugin').default; 
const HtmlInlineScriptPlugin = require('html-inline-script-webpack-plugin'); 

module.exports = {
    webpack: {
        configure: (webpackConfig, { env, paths }) => {
            // Replace any existing InlineChunkHtmlPlugin instances
            webpackConfig.plugins = webpackConfig.plugins.filter(
                plugin => !(plugin instanceof HtmlWebpackPlugin)
            );

            // Add necessary plugins for inlining
            webpackConfig.plugins.push(
                new HTMLInlineCSSWebpackPlugin(),
                new HtmlInlineScriptPlugin()
            );

            const babelLoader = webpackConfig.module.rules.find(rule => 'oneOf' in rule); 
             babelLoader.oneOf.forEach(rule => {
                 if (Array.isArray(rule.use)) {
                     rule.use.forEach(useEntry => {
                         if (useEntry.loader.includes('babel-loader')) {

                             // *** PATCH BEGIN ***
                             rule.options.plugins = []; 
                             // *** PATCH END ***

                             // Add the plugin
                             useEntry.options.plugins.push(
                                 '@babel/plugin-proposal-private-property-in-object'
                             );
                         }
                     })
                 }
             })

            return webpackConfig;
        },
    },
};
