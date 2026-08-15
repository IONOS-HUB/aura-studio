const BASE_URL = "https://aurabeautystudio.com";

export default function sitemap() {
  const routes = ["", "/reservar", "/terminos", "/privacidad", "/cookies"];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.5,
  }));
}
