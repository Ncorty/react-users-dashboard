import webpack from "webpack";
import { type Configuration as DevServerConfiguration } from "webpack-dev-server";
import { buildPlugins } from "./buildPlugins";
import path from 'path';
import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildResolve } from "./buildResolve";
import { BuildOptions } from "../types/types";
 
 export function buildWebPack(env:BuildOptions): webpack.Configuration {
    const {mode, port, paths} = env;
    const isDev = mode === 'development';
    const isProd = mode === 'production';

    return {
            mode: env.mode ?? 'development',
            entry: paths.entry,
            output: {
                path: paths.output,
                filename: '[name].[contenthash].js',
                clean: true,
            },
            plugins: buildPlugins(env),
            module: {
            rules: buildLoaders(),
            },
            resolve: buildResolve(),
            devServer: isDev ? buildDevServer(env) : undefined,
    }
}