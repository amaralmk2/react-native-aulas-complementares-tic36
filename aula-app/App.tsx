import { ThemeProvider } from 'styled-components/native';
import { Home } from './src/screens/Home';
import light from './src/theme/light';
import dark from './src/theme/dark';
import { Doctor } from './src/components/doctor';



export default function App() {
  return (    
    <ThemeProvider theme={dark}>
    <Doctor type='secondary' />
    </ThemeProvider>
  );
}