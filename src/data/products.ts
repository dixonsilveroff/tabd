export type ProductCategory = 'soap' | 'crochet' | 'beads' | 'millinery';

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  price: number;
  description: string;
  sellerName: string;
  sellerStory: string;
  sellerWhatsApp: string;
  images: string[];
  inStock: boolean;
  featured: boolean;
};

export const PRODUCTS: Product[] = [
  {
    id: '1',
    slug: 'lavender-shea-butter-soap',
    name: 'Lavender & Shea Butter Soap',
    category: 'soap',
    price: 1200,
    description:
      'Handcrafted cold-process soap infused with lavender essential oil and raw shea butter. Deeply moisturising, suitable for sensitive skin. Each bar is individually cut and cured for 4 weeks for a rich, long-lasting lather.',
    sellerName: 'Adaeze Confidence',
    sellerStory:
      'Adaeze learned soap-making through the TABD vocational training programme. Living with a mobility impairment, she now runs a small home-based production line and supplies local markets in Ikwo.',
    sellerWhatsApp: '2349136633486',
    images: ['/products/soap-lavender.jpg'],
    inStock: true,
    featured: true,
  },
  {
    id: '2',
    slug: 'antibacterial-lemon-soap',
    name: 'Antibacterial Lemon Soap',
    category: 'soap',
    price: 950,
    description:
      'A refreshing lemon-scented antibacterial bar soap made with natural lemon extract and tea tree oil. Ideal for everyday use. Handmade in small batches to ensure quality.',
    sellerName: 'Virtuous Ogochukwu',
    sellerStory:
      'Virtuous is a young woman with a hearing impairment who discovered her passion for soap chemistry during the TABD training. She uses phone photography to showcase her products on WhatsApp Business.',
    sellerWhatsApp: '2348065043484',
    images: ['/products/soap-lemon.jpg'],
    inStock: true,
    featured: false,
  },
  {
    id: '3',
    slug: 'crochet-market-bag',
    name: 'Crochet Market Tote Bag',
    category: 'crochet',
    price: 3500,
    description:
      'A sturdy, handwoven crochet market bag made from high-quality cotton thread. Stretches to hold your shopping, folds flat when empty. Available in cream, navy, and earthy tones. Each bag takes approximately 6 hours to complete.',
    sellerName: 'Ifeoma Vera',
    sellerStory:
      "Ifeoma, who has a visual impairment, was trained by Tory's Crochet as part of the TABD partnership. She creates pieces entirely by feel, using tactile patterns she has memorised.",
    sellerWhatsApp: '2349020773058',
    images: ['/products/crochet-bag.jpg'],
    inStock: true,
    featured: true,
  },
  {
    id: '4',
    slug: 'crochet-table-runner',
    name: 'Crochet Table Runner',
    category: 'crochet',
    price: 2800,
    description:
      'Elegant hand-crocheted table runner in a classic lace pattern. Approximately 120cm x 30cm. Perfect for dining tables and sideboards. Made with 100% cotton mercerised thread.',
    sellerName: 'Ugochukwu Cyrina',
    sellerStory:
      'Ugochukwu joined the programme seeking a way to contribute financially to her household. With a lower-limb disability, crocheting became her craft of choice — a skill she can practise from home.',
    sellerWhatsApp: '2349122564908',
    images: ['/products/crochet-runner.jpg'],
    inStock: true,
    featured: false,
  },
  {
    id: '5',
    slug: 'waist-bead-set',
    name: 'Traditional Waist Bead Set',
    category: 'beads',
    price: 2200,
    description:
      'A three-strand traditional Nigerian waist bead set made with glass seed beads in earth tones — amber, rust, and cream. Adjustable tie-on design. Worn as body adornment, for wellness tracking, or cultural celebration.',
    sellerName: 'Richard Ikenna',
    sellerStory:
      'Richard, trained by SMJ Beads through the TABD programme, makes jewellery despite limited hand mobility. He has adapted his workstation with assistive tools and fulfils orders weekly.',
    sellerWhatsApp: '2348157017809',
    images: ['/products/beads-waist.jpg'],
    inStock: true,
    featured: true,
  },
  {
    id: '6',
    slug: 'beaded-anklet-set',
    name: 'Beaded Anklet — Pair',
    category: 'beads',
    price: 1600,
    description:
      'Handstrung matching pair of beaded anklets using durable nylon thread and glass beads in blue, white, and gold. Lobster clasp closure. One-size-fits-most with extender chain.',
    sellerName: 'Chibueze Stella',
    sellerStory:
      'Stella is the TABD team lead and lead beadwork artisan. She uses her income from bead sales to fund training materials for new participants in the programme.',
    sellerWhatsApp: '2348110445408',
    images: ['/products/beads-anklet.jpg'],
    inStock: true,
    featured: false,
  },
  {
    id: '7',
    slug: 'straw-church-hat',
    name: 'Woven Straw Church Hat',
    category: 'millinery',
    price: 5500,
    description:
      'A wide-brimmed woven straw hat trimmed with a black grosgrain ribbon. Lightweight and breathable, ideal for church, outdoor events, and celebrations. Hand-blocked and finished to shape.',
    sellerName: 'Victor Nwafor',
    sellerStory:
      'Victor, TABD team deputy, learned millinery as a second vocation. He combines hat-making with his project coordination role and trains newer participants in the craft.',
    sellerWhatsApp: '2349047921865',
    images: ['/products/hat-straw.jpg'],
    inStock: true,
    featured: true,
  },
  {
    id: '8',
    slug: 'fabric-fascinator',
    name: 'Handmade Fabric Fascinator',
    category: 'millinery',
    price: 3200,
    description:
      'A structured fabric fascinator featuring a folded bow detail with a comb attachment. Made from Ankara print fabric over a wire frame. One-of-a-kind piece — no two are identical.',
    sellerName: 'Adaeze Confidence',
    sellerStory:
      'Having mastered soap-making, Adaeze expanded into millinery, demonstrating the versatility of the skills she gained through TABD.',
    sellerWhatsApp: '2349136633486',
    images: ['/products/hat-fascinator.jpg'],
    inStock: true,
    featured: false,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return PRODUCTS.filter((p) => p.featured);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return PRODUCTS.filter((p) => p.category === category);
}

export function generateProductStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}
