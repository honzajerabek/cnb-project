import 'intl';
import '@formatjs/intl-locale/polyfill-force';
import '@formatjs/intl-numberformat/polyfill-force';
import '@formatjs/intl-pluralrules/polyfill-force';
import 'intl/locale-data/jsonp/en';
import 'intl/locale-data/jsonp/cs';
import '@formatjs/intl-numberformat/locale-data/en';
import '@formatjs/intl-numberformat/locale-data/cs';
import '@formatjs/intl-pluralrules/locale-data/en';
import '@formatjs/intl-pluralrules/locale-data/cs';
import { QueryClient, QueryClientProvider } from 'react-query';
import { IntlProvider } from 'src/i18n/components/IntlProvider';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Navigation } from 'src/navigation/Navigation';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { StatusBar } from 'react-native';

const queryClient = new QueryClient();

const AppContainer = () => {
  return (
    <SafeAreaProvider>
      <IntlProvider>
        <QueryClientProvider client={queryClient}>
          <StatusBar barStyle="dark-content" />
          <Navigation />
        </QueryClientProvider>
      </IntlProvider>
    </SafeAreaProvider>
  );
};

export const App = gestureHandlerRootHOC(AppContainer);
