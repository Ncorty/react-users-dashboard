export type BuildMode = 'development' | 'production';

export interface BuildPath {
    entry: string;
    html: string;
    output: string;
    src: string;
}

export interface BuildOptions {
    mode: BuildMode
    port: number
    paths: BuildPath
}
