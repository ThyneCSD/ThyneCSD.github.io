import { createContext, useContext, useState, useEffect } from "react";
import { getTranslated } from "./languageUtils";

const LanguageContext = createContext();

export const translations = {
  nl: {
    // Nav
    works: "Projecten",
    about: "Over Mij",
    contact: "Contact",
    letsTalk: "Praten?",
    
    // Home
    available: "Beschikbaar voor werk",
    selectedWork: "// geselecteerd werk",
    featuredProjects: "Uitgelichte Projecten",
    resume: "CV",
    freelance: "Beschikbaar voor freelance opdrachten",
    
    // About
    aboutTitle: "Over Mij",
    aboutText: "Hoi hoi! Ik ben een super leuke XR Developer! 💖 Ik maak magische fysieke en intuïtieve ervaringen in VR en AR. Voor mij draait goede XR niet alleen om technologie, maar vooral over hoe leuk en interactief het is! ✨ Ik werk graag iteratief met prototypes: snel testen, verbeteren en opnieuw testen — net zo lang tot interacties natuurlijk en super gaaf aanvoelen! 🦄",
    
    // Contact
    contactTitle: "Contact",
    contactSubtitle: "Interesse in samenwerking of gewoon een vraag? Neem gerust contact op!",
    directContact: "Direct contact",
    sendEmail: "Stuur me een e-mail en ik reageer zo snel mogelijk.",
    findOnline: "Vind me online",
    socialGithub: "Bekijk mijn code en projecten",
    socialLinkedin: "Connect met mij",
    socialItch: "Speel mijn games",
    
    // Project Details
    projectNotFound: "Project niet gevonden",
    backToHome: "← Terug naar home",
    stayTuned: "— stay tuned —",
    comingSoonText: "Hier komt later meer info over dit project.",
    role: "Rol",
    timeline: "Tijdlijn",
    mechanics: "Mechanics",
    screenshots: "Screenshots",
    codeSnippet: "Code Voorbeeld",
    visitGit: "Bekijk Git",
    playItch: "Speel op Itch",
    prevProject: "Vorig Project",
    nextProject: "Volgend Project",
    viewProject: "Bekijk Project",
    aboutProject: "Over dit project",
    viewGithub: "Bekijk op GitHub",
    playItchio: "Speel op Itch.io",
  },
  en: {
    // Nav
    works: "Projects",
    about: "About Me",
    contact: "Contact",
    letsTalk: "Let's Talk",
    
    // Home
    available: "Available for work",
    selectedWork: "// selected work",
    featuredProjects: "Featured Projects",
    resume: "Resume",
    freelance: "Available for freelance opportunities",
    
    // About
    aboutTitle: "About Me",
    aboutText: "Hey there! I am a super cool XR Developer! 💖 I create magical, physical, and intuitive experiences in VR and AR. To me, great XR is not just about technology, but mostly about how fun and interactive it is! ✨ I love working iteratively with prototypes: rapid testing, improving, and testing again — until interactions feel completely natural and awesome! 🦄",
    
    // Contact
    contactTitle: "Contact",
    contactSubtitle: "Interested in collaborating or just have a question? Feel free to reach out!",
    directContact: "Direct contact",
    sendEmail: "Send me an e-mail and I will get back to you as soon as possible.",
    findOnline: "Find me online",
    socialGithub: "Check out my code and projects",
    socialLinkedin: "Connect with me",
    socialItch: "Play my games",
    
    // Project Details
    projectNotFound: "Project not found",
    backToHome: "← Back to home",
    stayTuned: "— stay tuned —",
    comingSoonText: "More information about this project will be added here later.",
    role: "Role",
    timeline: "Timeline",
    mechanics: "Mechanics",
    screenshots: "Screenshots",
    codeSnippet: "Code Snippet",
    visitGit: "Visit Git",
    playItch: "Play on Itch",
    prevProject: "Previous Project",
    nextProject: "Next Project",
    viewProject: "View Project",
    aboutProject: "About this project",
    viewGithub: "View on GitHub",
    playItchio: "Play on Itch.io",
  }
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem("portfolio_lang");
    return saved === "en" || saved === "nl" ? saved : "nl";
  });

  useEffect(() => {
    localStorage.setItem("portfolio_lang", lang);
  }, [lang]);

  const t = (key) => {
    return translations[lang][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, getTranslated: (val) => getTranslated(val, lang) }}>
      {children}
    </LanguageContext.Provider>
  );
}




export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
