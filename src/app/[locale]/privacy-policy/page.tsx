import React from 'react';
import { getSEOTags } from "@/lib/seo";
import { getTranslations } from "next-intl/server";
import { Shield, Users, Lock, Cookie, RefreshCw } from 'lucide-react';

export const runtime = "edge";

export const generateMetadata = async () => {
    const t = await getTranslations('privacyPolicy.Metadata');
    return await getSEOTags({
        title: t('title'),
        path: "/privacy-policy",
        description: t('description'),
    });
};

export default async function PrivacyPolicy() {
    const t = await getTranslations('privacyPolicy');

    return (
        <div className="max-w-6xl mx-auto px-4 py-8 space-y-8 text-gray-800">
            <section className="text-center bg-gradient-to-r from-teal-600 to-cyan-600 p-5 rounded-xl shadow-lg">
                <h1 className="text-3xl font-bold mb-2 text-white">{t('title')}</h1>
                <p className="text-sm italic text-gray-100">{t('subtitle')}</p>
            </section>

            <section className="bg-white p-6 rounded-xl shadow-lg space-y-8">
                <div>
                    <h2 className="text-xl font-semibold mb-4 flex items-center text-teal-700">
                        <Shield className="mr-2" /> {t('sections.informationCollection.title')}
                    </h2>
                    <p>{t('sections.informationCollection.content')}</p>
                </div>
                
                <div>
                    <h2 className="text-xl font-semibold mb-4 flex items-center text-teal-700">
                        <Lock className="mr-2" /> {t('sections.dataSecurity.title')}
                    </h2>
                    <p>{t('sections.dataSecurity.content')}</p>
                </div>
                
                <div>
                    <h2 className="text-xl font-semibold mb-4 flex items-center text-teal-700">
                        <Cookie className="mr-2" /> {t('sections.cookieUsage.title')}
                    </h2>
                    <p>{t('sections.cookieUsage.content')}</p>
                </div>
                
                <div>
                    <h2 className="text-xl font-semibold mb-4 flex items-center text-teal-700">
                        <RefreshCw className="mr-2" /> {t('sections.policyUpdate.title')}
                    </h2>
                    <p>{t('sections.policyUpdate.content')}</p>
                </div>
                
                <div>
                    <h2 className="text-xl font-semibold mb-4 flex items-center text-teal-700">
                        <Users className="mr-2" /> {t('sections.noLogin.title')}
                    </h2>
                    <p>{t('sections.noLogin.content')}</p>
                </div>
            </section>
        </div>
    );
}
