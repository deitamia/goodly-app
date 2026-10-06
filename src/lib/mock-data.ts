export interface MockCategory {
  id: string;
  nameEn: string;
  slug: string;
  displayOrder: number;
  isArchived: boolean;
}

export interface MockSeller {
  id: string;
  userId: string;
  nickname: string;
  realFirstName: string; // Private
  email: string; // Private
  countryCode: string;
  photoUrl: string;
  eligibilityDeclaration: boolean;
  introduction?: string;
  socialLinks?: { type: string; url: string }[];
  status: "pending" | "approved" | "rejected";
  isBlocked: boolean;
  blockReason?: string;
  isDeletionRequested: boolean;
  sellerSince: string; // "October 2026"
}

export interface MockListing {
  id: string;
  sellerId: string;
  sellerNickname: string;
  sellerPhotoUrl: string;
  sellerCountryCode: string;
  categoryId: string;
  categoryName: string;
  listingType: "product" | "service";
  imageUrl: string;
  originalTitle: string;
  originalDescription: string;
  priceAmount?: number;
  priceCurrency: string;
  isPriceOnRequest: boolean;
  externalUrl: string;
  // Products
  shipToCountries?: string[];
  isWorldwide?: boolean;
  // Services
  serviceType?: "online" | "physical";
  physicalCountry?: string;
  physicalCity?: string;
  onlineLanguages?: string[];
  // Status
  ownStatus: "active" | "hidden" | "blocked";
  isAutoTranslated?: boolean;
  createdAt: string;
}

export const INITIAL_CATEGORIES: MockCategory[] = [
  { id: "cat-1", nameEn: "Art & Crafts", slug: "art-and-crafts", displayOrder: 1, isArchived: false },
  { id: "cat-2", nameEn: "Clothing", slug: "clothing", displayOrder: 2, isArchived: false },
  { id: "cat-3", nameEn: "Accessories", slug: "accessories", displayOrder: 3, isArchived: false },
  { id: "cat-4", nameEn: "Souvenirs", slug: "souvenirs", displayOrder: 4, isArchived: false },
  { id: "cat-5", nameEn: "Home goods", slug: "home-goods", displayOrder: 5, isArchived: false },
  { id: "cat-6", nameEn: "Food & Drink", slug: "food-and-drink", displayOrder: 6, isArchived: false },
  { id: "cat-7", nameEn: "Education & Learning", slug: "education-and-learning", displayOrder: 7, isArchived: false },
  { id: "cat-8", nameEn: "Digital & Technology", slug: "digital-and-technology", displayOrder: 8, isArchived: false },
  { id: "cat-9", nameEn: "Health & Personal Care", slug: "health-and-personal-care", displayOrder: 9, isArchived: false },
  { id: "cat-10", nameEn: "Professional Services", slug: "professional-services", displayOrder: 10, isArchived: false },
  { id: "cat-11", nameEn: "Other", slug: "other", displayOrder: 11, isArchived: false },
];

export const MOCK_SELLERS: MockSeller[] = [
  {
    id: "seller-elena-nl",
    userId: "usr-1",
    nickname: "ElenaCrafts",
    realFirstName: "Elena",
    email: "elena.private@example.com",
    countryCode: "NL",
    photoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    eligibilityDeclaration: true,
    introduction: "I create handmade sensory toys, tactile blankets, and warm knitwear while caring for my 7-year-old son with autism.",
    socialLinks: [
      { type: "Instagram", url: "https://instagram.com/elenacrafts" },
      { type: "Website", url: "https://elenacrafts.nl" },
    ],
    status: "approved",
    isBlocked: false,
    isDeletionRequested: false,
    sellerSince: "October 2026",
  },
  {
    id: "seller-marcus-de",
    userId: "usr-2",
    nickname: "MarcusDesign",
    realFirstName: "Marcus",
    email: "marcus.private@example.de",
    countryCode: "DE",
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    eligibilityDeclaration: true,
    introduction: "Freelance web designer and digital accessibility consultant. Proud father of a daughter with cerebral palsy.",
    socialLinks: [
      { type: "LinkedIn", url: "https://linkedin.com/in/marcusdesign" },
    ],
    status: "approved",
    isBlocked: false,
    isDeletionRequested: false,
    sellerSince: "October 2026",
  },
  {
    id: "seller-sofia-bg",
    userId: "usr-3",
    nickname: "SofiaHandmade",
    realFirstName: "Sofia",
    email: "sofia.private@example.bg",
    countryCode: "BG",
    photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    eligibilityDeclaration: true,
    introduction: "Natural organic herbal soaps, essential oils, and artisan pottery created with love from Bulgaria.",
    socialLinks: [
      { type: "Facebook", url: "https://facebook.com/sofiahandmade" },
    ],
    status: "approved",
    isBlocked: false,
    isDeletionRequested: false,
    sellerSince: "October 2026",
  },
];

