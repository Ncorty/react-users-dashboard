import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import { buildWebPack } from './config/builds/buildWebPack';
import { BuildOptions } from './config/types/types';

export default(env: BuildOptions)  =>{
    const paths: BuildOptions['paths'] = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        output: path.resolve(__dirname, 'build'),
        src: path.resolve(__dirname, 'src'),
    };
    const config: webpack.Configuration = buildWebPack({
        mode: env.mode ?? 'development',
        port: env.port ?? 3001,
        paths: paths,
    });
    return config;
}