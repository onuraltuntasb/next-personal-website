import TopBar from './components/TopBar';
import './globals.css';

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
                </body>
            </html>
        </>
    );
}
