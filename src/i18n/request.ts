import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import {localeDetails} from './routing';

async function loadMessages(locale: string) {

    const common = (await import(`../../messages/${locale}/common.json`)).default;
    const privacyPolicy = (await import(`../../messages/${locale}/privacyPolicy.json`)).default;
    const tos = (await import(`../../messages/${locale}/termsOfUse.json`)).default;
    const home = (await import(`../../messages/${locale}/home.json`)).default;

    return {
        common: common,
        home: home,
        privacyPolicy: privacyPolicy,
        termsOfUse: tos,
        // home: home,
    }
}

export default getRequestConfig(async ({locale}) => {
    if (!Object.keys(localeDetails).includes(locale)) notFound();

    const messages = await loadMessages(locale);

    return {messages};
});
