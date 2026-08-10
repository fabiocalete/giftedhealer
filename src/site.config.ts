// ============================================================================
// site.config.ts — Single source of truth for all site-specific content
// ============================================================================
// Every component in the project reads from this file.
// To generate a new site, clone the project and replace these values.
// ============================================================================

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface Service {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  icon?: string;
  children?: Service[];
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

export interface NavItem {
  id: string;
  label: string;
  icon: string;
  targetSection: string;
  href?: string;
}

export interface ServiceMenuItem {
  label: string;
  href: string;
  children?: ServiceMenuItem[];
}

interface ProcessStep {
  title: string;
  desc: string;
  image: string;
}

export interface ServicePageData {
  slug: string;
  category: string;
  title: string;
  tagline: string;
  heroImage: string;
  intro: string[];
  contentImage: string;
  benefitTitle: string;
  benefits: string[];
  benefitNote: string;
  deepDiveHeading: string;
  deepDive: string[];
  processSteps: ProcessStep[];
}

interface GalleryImage {
  src: string;
  alt: string;
  name: string;
  title: string;
  description: string;
}

interface AboutPageGalleryImage {
  src: string;
  alt: string;
}

interface AboutPageService {
  name: string;
  desc: string;
}

interface HowItWorksStep {
  src: string;
  alt: string;
  title: string;
  description: string;
}

interface ArticleMeta {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
}

// ---------------------------------------------------------------------------
// Shared data (referenced inside siteConfig)
// ---------------------------------------------------------------------------

const STANDARD_PROCESS: ProcessStep[] = [
  {
    title: "Private Consultation",
    desc: "Share what's on your mind, openly and in complete confidence",
    image: "/images/how-consultation.jpg",
  },
  {
    title: "Intuitive Insight",
    desc: "Receive grounded, honest guidance that identifies what's really going on",
    image: "/images/how-solution.jpg",
  },
  {
    title: "Personalized Work",
    desc: "A session shaped around your specific situation and energy",
    image: "/images/how-results.jpg",
  },
  {
    title: "Ongoing Support",
    desc: "Continued guidance and a clear sense of direction as things unfold",
    image: "/images/how-guidance.jpg",
  },
];

// ============================================================================
// SITE CONFIGURATION
// ============================================================================

export const siteConfig = {
  // --------------------------------------------------------------------------
  // IDENTITY
  // --------------------------------------------------------------------------
  practitioner: {
    name: "Mama Sanyu",
    brandName: "The Gifted Healer",
    title: "Mrs.",
    location: "Johannesburg, Cape Town",
  },

  site: {
    name: "The Gifted Healer",
    domain: "thegiftedhealer.co.za",
    url: "https://thegiftedhealer.co.za",
    language: "en",
    locale: "en_ZA",
  },

  // --------------------------------------------------------------------------
  // THEME
  // --------------------------------------------------------------------------
  // Color values are defined in globals.css as CSS custom properties.
  // Keep this section in sync manually — CSS cannot import TypeScript.
  // --------------------------------------------------------------------------
  theme: {
    colors: {
      cream: "#f3f8fb",
      creamDark: "#e2edf4",
      forest: "#123249",
      forestLight: "#3a7ca5",
      orangeAccent: "#d9784f",
      goldWarm: "#c9a227",
      marqueeBackground: "#cdeef0",
    },
    glass: {
      white: "rgba(255, 255, 255, 0.55)",
      whiteStrong: "rgba(255, 255, 255, 0.75)",
      border: "rgba(255, 255, 255, 0.6)",
      borderHover: "rgba(255, 255, 255, 0.85)",
    },
  },

  // --------------------------------------------------------------------------
  // TYPOGRAPHY
  // --------------------------------------------------------------------------
  // Font imports are static (next/font/google requires literal strings).
  // This section documents the font choices; keep in sync with layout.tsx.
  // --------------------------------------------------------------------------
  typography: {
    headlineFont: "Playfair Display", // --font-playfair → font-headline
    serifFont: "Cormorant Garamond", // --font-cormorant → font-serif
    bodyFont: "Inter", // --font-inter → font-sans
  },

  // --------------------------------------------------------------------------
  // WHATSAPP
  // --------------------------------------------------------------------------
  whatsapp: {
    phone: "27643207958",
    displayPhone: "+27 64 320 7958",
    generalMessage:
      "Hi, I'm looking for some clarity and would love to connect.",
  },

  // --------------------------------------------------------------------------
  // SEO & METADATA
  // --------------------------------------------------------------------------
  seo: {
    title: "Mama Sanyu | The Gifted Healer",
    description:
      "Mama Sanyu offers calm, modern intuitive guidance and energy work in Johannesburg and Cape Town. Book a private WhatsApp consultation today.",
    keywords: [
      "Mama Sanyu",
      "The Gifted Healer",
      "Intuitive Guidance",
      "Psychic Readings",
      "Energy Healing",
      "Johannesburg",
      "Cape Town",
      "Spiritual Guidance",
    ],
    ogTitle: "Mama Sanyu | The Gifted Healer",
    ogDescription:
      "Calm, modern intuitive guidance with Mama Sanyu — The Gifted Healer. Johannesburg & Cape Town.",
    ogUrl: "https://thegiftedhealer.co.za",
  },

  // --------------------------------------------------------------------------
  // HERO (home page)
  // --------------------------------------------------------------------------
  hero: {
    headline: ["Find Your", "Way Home."],
    subtitle:
      "Grounded, compassionate guidance for the questions life doesn't answer alone.",
    imageUrl: "/images/hero.jpg",
  },

  // --------------------------------------------------------------------------
  // ABOUT (home page section)
  // --------------------------------------------------------------------------
  about: {
    sectionLabel: "WELCOME TO THE GIFTED HEALER",
    headline: "Calm Guidance, Clearly Given",
    bio: "Mama Sanyu is the voice behind The Gifted Healer, offering calm, grounded guidance to clients across Johannesburg and Cape Town. Drawing on years of intuitive practice, she helps people find clarity around love, purpose, and the decisions that matter most — without drama, without judgment. Every conversation is private, unhurried, and centered on you. Whether you're facing a crossroads or simply need a clearer view of your own path, Mama Sanyu offers the kind of presence that helps you hear your own answers.",
    portrait: {
      src: "/images/hero_10.jpg",
      alt: "The Gifted Healer",
    },
    tags: [
      "Intuitive Guidance",
      "Energy Healing",
      "Chakra Balancing",
      "Relationship Clarity",
      "Astrology & Numerology",
      "Palm Reading",
      "Space Cleansing",
      "Remote Sessions",
    ],
  },

  // --------------------------------------------------------------------------
  // ABOUT PAGE (standalone /about)
  // --------------------------------------------------------------------------
  aboutPage: {
    hero: {
      sectionLabel: "ABOUT",
      portrait: "/images/about-portrait.jpg",
      tagline: "Guided by Presence. Grounded in Truth. Focused on Clarity.",
    },
    story: {
      sectionLabel: "OUR STORY",
      headline: "Who Is Mama Sanyu?",
      paragraphs: [
        "Mama Sanyu's gift for intuitive insight revealed itself early in life, long before she had language for it. Over the years that followed, she shaped that natural sensitivity into a disciplined practice — one built on presence, listening, and a genuine respect for each person's own path. Based between Johannesburg and Cape Town, she has spent years helping people move through uncertainty with a clearer sense of themselves.",
        "Her approach is simple: no drama, no false promises — just honest reflection and steady support. She doesn't tell people what to do; she helps them see clearly enough to decide for themselves. Every session with The Gifted Healer is private, unhurried, and shaped entirely around the person in front of her.",
      ],
    },
    approach: {
      sectionLabel: "OUR APPROACH",
      headline: "Every Person, A Different Starting Point",
      description:
        "No two situations are alike. Mama Sanyu tailors every session to where you are right now, combining intuitive insight with a calm, practical approach to help you move forward.",
      principles: [
        "Personalized to your situation",
        "Delivered with honesty and care",
        "Held in complete confidence",
        "Focused on clarity, not certainty",
      ],
      disclaimer:
        "Sessions offer guidance and perspective, not guarantees or predictions — the choices, and the path forward, remain yours.",
    },
    services: {
      sectionLabel: "OUR SERVICES",
      headline: "What The Gifted Healer Offers",
      items: [
        {
          name: "Psychic Readings",
          desc: "gain clarity and intuitive insight into your path",
        },
        {
          name: "Reuniting Lost Love",
          desc: "heal disconnection and rebuild trust between partners",
        },
        {
          name: "Palm Reading",
          desc: "explore your life path through palmistry",
        },
        {
          name: "Astrology & Numerology",
          desc: "understand your patterns through charts and numbers",
        },
        {
          name: "Spiritual Healing & Energy Work",
          desc: "release blockages and restore balance",
        },
        {
          name: "Online & Remote Sessions",
          desc: "connect from anywhere by WhatsApp, phone, or video",
        },
      ] as AboutPageService[],
    },
    gallery: [
      { src: "/images/gallery-jaya.jpg", alt: "A calm reading session" },
      {
        src: "/images/gallery-jamie.jpg",
        alt: "Space prepared for energy work",
      },
      { src: "/images/gallery-reese.jpg", alt: "A quiet moment of reflection" },
    ] as AboutPageGalleryImage[],
  },

  // --------------------------------------------------------------------------
  // SERVICES (home page section)
  // --------------------------------------------------------------------------
  services: {
    sectionLabel: "SERVICES",
    headline: "The Offerings",
    subtitle:
      "Choose the guidance that fits your moment. Every session begins with a conversation.",
    items: [
      {
        id: "psychic-readings",
        title: "Psychic Readings",
        subtitle: "Clarity, Insight & Intuitive Guidance",
        children: [
          { id: "clairvoyant-readings", title: "Clairvoyant Readings" },
          {
            id: "love-relationship-readings",
            title: "Love & Relationship Readings",
          },
          {
            id: "soulmate-twin-flame-readings",
            title: "Soulmate & Twin Flame Readings",
          },
        ],
      },
      {
        id: "reuniting-lost-love",
        title: "Reuniting Lost Love",
        subtitle: "Reconciliation & Relationship Healing",
        children: [
          { id: "love-reconciliation", title: "Love Reconciliation" },
          {
            id: "relationship-reconnection",
            title: "Relationship Reconnection",
          },
        ],
      },
      {
        id: "palm-reading",
        title: "Palm Reading",
        subtitle: "Life Path Insight Through Palmistry",
      },
      {
        id: "astrology-numerology",
        title: "Astrology & Numerology",
        subtitle: "Birth Charts & Life Path Insight",
        children: [
          { id: "birth-chart-reading", title: "Birth Chart Reading" },
          { id: "numerology-reading", title: "Numerology Reading" },
        ],
      },
      {
        id: "spiritual-healing-energy-work",
        title: "Spiritual Healing & Energy Work",
        subtitle: "Chakra Balancing & Energy Cleansing",
        children: [
          { id: "energy-healing", title: "Energy Healing" },
          { id: "chakra-balancing", title: "Chakra Balancing" },
          { id: "space-cleansing", title: "Space Cleansing" },
        ],
      },
      {
        id: "online-remote-sessions",
        title: "Online & Remote Sessions",
        subtitle: "WhatsApp, Phone & Video Consultations",
      },
    ] as Service[],
    gallery: [
      {
        src: "/images/gallery-jaya.jpg",
        alt: "Jaya — In studio",
        name: "Jaya",
        title: "Psychic Reading Session",
        description:
          "Receive grounded, intuitive insight into your relationships, work, and next steps.",
      },
      {
        src: "/images/gallery-jamie.jpg",
        alt: "Jamie — In studio",
        name: "Jamie",
        title: "Reuniting Lost Love",
        description:
          "Gentle guidance for reconnecting and healing after distance or disconnection.",
      },
      {
        src: "/images/gallery-reese.jpg",
        alt: "Reese — In studio",
        name: "Reese",
        title: "Energy & Space Cleansing",
        description:
          "Clear stagnant energy and restore a sense of balance in your life and home.",
      },
    ] as GalleryImage[],
  },

  // --------------------------------------------------------------------------
  // HOW IT WORKS (home page section)
  // --------------------------------------------------------------------------
  howItWorks: {
    sectionLabel: "HOW IT WORKS",
    headline: "How It Works",
    subtitle: "Three simple steps to a clearer path forward.",
    steps: [
      {
        src: "/images/how-consultation.jpg",
        alt: "A private consultation",
        title: "Reach Out",
        description: "Send a WhatsApp message with what's on your mind.",
      },
      {
        src: "/images/how-solution.jpg",
        alt: "Finding insight together",
        title: "Find Clarity",
        description: "Mama Sanyu listens and offers grounded, honest insight.",
      },
      {
        src: "/images/how-results.jpg",
        alt: "Ongoing support",
        title: "Move Forward",
        description:
          "Leave with a clearer sense of your next step, and support if you need it.",
      },
    ] as HowItWorksStep[],
  },

  // --------------------------------------------------------------------------
  // TESTIMONIALS
  // --------------------------------------------------------------------------
  testimonials: {
    sectionLabel: "TESTIMONIALS",
    items: [
      {
        id: "1",
        author: "Naledi M.",
        role: "Marketing Manager",
        content:
          "I came in skeptical and left with real clarity. No drama, just honest insight.",
        rating: 5,
        image: "/images/testimonial-maria.webp",
      },
      {
        id: "2",
        author: "Sipho K.",
        role: "Entrepreneur",
        content:
          "Grounded and direct. Exactly the perspective I needed before a big decision.",
        rating: 5,
      },
      {
        id: "3",
        author: "Thandiwe R.",
        role: "Teacher",
        content:
          "It felt less like a reading and more like finally being heard.",
        rating: 5,
      },
      {
        id: "4",
        author: "Michael B.",
        role: "Software Developer",
        content:
          "Practical, calm, and surprisingly specific. I didn't expect that.",
        rating: 5,
      },
      {
        id: "5",
        author: "Lerato P.",
        role: "Nurse",
        content:
          "The energy work genuinely helped me feel lighter within days.",
        rating: 5,
      },
      {
        id: "6",
        author: "Johan V.",
        role: "Small Business Owner",
        content:
          "Straightforward guidance, no false promises. Just what I needed.",
        rating: 5,
      },
    ] as Testimonial[],
  },

  // --------------------------------------------------------------------------
  // CONTACT
  // --------------------------------------------------------------------------
  contact: {
    sectionLabel: "GET IN TOUCH",
    headline: "Contact Mama Sanyu",
    tagline: "Ready for some clarity? Reach out — I'm here to listen.",
    labels: {
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email",
      phone: "Phone",
      message: "Message",
    },
    placeholders: {
      firstName: "Jane",
      lastName: "Doe",
      email: "jane@example.com",
      phone: "+27 00 000 0000",
      message: "Tell me what you're seeking…",
    },
    submitText: "Send Message",
    loadingText: "Sending…",
    successMessage: "Thanks! I'll be in touch soon.",
    errorMessage:
      "Something went wrong. Please try again or email me directly.",
    copyright: "© {year} Mama Sanyu. All rights reserved.",
  },

  // --------------------------------------------------------------------------
  // CREATE TOGETHER / MARQUEE CTA
  // --------------------------------------------------------------------------
  createTogether: {
    marqueeText: "Begin Your Journey to Clarity Today",
    repeatCount: 6,
    ctaText: "BOOK ME",
    backgroundColor: "#cdeef0",
    textColor: "rgba(18, 50, 73, 0.55)",
  },

  // --------------------------------------------------------------------------
  // NAVIGATION
  // --------------------------------------------------------------------------
  navigation: {
    brandName: "THE GIFTED HEALER",
    items: [
      {
        id: "portal",
        label: "Home",
        icon: "HomeIcon",
        targetSection: "hero",
      },
      {
        id: "guide",
        label: "About",
        icon: "UserIcon",
        targetSection: "about",
      },
      {
        id: "offerings",
        label: "Services",
        icon: "SparklesIcon",
        targetSection: "services",
      },
      {
        id: "articles",
        label: "Articles",
        icon: "BookOpenIcon",
        targetSection: "",
        href: "/articles",
      },
      {
        id: "connect",
        label: "Connect",
        icon: "PhoneIcon",
        targetSection: "contact",
      },
    ] as NavItem[],
    serviceMenu: [
      {
        label: "Psychic Readings",
        href: "/services/psychic-readings",
        children: [
          {
            label: "Clairvoyant Readings",
            href: "/services/clairvoyant-readings",
          },
          {
            label: "Love & Relationship Readings",
            href: "/services/love-relationship-readings",
          },
          {
            label: "Soulmate & Twin Flame Readings",
            href: "/services/soulmate-twin-flame-readings",
          },
        ],
      },
      {
        label: "Reuniting Lost Love",
        href: "/services/reuniting-lost-love",
        children: [
          {
            label: "Love Reconciliation",
            href: "/services/love-reconciliation",
          },
          {
            label: "Relationship Reconnection",
            href: "/services/relationship-reconnection",
          },
        ],
      },
      { label: "Palm Reading", href: "/services/palm-reading" },
      {
        label: "Astrology & Numerology",
        href: "/services/astrology-numerology",
        children: [
          {
            label: "Birth Chart Reading",
            href: "/services/birth-chart-reading",
          },
          { label: "Numerology Reading", href: "/services/numerology-reading" },
        ],
      },
      {
        label: "Spiritual Healing & Energy Work",
        href: "/services/spiritual-healing-energy-work",
        children: [
          { label: "Energy Healing", href: "/services/energy-healing" },
          { label: "Chakra Balancing", href: "/services/chakra-balancing" },
          { label: "Space Cleansing", href: "/services/space-cleansing" },
        ],
      },
      {
        label: "Online & Remote Sessions",
        href: "/services/online-remote-sessions",
      },
    ] as ServiceMenuItem[],
    headerCta: {
      text: "Book A Reading",
      href: "/#contact",
    },
  },

  // --------------------------------------------------------------------------
  // ARTICLES
  // --------------------------------------------------------------------------
  articles: {
    pageTitle: "Insights & Wisdom",
    sectionLabel: "ARTICLES",
    gridLabel: "LATEST ARTICLES",
    items: [] as ArticleMeta[],
    pages: {} as Record<string, { title: string; description: string }>,
  },

  // --------------------------------------------------------------------------
  // EMAIL TEMPLATE (api/contact route)
  // --------------------------------------------------------------------------
  email: {
    subjectTemplate: "New enquiry from {name}",
    fieldLabels: {
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email",
      phone: "Phone",
      message: "Message",
    },
    replyFooter: "Reply to this email to respond directly to {name}.",
  },

  // --------------------------------------------------------------------------
  // SERVICE PAGES
  // --------------------------------------------------------------------------
  servicePages: {
    howItWorksHeadline: "Your Journey, Step by Step",
    standardProcess: STANDARD_PROCESS,
    pages: [
      {
        slug: "psychic-readings",
        category: "PSYCHIC READINGS",
        title: "Psychic Readings",
        tagline: "Clarity • Insight • Intuitive Guidance",
        heroImage: "/images/services/psychic-reading-hero.jpg",
        intro: [
          "A psychic reading with Mama Sanyu is a calm, focused conversation designed to bring clarity to whatever is unclear in your life right now — a relationship, a decision, a pattern you can't quite name. Drawing on years of intuitive practice, she reads the energy around your situation with honesty and care.",
          "Every reading is private and unhurried. Whether you're facing questions about love, work, or the next chapter of your life, the goal is the same: to help you see your situation clearly enough to move forward with confidence.",
          "This isn't about being told what you want to hear. It's about understanding what's actually happening in and around your life, so you can respond with intention instead of uncertainty.",
        ],
        contentImage: "/images/services/psychic-reading-content.jpg",
        benefitTitle: "Who Can Benefit from a Psychic Reading?",
        benefits: [
          "Feeling stuck or unsure about a big decision",
          "Navigating a change in a relationship",
          "Sensing something isn't quite aligned, but can't say why",
          "Looking for a second, more intuitive perspective",
          "Wanting clarity before taking the next step",
        ],
        benefitNote:
          "Every reading is honest and grounded — no false promises, just clear, considered guidance.",
        deepDiveHeading: "Reading Beyond the Surface",
        deepDive: [
          "Intuitive reading is a practiced skill — the ability to notice patterns, energy, and undercurrents that aren't always visible from the outside. Mama Sanyu has spent years developing this sensitivity into a disciplined, reliable practice.",
          "During a session, she pays attention to what's present in the space between the words — the hesitations, the recurring themes, the things left unsaid. This often reveals more than a direct question ever could.",
          "What you can expect: full presence, honest reflection, and specific insight rather than vague generalities. If there's something worth naming, she'll name it. If there isn't, she'll tell you that too.",
        ],
        processSteps: STANDARD_PROCESS,
      },
      {
        slug: "clairvoyant-readings",
        category: "CLAIRVOYANT READINGS",
        title: "Clairvoyant Readings",
        tagline: "See What Sits Beneath the Surface",
        heroImage: "/images/services/love-spells-hero.jpg",
        intro: [
          "A clairvoyant reading draws on a heightened sensitivity to energy and impression — a way of perceiving what sits just beneath the surface of a situation. Mama Sanyu uses this gift to offer insight that feels immediate and specific, not generic.",
          "These sessions work well for open-ended questions — moments when you're not sure exactly what you need to know, only that something needs attention.",
          "The intention is always the same: presence, honesty, and clarity, delivered with care.",
        ],
        contentImage: "/images/services/love-spells-content.jpg",
        benefitTitle: "Who Can Benefit from a Clairvoyant Reading?",
        benefits: [
          "Facing an open-ended or unclear situation",
          "Wanting insight without a specific question in mind",
          "Curious about themes and patterns in your life",
          "Seeking a broader, more intuitive perspective",
          "Looking for guidance during a season of change",
        ],
        benefitNote: "Sessions are grounded and honest, never sensationalized.",
        deepDiveHeading: "A Different Way of Listening",
        deepDive: [
          "Clairvoyant work is less about prediction and more about perception — noticing what's present, energetically and emotionally, around a person or situation.",
          "Mama Sanyu approaches each session with an open mind, letting the impressions that arise guide the conversation rather than forcing a particular outcome.",
          "The result is often less like being told something new, and more like finally having language for something you already sensed.",
        ],
        processSteps: STANDARD_PROCESS,
      },
      {
        slug: "love-relationship-readings",
        category: "LOVE & RELATIONSHIP READINGS",
        title: "Love & Relationship Readings",
        tagline: "Understand the Connection You're In — Or Seeking",
        heroImage: "/images/services/attraction-love-spells-hero.jpg",
        intro: [
          "Relationships carry more unspoken energy than almost anything else in life. A love and relationship reading with Mama Sanyu offers a grounded, honest look at where you and a partner — current, past, or hoped-for — actually stand.",
          "These sessions help name the patterns that keep repeating, the questions that keep resurfacing, and the feelings that are harder to explain to friends or family than to someone with distance and perspective.",
          "There's no judgment here — only a calm space to understand what's really going on beneath the surface of your relationship.",
        ],
        contentImage: "/images/services/attraction-love-spells-content.jpg",
        benefitTitle: "Who Can Benefit from Love & Relationship Readings?",
        benefits: [
          "Uncertain about where a relationship is heading",
          "Processing a recent breakup or distance",
          "Wanting clarity before opening up to someone new",
          "Noticing a repeating pattern in relationships",
          "Seeking an honest, outside perspective",
        ],
        benefitNote:
          "All relationship work respects the free will and privacy of everyone involved.",
        deepDiveHeading: "What Relationships Reveal",
        deepDive: [
          "Every relationship carries its own energy — shaped by history, expectation, and the parts of ourselves we bring into connection with another person.",
          "Mama Sanyu's approach is to read that energy directly: not to predict an outcome, but to help you understand the dynamic clearly enough to make your own informed choice.",
          "Whether the reading points toward hope, closure, or simply understanding, the goal is always the same — a clearer, calmer relationship with your own heart.",
        ],
        processSteps: STANDARD_PROCESS,
      },
      {
        slug: "soulmate-twin-flame-readings",
        category: "SOULMATE & TWIN FLAME READINGS",
        title: "Soulmate & Twin Flame Readings",
        tagline: "Deep Connection, Explained",
        heroImage: "/images/services/marriage-love-spells-hero.jpg",
        intro: [
          "Some connections feel different — more intense, more familiar, harder to categorize. A soulmate or twin flame reading helps make sense of that intensity, offering language and perspective for a bond that doesn't fit the usual framework.",
          "Mama Sanyu approaches these sessions with care, exploring the energetic dynamic between you and the other person without romanticizing or exaggerating what's actually present.",
          "The goal is understanding, not fantasy — helping you see the connection for what it truly is.",
        ],
        contentImage: "/images/services/marriage-love-spells-content.jpg",
        benefitTitle: "Who Can Benefit from This Reading?",
        benefits: [
          "Experiencing an unusually intense or familiar connection",
          "Trying to understand a recurring person in your life",
          "Processing a connection that feels bigger than the relationship itself",
          "Wanting grounded language for an intense experience",
          "Seeking clarity, not confirmation of a fantasy",
        ],
        benefitNote:
          "Readings are honest and grounded — not every intense connection is meant to last, and that's addressed directly.",
        deepDiveHeading: "Intensity Isn't Always Destiny",
        deepDive: [
          "Deep, immediate connections are real — but intensity alone doesn't determine whether a relationship is healthy or lasting.",
          "Mama Sanyu's approach separates the emotional charge of a connection from its actual dynamics, helping you see both clearly.",
          "Sometimes this brings reassurance. Sometimes it brings closure. Either way, it brings clarity — which is the point.",
        ],
        processSteps: STANDARD_PROCESS,
      },
      {
        slug: "reuniting-lost-love",
        category: "REUNITING LOST LOVE",
        title: "Reuniting Lost Love",
        tagline: "Reconnection, Handled with Care",
        heroImage: "/images/services/get-back-lost-love-hero.jpg",
        intro: [
          "When a relationship fades or ends abruptly, the uncertainty can be harder to carry than the ending itself. Mama Sanyu's reuniting lost love sessions offer a calm, honest look at what happened and what — if anything — is possible from here.",
          "These sessions begin with a private consultation to understand the full context of the separation, followed by grounded guidance on how to move forward, whether that means reconnecting or finding closure.",
          "Separation is rarely as simple as it looks from the outside. Understanding what really happened is often the first step toward genuine peace, whichever direction that leads.",
        ],
        contentImage: "/images/services/get-back-lost-love-content.jpg",
        benefitTitle: "Who Needs Support Reuniting Lost Love?",
        benefits: [
          "A partner left suddenly without a clear reason",
          "Communication has gone quiet",
          "Outside circumstances put strain on the relationship",
          "The connection feels distant or unclear",
          "You want honest guidance, whatever the outcome",
        ],
        benefitNote:
          "This work is approached with care for everyone involved, never manipulation or pressure.",
        deepDiveHeading: "Understanding Why Connection Fades",
        deepDive: [
          "When a relationship ends or goes quiet, the visible signs — distance, silence, conflict — are often symptoms of something deeper: unresolved hurt, miscommunication, or simply two people growing in different directions.",
          "Mama Sanyu's approach is to trace that thread carefully, identifying where and why the disconnection happened, without assuming reconnection is automatically the right outcome.",
          "The work that follows is about creating the conditions for honest reconnection where it's genuinely possible — and clear-eyed closure where it isn't.",
        ],
        processSteps: STANDARD_PROCESS,
      },
      {
        slug: "love-reconciliation",
        category: "LOVE RECONCILIATION",
        title: "Love Reconciliation",
        tagline: "Rebuilding Trust, One Honest Step at a Time",
        heroImage: "/images/services/get-back-lost-love-hero.jpg",
        intro: [
          "Reconciliation is possible, but it requires honesty on both sides. Mama Sanyu's love reconciliation sessions help you understand what actually broke down in the relationship, and whether the foundation for rebuilding trust genuinely exists.",
          "This isn't about convincing anyone of anything — it's about seeing the situation clearly enough to know whether reconciliation is worth pursuing, and how to approach it if it is.",
          "Where reconciliation is possible, the focus is on rebuilding — slowly, honestly, and without repeating the patterns that caused the original disconnection.",
        ],
        contentImage: "/images/services/get-back-lost-love-content.jpg",
        benefitTitle: "Who Can Benefit from Love Reconciliation Support?",
        benefits: [
          "Both people want to try again, but don't know how",
          "Trust was broken and needs to be rebuilt",
          "Old patterns keep resurfacing",
          "You want an honest read on whether reconciliation makes sense",
          "Looking for a calmer way to approach a difficult conversation",
        ],
        benefitNote:
          "Reconciliation work respects both parties equally and is never about pressuring anyone back together.",
        deepDiveHeading: "What Makes Reconciliation Possible",
        deepDive: [
          "Not every relationship that ends should be rebuilt — but many that could be, aren't, simply because neither person knows where to start.",
          "Mama Sanyu's role is to help identify what genuinely caused the disconnection, separate from the surface-level arguments that get most of the attention.",
          "From there, reconciliation becomes a series of honest, manageable steps — rebuilding trust gradually rather than expecting everything to return to normal at once.",
        ],
        processSteps: STANDARD_PROCESS,
      },
      {
        slug: "relationship-reconnection",
        category: "RELATIONSHIP RECONNECTION",
        title: "Relationship Reconnection",
        tagline: "Closing the Distance That's Grown Between You",
        heroImage: "/images/services/marriage-love-spells-hero.jpg",
        intro: [
          "Sometimes a relationship doesn't end — it just quietly drifts. Relationship reconnection sessions help you understand where that distance came from and offer practical, grounded ways to close it.",
          "Mama Sanyu works with both the emotional and energetic sides of the disconnection, helping you and your partner find your way back to each other without forcing anything.",
          "The goal isn't to erase what's happened, but to build a renewed sense of closeness from an honest, clear-eyed place.",
        ],
        contentImage: "/images/services/marriage-love-spells-content.jpg",
        benefitTitle: "Who Needs Relationship Reconnection Support?",
        benefits: [
          "You feel like roommates more than partners",
          "Emotional distance has grown gradually",
          "Life circumstances have pulled you apart",
          "You want to reconnect without repeating old conflicts",
          "Looking for practical, grounded next steps",
        ],
        benefitNote:
          "This work is collaborative and respectful of both partners' pace and comfort.",
        deepDiveHeading: "How Distance Builds Quietly",
        deepDive: [
          "Distance in a relationship rarely arrives all at once. It builds gradually — through unspoken frustrations, busy schedules, and small moments of disconnection that go unaddressed.",
          "Mama Sanyu helps identify these accumulated small gaps, which are often more fixable than they feel from the inside.",
          "With clarity on where the distance began, reconnecting becomes less about a single dramatic gesture and more about small, consistent steps back toward each other.",
        ],
        processSteps: STANDARD_PROCESS,
      },
      {
        slug: "palm-reading",
        category: "PALM READING",
        title: "Palm Reading",
        tagline: "Life Path Insight Through Palmistry",
        heroImage: "/images/services/psychic-reading-hero.jpg",
        intro: [
          "Palm reading is one of the oldest forms of intuitive practice — a way of reading the lines, shapes, and textures of the hand for insight into character, tendencies, and life patterns.",
          "Mama Sanyu combines traditional palmistry knowledge with her own intuitive sensitivity, offering a reading that feels personal rather than formulaic.",
          "These sessions work well as a grounded, tangible starting point for anyone curious about what a reading feels like.",
        ],
        contentImage: "/images/services/psychic-reading-content.jpg",
        benefitTitle: "Who Enjoys a Palm Reading?",
        benefits: [
          "Curious about intuitive practices for the first time",
          "Interested in traditional palmistry",
          "Looking for a grounded, tangible reading experience",
          "Wanting insight into natural tendencies and patterns",
          "Enjoys reflecting on life path and character",
        ],
        benefitNote:
          "Palm reading offers reflection and perspective, not fixed predictions.",
        deepDiveHeading: "What the Hand Reveals",
        deepDive: [
          "Palmistry reads the hand as a map — the major lines, the shape of the palm, and the texture of the skin all carry traditional meaning built up over centuries of practice.",
          "Mama Sanyu treats this map as a starting point for conversation rather than a rigid script, blending traditional interpretation with what she intuitively senses in the moment.",
          "The result is a reading that feels specific to you — practical, reflective, and genuinely engaging.",
        ],
        processSteps: STANDARD_PROCESS,
      },
      {
        slug: "astrology-numerology",
        category: "ASTROLOGY & NUMEROLOGY",
        title: "Astrology & Numerology",
        tagline: "Birth Charts & Life Path Insight",
        heroImage: "/images/services/money-spells-hero.jpg",
        intro: [
          "Astrology and numerology offer two different lenses on the same question: what patterns are shaping your life, and why? Mama Sanyu draws on both to build a fuller picture of your path.",
          "A birth chart reveals the planetary positions at the moment you were born; your numerology reveals patterns encoded in your name and birth date. Together, they offer a rich, layered starting point for a reading.",
          "These sessions are especially useful for anyone who wants structure and specificity alongside intuitive insight.",
        ],
        contentImage: "/images/services/money-spells-content.jpg",
        benefitTitle: "Who Can Benefit from Astrology & Numerology?",
        benefits: [
          "Curious about your birth chart or numerology",
          "Wanting a structured, detailed reading",
          "Interested in recurring numbers or life patterns",
          "Looking for insight into personality and timing",
          "Enjoys combining intuitive and analytical perspectives",
        ],
        benefitNote:
          "Charts and numbers offer patterns to reflect on, not fixed outcomes.",
        deepDiveHeading: "Patterns Written in Time and Number",
        deepDive: [
          "Your birth chart is a snapshot of the sky at the exact moment you arrived — a starting point that traditional astrology reads for insight into temperament, timing, and tendency.",
          "Numerology works differently, distilling your name and birth date down to patterns of number that are said to carry their own meaning.",
          "Mama Sanyu uses both as a foundation, then layers her own intuitive reading on top — turning raw data into a conversation about your actual life.",
        ],
        processSteps: STANDARD_PROCESS,
      },
      {
        slug: "birth-chart-reading",
        category: "BIRTH CHART READING",
        title: "Birth Chart Reading",
        tagline: "Your Sky, Read Clearly",
        heroImage: "/images/services/money-spells-hero.jpg",
        intro: [
          "A birth chart reading maps the position of the planets at the exact moment you were born, offering a detailed foundation for understanding your temperament, tendencies, and timing.",
          "Mama Sanyu reads your chart with an eye toward practical insight — not vague generalities, but specific patterns that show up in how you approach relationships, work, and change.",
          "This session works well on its own or as a companion to a more open intuitive reading.",
        ],
        contentImage: "/images/services/money-spells-content.jpg",
        benefitTitle: "Who Can Benefit from a Birth Chart Reading?",
        benefits: [
          "Curious about your astrological placements",
          "Wanting insight into personality and timing",
          "Navigating a major life transition",
          "Interested in how your chart shapes relationships",
          "Looking for a structured, detailed reading",
        ],
        benefitNote:
          "A birth chart offers patterns to reflect on, not a fixed script.",
        deepDiveHeading: "Reading the Sky You Were Born Under",
        deepDive: [
          "Every birth chart is unique — a specific arrangement of planets, houses, and aspects that traditional astrology has read for insight for thousands of years.",
          "Mama Sanyu focuses on the placements most relevant to your current questions, rather than delivering an overwhelming, generic overview.",
          "The result is a reading that feels immediately useful — grounded in your actual chart, not a one-size-fits-all horoscope.",
        ],
        processSteps: STANDARD_PROCESS,
      },
      {
        slug: "numerology-reading",
        category: "NUMEROLOGY READING",
        title: "Numerology Reading",
        tagline: "The Patterns Behind Your Name and Numbers",
        heroImage: "/images/services/money-spells-content.jpg",
        intro: [
          "Numerology looks at the numbers embedded in your name and birth date, tracing patterns believed to shape personality, timing, and life direction.",
          "Mama Sanyu calculates your core numbers and reads them intuitively, connecting the patterns to what's actually happening in your life right now.",
          "This is a grounded, structured session for anyone drawn to the idea that numbers carry meaning.",
        ],
        contentImage: "/images/services/money-spells-hero.jpg",
        benefitTitle: "Who Can Benefit from a Numerology Reading?",
        benefits: [
          "Curious about recurring numbers in your life",
          "Wanting insight into your life path number",
          "Interested in timing for major decisions",
          "Looking for a structured, easy-to-follow reading",
          "Enjoys reflecting on personal patterns",
        ],
        benefitNote:
          "Numerology offers patterns to reflect on, not certainties.",
        deepDiveHeading: "What Your Numbers Are Telling You",
        deepDive: [
          "Your life path number, drawn from your birth date, is considered one of the clearest indicators of your core tendencies and long-term direction in numerology.",
          "Mama Sanyu layers this with numbers drawn from your name, building a fuller picture of the patterns at play in your life.",
          "The session translates these numbers into plain, practical language — what they might explain about your past, and what they suggest about your next steps.",
        ],
        processSteps: STANDARD_PROCESS,
      },
      {
        slug: "spiritual-healing-energy-work",
        category: "SPIRITUAL HEALING & ENERGY WORK",
        title: "Spiritual Healing & Energy Work",
        tagline: "Chakra Balancing & Energy Cleansing",
        heroImage: "/images/services/love-spells-hero.jpg",
        intro: [
          "Energy work addresses what talking alone sometimes can't reach — the tension, heaviness, or stuckness that settles in after stress, grief, or prolonged difficulty. Mama Sanyu's energy healing sessions are designed to help release that weight.",
          "These sessions may include chakra balancing, guided energy clearing, or space cleansing, depending on what you need. Each is tailored to your specific situation.",
          "The aim is simple: to help you feel lighter, steadier, and more like yourself.",
        ],
        contentImage: "/images/services/love-spells-content.jpg",
        benefitTitle: "Who Can Benefit from Energy Work?",
        benefits: [
          "Feeling emotionally heavy or drained",
          "Recovering from a stressful period",
          "Sensing your home or space feels 'off'",
          "Looking to reset after a difficult chapter",
          "Wanting to feel more grounded and balanced",
        ],
        benefitNote:
          "Energy work supports wellbeing alongside — not instead of — professional medical or mental health care.",
        deepDiveHeading: "Why Tension Lingers in the Body and Space",
        deepDive: [
          "Stress and unresolved emotion don't always resolve on their own — they can settle in as a persistent heaviness that's hard to name but easy to feel.",
          "Mama Sanyu's energy work focuses on identifying where that tension has accumulated, whether in a person's own energy or in the space they spend the most time in.",
          "Clearing that build-up doesn't erase what happened — but it does create room to move forward without carrying the weight of it every day.",
        ],
        processSteps: STANDARD_PROCESS,
      },
      {
        slug: "energy-healing",
        category: "ENERGY HEALING",
        title: "Energy Healing",
        tagline: "Release What You've Been Carrying",
        heroImage: "/images/services/love-spells-hero.jpg",
        intro: [
          "Energy healing sessions focus on releasing the emotional and energetic weight that builds up after stress, grief, or difficult transitions.",
          "Mama Sanyu works intuitively, sensing where tension has settled and guiding a gentle process of release and restoration.",
          "Most clients describe feeling lighter and calmer after a session — a subtle but noticeable shift.",
        ],
        contentImage: "/images/services/love-spells-content.jpg",
        benefitTitle: "Who Can Benefit from Energy Healing?",
        benefits: [
          "Carrying emotional weight from a difficult period",
          "Feeling drained without a clear physical cause",
          "Recovering from grief or loss",
          "Wanting a gentle reset",
          "Seeking a calmer, steadier baseline",
        ],
        benefitNote:
          "Energy healing supports wellbeing alongside professional care, not as a replacement for it.",
        deepDiveHeading: "How Release Actually Feels",
        deepDive: [
          "Emotional weight often shows up physically — as tightness, fatigue, or a general sense of heaviness that's hard to pin down.",
          "Mama Sanyu's approach is to work directly with that heaviness, guiding a gradual release rather than forcing an intense or overwhelming shift.",
          "The result, for most clients, is subtle but real: a lighter, steadier feeling that lasts well beyond the session itself.",
        ],
        processSteps: STANDARD_PROCESS,
      },
      {
        slug: "chakra-balancing",
        category: "CHAKRA BALANCING",
        title: "Chakra Balancing",
        tagline: "Restore Flow, Restore Balance",
        heroImage: "/images/services/love-spells-content.jpg",
        intro: [
          "Chakra balancing works with the body's core energy centers, addressing the blockages that can leave you feeling stuck, anxious, or disconnected from yourself.",
          "Mama Sanyu assesses where your energy feels most out of balance and guides a session focused on restoring flow to those areas.",
          "This work pairs well with other sessions, or stands on its own as a grounding, restorative practice.",
        ],
        contentImage: "/images/services/love-spells-hero.jpg",
        benefitTitle: "Who Can Benefit from Chakra Balancing?",
        benefits: [
          "Feeling anxious or scattered",
          "Sensing a specific area of life feels 'blocked'",
          "Wanting a grounding, restorative practice",
          "Recovering from an emotionally intense period",
          "Curious about energy-centered practices",
        ],
        benefitNote:
          "This work supports balance and wellbeing, not medical treatment.",
        deepDiveHeading: "Where Blockages Show Up",
        deepDive: [
          "Each energy center is associated with a different area of life — security, connection, confidence, expression, and beyond — and imbalance in one often shows up as a specific, recognizable feeling.",
          "Mama Sanyu reads these imbalances intuitively, focusing the session on the centers that need the most attention.",
          "The goal isn't perfect balance in every area at once, but a noticeable shift in the specific area that's been weighing on you.",
        ],
        processSteps: STANDARD_PROCESS,
      },
      {
        slug: "space-cleansing",
        category: "SPACE CLEANSING",
        title: "Space Cleansing",
        tagline: "Clear the Energy of Your Home",
        heroImage: "/images/services/money-spells-content.jpg",
        intro: [
          "Homes and workspaces hold onto energy just as people do — especially after conflict, loss, or a long stretch of stress. Space cleansing sessions help clear that accumulated weight.",
          "Mama Sanyu guides you through a process suited to your space, whether that's a home, a room, or a workspace that no longer feels right.",
          "Many clients notice an immediate shift in how a space feels — lighter, calmer, more like a place they want to be.",
        ],
        contentImage: "/images/services/money-spells-hero.jpg",
        benefitTitle: "Who Can Benefit from Space Cleansing?",
        benefits: [
          "Moving into a new home",
          "A space feels heavy after conflict or loss",
          "Wanting a fresh start in a familiar place",
          "Sensing stagnant or unsettled energy at home",
          "Preparing a space for a new chapter",
        ],
        benefitNote:
          "Space cleansing is offered remotely by guidance, or in person where available.",
        deepDiveHeading: "Why Spaces Hold Onto Energy",
        deepDive: [
          "A space absorbs the emotional tone of what happens within it — arguments, grief, and prolonged stress can all leave a residue that lingers long after the moment has passed.",
          "Mama Sanyu approaches each space individually, identifying where the heaviest energy has settled and guiding a clearing process suited to that specific area.",
          "The change is often immediately noticeable: a room that finally feels calm, open, and genuinely yours again.",
        ],
        processSteps: STANDARD_PROCESS,
      },
      {
        slug: "online-remote-sessions",
        category: "ONLINE & REMOTE SESSIONS",
        title: "Online & Remote Sessions",
        tagline: "WhatsApp, Phone & Video Consultations",
        heroImage: "/images/services/psychic-reading-hero.jpg",
        intro: [
          "Distance is no barrier to a meaningful session. Mama Sanyu offers readings and guidance by WhatsApp, phone, and video call, so you can connect from wherever you are.",
          "Remote sessions carry the same care and confidentiality as an in-person conversation — just delivered in the way that's most convenient for you.",
          "Whether you prefer a written exchange, a voice note, or a face-to-face video call, the format is shaped around what feels most comfortable.",
        ],
        contentImage: "/images/services/psychic-reading-content.jpg",
        benefitTitle: "Who Chooses Online & Remote Sessions?",
        benefits: [
          "Living outside Johannesburg or Cape Town",
          "Preferring the convenience of WhatsApp or phone",
          "Wanting a session that fits around a busy schedule",
          "More comfortable with a written or voice exchange",
          "Seeking guidance without leaving home",
        ],
        benefitNote:
          "All remote sessions are private and treated with the same care as an in-person visit.",
        deepDiveHeading: "Why Distance Doesn't Change the Work",
        deepDive: [
          "Intuitive insight isn't dependent on physical presence — it's about attention, sensitivity, and honest reflection, all of which translate naturally to a call or message exchange.",
          "Mama Sanyu approaches remote sessions with the same focus and confidentiality as any in-person consultation.",
          "For many clients, the convenience of a remote session — fitting into a lunch break, a quiet evening, or a moment of need — makes it easier to reach out exactly when it matters most.",
        ],
        processSteps: STANDARD_PROCESS,
      },
    ] as ServicePageData[],
  },
} as const;

// ============================================================================
// HELPERS
// ============================================================================

/** Generate a WhatsApp deep link with optional pre-filled message. */
export function getWhatsAppLink(message?: string): string {
  const phone = siteConfig.whatsapp.phone;
  const text = message ?? siteConfig.whatsapp.generalMessage;
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

/** Return copyright string with the current year substituted. */
export function getCopyright(): string {
  return siteConfig.contact.copyright.replace(
    "{year}",
    new Date().getFullYear().toString(),
  );
}

/** Look up a service page by slug. */
export function getServicePageData(slug: string): ServicePageData | undefined {
  return siteConfig.servicePages.pages.find((p) => p.slug === slug);
}

// ============================================================================
// TYPE EXPORT
// ============================================================================
export type SiteConfig = typeof siteConfig;
