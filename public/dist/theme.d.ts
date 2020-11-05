declare class ThemeConfig {
    themeChangeHandlers: ((theme: string) => void)[];
    loadTheme(): string | null;
    saveTheme(theme: string | null): void;
    initTheme(): void;
    detectTheme(): string;
    getTheme(): string;
    setTheme(theme: string): void;
    displayTheme(theme: string): void;
}
declare function writeDarkSwitch(config: ThemeConfig): HTMLInputElement;
