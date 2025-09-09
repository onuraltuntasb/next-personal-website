'use client';

import Career from './components/Career';
import Portfolio from './components/Portfolio';

export default function Home() {
    return (
        <div className='@container mx-auto px-6 py-6'>
            {/* hero section */}

            <div className='grid-col-6 @md:grid-col-12 gap-px-6 grid items-center text-center md:text-left'>
                <div className='col-start-1 col-end-4 @md:col-start-4 @md:col-end-8'>
                    <div>
                        <h1 className='text-5xl font-bold'>Software Engineer!</h1>
                        <p className='py-6 text-xl'>
                            Hey!👋I’m Onur and I’m a Software Engineer for over -4- years.
                            <br /> I’m currently working as a freelancer in Turkey.
                        </p>
                        {/* <button className='btn btn-primary'>Get Started</button> */}
                    </div>
                </div>
                <div className='col-start-4 col-end-6 hidden @md:col-start-8 @md:col-end-12 @md:block'>
                    <img
                        src={'https://miro.medium.com/v2/resize:fill:176:176/1*CkAvM56aWhs_7EfsvRxlOw.png'}
                        width={250}
                        height={250}
                        alt='Osmangazi University'
                        className='rounded shadow'
                    />
                </div>
            </div>

            <Career />
            <Portfolio />
        </div>
    );
}
