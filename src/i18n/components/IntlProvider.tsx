import { ReactNode, useMemo } from 'react';
import { IntlProvider as ReactIntlProvider } from 'react-intl';
import { resolveLanguage } from 'src/i18n/utils/resolveLanguage';
import { MESSAGES } from 'src/i18n/MESSAGES';

type Props = {
  children: ReactNode;
};

export const IntlProvider = ({ children }: Props) => {
  const locale = useMemo(() => resolveLanguage(), []);

  return (
    <ReactIntlProvider messages={MESSAGES[locale]} locale={locale}>
      {children}
    </ReactIntlProvider>
  );
};
