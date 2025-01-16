/// <reference types="react" />
import { ThemeVars } from '@storybook/theming';
import { API } from '@storybook/manager-api';
declare const modes: readonly ["light", "dark"];
type Mode = typeof modes[number];
interface DarkModeStore {
    /** The class target in the preview iframe */
    classTarget: string;
    /** The current mode the storybook is set to */
    current: Mode;
    /** The dark theme for storybook */
    dark: ThemeVars;
    /** The dark class name for the preview iframe */
    darkClass: string | string[];
    /** The light theme for storybook */
    light: ThemeVars;
    /** The light class name for the preview iframe */
    lightClass: string | string[];
    /** Apply mode to iframe */
    stylePreview: boolean;
    /** Persist if the user has set the theme */
    userHasExplicitlySetTheTheme: boolean;
}
export declare const prefersDark: MediaQueryList;
/** Persist the dark mode settings in localStorage */
export declare const updateStore: (newStore: DarkModeStore) => void;
/** Update changed dark mode settings and persist to localStorage  */
export declare const store: (userTheme?: Partial<DarkModeStore>) => DarkModeStore;
interface DarkModeProps {
    /** The storybook API */
    api: API;
}
/** A toolbar icon to toggle between dark and light themes in storybook */
export declare function DarkMode({ api }: DarkModeProps): JSX.Element;
export default DarkMode;
