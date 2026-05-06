export type Lang = 'de' | 'en';

export interface Translations {
  nav: { whyMe: string; skills: string; projects: string; contact: string };
  hero: { subtitle: string };
  whyMe: { title: string; locationPrefix: string; city: string; heading: string; text: string };
  skills: { title: string; learningTitle: string; learningText: string };
  testimonials: { headline: string; linkedIn: string };
  projects: {
    title: string; technologies: string; liveTest: string; durationLabel: string;
    weeks: string; inProgress: string; ongoingProject: string;
    aboutProject: string; workProcess: string; groupWork: string;
  };
  projectContent: {
    bookstore: { about: string; work: string; group: string };
    pokedex: { about: string; work: string; group: string };
    join: { about: string; work: string; group: string };
  };
  contact: {
    title: string; text: string; nameLabel: string; emailLabel: string; messageLabel: string;
    privacyBefore: string; privacyLink: string; privacyAfter: string; send: string;
    successMsg: string; anotherMsg: string; errorMsg: string; tryAgain: string;
    nameRequired: string; emailRequired: string; emailInvalid: string; messageRequired: string;
  };
  footer: { imprint: string; privacyPolicy: string; legalNotice: string; copy: string };
}

export const translations: Record<Lang, Translations> = {
  en: {
    nav: {
      whyMe: 'Why me',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      subtitle: 'FRONTEND DEVELOPER',
    },
    whyMe: {
      title: 'Why me',
      locationPrefix: 'I am located in',
      city: 'Nuremberg.',
      heading: 'Why are you passionate about coding?',
      text: "I've always wanted to know more about programming — the logic behind it, how websites are built, how games are developed. The more I discovered, the more driven I became. My previous career path and sports have shaped my teamwork skills from an early age.",
    },
    skills: {
      title: 'My Skills',
      learningTitle: 'I am currently learning',
      learningText: 'Show that you are motivated to continually improve your skills, implement innovative solutions and stay abreast of new technologies.',
    },
    testimonials: {
      headline: 'Need a teamplayer? Here what my colleagues said about me',
      linkedIn: 'LinkedIn Profile',
    },
    projects: {
      title: 'My Projects',
      technologies: 'Technologies',
      liveTest: 'Live Test',
      durationLabel: 'Duration:',
      weeks: 'weeks',
      inProgress: 'in progress',
      ongoingProject: 'Ongoing Project',
      aboutProject: 'About the project',
      workProcess: 'How I organised my work process',
      groupWork: 'My group work experience',
    },
    contact: {
      title: 'Contact me',
      text: 'Encourage people to contact you and describe what role you are interested in. Show that you will add value to their projects through your work. Example: Feel free to get in touch with job offers or opportunities such as: ...',
      nameLabel: 'Your name',
      emailLabel: 'Your Email',
      messageLabel: 'Your Message',
      privacyBefore: "I've read the",
      privacyLink: 'privacy policy',
      privacyAfter: 'and agree to the processing of my data as outlined.',
      send: 'Send',
      successMsg: "Your message has been sent successfully. I'll get back to you soon!",
      anotherMsg: 'Send another message',
      errorMsg: 'Something went wrong. Please try again or reach out via email directly.',
      tryAgain: 'Try again',
      nameRequired: 'Name is required.',
      emailRequired: 'Email is required.',
      emailInvalid: 'Please enter a valid email.',
      messageRequired: 'Message is required.',
    },
    projectContent: {
      bookstore: {
        about: 'This app is a Slack clone that revolutionizes team communication with an intuitive interface, real time messaging, and structured channel organisation.',
        work: 'The project was structured into reusable components with a clear separation of concerns. I focused on clean naming conventions, consistent file structure, and readable code throughout.',
        group: '...',
      },
      pokedex: {
        about: '...',
        work: '...',
        group: '...',
      },
      join: {
        about: '...',
        work: '...',
        group: '...',
      },
    },
    footer: {
      imprint: 'Imprint',
      privacyPolicy: 'Privacy Policy',
      legalNotice: 'Legal Notice',
      copy: '© Kristian Kupsch 2026',
    },
  },
  de: {
    nav: {
      whyMe: 'Warum ich',
      skills: 'Kenntnisse',
      projects: 'Projekte',
      contact: 'Kontakt',
    },
    hero: {
      subtitle: 'FRONTEND ENTWICKLER',
    },
    whyMe: {
      title: 'Warum ich',
      locationPrefix: 'Ich wohne in',
      city: 'Nürnberg.',
      heading: 'Warum begeistert dich das Programmieren?',
      text: 'Ich wollte schon immer mehr über Programmierung wissen, die Logik dahinter, wie Webseiten entstehen oder Spiele entwickelt werden. Je mehr ich entdeckt habe, desto ehrgeiziger wurde ich. Mein bisheriger Berufsweg und der Sport haben mir die Teamfähigkeit von klein auf mitgegeben.',
    },
    skills: {
      title: 'Meine Kenntnisse',
      learningTitle: 'Ich lerne gerade',
      learningText: 'Zeige, dass du motiviert bist, deine Fähigkeiten kontinuierlich weiterzuentwickeln, innovative Lösungen umzusetzen und stets auf dem neuesten Stand der Technologie zu bleiben.',
    },
    testimonials: {
      headline: 'Auf der Suche nach einem Teamplayer? Das sagen meine Kollegen über mich',
      linkedIn: 'LinkedIn-Profil',
    },
    projects: {
      title: 'Meine Projekte',
      technologies: 'Technologien',
      liveTest: 'Live-Test',
      durationLabel: 'Dauer:',
      weeks: 'Wochen',
      inProgress: 'in Bearbeitung',
      ongoingProject: 'Aktuelles Projekt',
      aboutProject: 'Über das Projekt',
      workProcess: 'Wie ich meinen Arbeitsprozess organisiert habe',
      groupWork: 'Meine Erfahrung mit Gruppenarbeit',
    },
    contact: {
      title: 'Kontaktiere mich',
      text: 'Ermutige Menschen, dich zu kontaktieren, und beschreibe, welche Rolle dich interessiert. Zeige, dass du mit deiner Arbeit einen Mehrwert für ihre Projekte schaffst.\n\nBeispiel: Melde dich gerne mit Jobangeboten oder Möglichkeiten wie: ...',
      nameLabel: 'Dein Name',
      emailLabel: 'Deine E-Mail',
      messageLabel: 'Deine Nachricht',
      privacyBefore: 'Ich habe die',
      privacyLink: 'Datenschutzerklärung',
      privacyAfter: 'gelesen und stimme der Verarbeitung meiner Daten zu.',
      send: 'Senden',
      successMsg: 'Deine Nachricht wurde erfolgreich gesendet. Ich melde mich bald!',
      anotherMsg: 'Weitere Nachricht senden',
      errorMsg: 'Etwas ist schiefgelaufen. Bitte versuche es erneut oder schreibe mir direkt per E-Mail.',
      tryAgain: 'Erneut versuchen',
      nameRequired: 'Name ist erforderlich.',
      emailRequired: 'E-Mail ist erforderlich.',
      emailInvalid: 'Bitte gib eine gültige E-Mail-Adresse ein.',
      messageRequired: 'Nachricht ist erforderlich.',
    },
    projectContent: {
      bookstore: {
        about: 'Diese App ist ein Slack Klon, der die Teamkommunikation mit einer intuitiven Oberfläche, Echtzeit-Messaging und einer klaren Kanalstruktur revolutioniert.',
        work: 'Das Projekt wurde in wiederverwendbare Komponenten mit klarer Aufgabentrennung strukturiert. Der Fokus lag auf sauberen Namenskonventionen, einheitlicher Dateistruktur und lesbarem Code.',
        group: '...',
      },
      pokedex: {
        about: '...',
        work: '...',
        group: '...',
      },
      join: {
        about: '...',
        work: '...',
        group: '...',
      },
    },
    footer: {
      imprint: 'Impressum',
      privacyPolicy: 'Datenschutz',
      legalNotice: 'Rechtliches',
      copy: '© Kristian Kupsch 2026',
    },
  },
};
