export interface PostcssConfiguration {
    plugins: [name: string, options?: object | string][];
}
export interface SearchDirectory {
    root: string;
    files: Set<string>;
}
export declare function generateSearchDirectories(roots: string[]): SearchDirectory[];
export declare function findTailwindConfiguration(searchDirectories: SearchDirectory[]): string | undefined;
export declare function loadPostcssConfiguration(searchDirectories: SearchDirectory[]): PostcssConfiguration | undefined;
