import type { Dictionary } from "./en";

// Règle de contenu : ne jamais utiliser le tiret cadratin. Aucun chiffre autre que les 10 % de Rose.

const fr: Dictionary = {
  meta: {
    siteName: "Intlaka",
    defaultTitle: "Intlaka | Chaque rêve mérite une plateforme pour s'envoler",
    description:
      "Intlaka est un groupe d'entreprises entre le Maroc et la Jordanie, actif dans la technologie, la mobilité, la restauration et l'hospitalité, et l'immobilier. Nous bâtissons des entreprises qui résolvent de vrais problèmes et ouvrons la voie aux jeunes pour transformer leurs idées en produits.",
    keywords: [
      "Intlaka",
      "groupe d'entreprises Maroc Jordanie",
      "Ahmad Al Husban",
      "AMX Tech",
      "Intlaka Real Estate",
      "JOE MOOD",
      "Rose mobilité sûre pour les femmes",
      "Hera compagnon de voyage",
      "Mimi Pay",
      "Hera Studio",
      "technologie marocaine",
    ],
  },

  common: {
    skipToContent: "Aller au contenu",
    contactUs: "Nous contacter",
    emailUs: "Nous écrire",
    learnMore: "En savoir plus",
    illustration: "Illustration",
    language: "Langue",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    backHome: "Retour à l'accueil",
    comingSoon: "Bientôt",
    inResearch: "En recherche",
  },

  nav: {
    mainLabel: "Principal",
    companies: "Entreprises",
    apps: "Applications",
    allApps: "Toutes les applications",
    rose: "Rose",
    roseDesc: "La mobilité sûre pour les femmes, par des femmes.",
    hera: "Hera",
    heraDesc: "Un compagnon personnel de voyage et de loisirs.",
    mimi: "Mimi Pay",
    mimiDesc: "Une application financière. Bientôt.",
    projects: "Projets",
    studio: "Hera Studio",
    about: "À propos",
    contact: "Contact",
    cta: "Nous contacter",
  },

  footer: {
    tagline: "Un groupe d'entreprises entre le Maroc et la Jordanie. Chaque rêve mérite une plateforme pour s'envoler.",
    group: "Le groupe",
    apps: "Applications",
    company: "Intlaka",
    contact: "Contact",
    followUs: "Nous suivre",
    privacy: "Politique de confidentialité",
    rights: "Tous droits réservés.",
  },

  cta: {
    tag: "Partenaires et investisseurs",
    title: "Construisons la suite, *ensemble*",
    text: "Si vous croyez en ce que nous bâtissons, écrivez-nous. Nous lisons chaque message et y répondons avec soin.",
  },

  countdown: {
    label: "Rose se lance dans",
    date: "28 décembre 2026",
    dateShort: "28 déc. 2026",
    days: "Jours",
    hours: "Heures",
    minutes: "Minutes",
    seconds: "Secondes",
    launched: "Le jour du lancement est arrivé.",
  },

  group: {
    companies: [
      {
        id: "amx-tech",
        name: "AMX Tech",
        sector: "Solutions numériques et financières",
        place: "Maroc",
        text: "AMX Tech conçoit des solutions numériques et financières depuis le Maroc. C'est l'entreprise technologique du groupe.",
      },
      {
        id: "real-estate",
        name: "Intlaka Real Estate",
        sector: "Promotion immobilière",
        place: "Jordanie",
        text: "Intlaka Real Estate développe des projets immobiliers en Jordanie, avec la même attention aux personnes qui guide tout le groupe.",
      },
      {
        id: "joe-mood",
        name: "JOE MOOD",
        sector: "Restauration et hospitalité",
        place: "Maison du café DARB 23",
        text: "JOE MOOD est l'entreprise de restauration et d'hospitalité du groupe, et la maison du café DARB 23.",
      },
    ],
    apps: {
      rose: {
        name: "Rose",
        kind: "La mobilité sûre pour les femmes, par des femmes",
        text: "Des conductrices vérifiées, formées et salariées, le partage du trajet en direct et un bouton d'urgence. La sécurité pour la passagère comme pour la conductrice.",
        status: "Lancement : 28 décembre 2026",
        link: "Découvrir Rose",
      },
      hera: {
        name: "Hera",
        kind: "Compagnon personnel de voyage et de loisirs",
        text: "Hera comprend ce que vous aimez, comment vous dépensez et comment vous voyagez, et vous accompagne du choix de la destination jusqu'au retour.",
        status: "Bientôt",
        link: "Découvrir Hera",
      },
      mimi: {
        name: "Mimi Pay",
        kind: "Application financière",
        text: "Mimi Pay est une application financière d'Intlaka. Elle arrive bientôt.",
        status: "Bientôt",
      },
    },
    projects: [
      {
        id: "battouta",
        name: "Battouta",
        kind: "Robot d'accueil",
        text: "Un robot marocain qui accueille les visiteurs dans les aéroports, les gares et les hôtels.",
      },
      {
        id: "fihri",
        name: "Fihri",
        kind: "Modèle d'IA",
        text: "Le modèle d'IA marocain d'Intlaka.",
      },
      {
        id: "glasses",
        name: "Lunettes intelligentes",
        kind: "Technologie d'assistance",
        text: "Des lunettes intelligentes pour les personnes aveugles et malvoyantes.",
      },
      {
        id: "autonomous",
        name: "Conduite autonome",
        kind: "Projet de recherche",
        text: "La conduite autonome, explorée comme projet de recherche.",
      },
    ],
  },

  home: {
    meta: {
      title: "Intlaka | Chaque rêve mérite une plateforme pour s'envoler",
      description:
        "Intlaka est un groupe d'entreprises entre le Maroc et la Jordanie. Nous bâtissons des entreprises qui résolvent de vrais problèmes, et ouvrons la voie aux jeunes pour transformer leurs idées en produits.",
    },
    hero: {
      tag: "Un groupe d'entreprises entre le Maroc et la Jordanie",
      titleLead: "Chaque rêve mérite",
      titleLink: "une plateforme",
      titleAccent: "pour s'envoler",
      subtitle:
        "Intlaka bâtit des entreprises qui résolvent de vrais problèmes, et ouvre la voie aux jeunes pour transformer leurs idées en produits.",
      secondary: "Découvrir le groupe",
      stage: {
        beliefLabel: "Notre conviction",
        belief: "Bâtir pour donner. Donner pour durer.",
        beliefNote: "L'humain avant le profit.",
        roseLabel: "Rose",
        roseText: "La mobilité sûre pour les femmes, par des femmes",
        launchLabel: "Lancement",
      },
    },
    sectors: {
      label: "Ce que bâtit Intlaka",
      items: [
        "Technologie",
        "Mobilité",
        "Restauration et hospitalité",
        "Immobilier",
        "Voyage et loisirs",
        "Applications financières",
        "Intelligence artificielle",
        "Robotique",
        "Jeunes talents",
      ],
    },
    bento: {
      companies: {
        title: "Des entreprises qui tiennent debout seules",
        text: "Chaque entreprise fonctionne de façon indépendante, avec son équipe et son métier, sous une même vision.",
      },
      apps: {
        title: "Des applications pour les vrais problèmes du quotidien",
        text: "Mobilité sûre, voyage et argent. Les applications d'Intlaka, avec des données utilisateurs hébergées au Maroc.",
      },
      projects: {
        title: "La recherche pour ce qui vient",
        text: "Robotique, intelligence artificielle et technologies d'assistance, en recherche et développement.",
      },
      studio: {
        title: "Une porte ouverte aux jeunes talents",
        text: "Hera Studio réunit de jeunes créateurs de tout le Maroc et les aide à transformer leurs idées en produits.",
      },
    },
    convictions: {
      tag: "Ce que nous croyons",
      title: "Le Maroc n'importe pas l'avenir. Il le construit et l'exporte.",
      text: "Le talent est là. Il lui faut quelqu'un pour ouvrir la porte. C'est ce qui guide chaque décision chez Intlaka.",
      items: [
        {
          title: "Les vrais problèmes avant les idées",
          text: "Nous bâtissons des entreprises qui résolvent ce que les gens vivent vraiment : rentrer en sécurité, voyager sans crainte, gérer son argent.",
        },
        {
          title: "L'humain avant le profit",
          text: "Le profit compte parce qu'il nous permet de continuer. Les personnes comptent parce qu'elles sont la raison pour laquelle nous avons commencé.",
        },
        {
          title: "Le talent plutôt que les diplômes",
          text: "Un jeune qui a une idée et la volonté de construire mérite sa chance, quel que soit son diplôme.",
        },
        {
          title: "Des entreprises indépendantes, une vision",
          text: "Chaque entreprise du groupe est dirigée par sa propre équipe. Ce qu'elles partagent, c'est une direction, pas une hiérarchie.",
        },
        {
          title: "Construit ici, pour le monde",
          text: "Nous croyons que des produits imaginés et construits au Maroc peuvent servir bien au-delà de ses frontières.",
        },
      ],
    },
    belief: {
      tag: "Notre conviction",
      title: "Bâtir pour donner. Donner pour durer.",
      items: [
        {
          value: "Bâtir",
          text: "Nous bâtissons des entreprises et des produits qui résolvent de vrais problèmes, dans la technologie, la mobilité, la restauration et l'hospitalité, et l'immobilier.",
          note: "Entreprises, applications et recherche",
        },
        {
          value: "Donner",
          text: "10 % des bénéfices de Rose vont, de façon permanente, à une initiative d'autonomisation des femmes. Et nous partageons avec notre équipe ce que nous réalisons ensemble.",
          note: "L'humain avant le profit",
        },
        {
          value: "Durer",
          text: "Ce qui est bâti sur le don gagne la confiance, et c'est la confiance qui fait durer une entreprise. Nous sommes là pour le long chemin.",
          note: "Une vision de long terme",
        },
      ],
      closing: "Nous bâtissons pour donner, et nous donnons pour durer.",
      original: "نبني لنعطي، ونعطي لنبقى",
    },
    companies: {
      tag: "Les entreprises",
      title: "Trois entreprises, chacune dans son métier",
      text: "La technologie au Maroc, l'immobilier en Jordanie, la restauration et l'hospitalité. Chacune fonctionne de façon indépendante.",
      link: "Voir l'entreprise",
      all: "Voir toutes les entreprises",
    },
    apps: {
      tag: "Les applications",
      title: "Des applications pour protéger, guider et simplifier",
      text: "Rose se lance le 28 décembre 2026. Hera et Mimi Pay arrivent bientôt.",
      all: "Voir toutes les applications",
    },
    projects: {
      tag: "Recherche et développement",
      title: "Ce que nous préparons pour demain",
      text: "Ces projets sont en recherche et développement. Nous donnerons des dates quand il y aura du concret à montrer.",
      link: "Voir les projets",
    },
    people: {
      tag: "L'équipe",
      title: "Chez Intlaka, l'équipe est une famille",
      text: "Nous investissons dans nos équipes, et nous partageons avec elles ce que nous réalisons ensemble.",
      items: [
        { title: "Formation", text: "Nous donnons à chacun le temps et les moyens d'apprendre, pour grandir avec l'entreprise." },
        { title: "Évolution", text: "Chaque personne a un chemin devant elle. Quand l'entreprise avance, elle avance avec elle." },
        { title: "Récompenses", text: "Le bon travail est vu et récompensé. L'effort n'est jamais tenu pour acquis." },
        { title: "Réussite partagée", text: "Ce que nous réalisons ensemble, nous le partageons ensemble. C'est ainsi qu'une équipe devient une famille." },
      ],
      link: "Rencontrer l'équipe",
    },
    faq: {
      tag: "FAQ",
      title: "Les questions des partenaires et des investisseurs",
      items: [
        {
          question: "Qu'est-ce qu'Intlaka ?",
          answer:
            "Intlaka est un groupe d'entreprises entre le Maroc et la Jordanie, fondé par Ahmad Al Husban. Il est actif dans la technologie, la mobilité, la restauration et l'hospitalité, et l'immobilier. Chaque entreprise fonctionne de façon indépendante, avec une vision commune.",
        },
        {
          question: "Quelles entreprises font partie du groupe ?",
          answer:
            "AMX Tech, pour les solutions numériques et financières au Maroc. Intlaka Real Estate, pour la promotion immobilière en Jordanie. Et JOE MOOD, pour la restauration et l'hospitalité, maison du café DARB 23.",
        },
        {
          question: "Quelles applications Intlaka développe-t-il ?",
          answer:
            "Rose, la mobilité sûre pour les femmes, par des femmes. Hera, un compagnon personnel de voyage et de loisirs, qui inclut Hera City. Et Mimi Pay, une application financière.",
        },
        {
          question: "Quand Rose se lance-t-elle ?",
          answer: "Rose se lance le 28 décembre 2026. Hera, Hera City et Mimi Pay arrivent bientôt.",
        },
        {
          question: "Que signifie concrètement « Bâtir pour donner. Donner pour durer. » ?",
          answer:
            "Cela signifie que l'humain passe avant le profit. 10 % des bénéfices de Rose vont, de façon permanente, à une initiative d'autonomisation des femmes, les conductrices de Rose suivent un parcours vers la propriété de leur voiture, et Intlaka partage avec son équipe ce qu'ils réalisent ensemble.",
        },
        {
          question: "Quels projets sont en recherche et développement ?",
          answer:
            "Battouta, un robot marocain qui accueille les visiteurs dans les aéroports, les gares et les hôtels. Fihri, le modèle d'IA marocain d'Intlaka. Des lunettes intelligentes pour les personnes aveugles et malvoyantes. Et la conduite autonome, comme projet de recherche. Aucune date n'est annoncée pour ces projets.",
        },
        {
          question: "Qu'est-ce que Hera Studio ?",
          answer:
            "Hera Studio est un programme de talents. Il réunit de jeunes créateurs de tout le Maroc, jugés sur leur talent plutôt que sur leurs diplômes, et leur donne un accompagnement et des outils pour transformer leurs idées en produits dont ils sont fiers.",
        },
        {
          question: "Où sont hébergées les données des utilisateurs ?",
          answer: "Les données des utilisateurs sont hébergées au Maroc.",
        },
        {
          question: "Comment devenir partenaire d'Intlaka ou investir ?",
          answer:
            "Écrivez-nous à contact@intlaka.com, ou utilisez le formulaire de contact de ce site. Nous répondons à chaque demande sérieuse.",
        },
      ],
    },
  },

  companiesPage: {
    meta: {
      title: "Entreprises",
      description:
        "Les entreprises du groupe Intlaka : AMX Tech (solutions numériques et financières, Maroc), Intlaka Real Estate (promotion immobilière, Jordanie) et JOE MOOD (restauration et hospitalité, maison du café DARB 23).",
    },
    hero: {
      tag: "Les entreprises",
      title: "Des entreprises indépendantes, *une vision commune*",
      subtitle:
        "Intlaka est un groupe d'entreprises entre le Maroc et la Jordanie. Chaque entreprise fonctionne de façon indépendante dans son métier, et toutes partagent la même vision.",
    },
    labels: { sector: "Secteur", place: "Où", group: "Groupe", runs: "Gestion", groupValue: "Intlaka", runsValue: "Indépendante" },
    details: [
      {
        tag: "Technologie",
        title: "AMX Tech conçoit des solutions numériques et financières",
        text: "AMX Tech est l'entreprise technologique du groupe. Depuis le Maroc, elle conçoit des solutions numériques et financières, avec la conviction que le pays peut construire son propre avenir et l'exporter.",
        points: ["Solutions numériques", "Solutions financières", "Basée au Maroc"],
      },
      {
        tag: "Immobilier",
        title: "Intlaka Real Estate développe l'immobilier en Jordanie",
        text: "Intlaka Real Estate porte la vision du groupe dans la promotion immobilière en Jordanie. Elle fonctionne avec sa propre équipe, et avec la même conviction : l'humain avant le profit.",
        points: ["Promotion immobilière", "Basée en Jordanie", "Dirigée par sa propre équipe"],
      },
      {
        tag: "Restauration et hospitalité",
        title: "JOE MOOD, maison du café DARB 23",
        text: "JOE MOOD est l'entreprise de restauration et d'hospitalité du groupe. C'est la maison du café DARB 23, un lieu fait pour se retrouver et se sentir bien accueilli.",
        points: ["Restauration et hospitalité", "Maison du café DARB 23", "Un lieu pensé pour les gens"],
      },
    ],
    principles: {
      tag: "Comment fonctionne le groupe",
      title: "Ce qui tient le groupe ensemble",
      items: [
        {
          title: "Chaque entreprise est indépendante",
          text: "Chaque entreprise a sa propre équipe, son propre métier et ses propres décisions.",
        },
        {
          title: "Une vision commune",
          text: "Chaque rêve mérite une plateforme pour s'envoler. Chaque entreprise est l'une de ces plateformes.",
        },
        {
          title: "L'humain avant le profit",
          text: "Nous bâtissons pour donner, et nous donnons pour durer. Cette conviction est la même dans chaque entreprise.",
        },
      ],
    },
  },

  appsPage: {
    meta: {
      title: "Applications",
      description:
        "Les applications d'Intlaka : Rose, la mobilité sûre pour les femmes, par des femmes (lancement le 28 décembre 2026). Hera, un compagnon personnel de voyage et de loisirs. Mimi Pay, une application financière. Les données des utilisateurs sont hébergées au Maroc.",
    },
    hero: {
      tag: "Les applications",
      title: "Des applications qui résolvent de *vrais problèmes*",
      subtitle: "Trois applications, conçues par Intlaka. Rose se lance le 28 décembre 2026. Hera et Mimi Pay arrivent bientôt.",
    },
    rose: {
      tag: "Rose",
      title: "La mobilité sûre pour les femmes, par des femmes",
      text: "Rose est conduite par des femmes vérifiées, formées et salariées. Chaque trajet peut être partagé en direct, et un bouton d'urgence reste toujours à portée de main. La sécurité pour la passagère comme pour la conductrice.",
      points: [
        "Des conductrices vérifiées, formées et salariées",
        "Partage du trajet en direct",
        "Bouton d'urgence",
        "Un parcours vers la propriété de la voiture pour les conductrices",
        "10 % des bénéfices, de façon permanente, pour l'autonomisation des femmes",
      ],
    },
    hera: {
      tag: "Hera",
      title: "Un compagnon de voyage qui vous comprend",
      text: "Hera n'est pas une application de réservation. Elle apprend ce que vous aimez, comment vous dépensez et comment vous voyagez, puis vous accompagne du choix de la destination jusqu'au retour.",
      points: [
        "Un simulateur pour vivre le voyage jour par jour avant de payer",
        "Un gardien financier qui trouve moins cher avec le même plaisir",
        "Un label « vérifié » qui dit ce que nous savons et ce que nous ne savons pas",
        "Aucune publicité aléatoire",
        "Hera City : des voitures électriques partagées, déverrouillées par téléphone",
      ],
    },
    mimi: {
      tag: "Mimi Pay",
      title: "Une application financière, bientôt",
      text: "Mimi Pay est une application financière d'Intlaka. Elle arrive bientôt, et nous en dirons plus quand elle sera prête à être montrée.",
      fields: [
        { label: "Application", value: "Mimi Pay" },
        { label: "Domaine", value: "Finance" },
        { label: "Par", value: "Intlaka" },
      ],
      statusLabel: "Statut",
    },
    principles: {
      tag: "Principes",
      title: "Ce que partagent toutes les applications d'Intlaka",
      items: [
        {
          title: "Des données hébergées au Maroc",
          text: "Les données des personnes qui utilisent nos applications sont hébergées au Maroc.",
        },
        {
          title: "Conçues pour un vrai problème",
          text: "Chaque application part de ce que les gens vivent chaque jour : la sécurité, le voyage, l'argent.",
        },
        {
          title: "Honnêtes par conception",
          text: "Nous disons ce que nous savons et ce que nous ne savons pas, et nous n'annonçons pas ce qui n'est pas prêt.",
        },
      ],
    },
  },

  rose: {
    meta: {
      title: "Rose, la mobilité sûre pour les femmes, par des femmes",
      description:
        "Rose, c'est la mobilité sûre pour les femmes, par des femmes : des conductrices vérifiées, formées et salariées, le partage du trajet en direct et un bouton d'urgence. Lancement le 28 décembre 2026.",
    },
    hero: {
      tag: "Rose, par Intlaka",
      title: "La mobilité sûre pour les femmes, *par des femmes*",
      subtitle:
        "Des conductrices vérifiées, formées et salariées, le partage du trajet en direct et un bouton d'urgence. La sécurité pour la passagère comme pour la conductrice.",
    },
    launch: {
      tag: "Le lancement",
      title: "Rose se lance le 28 décembre 2026",
      text: "Le compte à rebours a commencé.",
    },
    features: {
      tag: "Sécurité",
      title: "La sécurité, c'est le produit",
      text: "Rose est conçue autour d'une question : se sent-elle en sécurité, du moment où elle commande au moment où elle arrive ?",
      items: [
        {
          title: "Des conductrices vérifiées",
          text: "Chaque conductrice est une femme dont l'identité a été vérifiée avant le moindre trajet.",
        },
        {
          title: "Formées et salariées",
          text: "Les conductrices sont formées, et elles sont salariées. Conduire pour Rose est un vrai emploi.",
        },
        {
          title: "Partage du trajet en direct",
          text: "Une passagère peut partager son trajet en direct avec ses proches, pendant tout le parcours.",
        },
        {
          title: "Bouton d'urgence",
          text: "L'aide est à un geste, à tout moment du trajet, pour la passagère comme pour la conductrice.",
        },
      ],
    },
    showcase: [
      {
        tag: "Pour la passagère",
        title: "Elle sait qui conduit, et ses proches savent où elle est",
        text: "Avant le trajet, la passagère voit que sa conductrice est vérifiée. Pendant le trajet, elle peut le partager en direct. Si quelque chose ne va pas, le bouton d'urgence est là.",
      },
      {
        tag: "Pour la conductrice",
        title: "La sécurité pour la conductrice aussi, et un parcours vers sa propre voiture",
        text: "Rose protège les femmes qui conduisent autant que celles qui sont conduites. Les conductrices sont formées et salariées, et suivent un parcours vers la propriété de leur voiture.",
      },
    ],
    independence: {
      tag: "Indépendance",
      title: "Rose, c'est aussi l'indépendance des femmes",
      text: "Un trajet sûr change une soirée. Un emploi stable et une voiture à soi changent une vie.",
      items: [
        {
          title: "Un parcours vers la propriété",
          text: "Les conductrices suivent un parcours vers la propriété de leur voiture. Le but est l'indépendance, pas la dépendance.",
        },
        {
          title: "10 %, de façon permanente",
          text: "10 % des bénéfices de Rose vont, de façon permanente, à une initiative d'autonomisation des femmes.",
        },
        {
          title: "Les femmes au centre",
          text: "Rose est faite pour les femmes, et ce sont des femmes qui la font vivre.",
        },
      ],
    },
    faq: {
      tag: "FAQ",
      title: "Questions sur Rose",
      items: [
        {
          question: "Qu'est-ce que Rose ?",
          answer:
            "Rose, c'est la mobilité sûre pour les femmes, par des femmes. Les passagères sont conduites par des femmes vérifiées, formées et salariées, avec le partage du trajet en direct et un bouton d'urgence.",
        },
        {
          question: "Quand Rose se lance-t-elle ?",
          answer: "Rose se lance le 28 décembre 2026.",
        },
        {
          question: "Qui conduit pour Rose ?",
          answer:
            "Des conductrices vérifiées, formées et salariées par Rose. Elles suivent un parcours vers la propriété de leur voiture.",
        },
        {
          question: "Que redonne Rose ?",
          answer: "10 % des bénéfices de Rose vont, de façon permanente, à une initiative d'autonomisation des femmes.",
        },
        {
          question: "Où sont hébergées mes données ?",
          answer: "Les données des utilisateurs sont hébergées au Maroc.",
        },
      ],
    },
  },

  hera: {
    meta: {
      title: "Hera, votre compagnon personnel de voyage et de loisirs",
      description:
        "Hera n'est pas une application de réservation. C'est un compagnon personnel de voyage et de loisirs qui vous comprend et vous accompagne du choix de la destination jusqu'au retour. Bientôt.",
    },
    hero: {
      tag: "Hera, par Intlaka. Bientôt",
      title: "Pas une application de réservation. Un compagnon qui *vous comprend*",
      subtitle:
        "Hera sait ce que vous aimez, comment vous dépensez et comment vous voyagez. Elle vous accompagne du choix de la destination jusqu'au retour.",
    },
    protect: {
      tag: "Ce dont Hera vous protège",
      title: "Un voyage est rarement gâché par la destination",
      text: "Il est gâché par ce qui se passe autour. Hera est conçue pour tenir tout cela loin de vous.",
      items: [
        { title: "Les changements de plan", text: "Quand quelque chose change, Hera aide le reste du voyage à s'adapter." },
        { title: "Les horaires manqués", text: "Vols, transferts et événements restent en vue, pour qu'aucune heure ne vous échappe." },
        { title: "Les dépenses excessives", text: "Une alerte discrète vous prévient quand un choix vous fait dépasser votre budget." },
        { title: "Les arnaques", text: "Les guides et entreprises locales sont sélectionnés, et Hera dit honnêtement ce qu'elle sait d'eux." },
      ],
    },
    journey: {
      tag: "Comment fonctionne Hera",
      title: "Du choix de la destination jusqu'au retour",
      text: "Hera reste avec vous à chaque étape du voyage, pas seulement au moment de payer.",
      stepOf: "Étape {current} sur {total}",
      previous: "Étape précédente",
      next: "Suivant : {step}",
      restart: "Retour à l'étape 1",
      steps: [
        {
          label: "Choisir",
          title: "Partir de votre façon de voyager",
          text: "Hera commence par vous, pas par une liste d'offres. Elle apprend votre style de voyage et propose des destinations qui lui correspondent.",
          points: [
            { title: "Votre style de voyage", text: "Calme ou actif, culture ou nature, en solo ou en famille." },
            { title: "Votre façon de dépenser", text: "Hera comprend ce pour quoi vous êtes à l'aise de payer." },
            { title: "Des suggestions qui vous vont", text: "Des destinations choisies pour vous, pas pour tout le monde." },
          ],
        },
        {
          label: "Préparer",
          title: "Connaître les règles avant de partir",
          text: "Les visas et les règles locales font partie du voyage. Hera vous les présente tôt, en mots simples.",
          points: [
            { title: "Visas", text: "Ce qu'il vous faut pour la destination choisie." },
            { title: "Règles locales", text: "Ce qu'il faut savoir et respecter une fois sur place." },
            { title: "Rien laissé au hasard", text: "Le côté pratique du voyage, préparé avec vous." },
          ],
        },
        {
          label: "Réserver",
          title: "Des vols et des hôtels adaptés à votre profil",
          text: "Hera associe vols et hôtels à qui vous êtes, et vous prévient avec douceur quand un choix dépasse votre budget.",
          points: [
            { title: "Adapté à vous", text: "Des options qui correspondent à votre profil et à vos habitudes." },
            { title: "Une alerte budget en douceur", text: "Un avertissement discret, jamais une leçon." },
            { title: "Moins cher, avec le même plaisir", text: "Le gardien financier cherche un meilleur prix pour la même expérience." },
          ],
        },
        {
          label: "Rencontrer",
          title: "Des guides et des entreprises locales, sélectionnés",
          text: "Les personnes que l'on rencontre en voyage comptent. Hera travaille avec des guides et des entreprises locales sélectionnés, et indique ce qui est vérifié.",
          points: [
            { title: "Des guides locaux sélectionnés", text: "Des personnes qui connaissent le lieu et qui ont été contrôlées." },
            { title: "Des entreprises locales sélectionnées", text: "Des services que vous pouvez utiliser en confiance." },
            { title: "Un label honnête", text: "« Vérifié » dit ce que nous savons, et ce que nous ne savons pas." },
          ],
        },
        {
          label: "Se déplacer",
          title: "Transports et événements, au même endroit",
          text: "Se déplacer et savoir ce qui se passe ne devrait pas vous prendre la soirée. Hera garde les deux sous la main.",
          points: [
            { title: "Transports", text: "Les moyens de se déplacer une fois sur place." },
            { title: "Événements", text: "Ce qui se passe pendant votre séjour." },
            { title: "Pour les longs trajets", text: "Un blog, une radio et des jeux pour raccourcir la route." },
          ],
        },
        {
          label: "Arriver",
          title: "Une carte interactive à l'arrivée",
          text: "À l'arrivée, Hera ouvre une carte interactive de votre voyage, pour que la ville ait du sens dès le départ.",
          points: [
            { title: "Votre voyage sur une carte", text: "Où vous logez, où vous allez, ce qui est près de vous." },
            { title: "Votre propre ville aussi", text: "Les habitants utilisent Hera pour découvrir la ville où ils vivent." },
            { title: "Jusqu'à la maison", text: "Hera reste avec vous jusqu'au retour." },
          ],
        },
      ],
    },
    showcase: [
      {
        tag: "Le simulateur",
        title: "Vivez le voyage jour par jour, avant de payer",
        text: "Le simulateur de Hera vous fait parcourir votre voyage un jour à la fois. Vous voyez ce que cela donne avant de dépenser quoi que ce soit.",
      },
      {
        tag: "Le gardien financier",
        title: "Une option moins chère, avec le même plaisir",
        text: "Hera veille sur votre budget avec vous. Quand elle trouve un moyen de payer moins pour la même expérience, elle vous le dit.",
      },
      {
        tag: "Le label « vérifié »",
        title: "Nous disons honnêtement ce que nous savons, et ce que nous ne savons pas",
        text: "Un label a de la valeur quand il est honnête. Hera montre ce qui a été contrôlé, et dit clairement ce qui ne l'a pas été.",
      },
    ],
    extras: {
      tag: "Aussi dans Hera",
      title: "Pensée pour tout le voyage",
      items: [
        { title: "Blog, radio et jeux", text: "De la compagnie pour les longs trajets, quand la route est la partie la plus longue du voyage." },
        { title: "Aucune publicité aléatoire", text: "Hera vous montre ce qui vous correspond. Elle ne vend pas votre attention." },
        { title: "Pour les habitants aussi", text: "Ceux qui vivent dans une ville utilisent Hera pour la redécouvrir." },
      ],
    },
    difference: {
      tag: "Pourquoi Hera",
      title: "Un compagnon, pas une application de réservation",
      text: "Une application de réservation vous aide à payer. Hera vous aide à voyager.",
      typical: "Une application de réservation",
      ours: "Hera",
      rows: [
        ["Commence par une liste d'offres", "Commence par vous : ce que vous aimez, comment vous dépensez, comment vous voyagez"],
        ["S'arrête quand vous avez payé", "Vous accompagne du choix de la destination jusqu'au retour"],
        ["Vous payez, puis vous découvrez", "Un simulateur pour vivre le voyage jour par jour avant de payer"],
        ["Vous montre de quoi dépenser plus", "Un gardien financier trouve moins cher avec le même plaisir"],
        ["Tout semble recommandé", "Un label « vérifié » dit ce que nous savons et ce que nous ne savons pas"],
        ["Des publicités aléatoires", "Aucune publicité aléatoire"],
      ],
    },
    city: {
      tag: "Hera City. Bientôt",
      title: "Des voitures électriques partagées, déverrouillées par téléphone",
      text: "Hera City fait partie de Hera. Elle vous donne accès à des voitures électriques partagées que vous déverrouillez avec votre téléphone, pour les visiteurs comme pour les habitants.",
      points: ["Voitures électriques partagées", "Déverrouillées par téléphone", "Fait partie de Hera"],
    },
    faq: {
      tag: "FAQ",
      title: "Questions sur Hera",
      items: [
        {
          question: "Hera est-elle une application de réservation ?",
          answer:
            "Non. Hera est un compagnon personnel de voyage et de loisirs. Elle comprend ce que vous aimez, comment vous dépensez et comment vous voyagez, et vous accompagne du choix de la destination jusqu'au retour.",
        },
        {
          question: "Que couvre Hera ?",
          answer:
            "Le style de voyage, les visas et les règles locales, des guides et entreprises locales sélectionnés, des vols et hôtels adaptés à votre profil avec une alerte budget en douceur, les transports, les événements, et une carte interactive à l'arrivée.",
        },
        {
          question: "Qu'est-ce que Hera City ?",
          answer: "Hera City fait partie de Hera : des voitures électriques partagées, déverrouillées par téléphone. Elle arrive bientôt.",
        },
        {
          question: "Hera est-elle réservée aux voyageurs ?",
          answer: "Non. Les habitants l'utilisent aussi, pour découvrir leur propre ville.",
        },
        {
          question: "Quand Hera sera-t-elle prête ?",
          answer: "Hera arrive bientôt. Nous annoncerons une date quand elle sera prête.",
        },
      ],
    },
  },

  projectsPage: {
    meta: {
      title: "Projets en recherche et développement",
      description:
        "Les projets de recherche et développement d'Intlaka : Battouta, un robot d'accueil marocain. Fihri, un modèle d'IA marocain. Des lunettes intelligentes pour les personnes aveugles et malvoyantes. La conduite autonome comme projet de recherche.",
    },
    hero: {
      tag: "Recherche et développement",
      title: "Construire au Maroc ce que le monde *utilisera demain*",
      subtitle:
        "Quatre projets en recherche et développement. Nous ne donnons pas de dates. Nous préférons montrer un travail réel quand il est prêt.",
    },
    list: {
      tag: "Les projets",
      title: "Quatre projets, une conviction",
      text: "Le Maroc n'importe pas l'avenir. Il le construit et l'exporte.",
    },
    details: [
      {
        title: "Battouta, un robot qui souhaite la bienvenue",
        text: "Battouta (بطوطة) est un robot marocain qui accueille les visiteurs dans les aéroports, les gares et les hôtels. Il est en recherche et développement.",
      },
      {
        title: "Fihri, un modèle d'IA marocain",
        text: "Fihri est le modèle d'IA marocain d'Intlaka. Il est en recherche et développement.",
      },
      {
        title: "Des lunettes intelligentes qui aident à trouver son chemin",
        text: "Des lunettes intelligentes pour les personnes aveugles et malvoyantes. La technologie est à son meilleur quand elle rend à quelqu'un une part de son indépendance.",
      },
      {
        title: "La conduite autonome, comme recherche",
        text: "Nous explorons la conduite autonome comme projet de recherche. C'est de la recherche, et nous la présentons comme telle.",
      },
    ],
    principles: {
      tag: "Comment nous parlons de recherche",
      title: "Du travail réel, pas d'effet d'annonce",
      items: [
        {
          title: "Pas de date avant l'heure",
          text: "Ces projets n'ont pas de date annoncée. Nous parlerons quand il y aura du concret à montrer.",
        },
        {
          title: "Construit avec le talent marocain",
          text: "Le talent est là. Notre rôle est d'ouvrir la porte et de lui donner les moyens de construire.",
        },
        {
          title: "Utile avant d'être impressionnant",
          text: "Un robot qui accueille, des lunettes qui guident : une recherche qui part d'une personne, pas d'une tendance.",
        },
      ],
    },
  },

  studio: {
    meta: {
      title: "Hera Studio, un programme de talents",
      description:
        "Hera Studio est le programme de talents d'Intlaka. Il réunit de jeunes créateurs de tout le Maroc, jugés sur leur talent plutôt que sur leurs diplômes, et leur donne un accompagnement et des outils pour transformer leurs idées en produits.",
    },
    hero: {
      tag: "Hera Studio",
      title: "Jugés sur le talent, *pas sur les diplômes*",
      subtitle:
        "Hera Studio est un programme de talents. Il réunit de jeunes créateurs de tout le Maroc et leur donne un accompagnement et des outils pour transformer leurs idées en produits dont ils sont fiers.",
    },
    story: {
      tag: "Pourquoi Hera Studio",
      title: "Le talent est là. Il lui faut quelqu'un pour ouvrir la porte.",
      paragraphs: [
        "Partout au Maroc, des jeunes ont des idées et la capacité de les réaliser. Ce qui manque à beaucoup d'entre eux, ce n'est pas le talent. C'est un lieu qui les prend au sérieux, et les moyens de commencer.",
        "Hera Studio est ce lieu. Il réunit de jeunes créateurs de tout le pays et les juge sur ce qu'ils savent faire, pas sur le diplôme qu'ils possèdent.",
        "Puis il leur donne un accompagnement et des outils, pour qu'une idée devienne un produit. Pas un exercice d'école : un vrai produit dont ils peuvent être fiers.",
      ],
      quote: "Chaque rêve mérite une plateforme pour s'envoler.",
    },
    process: {
      tag: "Le parcours",
      title: "D'une idée à un produit",
      steps: [
        { title: "Réunir", text: "De jeunes créateurs viennent de tout le Maroc." },
        { title: "Reconnaître", text: "Ils sont jugés sur leur talent plutôt que sur leurs diplômes." },
        { title: "Accompagner", text: "Ils reçoivent un accompagnement et des outils pour construire." },
        { title: "Créer", text: "Leurs idées deviennent des produits dont ils sont fiers." },
      ],
    },
    offer: {
      tag: "Ce que donne le studio",
      title: "Ce qu'un jeune créateur trouve ici",
      items: [
        { title: "Un accompagnement", text: "Des personnes qui croient en l'idée et l'aident à avancer." },
        { title: "Des outils", text: "Les moyens de construire, pour que le talent ne soit pas freiné par ce qui lui manque." },
        { title: "Un vrai produit", text: "Le but est une réalisation aboutie, que son créateur est fier de montrer." },
      ],
    },
  },

  about: {
    meta: {
      title: "À propos",
      description:
        "Intlaka est un groupe d'entreprises entre le Maroc et la Jordanie, fondé par Ahmad Al Husban. Notre vision : chaque rêve mérite une plateforme pour s'envoler. Notre conviction : bâtir pour donner, donner pour durer.",
    },
    hero: {
      tag: "À propos d'Intlaka",
      title: "Chaque rêve mérite une plateforme *pour s'envoler*",
      subtitle:
        "Intlaka est un groupe d'entreprises entre le Maroc et la Jordanie, fondé par Ahmad Al Husban. Il est actif dans la technologie, la mobilité, la restauration et l'hospitalité, et l'immobilier.",
    },
    story: {
      tag: "Notre vision",
      title: "Pourquoi Intlaka existe",
      paragraphs: [
        "Intlaka signifie un départ, un envol. Le nom dit ce que nous sommes venus faire : donner aux idées, aux entreprises et aux personnes la plateforme dont elles ont besoin pour s'élever.",
        "Nous bâtissons des entreprises qui résolvent de vrais problèmes, et nous ouvrons la voie aux jeunes pour transformer leurs idées en produits. Chaque entreprise du groupe fonctionne de façon indépendante, et toutes partagent une même vision.",
        "Nous avons une conviction sur le lieu où nous travaillons. Le Maroc n'importe pas l'avenir. Il le construit et l'exporte. Le talent est là. Il lui faut quelqu'un pour ouvrir la porte.",
        "Et nous avons une conviction sur la manière de travailler : bâtir pour donner, donner pour durer. L'humain avant le profit.",
      ],
      quote: "كل حلم يستحق منصة ليحلّق",
      quoteNote: "Chaque rêve mérite une plateforme pour s'envoler.",
    },
    founder: {
      tag: "Le fondateur",
      title: "Fondé par Ahmad Al Husban",
      name: "Ahmad Al Husban",
      role: "Fondateur et propriétaire d'Intlaka",
      bio: "Ahmad Al Husban est aussi cofondateur de Husban Real Estate (شركة حسبان للعقار).",
    },
    team: {
      tag: "L'équipe",
      title: "Celles et ceux qui bâtissent Intlaka",
      text: "Nous sommes une famille avant d'être une entreprise.",
      people: [
        { id: "ayoub", name: "Ayoub Hayda", role: "Ingénieur logiciel, Directeur de l'ingénierie" },
        { id: "sarah", name: "Sarah Fallahi", role: "Ingénierie logicielle, application Rose" },
        { id: "khouloud", name: "Khouloud serhani", role: "Ingénierie logicielle, application Rose" },
        { id: "amine", name: "Amine Niouer", role: "Marketing digital, département marketing" },
        { id: "khaoula", name: "KHAOULA LAIQ", role: "Marketing, en charge du B2B" },
      ],
    },
    family: {
      tag: "Comment nous traitons nos équipes",
      title: "L'équipe est une famille",
      items: [
        { title: "Formation", text: "Nous investissons dans les compétences de nos équipes, pour qu'elles continuent d'apprendre." },
        { title: "Évolution", text: "Nous faisons de la place pour que chacun puisse avancer." },
        { title: "Récompenses", text: "Nous reconnaissons le bon travail et nous le récompensons." },
        { title: "Réussite partagée", text: "Nous partageons avec nos équipes ce que nous réalisons ensemble." },
      ],
    },
  },

  contact: {
    meta: {
      title: "Contact",
      description: "Écrivez à Intlaka au sujet d'un partenariat, d'un investissement ou de l'un de nos projets : contact@intlaka.com.",
    },
    hero: {
      tag: "Contact",
      title: "Parlons de *ce que nous pouvons bâtir*",
      subtitle: "Partenaire, investisseur, journaliste ou jeune créateur : dites-nous qui vous êtes et ce que vous avez en tête.",
    },
    form: {
      title: "Envoyez-nous un message",
      name: "Nom complet",
      company: "Organisation",
      role: "Votre fonction",
      rolePlaceholder: "Fondateur, investisseur, journaliste, créateur...",
      email: "E-mail",
      phone: "Téléphone",
      phoneHint: "Facultatif. Indiquez l'indicatif du pays.",
      profile: "Vous êtes",
      profiles: {
        partner: "Un partenaire",
        investor: "Un investisseur",
        media: "Un média",
        talent: "Un jeune créateur",
        other: "Autre",
      },
      select: "Sélectionner",
      interests: "De quoi souhaitez-vous parler ?",
      interestOptions: {
        partnership: "Un partenariat",
        investment: "Un investissement",
        apps: "Rose, Hera ou Mimi Pay",
        studio: "Hera Studio",
      },
      message: "Votre message",
      messagePlaceholder: "Parlez-nous de vous, de votre organisation et de ce que vous aimeriez bâtir avec Intlaka.",
      consentBefore: "J'accepte qu'Intlaka utilise ces informations pour répondre à ma demande, comme décrit dans la",
      consentLink: "politique de confidentialité",
      consentAfter: ".",
      submit: "Envoyer le message",
      sending: "Envoi...",
      required: "Obligatoire",
      successTitle: "Merci. Votre message a bien été envoyé.",
      successText: "Nous lisons chaque message et nous reviendrons vers vous rapidement.",
      sendAnother: "Envoyer un autre message",
      errors: {
        required: "Ce champ est obligatoire.",
        email: "Veuillez saisir une adresse e-mail valide.",
        consent: "Veuillez accepter pour que nous puissions vous répondre.",
        generic: "Votre message n'a pas pu être envoyé. Veuillez réessayer, ou écrivez-nous par e-mail.",
        fixFields: "Veuillez vérifier les champs signalés.",
      },
      sendByEmail: "L'envoyer plutôt par e-mail",
    },
    email: {
      subject: "Nouveau message de {name} · {company}",
      eyebrow: "Nouveau message",
      source: "Formulaire de contact du site",
      noMessage: "Aucun message n'a été ajouté.",
      messageTitle: "Message",
      detailsTitle: "Détails",
      labels: {
        name: "Nom",
        company: "Organisation",
        role: "Fonction",
        profile: "Profil",
        email: "E-mail",
        phone: "Téléphone",
        interests: "Intéressé par",
        language: "Langue",
      },
      reply: "Répondre à {name}",
      footer: "Envoyé depuis le formulaire de contact de {site}. Répondre à cet e-mail écrit directement à {name}.",
    },
    side: {
      emailTitle: "E-mail",
      emailText: "Vous préférez l'e-mail ? Écrivez-nous directement.",
      socialTitle: "Nous suivre",
      nextTitle: "Et ensuite",
      next: [
        "Nous lisons votre message avec attention.",
        "La bonne personne chez Intlaka revient vers vous.",
        "Nous trouvons un moment pour parler de ce que nous pouvons bâtir ensemble.",
      ],
    },
  },

  privacy: {
    meta: {
      title: "Politique de confidentialité",
      description: "Comment Intlaka collecte, utilise et protège les informations personnelles sur ce site.",
    },
    title: "Politique de confidentialité",
    updated: "Dernière mise à jour",
    sections: [
      {
        title: "Qui sommes-nous",
        paragraphs: [
          "Ce site est exploité par Intlaka, un groupe d'entreprises entre le Maroc et la Jordanie. Cette politique explique quelles informations personnelles nous collectons sur ce site, pourquoi nous les collectons et comment vous pouvez les contrôler.",
        ],
      },
      {
        title: "Ce que nous collectons",
        paragraphs: [
          "Lorsque vous remplissez notre formulaire de contact, nous collectons les informations que vous fournissez : votre nom, votre organisation, votre fonction, votre adresse e-mail, votre numéro de téléphone si vous le communiquez, votre profil, vos centres d'intérêt et votre message.",
          "Lorsque vous nous écrivez par e-mail, nous recevons les informations contenues dans votre message ainsi que vos coordonnées.",
          "Comme la plupart des sites, notre hébergeur peut enregistrer des données techniques telles que votre adresse IP, votre type de navigateur et les pages demandées, afin de faire fonctionner et de sécuriser le site.",
        ],
      },
      {
        title: "Comment nous les utilisons",
        paragraphs: [
          "Nous utilisons vos informations pour répondre à votre demande et pour garder une trace de nos échanges. Nous ne vendons pas vos informations personnelles et nous ne les utilisons pas pour établir des profils publicitaires.",
        ],
      },
      {
        title: "Partage",
        paragraphs: [
          "Nous partageons vos informations avec les prestataires dont nous avons besoin pour faire fonctionner ce site et nous transmettre votre message, comme nos prestataires d'hébergement et d'e-mail. Ils peuvent les traiter pour notre compte et à aucune autre fin.",
        ],
      },
      {
        title: "Nos applications",
        paragraphs: ["Cette politique concerne ce site. Les données des utilisateurs des applications d'Intlaka sont hébergées au Maroc."],
      },
      {
        title: "Cookies",
        paragraphs: [
          "Ce site n'utilise pas de cookies publicitaires ni de cookies de suivi. Votre choix de langue se reflète dans l'adresse de la page et n'est pas enregistré dans un cookie.",
        ],
      },
      {
        title: "Conservation",
        paragraphs: [
          "Nous conservons vos informations aussi longtemps que nécessaire pour répondre à votre demande et assurer le suivi de nos échanges, puis nous les supprimons, sauf si la loi nous impose de les conserver plus longtemps.",
        ],
      },
      {
        title: "Vos droits",
        paragraphs: [
          "Vous pouvez nous demander à tout moment d'accéder à vos informations personnelles, de les corriger ou de les supprimer, ou vous opposer à leur utilisation. Pour cela, écrivez à contact@intlaka.com. Nous répondrons à votre demande dans les meilleurs délais.",
        ],
      },
      {
        title: "Modifications",
        paragraphs: ["Nous pouvons mettre à jour cette politique. La date en haut de cette page indique sa dernière modification."],
      },
    ],
  },

  notFound: {
    meta: { title: "Page introuvable" },
    tag: "404",
    title: "Cette page *n'existe pas*",
    text: "La page que vous cherchez a peut-être été déplacée ou n'a jamais existé.",
  },

  mockups: {
    group: {
      title: "Groupe Intlaka",
      note: "Chaque entreprise est indépendante, avec une vision commune.",
    },
    apps: {
      title: "Applications Intlaka",
      note: "Les données des utilisateurs sont hébergées au Maroc.",
    },
    projects: {
      title: "Recherche et développement",
      note: "Aucune date annoncée.",
    },
    studio: {
      title: "Hera Studio",
      rows: [
        { name: "Jeunes créateurs", detail: "De tout le Maroc" },
        { name: "Talent", detail: "Jugés sur le talent, pas sur les diplômes" },
        { name: "Accompagnement et outils", detail: "Pour transformer les idées en produits" },
      ],
      note: "Des produits dont ils sont fiers.",
    },
    trip: {
      driver: "Votre conductrice est vérifiée",
      sharingTitle: "Partage du trajet en direct",
      sharing: "Votre trajet est partagé en direct avec les personnes que vous avez choisies.",
      status: "Partage activé",
      emergency: "Urgence",
      share: "Partager",
    },
    driver: {
      title: "Profil de la conductrice",
      fields: [
        { label: "Identité", value: "Vérifiée" },
        { label: "Formation", value: "Terminée" },
        { label: "Statut", value: "Salariée de Rose" },
        { label: "Parcours", value: "Vers sa propre voiture" },
      ],
      footerLabel: "Prête à conduire",
      footerValue: "Vérifiée",
    },
    profile: {
      title: "Votre profil de voyage",
      fields: [
        { label: "Style", value: "Calme, culturel" },
        { label: "Voyage", value: "En famille" },
        { label: "Dépenses", value: "Prudentes" },
        { label: "Rythme", value: "Sans hâte" },
      ],
      footerLabel: "Hera vous comprend",
      footerValue: "Prêt",
    },
    prepare: {
      title: "Avant de partir",
      rows: [
        { name: "Visa", detail: "Ce qu'il faut pour cette destination" },
        { name: "Règles locales", detail: "Ce qu'il faut savoir et respecter" },
        { name: "Votre style de voyage", detail: "Calme, culturel, en famille" },
      ],
      note: "Préparé avec vous, en mots simples.",
    },
    match: {
      title: "Adapté à votre profil",
      fields: [
        { label: "Vol", value: "Direct, le matin" },
        { label: "Hôtel", value: "Calme, central" },
        { label: "Selon vos habitudes", value: "Oui" },
        { label: "Budget", value: "Dans votre budget" },
      ],
      footerLabel: "Alerte budget",
      footerValue: "En douceur",
    },
    vetted: {
      title: "Sélectionnés pour vous",
      rows: [
        { name: "Guide local", detail: "Connaît la vieille ville" },
        { name: "Entreprise locale", detail: "Excursions et transferts" },
        { name: "Le label", detail: "Ce que nous savons, et ce que nous ne savons pas" },
      ],
      status: "Vérifié",
      note: "Contrôlés avant d'être proposés.",
    },
    today: {
      title: "Aujourd'hui",
      rows: [
        { name: "Transport", detail: "Comment rejoindre la vieille ville" },
        { name: "Événement", detail: "Un concert ce soir" },
        { name: "Pour la route", detail: "Blog, radio et jeux" },
      ],
      note: "Tout pour la journée, au même endroit.",
    },
    map: {
      title: "Carte interactive",
      subtitle: "À l'arrivée",
      pins: ["Votre hôtel", "Votre guide", "Ce soir"],
      note: "Votre voyage, sur une même carte.",
    },
    simulator: {
      title: "Simulateur de voyage",
      subtitle: "Avant de payer",
      items: [
        { day: "Jour 1", text: "Arrivée, transfert et installation" },
        { day: "Jour 2", text: "La vieille ville avec un guide local sélectionné" },
        { day: "Jour 3", text: "Matinée libre, un événement le soir" },
        { day: "Jour 4", text: "Vol retour, dans votre budget" },
      ],
      status: "Le voyage vous plaît ? Alors vous payez.",
    },
    guardian: {
      user: "Vous",
      channel: "Gardien financier",
      app: "Hera",
      userMessage: "J'adore cet hôtel, mais il dépasse mon budget.",
      appMessage: "J'en ai trouvé un semblable dans le même quartier, avec le même confort, pour moins cher. Voulez-vous les comparer ?",
      userReply: "Oui, montre-moi.",
      status: "Même plaisir, coût plus bas",
    },
    verified: {
      title: "Label « vérifié »",
      subject: "Guide local",
      steps: ["Identité", "Licence", "Connaissance du lieu", "Tarifs de la saison"],
      known: "Vérifié",
      unknown: "Pas encore confirmé",
      alert: "Nous disons ce que nous savons, et ce que nous ne savons pas.",
    },
    city: {
      title: "Hera City",
      rows: [
        { name: "Trouver une voiture", detail: "Une voiture électrique partagée près de vous" },
        { name: "Déverrouiller", detail: "Avec votre téléphone" },
        { name: "Rouler", detail: "Et la laisser pour la personne suivante" },
      ],
      note: "Fait partie de Hera.",
    },
  },
};

export default fr;
