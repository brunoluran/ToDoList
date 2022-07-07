import { ThemeProvider } from 'styled-components';
import theme from './src/styles';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

import { LogBox } from 'react-native';
LogBox.ignoreAllLogs(true); // Desabilita os warnings na tela

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
