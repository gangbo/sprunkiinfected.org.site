import { MetadataRoute } from 'next'
import {siteConfig} from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = `https://${siteConfig.domainName}`
    const pages = [
        "/",
    ]
    return pages.map((page) => {
        return {
            url: `${baseUrl}${page}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        }
    })
}