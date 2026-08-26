export const GALLERY_ITEMS = [
  { id: "unas-1", category: "Uñas", src: "/imgs/galeria/unas/unas-1.jpeg", tall: true,
    alt: "Manos con uñas almendradas en baby boomer rosa, decoradas con mariposas 3D, flores rojas y cristales, sosteniendo la paleta del logo de Aura Beauty Studio" },
  { id: "unas-2", category: "Uñas", src: "/imgs/galeria/unas/unas-2.jpeg", tall: true,
    alt: "Uñas acrílicas largas en punta stiletto con efecto encapsulado nacarado, detalles en foil dorado y perlas, sosteniendo la paleta rosa con el logo de Aura Beauty Studio" },
  { id: "cejas-1", category: "Cejas", src: "/imgs/galeria/cejas/cejas-1.jpeg", tall: true,
    alt: "Retrato de estudio de una clienta con cejas depiladas y diseñadas con acabado natural definido en Aura Beauty Studio" },
  { id: "maquillaje-1", category: "Maquillaje", src: "/imgs/galeria/maquillaje/maquillaje-1.jpeg", tall: true,
    alt: "Maquillaje artístico de fantasía inspirado en el Gato de Cheshire, con rostro en rosa, sonrisa dentada pintada y corona de cristales" },
  { id: "maquillaje-2", category: "Maquillaje", src: "/imgs/galeria/maquillaje/maquillaje-2.jpeg", tall: true,
    alt: "Detalle del maquillaje de fantasía del Gato de Cheshire con ojos cerrados, mostrando el difuminado rosa y el delineado gráfico" },
  { id: "maquillaje-3", category: "Maquillaje", src: "/imgs/galeria/maquillaje/maquillaje-3.jpeg", tall: true,
    alt: "Maquillaje artístico de Medusa con delineado gráfico, pan de oro en cejas y labios, tocado de serpientes doradas y accesorios de perlas" },
  { id: "maquillaje-4", category: "Maquillaje", src: "/imgs/galeria/maquillaje/maquillaje-4.jpeg", tall: true,
    alt: "Maquillaje de novia con acabado natural luminoso, tonos nude y ojos difuminados, con velo, corona de flores y ramo de rosas blancas" },
  { id: "maquillaje-5", category: "Maquillaje", src: "/imgs/galeria/maquillaje/maquillaje-5.jpeg", tall: true,
    alt: "Maquilladora de Aura Beauty Studio aplicando polvos con brocha a una modelo caracterizada como Medusa, en sesión de estudio" },

  // Videos: se reproducen en bucle y sin audio, por eso llevan ariaLabel
  // (aria-label en <video>) en vez de alt, que solo existe en <img>.
  { id: "unas-video-1", category: "Uñas", type: "video", src: "/imgs/galeria/unas/unas-video-1.mp4", tall: true,
    ariaLabel: "Video de unas manos girando para mostrar uñas stiletto con encapsulado nacarado, foil dorado y perlas, junto a la paleta con el logo de Aura Beauty Studio" },
  { id: "maquillaje-video-1", category: "Maquillaje", type: "video", src: "/imgs/galeria/maquillaje/maquillaje-video-1.mp4", tall: true,
    ariaLabel: "Video de una modelo con maquillaje de fantasía del Gato de Cheshire y corona de cristales, girando el rostro para mostrar el diseño desde distintos ángulos" },

  // Categorías sin fotos reales: placeholder explícito, se reemplaza fila por fila
  // según vayan llegando fotos.
  { id: "pestanas-ph", category: "Pestañas", placeholder: true, variant: "work" },
  { id: "depilacion-ph", category: "Depilación", placeholder: true, variant: "studio" },
  { id: "masajes-ph", category: "Masajes", placeholder: true, variant: "portrait" },
];