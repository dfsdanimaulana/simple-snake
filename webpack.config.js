const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = (env, argv) => {
    const isDevelopment = argv.mode === 'development'

    return {
        mode: isDevelopment ? 'development' : 'production',
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js'
        },
        devServer: isDevelopment
            ? {
                  contentBase: path.resolve(__dirname, 'dist'),
                  port: 8080
              }
            : undefined,
        module: {
            rules: [
                // Add loaders for different file types (e.g., Babel for JavaScript)
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: 'babel-loader'
                }
                // Add loaders for CSS, SASS, images, etc.
            ]
        },
        optimization: {
            minimizer: isDevelopment ? [] : [new TerserPlugin()]
        },
        plugins: isDevelopment
            ? []
            : [
                  // Extract CSS into separate files
                  new MiniCssExtractPlugin({
                      filename: 'styles.css'
                  })
              ]
    }
}
