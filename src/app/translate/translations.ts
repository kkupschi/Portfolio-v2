export type Lang = 'de' | 'en';

export interface Translations {
  nav: { whyMe: string; skills: string; projects: string; contact: string };
  hero: { subtitle: string };
  whyMe: { title: string; locationPrefix: string; city: string; heading: string; text: string };
  skills: { title: string; learningTitle: string; learningText: string };
  testimonials: { headline: string; linkedIn: string; dominikQuote: string; kellyQuote: string };
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
      learningText: 'Staying up to date is part of my mindset as a developer. React and Vue.js are two of the most in-demand frontend frameworks today — and I\'m actively building with both to deepen my understanding of component-based architecture, state management, and modern UI development.',
    },
    testimonials: {
      headline: 'Need a teamplayer? Here what my colleagues said about me',
      linkedIn: 'LinkedIn Profile',
      dominikQuote: '"Kristian is a very open-minded person when it comes to feedback. His work is structured and precise. Open communication within the team is extremely important to him, and he collaborates closely with his teammates. Working together as a team with him was a real pleasure."',
      kellyQuote: '"Kris is the kind of teammate you could only wish for. His positive attitude makes a significant contribution to a great team dynamic, and he consistently impresses with his solution-oriented approach. An absolutely reliable partner who gives his all in every phase of a project!"',
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
      text: "I'm a Frontend Developer focused on creating modern, responsive, and user-friendly web experiences. My goal is not only to turn designs into code, but to build fast, interactive, and high-quality applications that bring real value to users and projects.\n\nI'm especially interested in opportunities related to Frontend Development, UI-focused applications, and modern web technologies. Whether it's a startup, agency, or established company, I'm always excited to work on projects where I can contribute creative ideas, clean code, and thoughtful solutions.\n\nIf you're looking for someone to help build modern websites, web applications, or engaging user interfaces, feel free to get in touch.",
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
      learningText: 'Auf dem Laufenden zu bleiben ist für mich als Entwickler selbstverständlich. React und Vue.js gehören heute zu den gefragtesten Frontend-Frameworks — und ich arbeite aktiv mit beiden, um mein Verständnis von komponentenbasierter Architektur, State Management und moderner UI-Entwicklung zu vertiefen.',
    },
    testimonials: {
      headline: 'Auf der Suche nach einem Teamplayer? Das sagen meine Kollegen über mich',
      linkedIn: 'LinkedIn-Profil',
      dominikQuote: '„Kristian ist ein sehr offener Mensch für Kritik. Seine Arbeit ist strukturiert und präzise. Ihm ist eine offene Kommunikation im Team äußerst wichtig und arbeitet eng mit seinen Teamkollegen zusammen. Die Teamarbeit mit Ihm hat mir viel Freude bereitet."',
      kellyQuote: '„Kris ist ein Teamkollege, wie man ihn sich nur wünschen kann. Mit seiner positiven Art trägt er maßgeblich zu einer tollen Teamdynamik bei und überzeugt dabei durch seine lösungsorientierte Arbeitsweise. Ein absolut zuverlässiger Partner, der in jeder Projektphase mit vollem Einsatz dabei ist!"',
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
      text: 'Ich bin ein Frontend Developer mit dem Fokus auf moderne, responsive und benutzerfreundliche Web-Erlebnisse. Mein Ziel ist es, nicht nur Designs in Code umzusetzen, sondern schnelle, interaktive und hochwertige Anwendungen zu entwickeln, die echten Mehrwert für Nutzer und Projekte schaffen.\n\nBesonders interessiere ich mich für Möglichkeiten im Bereich Frontend Development, UI-fokussierte Anwendungen und moderne Webtechnologien. Ob Startup, Agentur oder etabliertes Unternehmen — ich freue mich immer darauf, an Projekten mitzuwirken, bei denen ich kreative Ideen, sauberen Code und durchdachte Lösungen einbringen kann.\n\nWenn du jemanden suchst, der moderne Websites, Webanwendungen oder ansprechende Benutzeroberflächen mitentwickelt — melde dich gerne.',
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
