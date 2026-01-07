import type { Metadata } from 'next';

import { ThemeProvider } from 'next-themes';

import TopBar from './components/TopBar';
import './globals.css';
import { Slide, ToastContainer } from 'react-toastify';

export const metadata: Metadata = {
    title: 'onur altuntas',
    icons: {
        icon: `${process.env.NEXT_PUBLIC_PAGES_BASE_PATH}/favicon.ico`
    }
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <html lang='en' suppressHydrationWarning>
                <body id='app' className='h-screen'>
                    <ThemeProvider
                        attribute='data-theme'
                        defaultTheme='light' // fallback theme
                        enableSystem={false}
                        storageKey='theme' // localStorage key
                    >
                        <TopBar />

                        {children}
                        <ToastContainer
                            position='bottom-right'
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={true}
                            closeOnClick={false}
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme='dark'
                            transition={Slide}
                        />
                    </ThemeProvider>
                </body>
            </html>
        </>
    );
}
