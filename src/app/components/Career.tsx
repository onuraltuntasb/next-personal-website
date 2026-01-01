import React from 'react';

interface CareerStep {
    title: string;
    description: string;
    location: string;
    img: string;
    content: string;
    new: boolean;
}

const Career = () => {
    const pagesBasePath = process.env.NEXT_PUBLIC_PAGES_BASE_PATH;

    const careerStepList: CareerStep[] = [
        {
            title: 'Osmangazi University',
            description: 'B.S. in Computer Science, earned May 2021',
            location: 'Eskişehir, Turkey',
            img: `${pagesBasePath}/assets/images/university.png`,
            content: `During my four years of study, my computer science professors helped me understand engineering principles and how to navigate real-world challenges through various group projects. It wasn’t always about best practices or the ideal education, but the real world isn’t that different. They made me realize how I could build myself not only for the tech sector but for the world in general.

            Especially valuable were the professors who run their own software companies; they gave us genuine insight into how the tech business actually operates. I also gained my first job experience as an intern in the IT department of Eczacıbaşı. It was a graduation requirement, but it was also exciting to get a glimpse of the corporate world.`,
            new: false
        },
        {
            title: 'Herogı Software',
            description: 'Software Engineer Intern',
            location: 'Istanbul, Turkey (remote)',
            img: `${pagesBasePath}/assets/images/herogi.png`,
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
            img: `${pagesBasePath}/assets/images/herogi.png`,
            content: `It was my first software development job. I spent my time trying to understand how complex architectures work and how to build them from smaller pieces. My main responsibility was migrating a legacy Angular UI to React.js, so I started my development career as a frontend developer.

            Although my focus was on the frontend, I improved my backend skills by working with parts of the architecture—maintaining systems, fixing issues, testing, and creating simple components.`,
            new: false
        }
        // {
        //     title: 'Freelancer',
        //     description: 'Freelance Fullstack Software Engineer',
        //     location: 'Istanbul, Turkey (remote)',
        //     img: `${pagesBasePath}/assets/images/freelancer.png`,
        //     content: `I decided to improve my backend skills by learning how to design scalable applications, microservices, and cloud computing. During this time, I worked as a freelancer on contracted projects. I focused more on understanding key concepts than on programming itself, aiming to grasp the core aspects of modern product development.`,
        //     new: true
        // }
    ];

    return (
        <div data-aos='fade-up' className='container mx-auto' id='myJourneyId'>
            <div className='items-center text-center'>
                <h1 className='text-2xl'>----- My Journey -----</h1>
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