export const MOCK_LISTINGS: MockListing[] = [
  {
    id: "list-1",
    sellerId: "seller-elena-nl",
    sellerNickname: "ElenaCrafts",
    sellerPhotoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    sellerCountryCode: "NL",
    categoryId: "cat-1",
    categoryName: "Art & Crafts",
    listingType: "product",
    imageUrl: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=600&auto=format&fit=crop&q=80",
    originalTitle: "Handmade Tactile Weighted Blanket for Sensory Calm",
    originalDescription: "Calming sensory weighted blanket made from 100% breathable organic cotton. Handcrafted with non-toxic glass beads for therapeutic pressure.",
    priceAmount: 45.00,
    priceCurrency: "EUR",
    isPriceOnRequest: false,
    externalUrl: "https://example.com/elenacrafts/weighted-blanket",
    shipToCountries: ["NL", "DE", "BE", "FR"],
    isWorldwide: false,
    ownStatus: "active",
    isAutoTranslated: false,
    createdAt: "2026-10-04T10:00:00Z",
  },
  {
    id: "list-2",
    sellerId: "seller-marcus-de",
    sellerNickname: "MarcusDesign",
    sellerPhotoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    sellerCountryCode: "DE",
    categoryId: "cat-8",
    categoryName: "Digital & Technology",
    listingType: "service",
    imageUrl: "https://images.unsplash.com/photo-1581291518655-9523c932edcf?w=600&auto=format&fit=crop&q=80",
    originalTitle: "Web Accessibility (WCAG 2.2) Audit & UX Consulting",
    originalDescription: "Comprehensive accessibility audit of your website or web application. I identify WCAG compliance barriers and provide clear remediation guidance.",
    priceAmount: 180.00,
    priceCurrency: "EUR",
    isPriceOnRequest: false,
    externalUrl: "https://example.com/marcusdesign/a11y-audit",
    serviceType: "online",
    onlineLanguages: ["English", "German"],
    ownStatus: "active",
    isAutoTranslated: false,
    createdAt: "2026-10-04T12:00:00Z",
  },
  {
    id: "list-3",
    sellerId: "seller-marcus-de",
    sellerNickname: "MarcusDesign",
    sellerPhotoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    sellerCountryCode: "DE",
    categoryId: "cat-10",
    categoryName: "Professional Services",
    listingType: "service",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80",
    originalTitle: "Custom Brand Identity & Accessible Logo Design",
    originalDescription: "Tailor-made visual identity, color palette, and high-contrast logo design tailored specifically for social impact initiatives and small businesses.",
    isPriceOnRequest: true,
    priceCurrency: "EUR",
    externalUrl: "https://example.com/marcusdesign/brand-identity",
    serviceType: "online",
    onlineLanguages: ["English", "German"],
    ownStatus: "active",
    isAutoTranslated: false,
    createdAt: "2026-10-05T09:00:00Z",
  },
  {
    id: "list-4",
    sellerId: "seller-sofia-bg",
    sellerNickname: "SofiaHandmade",
    sellerPhotoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    sellerCountryCode: "BG",
    categoryId: "cat-9",
    categoryName: "Health & Personal Care",
    listingType: "product",
    imageUrl: "https://images.unsplash.com/photo-1608248597359-0d4187f5d68d?w=600&auto=format&fit=crop&q=80",
    originalTitle: "Organic Lavender & Chamomile Calming Herbal Soap Bar",
    originalDescription: "Cold-pressed natural soap formulated with organic Bulgarian mountain lavender and soothing chamomile flower extracts. Gentle on sensitive skin.",
    priceAmount: 8.50,
    priceCurrency: "EUR",
    isPriceOnRequest: false,
    externalUrl: "https://example.com/sofiahandmade/lavender-soap",
    isWorldwide: true,
    ownStatus: "active",
    isAutoTranslated: false,
    createdAt: "2026-10-05T14:30:00Z",
  },
  {
    id: "list-5",
    sellerId: "seller-sofia-bg",
    sellerNickname: "SofiaHandmade",
    sellerPhotoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    sellerCountryCode: "BG",
    categoryId: "cat-5",
    categoryName: "Home goods",
    listingType: "product",
    imageUrl: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=600&auto=format&fit=crop&q=80",
    originalTitle: "Hand-Thrown Ceramic Coffee Mug with Textured Grip",
    originalDescription: "Stoneware ceramic mug with ergonomic textured thumb rest designed for comfortable everyday holding. Glazed in soft pastel tones.",
    priceAmount: 22.00,
    priceCurrency: "EUR",
    isPriceOnRequest: false,
    externalUrl: "https://example.com/sofiahandmade/ceramic-mug",
    shipToCountries: ["BG", "RO", "GR", "DE", "NL"],
    isWorldwide: false,
    ownStatus: "active",
    isAutoTranslated: false,
    createdAt: "2026-10-05T16:00:00Z",
  },
  {
    id: "list-6",
    sellerId: "seller-elena-nl",
    sellerNickname: "ElenaCrafts",
    sellerPhotoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    sellerCountryCode: "NL",
    categoryId: "cat-7",
    categoryName: "Education & Learning",
    listingType: "service",
    imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&auto=format&fit=crop&q=80",
    originalTitle: "In-Person Sensory Art & Crafts Workshop in Amsterdam",
    originalDescription: "Gentle, supportive 1-on-1 and small group art sessions tailored for children with neurodivergence and sensory sensitivities.",
    priceAmount: 35.00,
    priceCurrency: "EUR",
    isPriceOnRequest: false,
    externalUrl: "https://example.com/elenacrafts/workshops",
    serviceType: "physical",
    physicalCountry: "NL",
    physicalCity: "Amsterdam",
    ownStatus: "active",
    isAutoTranslated: false,
    createdAt: "2026-10-06T11:00:00Z",
  }
];
