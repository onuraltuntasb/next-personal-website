'use client';

export default function Home() {
    return (
        <div className='container mx-auto px-4 py-8'>
            {/* hero section */}
            <div className='hero h-[400px] bg-base-100'>
                <div className='hero-content flex-col lg:flex-row-reverse'>
                    <img
                        src={'/assets/images/university.jpg'}
                        width={300}
                        alt='Osmangazi University'
                        className='rounded shadow'
                    />
                    <div>
                        <h1 className='text-5xl font-bold'>Software Engineer!</h1>
                        <p className='py-6 text-xl'>
                            Hey!👋I’m Onur and I’m a Software Engineer for over -3- years. I’m currently working as a
                            freelancer in Turkey.
                        </p>
                        <button className='btn btn-primary'>Get Started</button>
                    </div>
                </div>
            </div>

            {/* carreer section */}
            <div className='items-center text-center'>
                <h1 className='text-2xl'>----- My Journey -----</h1>
                <p className='text-xl'>
                    Hey!👋I’m Onur and I’m a Software Engineer for over -4- years. I’m currently working as a freelancer
                    in Turkey.
                </p>
            </div>
            <div className='grid-col-12 grid gap-y-12 pt-6'>
                <ul className='steps steps-vertical'>
                    <li className='step step-primary !text-left'>
                        {/* first part */}{' '}
                        <div className='col-start-4 col-end-6'>
                            <img
                                src={'/assets/images/university.jpg'}
                                width={300}
                                height={300}
                                alt='Osmangazi University'
                                className='rounded shadow'
                            />
                        </div>
                        <div className='col-start-6 col-end-12 px-3'>
                            <h1 className='text-xl'>Osmangazi University</h1>
                            <p>B.S. in Computer Science, earned May 2021</p>
                            <p>Eskişehir, Turkey</p>
                            <p>
                                In my four years, my computer science professors helped me to understand engineering
                                principles and how to deal with real world with all those group projects. It was not
                                best practiceses or best education but real world is not much that different that. They
                                made me realise how i could build my self in this world not just for tech sector.
                                Especially, some of our professors who have their own software company they really
                                helped us to understand how tech business works actually. I had my first job experience
                                as intern in IT departent of Eczacıbaşı . It was necessary to graduate and it was fun to
                                see corparate world
                            </p>
                        </div>
                    </li>
                    <li className='step step-primary !text-left'>
                        {' '}
                        {/* second part */}
                        <div className='col-start-4 col-end-6'>
                            <img
                                src={'/assets/images/university.jpg'}
                                width={300}
                                height={300}
                                alt='Osmangazi University'
                                className='rounded shadow'
                            />
                        </div>
                        <div className='col-start-6 col-end-12 px-3'>
                            <h1 className='text-xl'>Herogı Software</h1>
                            <p>Software Engineer Intern</p>
                            <p>Istanbul,Turkey (remote)</p>
                            <p>
                                It was my first software development job. I passed my time trying to understand how
                                complex architectures works and how to build them from small piecies. My main job was
                                migrate to legacy angular ui to react.js and yes, i started to development as a frontend
                                dev. I wanted to learn both parts of the development process frontend and backend but i
                                have not that much experience for backend in that time so i just observed backend parts
                                of the work in my intern days.
                            </p>
                        </div>
                    </li>
                    <li className='step step-primary !text-left'>
                        {/* third part */}
                        <div className='col-start-4 col-end-6'>
                            <img
                                src={'/assets/images/university.jpg'}
                                width={300}
                                height={300}
                                alt='Osmangazi University'
                                className='rounded shadow'
                            />
                        </div>
                        <div className='col-start-6 col-end-12 px-3'>
                            <h1 className='text-xl'>Herogı Software</h1>
                            <p>Fullstack Software Engineer</p>
                            <p>Istanbul,Turkey (remote)</p>
                            <p>
                                I touched most parts of the project and learnt to many things about production ready
                                apps. Migration of legacy ui to new ui finished and new features finally added to new
                                ui. It was hard process to migrate one platform to completely new architecture but it
                                gave me some experience of reverse engineering. I also touched devops parts (docker,
                                CI/CD) and server managements(aws). Even if I not a fan of java world a learned a lot
                                about jvm because of core part of our product was running on scala/jvm
                            </p>
                        </div>
                    </li>
                    <li className='step step-primary !text-left'>
                        {/* fourth part */}
                        <div className='col-start-4 col-end-6'>
                            <img
                                src={'/assets/images/university.jpg'}
                                width={300}
                                height={300}
                                alt='Osmangazi University'
                                className='rounded shadow'
                            />
                        </div>
                        <div className='col-start-6 col-end-12 px-3'>
                            <h1 className='text-xl'>Freelancer</h1>
                            <p>Freelance Fullstack Software Engineer</p>
                            <p>Istanbul,Turkey (remote)</p>
                            <p>
                                After my seperation from herogi, i decided to improve my backend skills so i leaned how
                                to design scalable apps, microservices and cloud computing mostly. In this time i worked
                                as a freelancer in contracted jobs. I focused concepts more than programming in this
                                period to understand core parts of modern product development.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
