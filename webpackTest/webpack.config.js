const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    mode: 'production',
    devtool: 'inline-source-map',
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'sample.js'
    },
    watch: true,
    watchOptions: {
        ignored: /node_modules/
    },
    module: {
        rules: [{
                test: /\.js$/, // 正規表現で.jsで終わるファイル
                use: {
                    loader: 'babel-loader', // babelの読み込み
                    options: { // babelのオプション指定
                        // ES5へ変換するプラグイン(.babelrcから移動)
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader, // プラグインの読み込み
                    {
                    loader: "css-loader",
                    options: {
                        url: false
                    }
                },
                'sass-loader' // node-sassを読み込み
                ]
            }
        ]
    },
    plugins: [ // CSSファイルの書き出すパスを指定
        new MiniCssExtractPlugin({filename: 'css/style.css'})
      ],
    // ES5(IE11等)向けの指定
    target: ["web", "es5"]
}