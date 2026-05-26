export type AppLocale =
  | "en"
  | "es"
  | "fr"
  | "id"
  | "ja"
  | "pt-BR"
  | "pt-PT"
  | "zh-CN"
  | "zh-TW";

export type TranslationTree = {
  [key: string]: string | TranslationTree;
};
