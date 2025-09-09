import { useState } from 'react';

const portfolioList = [
    {
        name: 'feelsafe-backend',
        description: 'securing your notes',
        img: 'https://github.com/onuraltuntasb/feelsafe-backend/raw/main/readme-assets/landing.png',
        category: 'backend',
        language: 'java',
        framework: 'spring-boot',
        link: 'https://github.com/onuraltuntasb/feelsafe-backend',
        new: false
    },
    {
        name: 'feelsafe-ui',
        description: 'securing your notes',
        img: 'https://github.com/onuraltuntasb/feelsafe-ui/raw/main/readme-assets/dashboard.png',
        category: 'frontend',
        language: 'typescript',
        framework: 'react',
        link: 'https://github.com/onuraltuntasb/feelsafe-ui',
        new: false
    },
    {
        name: 'ticket-generator-backend',
        description: 'generate event and tickets',
        img: 'https://github.com/onuraltuntasb/ticket-generator-ui/raw/main/readme-assets/ticket-generator-landing.png',
        category: 'backend',
        language: 'java',
        framework: 'spring-boot',
        link: 'https://github.com/onuraltuntasb/spring_ticket_generator',
        new: false
    },
    {
        name: 'ticket-generator-ui',
        description: 'generate event and tickets',
        img: 'https://github.com/onuraltuntasb/ticket-generator-ui/raw/main/readme-assets/ticket-generator-register.png',
        category: 'frontend',
        language: 'js',
        framework: 'react',
        link: 'https://github.com/onuraltuntasb/ticket-generator-ui',
        new: false
    },
    {
        name: 'e-commerce-ui',
        description: 'sveltekit-go e-commerce',
        img: 'https://github.com/onuraltuntasb/e-commerce/raw/backend/readme-assets/e-commerce-product-list.png',
        category: 'frontend',
        language: 'js',
        framework: 'svelte',
        link: 'https://github.com/onuraltuntasb/e-commerce/tree/frontend',
        new: false
    },
    {
        name: 'e-commerce-backend',
        description: 'sveltekit-go e-commerce',
        img: 'https://github.com/onuraltuntasb/e-commerce/raw/backend/readme-assets/e-commerce-account.png',
        category: 'backend',
        language: 'golang',
        framework: 'no framework',
        link: 'https://github.com/onuraltuntasb/e-commerce',
        new: false
    },
    {
        name: 'springblog',
        description: 'simple blog app',
        img: 'https://github.com/onuraltuntasb/springblog/raw/master/readme-assets/springblog-postman.png',
        category: 'backend',
        language: 'java',
        framework: 'spring-boot',
        link: 'https://github.com/onuraltuntasb/springblog',
        new: false
    },
    {
        name: 'chatapp',
        description: 'simple chatapp',
        img: 'https://github.com/onuraltuntasb/springblog/raw/master/readme-assets/springblog-postman.png',
        category: 'backend',
        language: 'java',
        framework: 'spring-boot',
        link: 'https://github.com/onuraltuntasb/chatapp',
        new: false
    },
    {
        name: 'library-management',
        description: 'swing desktop library management app',
        img: 'https://github.com/onuraltuntasb/springblogmicroservice-parent/raw/main/readme-assets/springblogmicroservice.png',
        category: 'desktop',
        language: 'java',
        framework: 'swing',
        link: 'https://github.com/onuraltuntasb/LibraryManagement',
        new: false
    },
    {
        name: 'bookings',
        description: 'golang backend monolith with templates',
        img: 'https://github.com/onuraltuntasb/bookings/raw/main/readme-assets/bookings-major.png',
        category: 'backend',
        language: 'golang',
        framework: 'no framework',
        link: 'https://github.com/onuraltuntasb/bookings',
        new: false
    },
    {
        name: 'spring-blog-microservice',
        description: 'spring blog microservice version',
        img: 'https://github.com/onuraltuntasb/springblogmicroservice-parent/raw/main/readme-assets/springblogmicroservice.png',
        category: 'backend',
        language: 'java',
        framework: 'spring-boot',
        link: 'https://github.com/onuraltuntasb/springblogmicroservice-parent',
        new: false
    },
    {
        name: 'fakestickernet',
        description: 'e-commerce frontend ui',
        img: 'https://user-images.githubusercontent.com/53194850/91433684-55187680-e86c-11ea-8bad-738311257ec6.PNG',
        category: 'frontend',
        language: 'js',
        framework: 'react',
        link: 'https://github.com/onuraltuntasb/fakestickernet',
        new: false
    },
    {
        name: 'fakestickernet',
        description: 'csv filter frontend',
        img: 'https://user-images.githubusercontent.com/53194850/95687467-7b238b80-0c0c-11eb-8dd8-26db822e004f.PNG',
        category: 'fullstack',
        language: 'js',
        framework: 'react',
        link: 'https://github.com/onuraltuntasb/runnersleaderboard',
        new: false
    },
    {
        name: 'polynote',
        description: 'mobile note application like trello.',
        img: 'https://user-images.githubusercontent.com/53194850/91478853-41d7cc00-e8a9-11ea-8431-a939864c4330.jpg',
        category: 'mobile',
        language: 'js',
        framework: 'react-native',
        link: 'https://github.com/onuraltuntasb/polynotes',
        new: false
    },
    {
        name: 'esogu-dailynotes',
        description: 'mobile chatapp',
        img: 'https://user-images.githubusercontent.com/53194850/91460195-34faae80-e890-11ea-8c6d-fd4c6c043523.jpg',
        category: 'fullstack',
        language: 'kotlin',
        framework: 'android',
        link: 'https://github.com/onuraltuntasb/esogu-dailynotes',
        new: false
    },
    {
        name: 'bus-ticket-automation',
        description: 'ticket automation website with Asp.net',
        img: 'https://user-images.githubusercontent.com/53194850/91488031-60dd5a80-e8b7-11ea-895d-09a3e9f8329f.PNG',
        category: 'fullstack',
        language: 'c#',
        framework: 'asp.net',
        link: 'https://github.com/onuraltuntasb/bus-ticket',
        new: false
    },
    {
        name: 'learn-german-daily',
        description: 'learn 10 random german words daily.',
        img: 'https://camo.githubusercontent.com/46a31406d9367dda389ebc8f69f03cc9f3feaf587b5e3f62cbdeec293b3dd3cc/68747470733a2f2f706c61792d6c682e676f6f676c6575736572636f6e74656e742e636f6d2f7174616f4a315f6a4e46314851505f41375f744d5055654734356e784841535f53426f383869305a426d7075546b384e33696d706d6b67766a517442656239544378493d773732302d683331302d7277',
        category: 'mobile',
        language: 'kotlin',
        framework: 'android',
        link: 'https://github.com/onuraltuntasb/learn-german-daily',
        new: false
    },
    {
        name: 'bouncy-balls',
        description: 'simple p5.js example',
        img: 'https://user-images.githubusercontent.com/53194850/91456179-a3893d80-e88b-11ea-8479-1a96989d7a48.PNG',
        category: 'frontend',
        language: 'js',
        framework: 'no framework',
        link: 'https://github.com/onuraltuntasb/bouncy-balls',
        new: false
    },
    {
        name: 'polynotes-desktop',
        description: 'workflow web-app like Trello',
        img: 'https://user-images.githubusercontent.com/53194850/91444250-248d0880-e87d-11ea-8af5-bf6b733654c6.PNG',
        category: 'desktop',
        language: 'js',
        framework: 'react-electron',
        link: 'https://github.com/onuraltuntasb/polynotes-desktop',
        new: false
    },
    {
        name: 'go-todo-terminal',
        description: 'golang terminal todo app',
        img: 'https://github.com/onuraltuntasb/go-todo-terminal/raw/main/readme-assets/gotodo.png',
        category: 'terminal',
        language: 'golang',
        framework: 'no framewokr',
        link: 'https://github.com/onuraltuntasb/go-todo-terminal',
        new: false
    },
    {
        name: 'ortalama-hesapla',
        description: 'calculating average lecture notes android app',
        img: 'https://user-images.githubusercontent.com/53194850/91463698-5f4e6b00-e894-11ea-8b11-a33a8e56f6f6.jpg',
        category: 'mobile',
        language: 'kotlin',
        framework: 'android',
        link: 'https://github.com/onuraltuntasb/ortalama-hesapla',
        new: false
    },
    {
        name: 'check-card',
        description: 'understands which card you using.',
        img: 'https://user-images.githubusercontent.com/53194850/91496822-807b7f80-e8c5-11ea-9830-92ba5ecde4bc.PNG',
        category: 'frontend',
        language: 'c#',
        framework: 'asp.net',
        link: 'https://github.com/onuraltuntasb/check-card',
        new: false
    },
    {
        name: 'shopping-asp',
        description: 'movie shop web app.',
        img: 'https://user-images.githubusercontent.com/53194850/91486894-93865380-e8b5-11ea-9de4-04fd82d5d731.PNG',
        category: 'fullstack',
        language: 'c#',
        framework: 'asp.net',
        link: 'https://github.com/onuraltuntasb/shopping-asp',
        new: false
    },
    {
        name: 'headhunter',
        description: 'find employee with headhunter easily.',
        img: 'https://user-images.githubusercontent.com/53194850/91481846-bad92280-e8ad-11ea-8218-b78f63661c50.png',
        category: 'fullstack',
        language: 'c#/js/python',
        framework: 'asp.net',
        link: 'https://github.com/onuraltuntasb/headhunter',
        new: false
    }
];

