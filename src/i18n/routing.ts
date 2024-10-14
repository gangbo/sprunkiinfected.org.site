import {createSharedPathnamesNavigation} from 'next-intl/navigation';
import {defineRouting} from 'next-intl/routing';

export const localeDetails = {
    en: {
        label: "English",
        code: 'en-US',
    },
    zh: {
        label: "简体中文",
        code: 'zh-CN',
    },
    pt: {
        label: "Português",
        code: 'pt-BR',
    },
    ja: {
        label: "日本語",
        code: 'ja-JP',
    },
    fr: {
        label: "Français",
        code: 'fr-FR',
    },
    es: {
        label: "Español",
        code: 'es-ES',
    },
    de: {
        label: "Deutsch",
        code: 'de-DE',
    },
    it: {
        label: "Italiano",
        code: 'it-IT',
    },
    // 新增的语言
    ko: {
        label: "한국어",
        code: 'ko-KR',
    },
    ru: {
        label: "Русский",
        code: 'ru-RU',
    },
    ar: {
        label: "العربية",
        code: 'ar-SA',
    },
    hi: {
        label: "हिन्दी",
        code: 'hi-IN',
    },
    id: {
        label: "Bahasa Indonesia",
        code: 'id-ID',
    },
    vi: {
        label: "Tiếng Việt",
        code: 'vi-VN',
    },
    th: {
        label: "ไทย",
        code: 'th-TH',
    },
    nl: {
        label: "Nederlands",
        code: 'nl-NL',
    },
};

export type LocaleCode = keyof typeof localeDetails;

export function getLocaleDetails(localeCode: string): typeof localeDetails[LocaleCode] | undefined {
    //默认en
    if (localeCode in localeDetails) {
        return localeDetails[localeCode as LocaleCode];
    }
    return localeDetails['en'];
}

export const locales = Object.keys(localeDetails) as Array<keyof typeof localeDetails>;
export const defaultLocale = 'en';

/*--------------------------------------------*/

export const routing = defineRouting({
    locales: locales,
    defaultLocale: defaultLocale,
    localePrefix: 'as-needed',
    pathnames: {}

});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const {Link, redirect, usePathname, useRouter} =
    createSharedPathnamesNavigation(routing);
