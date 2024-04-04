import { UseTranslationOptions, useTranslation } from "react-i18next";

export const createUseModuleTranslation = (moduleName: string) => {
  return (options: UseTranslationOptions<typeof moduleName>) =>
    useTranslation(moduleName, options);
};
