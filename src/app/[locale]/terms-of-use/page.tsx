import { getSEOTags } from "@/lib/seo";
import { getTranslations } from "next-intl/server";
import { CheckCircle, UserCheck, AlertTriangle, RefreshCw } from 'lucide-react';

export const runtime = "edge";

export const generateMetadata = async () => {
    const t = await getTranslations('termsOfUse.Metadata');
    return await getSEOTags({
        title: t('title'),
        path: "/terms-of-use",
        description: t('description'),
    });
};

export default async function TermsOfUse() {
    const t = await getTranslations('termsOfUse');

    return (
        <div className="max-w-6xl mx-auto px-4 py-8 space-y-8 text-gray-800">
            <section className="text-center bg-gradient-to-r from-teal-600 to-cyan-600 p-5 rounded-xl shadow-lg">
                <h1 className="text-3xl font-bold mb-2 text-white">{t('title')}</h1>
                <p className="text-sm italic text-gray-100">{t('subtitle')}</p>
            </section>

            <section className="bg-white p-6 rounded-xl shadow-lg space-y-8">
                <div>
                    <h2 className="text-xl font-semibold mb-4 flex items-center text-teal-700">
                        <CheckCircle className="mr-2" /> {t('sections.acceptance.title')}
                    </h2>
                    <p>{t('sections.acceptance.content')}</p>
                </div>
                
                <div>
                    <h2 className="text-xl font-semibold mb-4 flex items-center text-teal-700">
                        <UserCheck className="mr-2" /> {t('sections.userBehavior.title')}
                    </h2>
                    <p>{t('sections.userBehavior.content')}</p>
                </div>
                
                <div>
                    <h2 className="text-xl font-semibold mb-4 flex items-center text-teal-700">
                        <AlertTriangle className="mr-2" /> {t('sections.disclaimer.title')}
                    </h2>
                    <p>{t('sections.disclaimer.content')}</p>
                </div>
                
                <div>
                    <h2 className="text-xl font-semibold mb-4 flex items-center text-teal-700">
                        <RefreshCw className="mr-2" /> {t('sections.modification.title')}
                    </h2>
                    <p>{t('sections.modification.content')}</p>
                </div>
            </section>
        </div>
    );
}
