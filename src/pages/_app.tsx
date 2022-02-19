import { useContext } from 'react';

import { ThemeContext, ThemeProvider } from '../contexts/ThemeContext';

import '../styles/global.css';

function MyApp({ Component, pageProps }) {
    const {} = useContext(ThemeContext);

    return (
        <ThemeProvider>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
