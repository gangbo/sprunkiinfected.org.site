export const siteConfig = {
    // REQUIRED
    appName: "Sprunki Infected",
    domainName: "sprunkiinfected.org",
    appDescription: "Play Sprunki Infected",
    github: "https://github.com/gangbo/sprunkiinfected.org.site",
}

interface recommendation {
    title: string;
    description: string;
    url: string;
    image: string;
}

export const recommendations: recommendation[] = []