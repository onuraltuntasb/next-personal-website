import Link from 'next/link';

export default function NotFound() {
    return (
        <div>
            <div className='hero min-h-screen bg-base-200'>
                <div className='hero-content text-center'>
                    <div className='max-w-md'>
                        <h1 className='text-5xl font-bold'>Not Found</h1>
                        <p className='py-6'>Could not find requested resource</p>
                        <Link href='/'>Return Home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
