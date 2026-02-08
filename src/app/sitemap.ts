import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://saiyonix.com";

    const routes = [
        "",
        "/about",
        "/services",
        "/projects",
        "/team",
        "/contact",
        "/privacy-policy",
        "/terms-of-service",
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: route === "" ? 1 : 0.8,
    }));

    return routes;
}
