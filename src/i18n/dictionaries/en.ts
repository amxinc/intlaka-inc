// English is the source dictionary: every other locale must match this shape (see `Dictionary`).
// Content rules: never use the em dash character. No statistics other than Rose's 10%. No partner,
// brand, city or date that Intlaka has not announced.

const en = {
  meta: {
    siteName: "Intlaka",
    defaultTitle: "Intlaka | Every dream deserves a platform to take off",
    description:
      "Intlaka is a group of companies between Morocco and Jordan, working in technology, mobility, food and hospitality, and real estate. We build companies that solve real problems and open the way for young people to turn their ideas into products.",
    keywords: [
      "Intlaka",
      "group of companies Morocco Jordan",
      "Ahmad Al Husban",
      "AMX Tech",
      "Intlaka Real Estate",
      "JOE MOOD",
      "Rose safe mobility for women",
      "Hera travel companion",
      "Mimi Pay",
      "Hera Studio",
      "Moroccan technology",
    ],
  },

  common: {
    skipToContent: "Skip to content",
    contactUs: "Get in touch",
    emailUs: "Email us",
    learnMore: "Learn more",
    illustration: "Illustration",
    language: "Language",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    backHome: "Back to home",
    comingSoon: "Coming soon",
    inResearch: "In research",
  },

  nav: {
    mainLabel: "Main",
    companies: "Companies",
    apps: "Apps",
    allApps: "All apps",
    rose: "Rose",
    roseDesc: "Safe mobility for women, by women.",
    hera: "Hera",
    heraDesc: "A personal travel and leisure companion.",
    mimi: "Mimi Pay",
    mimiDesc: "A financial app. Coming soon.",
    projects: "Projects",
    studio: "Hera Studio",
    about: "About",
    contact: "Contact",
    cta: "Get in touch",
  },

  footer: {
    tagline: "A group of companies between Morocco and Jordan. Every dream deserves a platform to take off.",
    group: "The group",
    apps: "Apps",
    company: "Intlaka",
    contact: "Contact",
    followUs: "Follow us",
    privacy: "Privacy policy",
    rights: "All rights reserved.",
  },

  cta: {
    tag: "Partners and investors",
    title: "Let's build what comes next, *together*",
    text: "If you believe in what we are building, write to us. We read every message and answer with care.",
  },

  countdown: {
    label: "Rose launches in",
    date: "28 December 2026",
    dateShort: "28 Dec 2026",
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
    launched: "Launch day is here.",
  },

  /** Shared facts, reused by the home page and the inner pages. */
  group: {
    companies: [
      {
        id: "amx-tech" as const,
        name: "AMX Tech",
        sector: "Digital and financial solutions",
        place: "Morocco",
        text: "AMX Tech builds digital and financial solutions from Morocco. It is the technology company of the group.",
      },
      {
        id: "real-estate" as const,
        name: "Intlaka Real Estate",
        sector: "Real estate development",
        place: "Jordan",
        text: "Intlaka Real Estate develops real estate in Jordan, with the same care for people that guides the whole group.",
      },
      {
        id: "joe-mood" as const,
        name: "JOE MOOD",
        sector: "Food and hospitality",
        place: "Home of the café DARB 23",
        text: "JOE MOOD is the food and hospitality company of the group, and the home of the café DARB 23.",
      },
    ],
    apps: {
      rose: {
        name: "Rose",
        kind: "Safe mobility for women, by women",
        text: "Verified, trained and employed women drivers, live trip sharing and an emergency button. Safety for the rider and the driver alike.",
        status: "Launch: 28 December 2026",
        link: "Discover Rose",
      },
      hera: {
        name: "Hera",
        kind: "Personal travel and leisure companion",
        text: "Hera understands what you like, how you spend and how you travel, and walks with you from choosing a destination to coming home.",
        status: "Coming soon",
        link: "Discover Hera",
      },
      mimi: {
        name: "Mimi Pay",
        kind: "Financial app",
        text: "Mimi Pay is a financial app from Intlaka. It is coming soon.",
        status: "Coming soon",
      },
    },
    projects: [
      {
        id: "battouta" as const,
        name: "Battouta",
        kind: "Welcome robot",
        text: "A Moroccan robot that welcomes visitors at airports, stations and hotels.",
      },
      {
        id: "fihri" as const,
        name: "Fihri",
        kind: "AI model",
        text: "Intlaka's own Moroccan AI model.",
      },
      {
        id: "glasses" as const,
        name: "Smart glasses",
        kind: "Assistive technology",
        text: "Smart glasses for blind and visually impaired people.",
      },
      {
        id: "autonomous" as const,
        name: "Autonomous driving",
        kind: "Research project",
        text: "Autonomous driving, explored as a research project.",
      },
    ],
  },

  home: {
    meta: {
      title: "Intlaka | Every dream deserves a platform to take off",
      description:
        "Intlaka is a group of companies between Morocco and Jordan. We build companies that solve real problems, and open the way for young people to turn their ideas into products.",
    },
    hero: {
      tag: "A group of companies between Morocco and Jordan",
      titleLead: "Every dream deserves",
      titleLink: "a platform",
      titleAccent: "to take off",
      subtitle:
        "Intlaka builds companies that solve real problems, and opens the way for young people to turn their ideas into products.",
      secondary: "Explore the group",
      stage: {
        beliefLabel: "Our belief",
        belief: "Build to Give. Give to Last.",
        beliefNote: "People before profit.",
        roseLabel: "Rose",
        roseText: "Safe mobility for women, by women",
        launchLabel: "Launch",
      },
    },
    sectors: {
      label: "What Intlaka is building",
      items: [
        "Technology",
        "Mobility",
        "Food and hospitality",
        "Real estate",
        "Travel and leisure",
        "Financial apps",
        "Artificial intelligence",
        "Robotics",
        "Young talent",
      ],
    },
    bento: {
      companies: {
        title: "Companies that stand on their own",
        text: "Each company runs independently, with its own team and its own field, under one shared vision.",
      },
      apps: {
        title: "Apps for real, everyday problems",
        text: "Safe mobility, travel and money. Intlaka's own apps, with user data hosted in Morocco.",
      },
      projects: {
        title: "Research for what comes next",
        text: "Robotics, artificial intelligence and assistive technology, in research and development.",
      },
      studio: {
        title: "A door open to young talent",
        text: "Hera Studio gathers young creators from all over Morocco and helps them turn ideas into products.",
      },
    },
    convictions: {
      tag: "What we believe",
      title: "Morocco does not import the future. It builds it and exports it.",
      text: "The talent is there. It needs someone to open the door. This is what guides every decision at Intlaka.",
      items: [
        {
          title: "Real problems come before ideas",
          text: "We build companies that solve problems people actually live with: getting home safely, travelling without fear, managing money.",
        },
        {
          title: "People before profit",
          text: "Profit matters because it lets us keep going. People matter because they are the reason we started.",
        },
        {
          title: "Talent over degrees",
          text: "A young person with an idea and the will to build deserves a chance, whatever their diploma says.",
        },
        {
          title: "Independent companies, one vision",
          text: "Each company in the group is run by its own team. What they share is a direction, not a chain of command.",
        },
        {
          title: "Built here, for the world",
          text: "We believe products imagined and built in Morocco can serve people far beyond its borders.",
        },
      ],
    },
    belief: {
      tag: "Our belief",
      title: "Build to Give. Give to Last.",
      items: [
        {
          value: "Build",
          text: "We build companies and products that solve real problems, in technology, mobility, food and hospitality, and real estate.",
          note: "Companies, apps and research",
        },
        {
          value: "Give",
          text: "A permanent 10% of Rose's profits goes to a women's empowerment initiative. And we share with our team what we achieve together.",
          note: "People before profit",
        },
        {
          value: "Last",
          text: "What is built on giving earns trust, and trust is what lets a company last. We are here for the long road.",
          note: "A vision for the long term",
        },
      ],
      closing: "We build to give, and we give to last.",
      original: "نبني لنعطي، ونعطي لنبقى",
    },
    companies: {
      tag: "The companies",
      title: "Three companies, each in its own field",
      text: "Technology in Morocco, real estate in Jordan, food and hospitality. Each one runs independently.",
      link: "View the company",
      all: "See all companies",
    },
    apps: {
      tag: "The apps",
      title: "Apps made to protect, guide and simplify",
      text: "Rose launches on 28 December 2026. Hera and Mimi Pay are coming soon.",
      all: "See all apps",
    },
    projects: {
      tag: "Research and development",
      title: "What we are working on for tomorrow",
      text: "These projects are in research and development. We will share dates when there is something real to show.",
      link: "See the projects",
    },
    people: {
      tag: "The team",
      title: "At Intlaka, the team is a family",
      text: "We invest in our people, and we share with them what we achieve together.",
      items: [
        { title: "Training", text: "We give our people the time and the means to learn, so that they grow with the company." },
        { title: "Growth", text: "Every person has a path forward. When the company moves ahead, they move ahead with it." },
        { title: "Rewards", text: "Good work is seen and rewarded. Effort is never taken for granted." },
        { title: "Shared success", text: "What we achieve together, we share together. This is how a team becomes a family." },
      ],
      link: "Meet the team",
    },
    faq: {
      tag: "FAQ",
      title: "Questions from partners and investors",
      items: [
        {
          question: "What is Intlaka?",
          answer:
            "Intlaka is a group of companies between Morocco and Jordan, founded by Ahmad Al Husban. It works in technology, mobility, food and hospitality, and real estate. Each company runs independently, with one shared vision.",
        },
        {
          question: "Which companies are part of the group?",
          answer:
            "AMX Tech, for digital and financial solutions in Morocco. Intlaka Real Estate, for real estate development in Jordan. And JOE MOOD, for food and hospitality, home of the café DARB 23.",
        },
        {
          question: "Which apps is Intlaka building?",
          answer:
            "Rose, safe mobility for women, by women. Hera, a personal travel and leisure companion, which includes Hera City. And Mimi Pay, a financial app.",
        },
        {
          question: "When does Rose launch?",
          answer: "Rose launches on 28 December 2026. Hera, Hera City and Mimi Pay are coming soon.",
        },
        {
          question: "What does \"Build to Give. Give to Last.\" mean in practice?",
          answer:
            "It means people come before profit. A permanent 10% of Rose's profits goes to a women's empowerment initiative, Rose drivers follow a path to owning their car, and Intlaka shares with its team what they achieve together.",
        },
        {
          question: "Which projects are in research and development?",
          answer:
            "Battouta, a Moroccan robot that welcomes visitors at airports, stations and hotels. Fihri, Intlaka's own Moroccan AI model. Smart glasses for blind and visually impaired people. And autonomous driving, as a research project. No dates are announced for these projects.",
        },
        {
          question: "What is Hera Studio?",
          answer:
            "Hera Studio is a talent programme. It gathers young creators from all over Morocco, judged on talent rather than degrees, and gives them support and tools to turn their ideas into products they are proud of.",
        },
        {
          question: "Where is user data hosted?",
          answer: "User data is hosted in Morocco.",
        },
        {
          question: "How can we partner with Intlaka or invest?",
          answer: "Write to us at contact@intlaka.com, or use the contact form on this website. We answer every serious request.",
        },
      ],
    },
  },

  companiesPage: {
    meta: {
      title: "Companies",
      description:
        "The companies of the Intlaka group: AMX Tech (digital and financial solutions, Morocco), Intlaka Real Estate (real estate development, Jordan) and JOE MOOD (food and hospitality, home of the café DARB 23).",
    },
    hero: {
      tag: "The companies",
      title: "Independent companies, *one shared vision*",
      subtitle:
        "Intlaka is a group of companies between Morocco and Jordan. Each company runs independently in its own field, and all of them share the same vision.",
    },
    labels: { sector: "Sector", place: "Where", group: "Group", runs: "Management", groupValue: "Intlaka", runsValue: "Independent" },
    details: [
      {
        tag: "Technology",
        title: "AMX Tech builds digital and financial solutions",
        text: "AMX Tech is the technology company of the group. From Morocco, it builds digital and financial solutions, with the conviction that the country can build its own future and export it.",
        points: ["Digital solutions", "Financial solutions", "Based in Morocco"],
      },
      {
        tag: "Real estate",
        title: "Intlaka Real Estate develops real estate in Jordan",
        text: "Intlaka Real Estate carries the group's vision into real estate development in Jordan. It runs with its own team, and with the same belief: people before profit.",
        points: ["Real estate development", "Based in Jordan", "Run by its own team"],
      },
      {
        tag: "Food and hospitality",
        title: "JOE MOOD, home of the café DARB 23",
        text: "JOE MOOD is the food and hospitality company of the group. It is the home of the café DARB 23, a place made for people to meet and feel welcome.",
        points: ["Food and hospitality", "Home of the café DARB 23", "A place made for people"],
      },
    ],
    principles: {
      tag: "How the group works",
      title: "What holds the group together",
      items: [
        {
          title: "Each company runs independently",
          text: "Every company has its own team, its own field and its own decisions.",
        },
        {
          title: "One shared vision",
          text: "Every dream deserves a platform to take off. Each company is one of those platforms.",
        },
        {
          title: "People before profit",
          text: "We build to give, and we give to last. This belief is the same in every company.",
        },
      ],
    },
  },

  appsPage: {
    meta: {
      title: "Apps",
      description:
        "Intlaka's apps: Rose, safe mobility for women, by women (launch on 28 December 2026). Hera, a personal travel and leisure companion. Mimi Pay, a financial app. User data is hosted in Morocco.",
    },
    hero: {
      tag: "The apps",
      title: "Apps that solve *real problems*",
      subtitle:
        "Three apps, built by Intlaka. Rose launches on 28 December 2026. Hera and Mimi Pay are coming soon.",
    },
    rose: {
      tag: "Rose",
      title: "Safe mobility for women, by women",
      text: "Rose is driven by verified, trained and employed women drivers. Every trip can be shared live, and an emergency button is always within reach. Safety for the rider and the driver alike.",
      points: [
        "Verified, trained and employed women drivers",
        "Live trip sharing",
        "Emergency button",
        "A path to car ownership for drivers",
        "A permanent 10% of profits for women's empowerment",
      ],
    },
    hera: {
      tag: "Hera",
      title: "A travel companion that understands you",
      text: "Hera is not a booking app. It learns what you like, how you spend and how you travel, then walks with you from choosing a destination to coming home.",
      points: [
        "A simulator to live the trip day by day before paying",
        "A financial guardian that finds cheaper options with the same joy",
        "A \"verified\" label that says what we know and what we don't",
        "No random ads",
        "Hera City: shared electric cars unlocked by phone",
      ],
    },
    mimi: {
      tag: "Mimi Pay",
      title: "A financial app, coming soon",
      text: "Mimi Pay is a financial app from Intlaka. It is coming soon, and we will say more when it is ready to be shown.",
      fields: [
        { label: "App", value: "Mimi Pay" },
        { label: "Field", value: "Finance" },
        { label: "By", value: "Intlaka" },
      ],
      statusLabel: "Status",
    },
    principles: {
      tag: "Principles",
      title: "What every Intlaka app has in common",
      items: [
        {
          title: "User data hosted in Morocco",
          text: "The data of the people who use our apps is hosted in Morocco.",
        },
        {
          title: "Built for a real problem",
          text: "Each app starts from something people live with every day: safety, travel, money.",
        },
        {
          title: "Honest by design",
          text: "We say what we know and what we don't, and we do not announce what is not ready.",
        },
      ],
    },
  },

  rose: {
    meta: {
      title: "Rose, safe mobility for women, by women",
      description:
        "Rose is safe mobility for women, by women: verified, trained and employed women drivers, live trip sharing and an emergency button. Rose launches on 28 December 2026.",
    },
    hero: {
      tag: "Rose, by Intlaka",
      title: "Safe mobility for women, *by women*",
      subtitle:
        "Verified, trained and employed women drivers, live trip sharing and an emergency button. Safety for the rider and the driver alike.",
    },
    launch: {
      tag: "The launch",
      title: "Rose launches on 28 December 2026",
      text: "The countdown has started.",
    },
    features: {
      tag: "Safety",
      title: "Safety is the product",
      text: "Rose is designed around one question: does she feel safe, from the moment she orders to the moment she arrives?",
      items: [
        {
          title: "Verified women drivers",
          text: "Every driver is a woman whose identity has been verified before she takes a single trip.",
        },
        {
          title: "Trained and employed",
          text: "Drivers are trained, and they are employed. Driving for Rose is a real job.",
        },
        {
          title: "Live trip sharing",
          text: "A rider can share her trip live with the people she trusts, for the whole journey.",
        },
        {
          title: "Emergency button",
          text: "Help is one tap away, at any moment of the trip, for the rider and for the driver.",
        },
      ],
    },
    showcase: [
      {
        tag: "For the rider",
        title: "She knows who is driving, and the people she trusts know where she is",
        text: "Before the trip, the rider sees that her driver is verified. During the trip, she can share it live. If something feels wrong, the emergency button is there.",
      },
      {
        tag: "For the driver",
        title: "Safety for the driver too, and a path to owning her car",
        text: "Rose protects the women who drive as much as the women who ride. Drivers are trained and employed, and they follow a path to owning their car.",
      },
    ],
    independence: {
      tag: "Independence",
      title: "Rose is also about women's independence",
      text: "A safe ride changes an evening. A stable job and a car of her own change a life.",
      items: [
        {
          title: "A path to ownership",
          text: "Drivers follow a path to owning their car. The goal is independence, not dependence.",
        },
        {
          title: "A permanent 10%",
          text: "A permanent 10% of Rose's profits goes to a women's empowerment initiative.",
        },
        {
          title: "Women at the centre",
          text: "Rose is made for women, and it is women who make it work.",
        },
      ],
    },
    faq: {
      tag: "FAQ",
      title: "Questions about Rose",
      items: [
        {
          question: "What is Rose?",
          answer:
            "Rose is safe mobility for women, by women. Riders are driven by verified, trained and employed women drivers, with live trip sharing and an emergency button.",
        },
        {
          question: "When does Rose launch?",
          answer: "Rose launches on 28 December 2026.",
        },
        {
          question: "Who drives for Rose?",
          answer:
            "Women drivers who are verified, trained and employed by Rose. They follow a path to owning their car.",
        },
        {
          question: "What does Rose give back?",
          answer: "A permanent 10% of Rose's profits goes to a women's empowerment initiative.",
        },
        {
          question: "Where is my data hosted?",
          answer: "User data is hosted in Morocco.",
        },
      ],
    },
  },

  hera: {
    meta: {
      title: "Hera, your personal travel and leisure companion",
      description:
        "Hera is not a booking app. It is a personal travel and leisure companion that understands you and walks with you from choosing a destination to coming home. Coming soon.",
    },
    hero: {
      tag: "Hera, by Intlaka. Coming soon",
      title: "Not a booking app. A companion that *understands you*",
      subtitle:
        "Hera knows what you like, how you spend and how you travel. It walks with you from choosing a destination to coming home.",
    },
    protect: {
      tag: "What Hera protects you from",
      title: "Trips are rarely ruined by the destination",
      text: "They are ruined by what happens around it. Hera is built to keep those things away from you.",
      items: [
        { title: "Changing plans", text: "When something changes, Hera helps the rest of your trip adapt." },
        { title: "Missed times", text: "Flights, transfers and events stay in view, so a time does not slip past you." },
        { title: "Overspending", text: "A gentle alert tells you when a choice is taking you above your budget." },
        { title: "Scams", text: "Local guides and companies are vetted, and Hera says honestly what it knows about them." },
      ],
    },
    journey: {
      tag: "How Hera works",
      title: "From choosing a destination to coming home",
      text: "Hera stays with you at every step of the trip, not just at the moment you pay.",
      stepOf: "Step {current} of {total}",
      previous: "Previous step",
      next: "Next: {step}",
      restart: "Back to step 1",
      steps: [
        {
          label: "Choose",
          title: "Start from the way you like to travel",
          text: "Hera begins with you, not with a list of offers. It learns your trip style, and suggests destinations that fit it.",
          points: [
            { title: "Your trip style", text: "Calm or active, culture or nature, alone or with family." },
            { title: "Your way of spending", text: "Hera understands what you are comfortable paying for." },
            { title: "Suggestions that fit", text: "Destinations chosen for you, not for everyone." },
          ],
        },
        {
          label: "Prepare",
          title: "Know the rules before you go",
          text: "Visas and local rules are part of the trip. Hera puts them in front of you early, in plain words.",
          points: [
            { title: "Visas", text: "What you need for the destination you chose." },
            { title: "Local rules", text: "What to know and respect once you are there." },
            { title: "Nothing left to chance", text: "The practical side of the trip, prepared with you." },
          ],
        },
        {
          label: "Book",
          title: "Flights and hotels matched to your profile",
          text: "Hera matches flights and hotels to who you are, and tells you gently when a choice goes above your budget.",
          points: [
            { title: "Matched to you", text: "Options that fit your profile and your habits." },
            { title: "A gentle budget alert", text: "A quiet warning, never a lecture." },
            { title: "Cheaper, with the same joy", text: "The financial guardian looks for a better price for the same experience." },
          ],
        },
        {
          label: "Meet",
          title: "Local guides and companies, vetted",
          text: "The people you meet on a trip matter. Hera works with vetted local guides and companies, and labels what is verified.",
          points: [
            { title: "Vetted local guides", text: "People who know the place and have been checked." },
            { title: "Vetted local companies", text: "Services you can use with confidence." },
            { title: "An honest label", text: "\"Verified\" says what we know, and what we don't." },
          ],
        },
        {
          label: "Move",
          title: "Transport and events, in one place",
          text: "Getting around and finding what is happening should not take your evening. Hera keeps both at hand.",
          points: [
            { title: "Transport", text: "Ways to get around once you are there." },
            { title: "Events", text: "What is on while you are in town." },
            { title: "For long journeys", text: "A blog, radio and games to make the road shorter." },
          ],
        },
        {
          label: "Arrive",
          title: "An interactive map when you arrive",
          text: "On arrival, Hera opens an interactive map of your trip, so the city makes sense from the very start.",
          points: [
            { title: "Your trip on a map", text: "Where you stay, where you go, what is near you." },
            { title: "Your own city too", text: "Residents use Hera to discover the city they live in." },
            { title: "Until you are home", text: "Hera stays with you all the way back." },
          ],
        },
      ],
    },
    showcase: [
      {
        tag: "The simulator",
        title: "Live the trip day by day, before you pay",
        text: "Hera's simulator lets you walk through your trip one day at a time. You see how it feels before you spend anything.",
      },
      {
        tag: "The financial guardian",
        title: "A cheaper option, with the same joy",
        text: "Hera watches your budget with you. When it finds a way to pay less for the same experience, it tells you.",
      },
      {
        tag: "The \"verified\" label",
        title: "We say honestly what we know, and what we don't",
        text: "A label is worth something when it is honest. Hera shows what has been checked, and says clearly what has not.",
      },
    ],
    extras: {
      tag: "Also in Hera",
      title: "Made for the whole journey",
      items: [
        { title: "Blog, radio and games", text: "Company for long journeys, when the road is the longest part of the trip." },
        { title: "No random ads", text: "Hera shows you what fits you. It does not sell your attention." },
        { title: "For residents too", text: "People who live in a city use Hera to discover it again." },
      ],
    },
    difference: {
      tag: "Why Hera",
      title: "A companion, not a booking app",
      text: "A booking app helps you pay. Hera helps you travel.",
      typical: "A booking app",
      ours: "Hera",
      rows: [
        ["Starts with a list of offers", "Starts with you: what you like, how you spend, how you travel"],
        ["Ends when you have paid", "Walks with you from choosing a destination to coming home"],
        ["You pay, then you find out", "A simulator to live the trip day by day before paying"],
        ["Shows you more to spend on", "A financial guardian finds cheaper options with the same joy"],
        ["Everything looks recommended", "A \"verified\" label says what we know and what we don't"],
        ["Random ads", "No random ads"],
      ],
    },
    city: {
      tag: "Hera City. Coming soon",
      title: "Shared electric cars, unlocked by phone",
      text: "Hera City is part of Hera. It gives you shared electric cars that you unlock with your phone, for visitors and residents alike.",
      points: ["Shared electric cars", "Unlocked by phone", "Part of Hera"],
    },
    faq: {
      tag: "FAQ",
      title: "Questions about Hera",
      items: [
        {
          question: "Is Hera a booking app?",
          answer:
            "No. Hera is a personal travel and leisure companion. It understands what you like, how you spend and how you travel, and walks with you from choosing a destination to coming home.",
        },
        {
          question: "What does Hera cover?",
          answer:
            "Trip style, visas and local rules, vetted local guides and companies, flights and hotels matched to your profile with a gentle budget alert, transport, events, and an interactive map on arrival.",
        },
        {
          question: "What is Hera City?",
          answer: "Hera City is part of Hera: shared electric cars unlocked by phone. It is coming soon.",
        },
        {
          question: "Is Hera just for travellers?",
          answer: "No. Residents use it too, to discover their own city.",
        },
        {
          question: "When will Hera be ready?",
          answer: "Hera is coming soon. We will announce a date when it is ready.",
        },
      ],
    },
  },

  projectsPage: {
    meta: {
      title: "Projects in research and development",
      description:
        "Intlaka's research and development projects: Battouta, a Moroccan welcome robot. Fihri, a Moroccan AI model. Smart glasses for blind and visually impaired people. Autonomous driving as a research project.",
    },
    hero: {
      tag: "Research and development",
      title: "Building in Morocco what the world *will use tomorrow*",
      subtitle:
        "Four projects in research and development. We do not give dates for them. We prefer to show real work when it is ready.",
    },
    list: {
      tag: "The projects",
      title: "Four projects, one conviction",
      text: "Morocco does not import the future. It builds it and exports it.",
    },
    details: [
      {
        title: "Battouta, a robot that says welcome",
        text: "Battouta (بطوطة) is a Moroccan robot that welcomes visitors at airports, stations and hotels. It is in research and development.",
      },
      {
        title: "Fihri, a Moroccan AI model",
        text: "Fihri is Intlaka's own Moroccan AI model. It is in research and development.",
      },
      {
        title: "Smart glasses that help people see their way",
        text: "Smart glasses for blind and visually impaired people. Technology is at its best when it gives someone back a part of their independence.",
      },
      {
        title: "Autonomous driving, as research",
        text: "We explore autonomous driving as a research project. It is research, and we present it as such.",
      },
    ],
    principles: {
      tag: "How we talk about research",
      title: "Real work, not hype",
      items: [
        {
          title: "No dates before their time",
          text: "These projects have no announced dates. We will speak when there is something real to show.",
        },
        {
          title: "Built with Moroccan talent",
          text: "The talent is there. Our role is to open the door and give it the means to build.",
        },
        {
          title: "Useful before impressive",
          text: "A robot that welcomes, glasses that guide: research that starts from a person, not from a trend.",
        },
      ],
    },
  },

  studio: {
    meta: {
      title: "Hera Studio, a talent programme",
      description:
        "Hera Studio is Intlaka's talent programme. It gathers young creators from all over Morocco, judged on talent rather than degrees, and gives them support and tools to turn their ideas into products.",
    },
    hero: {
      tag: "Hera Studio",
      title: "Judged on talent, *not on degrees*",
      subtitle:
        "Hera Studio is a talent programme. It gathers young creators from all over Morocco and gives them support and tools to turn their ideas into products they are proud of.",
    },
    story: {
      tag: "Why Hera Studio",
      title: "The talent is there. It needs someone to open the door.",
      paragraphs: [
        "All over Morocco, young people have ideas and the ability to build them. What many of them lack is not talent. It is a place that takes them seriously, and the means to start.",
        "Hera Studio is that place. It gathers young creators from all over the country and judges them on what they can do, not on the diploma they hold.",
        "Then it gives them support and tools, so that an idea becomes a product. Not a school exercise: a real product they can be proud of.",
      ],
      quote: "Every dream deserves a platform to take off.",
    },
    process: {
      tag: "The path",
      title: "From an idea to a product",
      steps: [
        { title: "Gather", text: "Young creators come from all over Morocco." },
        { title: "Recognise", text: "They are judged on talent rather than degrees." },
        { title: "Support", text: "They receive support and tools to build." },
        { title: "Create", text: "Their ideas become products they are proud of." },
      ],
    },
    offer: {
      tag: "What the studio gives",
      title: "What a young creator finds here",
      items: [
        { title: "Support", text: "People who believe in the idea and help it move forward." },
        { title: "Tools", text: "The means to build, so that talent is not held back by what it lacks." },
        { title: "A real product", text: "The goal is something finished, that its creator is proud to show." },
      ],
    },
  },

  about: {
    meta: {
      title: "About",
      description:
        "Intlaka is a group of companies between Morocco and Jordan, founded by Ahmad Al Husban. Our vision: every dream deserves a platform to take off. Our belief: Build to Give. Give to Last.",
    },
    hero: {
      tag: "About Intlaka",
      title: "Every dream deserves a platform *to take off*",
      subtitle:
        "Intlaka is a group of companies between Morocco and Jordan, founded by Ahmad Al Husban. It works in technology, mobility, food and hospitality, and real estate.",
    },
    story: {
      tag: "Our vision",
      title: "Why Intlaka exists",
      paragraphs: [
        "Intlaka means a start, a take-off. The name says what we are here to do: give ideas, companies and people the platform they need to rise.",
        "We build companies that solve real problems, and we open the way for young people to turn their ideas into products. Each company in the group runs independently, and all of them share one vision.",
        "We hold one conviction about where we work. Morocco does not import the future. It builds it and exports it. The talent is there. It needs someone to open the door.",
        "And we hold one belief about how to work: Build to Give. Give to Last. People before profit.",
      ],
      quote: "كل حلم يستحق منصة ليحلّق",
      quoteNote: "Every dream deserves a platform to take off.",
    },
    founder: {
      tag: "The founder",
      title: "Founded by Ahmad Al Husban",
      name: "Ahmad Al Husban",
      role: "Founder and owner of Intlaka",
      bio: "Ahmad Al Husban is also a co-founder of Husban Real Estate (شركة حسبان للعقار).",
    },
    team: {
      tag: "The team",
      title: "The people who build Intlaka",
      text: "We are a family before we are a company.",
      people: [
        { id: "ayoub" as const, name: "Ayoub Hayda", role: "Software engineer, Head of Engineering" },
        { id: "sarah" as const, name: "Sarah Fallahi", role: "Software engineer, Rose app" },
        { id: "khouloud" as const, name: "Khouloud serhani", role: "Software engineer, Rose app" },
        { id: "amine" as const, name: "Amine Niouer", role: "Digital marketer, marketing department" },
        { id: "khaoula" as const, name: "KHAOULA LAIQ", role: "Marketing, in charge of B2B" },
      ],
    },
    family: {
      tag: "How we treat our people",
      title: "The team is a family",
      items: [
        { title: "Training", text: "We invest in our people's skills, so that they keep learning." },
        { title: "Growth", text: "We make room for every person to move forward." },
        { title: "Rewards", text: "We recognise good work and reward it." },
        { title: "Shared success", text: "We share with our people what we achieve together." },
      ],
    },
  },

  contact: {
    meta: {
      title: "Contact",
      description: "Write to Intlaka about a partnership, an investment or one of our projects: contact@intlaka.com.",
    },
    hero: {
      tag: "Contact",
      title: "Let's talk about *what we can build*",
      subtitle: "Partner, investor, journalist or young creator: tell us who you are and what you have in mind.",
    },
    form: {
      title: "Send us a message",
      name: "Full name",
      company: "Organisation",
      role: "Your role",
      rolePlaceholder: "Founder, investor, journalist, creator...",
      email: "Email",
      phone: "Phone",
      phoneHint: "Optional. Include the country code.",
      profile: "You are",
      profiles: {
        partner: "A partner",
        investor: "An investor",
        media: "Media",
        talent: "A young creator",
        other: "Other",
      },
      select: "Select",
      interests: "What would you like to talk about?",
      interestOptions: {
        partnership: "A partnership",
        investment: "An investment",
        apps: "Rose, Hera or Mimi Pay",
        studio: "Hera Studio",
      },
      message: "Your message",
      messagePlaceholder: "Tell us about you, your organisation and what you would like to build with Intlaka.",
      consentBefore: "I agree that Intlaka may use this information to reply to my request, as described in the",
      consentLink: "privacy policy",
      consentAfter: ".",
      submit: "Send message",
      sending: "Sending...",
      required: "Required",
      successTitle: "Thank you. Your message has been sent.",
      successText: "We read every message and will get back to you soon.",
      sendAnother: "Send another message",
      errors: {
        required: "This field is required.",
        email: "Please enter a valid email address.",
        consent: "Please accept so we can reply to you.",
        generic: "Your message could not be sent. Please try again, or write to us by email.",
        fixFields: "Please check the highlighted fields.",
      },
      sendByEmail: "Send it by email instead",
    },
    email: {
      subject: "New message from {name} · {company}",
      eyebrow: "New message",
      source: "Website contact form",
      noMessage: "No message was added.",
      messageTitle: "Message",
      detailsTitle: "Details",
      labels: {
        name: "Name",
        company: "Organisation",
        role: "Role",
        profile: "Profile",
        email: "Email",
        phone: "Phone",
        interests: "Interested in",
        language: "Language",
      },
      reply: "Reply to {name}",
      footer: "Sent from the contact form on {site}. Replying to this email goes directly to {name}.",
    },
    side: {
      emailTitle: "Email",
      emailText: "Prefer email? Write to us directly.",
      socialTitle: "Follow us",
      nextTitle: "What happens next",
      next: [
        "We read your message carefully.",
        "The right person at Intlaka gets back to you.",
        "We find a time to talk about what we can build together.",
      ],
    },
  },

  privacy: {
    meta: {
      title: "Privacy policy",
      description: "How Intlaka collects, uses and protects personal information on this website.",
    },
    title: "Privacy policy",
    updated: "Last updated",
    sections: [
      {
        title: "Who we are",
        paragraphs: [
          "This website is operated by Intlaka, a group of companies between Morocco and Jordan. This policy explains what personal information we collect through this website, why we collect it and how you can control it.",
        ],
      },
      {
        title: "What we collect",
        paragraphs: [
          "When you fill in our contact form, we collect the information you provide: your name, organisation, role, email address, phone number if you share it, your profile, your interests and your message.",
          "When you write to us by email, we receive the information included in your message and your contact details.",
          "Like most websites, our hosting provider may record technical data such as your IP address, browser type and the pages requested, in order to operate and secure the website.",
        ],
      },
      {
        title: "How we use it",
        paragraphs: [
          "We use your information to reply to your request and to keep a record of our exchanges. We do not sell your personal information, and we do not use it for advertising profiles.",
        ],
      },
      {
        title: "Sharing",
        paragraphs: [
          "We share your information with the service providers we need to run this website and to deliver your message to us, such as our hosting and email providers. They may process it on our behalf and for no other purpose.",
        ],
      },
      {
        title: "Our apps",
        paragraphs: [
          "This policy covers this website. The user data of Intlaka's apps is hosted in Morocco.",
        ],
      },
      {
        title: "Cookies",
        paragraphs: [
          "This website does not use advertising or tracking cookies. Your language choice is reflected in the address of the page, not stored in a cookie.",
        ],
      },
      {
        title: "Retention",
        paragraphs: [
          "We keep your information for as long as needed to answer your request and to follow up on our discussions, and then we delete it, unless the law requires us to keep it longer.",
        ],
      },
      {
        title: "Your rights",
        paragraphs: [
          "You can ask us at any time to access, correct or delete your personal information, or object to its use. To do so, write to contact@intlaka.com. We will reply to your request without undue delay.",
        ],
      },
      {
        title: "Changes",
        paragraphs: ["We may update this policy. The date at the top of this page shows when it was last changed."],
      },
    ],
  },

  notFound: {
    meta: { title: "Page not found" },
    tag: "404",
    title: "This page *does not exist*",
    text: "The page you are looking for may have moved or never existed.",
  },

  /** Text of the illustrative interface cards. They show an idea, not a real screen or real data. */
  mockups: {
    group: {
      title: "Intlaka group",
      note: "Each company runs independently, with one shared vision.",
    },
    apps: {
      title: "Intlaka apps",
      note: "User data is hosted in Morocco.",
    },
    projects: {
      title: "Research and development",
      note: "No dates announced.",
    },
    studio: {
      title: "Hera Studio",
      rows: [
        { name: "Young creators", detail: "From all over Morocco" },
        { name: "Talent", detail: "Judged on talent, not on degrees" },
        { name: "Support and tools", detail: "To turn ideas into products" },
      ],
      note: "Products they are proud of.",
    },
    trip: {
      driver: "Your driver is verified",
      sharingTitle: "Live trip sharing",
      sharing: "Your trip is shared live with the people you chose.",
      status: "Sharing is on",
      emergency: "Emergency",
      share: "Share",
    },
    driver: {
      title: "Driver profile",
      fields: [
        { label: "Identity", value: "Verified" },
        { label: "Training", value: "Completed" },
        { label: "Status", value: "Employed by Rose" },
        { label: "Path", value: "Toward owning her car" },
      ],
      footerLabel: "Ready to drive",
      footerValue: "Verified",
    },
    profile: {
      title: "Your travel profile",
      fields: [
        { label: "Style", value: "Calm, cultural" },
        { label: "Travelling", value: "With family" },
        { label: "Spending", value: "Careful" },
        { label: "Pace", value: "Unhurried" },
      ],
      footerLabel: "Hera understands you",
      footerValue: "Ready",
    },
    prepare: {
      title: "Before you go",
      rows: [
        { name: "Visa", detail: "What you need for this destination" },
        { name: "Local rules", detail: "What to know and respect" },
        { name: "Your trip style", detail: "Calm, cultural, with family" },
      ],
      note: "Prepared with you, in plain words.",
    },
    match: {
      title: "Matched to your profile",
      fields: [
        { label: "Flight", value: "Direct, in the morning" },
        { label: "Hotel", value: "Quiet, central" },
        { label: "Fits your habits", value: "Yes" },
        { label: "Budget", value: "Within your budget" },
      ],
      footerLabel: "Budget alert",
      footerValue: "Gentle",
    },
    vetted: {
      title: "Vetted for you",
      rows: [
        { name: "Local guide", detail: "Knows the old town" },
        { name: "Local company", detail: "Day trips and transfers" },
        { name: "The label", detail: "What we know, and what we don't" },
      ],
      status: "Verified",
      note: "Checked before they are suggested.",
    },
    today: {
      title: "Today",
      rows: [
        { name: "Transport", detail: "How to get to the old town" },
        { name: "Event", detail: "A concert this evening" },
        { name: "For the road", detail: "Blog, radio and games" },
      ],
      note: "Everything for the day, in one place.",
    },
    map: {
      title: "Interactive map",
      subtitle: "On arrival",
      pins: ["Your hotel", "Your guide", "This evening"],
      note: "Your trip, on one map.",
    },
    simulator: {
      title: "Trip simulator",
      subtitle: "Before you pay",
      items: [
        { day: "Day 1", text: "Arrival, transfer and check-in" },
        { day: "Day 2", text: "The old town with a vetted local guide" },
        { day: "Day 3", text: "A free morning, an event in the evening" },
        { day: "Day 4", text: "Flight home, within your budget" },
      ],
      status: "Happy with the trip? Then you pay.",
    },
    guardian: {
      user: "You",
      channel: "Financial guardian",
      app: "Hera",
      userMessage: "I love this hotel, but it is above my budget.",
      appMessage:
        "I found a similar one in the same neighbourhood, with the same comfort, for less. Would you like to compare them?",
      userReply: "Yes, show me.",
      status: "Same joy, lower cost",
    },
    verified: {
      title: "\"Verified\" label",
      subject: "Local guide",
      steps: ["Identity", "Licence", "Knowledge of the place", "Prices for this season"],
      known: "Verified",
      unknown: "Not confirmed yet",
      alert: "We say what we know, and what we don't.",
    },
    city: {
      title: "Hera City",
      rows: [
        { name: "Find a car", detail: "A shared electric car near you" },
        { name: "Unlock", detail: "With your phone" },
        { name: "Drive", detail: "And leave it for the next person" },
      ],
      note: "Part of Hera.",
    },
  },
};

export default en;
export type Dictionary = typeof en;
