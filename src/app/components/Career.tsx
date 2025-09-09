import React from 'react';

interface CareerStep {
    title: string;
    description: string;
    location: string;
    img: string;
    content: string;
    new: boolean;
}

const careerStepList: CareerStep[] = [
    {
        title: 'Osmangazi University',
        description: 'B.S. in Computer Science, earned May 2021',
        location: 'Eskişehir, Turkey',
        img: '/assets/images/university.png',
        content: `In my four years, my computer science professors helped me to understand engineering
                principles and how to deal with real world with all those group projects. It was not
                best practiceses or best education but real world is not much that different that. They
                made me realise how i could build my self in this world not just for tech sector.
                Especially, some of our professors who have their own software company they really
                helped us to understand how tech business works actually. I had my first job experience
                as intern in IT departent of Eczacıbaşı . It was necessary to graduate and it was fun to
                see corparate world`,
        new: false
    },
    {
        title: 'Herogı Software',
        description: 'Software Engineer Intern',
        location: 'Istanbul, Turkey (remote)',
        img: '/assets/images/herogi.png',
        content: `It was my first software development job. I passed my time trying to understand how
                complex architectures works and how to build them from small piecies. My main job was
                migrate to legacy angular ui to react.js and yes, i started to development as a frontend
                dev. I wanted to learn both parts of the development process frontend and backend but i
                have not that much experience for backend in that time so i just observed backend parts
                of the work in my intern days.`,
        new: false
    },
    {
        title: 'Herogı Software',
        description: 'Fullstack Software Engineer',
        location: 'Istanbul, Turkey (remote)',
        img: '/assets/images/herogi.png',
        content: `I touched most parts of the project and learnt to many things about production ready
                apps. Migration of legacy ui to new ui finished and new features finally added to new
                ui. It was hard process to migrate one platform to completely new architecture but it
                gave me some experience of reverse engineering. I also touched devops parts (docker,
                CI/CD) and server managements(aws). Even if I not a fan of java world a learned a lot
                about jvm because of core part of our product was running on scala/jvm`,
        new: false
    },
    {
        title: 'Freelancer',
        description: 'Freelance Fullstack Software Engineer',
        location: 'Istanbul, Turkey (remote)',
        img: '/assets/images/freelancer.png',
        content: `After my seperation from herogi, i decided to improve my backend skills so i leaned how
                to design scalable apps, microservices and cloud computing mostly. In this time i worked
                as a freelancer in contracted jobs. I focused concepts more than programming in this
                period to understand core parts of modern product development.`,
        new: true
    }
];

const Career = () => {
    return (
        <div className='container mx-auto' id='myJourneyId'>
            {/* carreer section */}
            <div className='items-center text-center'>
                <h1 className='text-2xl'>----- My Journey -----</h1>
                {/* <p className='text-xl'>
                    Hey!👋I’m Onur and I’m a Software Engineer for over -4- years. I’m currently working as a freelancer
                    in Turkey.
                </p> */}
            </div>
            <div className='grid-col-12 grid gap-y-12 pt-6'>
                <ul className='steps steps-vertical'>
                    {careerStepList.map((step, idx) => (
                        <li key={idx} className='step !text-left'>
                            <div className='col-start-4 col-end-6 hidden p-3 md:block'>
                                <img src={step.img} width={180} alt={step.title} className='rounded shadow' />
                            </div>
                            <div className='col-start-6 col-end-12 px-3 !text-left'>
                                <h1 className='text-xl'>{step.title}</h1>
                                <p>{step.description}</p>
                                <p>{step.location}</p>
                                <p>{step.content}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Career;
