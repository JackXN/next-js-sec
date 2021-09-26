import { ThemeProvider } from 'theme-ui';
import theme from '../src/theme/index';
import Header from '../src/components/Navbar/Navbar';

import Layout from '../src/components/layout';


export default function Home() {
  return (
    <ThemeProvider theme={theme}>
<Layout>
  
</Layout>
</ThemeProvider>


  )
}



