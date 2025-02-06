export interface LayoutContextType {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface Project {
  Title: string;
  BackgroundImage: string;
  Description: string;
  MainLanguage?: string;
  SecondaryLanguages: string[];
  WebsiteLink: string;
  url: string;
  CodeLink: string;
}
