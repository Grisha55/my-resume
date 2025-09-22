// theme.js
'use strict';

class ThemeSwitcher {
    constructor() {
        this.themeBtn = document.querySelector('.theme-switcher__btn');
        this.themes = ['light', 'dark', 'bright'];
        this.currentThemeIndex = 0;
        
        this.init();
    }
    
    getPreferredTheme() {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme && this.themes.includes(storedTheme)) {
            return storedTheme;
        }
        
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        
        return 'light';
    }
    
    setTheme(theme) {
        if (!this.themes.includes(theme)) return;
        
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        this.currentThemeIndex = this.themes.indexOf(theme);
        
        this.updateTooltip(theme);
    }
    
    updateTooltip(theme) {
        const tooltip = document.querySelector('.theme-switcher__tooltip');
        if (tooltip) {
            const themeNames = {
                'light': 'Светлая',
                'dark': 'Тёмная', 
                'bright': 'Яркая'
            };
            tooltip.innerHTML = `Текущая тема: <strong>${themeNames[theme]}</strong>`;
        }
    }
    
    cycleThemes() {
        this.currentThemeIndex = (this.currentThemeIndex + 1) % this.themes.length;
        this.setTheme(this.themes[this.currentThemeIndex]);
    }
    
    watchSystemTheme() {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            // Меняем тему только если пользователь не выбрал тему вручную
            if (!localStorage.getItem('theme')) {
                this.setTheme(e.matches ? 'dark' : 'light');
            }
        });
    }
    
    init() {
        // Устанавливаем начальную тему
        this.setTheme(this.getPreferredTheme());
        
        // Добавляем обработчик клика
        if (this.themeBtn) {
            this.themeBtn.addEventListener('click', () => this.cycleThemes());
        }
        
        // Следим за изменениями системной темы
        this.watchSystemTheme();
        
        console.log('ThemeSwitcher инициализирован');
    }
}

// Инициализация когда DOM загружен
document.addEventListener('DOMContentLoaded', () => {
    new ThemeSwitcher();
});

// Экспорт для возможного использования в других модулях
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ThemeSwitcher;
}