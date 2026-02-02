import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import { Configuration } from 'webpack';
import { BuildOptions } from '../types/types';


export function buildPlugins(env: BuildOptions): Configuration['plugins'] {
    const isDev = env.mode === 'development';
    return [
            new HtmlWebpackPlugin({
                template: env.paths.html,
            }),
            isDev &&  new webpack.ProgressPlugin(),
        ].filter(Boolean);
}