const Portfolio = () => {
    const [imgSrc, setImgSrc] = useState('');
    return (
        <div id='myPortfolioId'>
            <div className='items-center text-center'>
                <h1 className='text-2xl'>----- My Portfolio -----</h1>
                <p className='text-xl'>
                    There are other projects of mine but they either client projects or I have not access to those
                    projects
                </p>
            </div>

            <div className='grid grid-cols-1 justify-items-center gap-6 pt-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
                {portfolioList.map((el, idx) => (
                    <div
                        className='cursor-pointer'
                        onClick={() => {
                            window.open(el.link, '_blank');
                        }}
                        key={idx}>
                        <div className='card h-75 w-60 border border-gray-300 bg-base-100 drop-shadow-lg'>
                            <figure>
                                <img width={300} height={100} src={el.img} alt={el.name} />
                            </figure>
                            <div className='card-body'>
                                <h2 className='card-title'>
                                    {el.name}
                                    {el.new && <div className='badge badge-secondary'>NEW</div>}
                                </h2>
                                <p>{el.description}</p>
                                <div className='card-actions justify-end'>
                                    <div className='badge badge-outline'>{el.category}</div>
                                    <div className='badge badge-outline'>{el.language}</div>
                                    <div className='badge badge-outline'>{el.framework}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
