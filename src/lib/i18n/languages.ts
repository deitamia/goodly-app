export interface LanguageDefinition {
  code: string;
  name: string;
  nativeLabel: string;
  flagCode: string;
  flagCountry: string;
}

export const SUPPORTED_LANGUAGES: LanguageDefinition[] = [
  { code: "en", name: "English", nativeLabel: "English", flagCode: "GB", flagCountry: "United Kingdom" },
  { code: "de", name: "German", nativeLabel: "Deutsch", flagCode: "DE", flagCountry: "Germany" },
  { code: "es", name: "Spanish", nativeLabel: "Español", flagCode: "ES", flagCountry: "Spain" },
  { code: "pt", name: "Portuguese", nativeLabel: "Português", flagCode: "PT", flagCountry: "Portugal" },
  { code: "fr", name: "French", nativeLabel: "Français", flagCode: "FR", flagCountry: "France" },
  { code: "sv", name: "Swedish", nativeLabel: "Svenska", flagCode: "SE", flagCountry: "Sweden" },
  { code: "no", name: "Norwegian Bokmål", nativeLabel: "Norsk bokmål", flagCode: "NO", flagCountry: "Norway" },
  { code: "da", name: "Danish", nativeLabel: "Dansk", flagCode: "DK", flagCountry: "Denmark" },
  { code: "nl", name: "Dutch", nativeLabel: "Nederlands", flagCode: "NL", flagCountry: "Netherlands" },
  { code: "it", name: "Italian", nativeLabel: "Italiano", flagCode: "IT", flagCountry: "Italy" },
  { code: "bg", name: "Bulgarian", nativeLabel: "Български", flagCode: "BG", flagCountry: "Bulgaria" },
  { code: "pl", name: "Polish", nativeLabel: "Polski", flagCode: "PL", flagCountry: "Poland" },
  { code: "ro", name: "Romanian", nativeLabel: "Română", flagCode: "RO", flagCountry: "Romania" },
  { code: "sk", name: "Slovak", nativeLabel: "Slovenčina", flagCode: "SK", flagCountry: "Slovakia" },
  { code: "cs", name: "Czech", nativeLabel: "Čeština", flagCode: "CZ", flagCountry: "Czechia" },
];

export const DEFAULT_LANGUAGE = "en";

export function getLanguageByCode(code: string): LanguageDefinition {
  return SUPPORTED_LANGUAGES.find((lang) => lang.code === code) || SUPPORTED_LANGUAGES[0];
}
