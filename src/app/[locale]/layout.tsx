import type {Metadata} from "next";
import localFont from "next/font/local";
import "@/app/globals.css";
import "@/app/custom.css"

import {getLocaleDetails, Link} from "@/i18n/routing"
import {LocaleSwitch} from "@/components/LocaleSwitch";
import {getTranslations} from 'next-intl/server';
import Image from "next/image";
import Logo from "@/app/icon.png"
import { GoogleAnalytics } from '@next/third-parties/google'
import {siteConfig} from "@/config/site";
import { FaGithub } from 'react-icons/fa';

const geistSans = localFont({
    src: "../fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "../fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Sprunki Infected",
    description: "Play Sprunki Infected Online",
};

export default async function I18nLayout({
    children,
    params: {locale}
}: Readonly<{
    children: React.ReactNode;
    params: { locale: string};
}>) {
    const t = await getTranslations('common.menu');
    const localeInfo = getLocaleDetails(locale)
    return (
        <html lang={localeInfo?.code}>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 text-gray-800`}
        >
        <div className="fixed inset-0 z-[-1] opacity-5">
            <div className="absolute top-10 left-10 text-6xl animate-float">🎣</div>
            <div className="absolute top-1/4 right-1/4 text-6xl animate-float-delay-1">🎮</div>
            <div className="absolute bottom-1/4 left-1/4 text-6xl animate-float-delay-2">🌊</div>
            <div className="absolute bottom-10 right-10 text-6xl animate-float-delay-3">🦈</div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl animate-float-delay-4">🎮</div>
            <div className="absolute top-3/4 right-1/3 text-6xl animate-float-delay-5">wan</div>
            <div className="absolute top-1/3 left-2/3 text-6xl animate-float-delay-6">🏆</div>
            <div className="absolute bottom-1/3 right-2/3 text-6xl animate-float-delay-7">🌴</div>
            <div className="absolute top-1/5 left-1/3 text-6xl animate-float-delay-8">🎏</div>
            <div className="absolute bottom-1/5 right-1/3 text-6xl animate-float-delay-9">🦀</div>
            <div className="absolute top-2/3 left-1/6 text-6xl animate-float-delay-10">🎮</div>
            <div className="absolute bottom-2/3 right-1/6 text-6xl animate-float-delay-11">🐳</div>
            <div className="absolute top-1/2 right-1/2 text-6xl animate-float-delay-12">🦑</div>
        </div>
        <header className="bg-teal-700 py-4 text-white">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center">
                    <Link href="/" className="text-2xl font-bold flex items-center">
                        <Image src={Logo} alt={"logo"} width={32} height={32} className="mr-2"/>
                        Sprunki Infected
                    </Link>
                    <LocaleSwitch/>
                </div>
            </div>
        </header>
        <main className="max-w-6xl mx-auto px-4 py-8">
            {children}
        </main>
        <footer className="bg-teal-700 py-6 text-white">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <Link href={'/'} className="text-lg font-semibold">
                            {siteConfig.appName}
                        </Link>
                        <p className="text-sm">{t('copyright', {year: new Date().getFullYear()})}</p>
                    </div>
                    <nav className="flex space-x-4 text-sm">
                        <Link href="/privacy-policy" prefetch={false} className="hover:text-blue-600 transition-colors">
                            {t('privacyPolicy')}
                        </Link>
                        <Link href="/terms-of-use" prefetch={false} className="hover:text-blue-600 transition-colors">
                            {t('termsOfUse')}
                        </Link>
                        <Link href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors flex items-center">
                            <FaGithub className="mr-1" />
                            GitHub
                        </Link>
                    </nav>
                </div>
            </div>
        </footer>
        <GoogleAnalytics gaId="G-T2Q9W50401" />
        </body>
        </html>
    );
}
