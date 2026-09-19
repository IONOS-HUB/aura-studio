export const SERVICE_MENUS = [
  {
    n: "01",
    name: "Manicure",
    tagline: "Cuidado y elegancia en cada detalle.",
    items: [
      { name: "Tradicional", price: 10 },
      { name: "Rusa", price: 13 },
      { name: "Masculina", price: 14 },
      { name: "Infantil", price: 10 },
      { name: "Nivelaciones", price: 20 },
      { name: "Acrílicas", price: 18 },
      { name: "Spa", price: 15 },
      { name: "Semipermanente", price: 15 },
    ],
  },
  {
    n: "02",
    name: "Extensiones",
    tagline: "Cuidado y elegancia en cada detalle.",
    approximate: true,
    items: [
      { name: "Soft gel", price: 18 },
      { name: "Rubber gel", price: 20 },
      { name: "Builder gel", price: 25 },
      { name: "Molde", price: 28 },
      { name: "Dual system", price: 28 },
      { name: "Poly gel", price: 25 },
      { name: "Sándwich", price: 22 },
    ],
  },
  {
    n: "03",
    name: "Sistemas",
    tagline: "Cuidado y elegancia en cada detalle.",
    approximate: true,
    items: [
      { name: "Baby boomer", price: 30 },
      { name: "Técnica ombré", price: 27 },
      { name: "Baby glam", price: 31 },
      { name: "Encapsulada", price: 32 },
      { name: "Baby glitter", price: 32 },
      { name: "Ombré + glam", price: 30 },
      { name: "Fibra de vidrio", consult: true },
    ],
  },
  {
    n: "04",
    name: "Retiros",
    tagline: "Cuidado y elegancia en cada detalle.",
    items: [
      { name: "Semipermanente", price: 4 },
      { name: "Extensiones", price: 8 },
      { name: "Retiros de otro spa", price: 7 },
    ],
  },
  {
    n: "05",
    name: "Pedicure",
    tagline: "Cuidado y elegancia en cada detalle.",
    items: [
      { name: "Semipermanente seco", price: 15 },
      { name: "Tradicional", price: 12 },
      { name: "Pedicura spa", price: 20 },
    ],
  },
  {
    n: "06",
    name: "Pestañas",
    tagline: "Cuidado que realza tu mirada.",
    items: [
      { name: "Lifting de pestañas", price: 20 },
      { name: "Lifting + henna", price: 24 },
      { name: "Retiro de extensiones", price: 5 },
      { name: "Retoques", price: 18, prefix: "desde" },
    ],
  },
  {
    n: "07",
    name: "Cejas",
    tagline: "Realza tu mirada.",
    items: [
      { name: "Diseño de cejas", price: 8 },
      { name: "Pigmentación con henna + diseño", price: 15 },
      { name: "Laminado de cejas", price: 20 },
    ],
  },
  {
    n: "08",
    name: "Depilaciones con cera",
    tagline: "Rostro y cuerpo, con cera.",
    items: [
      { name: "Axilas", price: 15 },
      { name: "Cejas", price: 6 },
      { name: "Piernas", price: 18 },
      { name: "Bikini", price: 10 },
      { name: "Bozo", price: 4 },
      { name: "Patilla", price: 4 },
    ],
  },
  {
    n: "09",
    name: "Maquillaje profesional",
    tagline: "Incluye alisado u ondas básicas.",
    items: [
      { name: "Social", price: 30 },
      { name: "Piel madura", price: 35 },
      { name: "Novia", price: 55 },
      { name: "Graduación", price: 35 },
      { name: "Artístico", price: 55, suffix: "+" },
      { name: "Piel hebano", price: 35 },
      { name: "Quinceañera", price: 40 },
    ],
  },
  {
    n: "10",
    name: "Masajes",
    tagline: "Cuerpo, aceite y barro volcánico.",
    items: [
      { name: "Relajante", price: 25 },
      { name: "Barro volcánico", price: 30 },
      { name: "Exfoliación", price: 30 },
      { name: "Con aceite", price: 17, prefix: "desde" },
    ],
  },
];

export const CONTACT_SERVICES = SERVICE_MENUS.map((s) => s.name);

export function formatItemPrice(item) {
  if (item.consult) return "Consultar";
  const amount = `$${item.price}`;
  if (item.prefix === "desde") return `desde ${amount}`;
  if (item.suffix === "+") return `${amount}+`;
  return amount;
}

export function categoryFromPrice(items) {
  const prices = items
    .filter((item) => typeof item.price === "number")
    .map((item) => item.price);
  if (!prices.length) return null;
  return `$${Math.min(...prices)}`;
}
