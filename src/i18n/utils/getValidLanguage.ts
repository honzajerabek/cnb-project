import { Language } from 'src/i18n/utils/enums';

export const getValidLanguage = (
  localeName: string | undefined,
): Language | undefined => {
  if (!localeName) {
    return undefined;
  }

  const languages = Object.values(Language);

  return languages.find(language =>
    localeName.toLowerCase().startsWith(language.toLowerCase()),
  );
};
