import { getSiteUrl } from "@/lib/site";

export default function sitemap() {
  const base = getSiteUrl();
  const routes = ["", "/reservar", "/terminos", "/privacidad", "/cookies"];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.5,
  }));
}
