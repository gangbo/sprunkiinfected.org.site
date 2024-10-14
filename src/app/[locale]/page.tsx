import {getSEOTags} from "@/lib/seo"
import Script from 'next/script'
import FullscreenIframe from "./FullscreenIframe";
import {getTranslations} from "next-intl/server";
import {Gamepad2, Zap, Star, Target, Users, ImageIcon, HelpCircle} from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {recommendations} from "@/config/site";

export const runtime = "edge";
const gameUrl = "https://html-classic.itch.zone/html/11700918/index.html"

export const generateMetadata = async () => {
    const t = await getTranslations('home.Metadata');
    return await getSEOTags({
        title: t('title'),
        path: "/",
        description: t('description'),
        keywords: t('keywords'),
    })
}

export default async function Home() {
    const t = await getTranslations('home');

    return (
        <div className="max-w-6xl mx-auto px-4 py-8 space-y-16 text-gray-800">
            <Script
                id="super-fishing-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "VideoGame",
                        "name": "Sprunki Infected",
                        "description": t('Metadata.description'),
                        "genre": ["Simulation Game", "Casual Game", "Fishing Game"],
                        "playMode": "SinglePlayer",
                        "applicationCategory": "Game",
                    })
                }}
            />

            <section id="hero"
                     className="text-center bg-gradient-to-r from-teal-600 to-cyan-600 p-5 rounded-xl shadow-lg">
                <h1 className="text-2xl font-bold mb-4 text-white">{t('hero.title')}</h1>
                <p className="mb-2 text-gray-100">{t('hero.subtitle')}</p>
            </section>

            <section id="play">
                <FullscreenIframe
                    src={gameUrl}
                    title="Sprunki Infected"
                    thumbnailSrc="/img/s11080.jpg"
                />
            </section>

            <section id="introduction" className="bg-white p-6 rounded-xl shadow-lg">
                <h2 className="text-xl font-semibold mb-4 flex items-center text-teal-700">
                    <Zap className="mr-2"/> {t('introduction.title')}
                </h2>
                <p className="mb-4 leading-relaxed">
                    {t('introduction.content')}
                </p>
            </section>

            <section id="how-to-play" className="bg-white p-6 rounded-xl shadow-lg">
                <h2 className="text-xl font-semibold mb-4 flex items-center text-teal-700">
                    <Target className="mr-2"/> {t('howToPlay.title')}
                </h2>
                <ol className="list-decimal pl-6 space-y-2 ">
                    {t.raw('howToPlay.steps').map((step: string, index: number) => (
                        <li key={index}>{step}</li>
                    ))}
                </ol>
            </section>

            <section id="controls" className="bg-white p-6 rounded-xl shadow-lg">
                <h2 className="text-xl font-semibold mb-4 flex items-center text-teal-700">
                    <Gamepad2 className="mr-2"/> {t('controls.title')}
                </h2>
                <ul className="list-disc pl-6 space-y-2 ">
                    {t.raw('controls.items').map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </section>

            <section id="features" className="bg-white p-6 rounded-xl shadow-lg">
                <h2 className="text-xl font-semibold mb-6 flex items-center text-teal-700">
                    <Star className="mr-2"/> {t('features.title')}
                </h2>
                <ul className="list-disc pl-6 space-y-2 ">
                    {t.raw('features.items').map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </section>

            <section id="screenshots" className="bg-white p-6 rounded-xl shadow-lg">
                <h2 className="text-xl font-semibold mb-6 flex items-center text-teal-700">
                    <ImageIcon className="mr-2"/> {t('screenshots.title')}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Image src="/img/s11080.jpg" alt="Sprunki Infected Game Screenshot 1" width={400} height={300}
                           className="rounded-lg"/>
                    <Image src="/img/s21080.jpg" alt="Sprunki Infected Game Screenshot 2" width={400} height={300}
                           className="rounded-lg"/>
                    <Image src="/img/s31080.jpg" alt="Sprunki Infected Game Screenshot 3" width={400} height={300}
                           className="rounded-lg"/>
                </div>
            </section>

            <section id="player-reviews" className="bg-white p-6 rounded-xl shadow-lg">
                <h2 className="text-xl font-semibold mb-6 flex items-center text-teal-700">
                    <Users className="mr-2"/> {t('playerReviews.title')}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {t.raw('playerReviews.reviews').map((review: {
                        content: string,
                        author: string
                    }, index: number) => (
                        <blockquote key={index} className="bg-gray-50 p-4 rounded-lg italic">
                            &ldquo;{review.content}&rdquo;
                            <footer className="mt-2 text-right">- {review.author}</footer>
                        </blockquote>
                    ))}
                </div>
            </section>

            <section id="faq" className="bg-white p-6 rounded-xl shadow-lg">
                <h2 className="text-xl font-semibold mb-6 flex items-center text-teal-700">
                    <HelpCircle className="mr-2"/> {t('faq.title')}
                </h2>
                <Accordion type="single" collapsible className="w-full">
                    {t.raw('faq.questions').map((item: { question: string, answer: string }, index: number) => (
                        <AccordionItem key={index} value={`item-${index + 1}`}>
                            <AccordionTrigger>{item.question}</AccordionTrigger>
                            <AccordionContent>
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </section>

            {recommendations.length && (
                <section id="game-recommendations" className="bg-white p-6 rounded-xl shadow-lg">
                    <h2 className="text-xl font-semibold mb-6 text-teal-700">{t('gameRecommendations.title')}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {recommendations.map(({title, image, url}, index) => (
                            <div key={index} className="bg-gray-100 p-4 rounded-lg">
                                <Image src={image} alt="Game 1" width={300} height={200}
                                       className="rounded-lg mb-2"/>
                                <h3 className="font-semibold mb-2">{title}</h3>
                                <Link href={url} className="text-teal-700 hover:underline">Play Now</Link>
                            </div>

                        ))}
                    </div>
                </section>
            )}
        </div>
    )
}