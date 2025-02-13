export declare const info: (str: string) => void;
export declare const error: (str: string) => void;
export declare const bundleFiles: (entry: string, outputDir: string, typescriptDetails?: string) => Promise<string>;
export declare const getConfigWithDefault: (userConfig: Record<string, string | null>) => {
    entry: string;
    outputDir: string;
    entryHTML: string;
    typescript: string | undefined;
};
export declare const buildFromConfig: (configPath: string) => Promise<void>;
export declare const DEV_SERVER_ROOT = "./.leaf";
export declare const startDevServer: (userConfig: any, port: number) => void;
//# sourceMappingURL=index.d.ts.map