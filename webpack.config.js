const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const BundleAnalyzerPlugin =
    require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = (env, argv) => {
    const isDevelopment = argv.mode === 'development'

    return {
        mode: isDevelopment ? 'development' : 'production',
        entry: './src/index.js',
        output: {
            path: path.join(__dirname, 'dist'),
            filename: 'bundle.js',
        },
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            port: 8080
        },
        module: {
            rules: [
                // Add loaders for different file types (e.g., Babel for JavaScript)
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                },
                // Add loaders for CSS, SASS, images, etc.
                {
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader', // Translates CSS into CommonJS
                        'sass-loader' // Compiles Sass to CSS
                    ]
                }
            ]
        },
        optimization: {
            minimize: !isDevelopment,
            minimizer: isDevelopment
                ? []
                : [
                      new TerserPlugin({
                          // TerserPlugin options
                          terserOptions: {
                              mangle: {
                                  eval: true // This property controls variable name mangling
                              },
                              compress: {
                                  drop_console: true // Dropping console statements
                              }
                          },
                          extractComments: false // Removes comments from the output file
                      })
                  ]
        },
        plugins: [
            // Extract CSS into separate files
            new MiniCssExtractPlugin({
                filename: 'style.css'
            }),
            isDevelopment && new BundleAnalyzerPlugin()
        ]
    }
}
