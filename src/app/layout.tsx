import type { Metadata } from 'next';

import TopBar from './components/TopBar';
import './globals.css';
import { Slide, ToastContainer } from 'react-toastify';

export const metadata: Metadata = {
    title: 'aaa',
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
            <html data-theme='default' className='h-screen' lang='en'>
                <body id='app' className='h-screen'>
                    {' '}
                    <TopBar />
                    <main>{children}</main>
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
                </body>
            </html>
        </>
    );
}
