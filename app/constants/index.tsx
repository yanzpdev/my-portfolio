import { FaFacebook, FaLinkedin, FaGithub, FaHackerrank, FaPhoneSquareAlt, FaFacebookMessenger } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Image from "next/image";

export const techStack = [
  {name: 'html', 
   alt:'HTML',
   icon: <Image src={`/assets/html.svg`} alt='HTML' className='drop-shadow-lg h-16 w-16 pointer-events-none rounded-xl select-none' height={300} width={300} draggable={false}/>
  },
  {name: 'css', 
   alt:'CSS',
  icon: <Image src={`/assets/css.svg`} alt='CSS' className='drop-shadow-lg h-16 w-16 pointer-events-none rounded-xl select-none' height={300} width={300} draggable={false}/>
  },
  {name: 'javascript', 
   alt:'JavaScript',
   icon: <Image src={`/assets/javascript.svg`} alt='JavaScript' className='drop-shadow-lg h-16 w-16 pointer-events-none rounded-xl select-none' height={300} width={300} draggable={false}/>
  },
  {name: 'typescript', 
   alt:'TypeScript',
   icon: <Image src={`/assets/typescript.svg`} alt='TypeScript' className='drop-shadow-lg h-16 w-16 pointer-events-none rounded-xl select-none' height={300} width={300} draggable={false}/>
  },
  {name: 'php', 
    alt:'PHP',
    icon: <Image src={`/assets/php.svg`} alt='PHP' className='drop-shadow-lg h-16 bg-[#787cb4] max-w-[64px] w-16 pointer-events-none rounded-xl select-none' height={300} width={300} draggable={false}/>
   },
  {name: 'tailwind', 
   alt: 'Tailwind',
   icon: <Image src={`/assets/tailwind.svg`} alt='Tailwind' className='drop-shadow-lg h-16 w-16 pointer-events-none rounded-xl select-none' height={300} width={300} draggable={false}/>
  },
  {name: 'react', 
   alt: 'React',
   icon: <Image src={`/assets/react.svg`} alt='React' className='drop-shadow-lg h-16 w-16 pointer-events-none rounded-xl select-none' height={300} width={300} draggable={false}/>
  },
  {name: 'next', 
   alt: 'Next.js',
   icon: <Image src={`/assets/nextjs.svg`} alt='Next.js' className='drop-shadow-lg h-16 w-16 pointer-events-none rounded-xl select-none' height={300} width={300} draggable={false}/>
  },
  {name: 'expo', 
   alt: 'Expo',
   icon: <Image src={`/assets/client.svg`} alt='Expo' className='drop-shadow-lg h-16 w-16 bg-white p-2 pointer-events-none rounded-xl select-none' height={300} width={300} draggable={false}/>
  },
  {name: 'laravel', 
    alt: 'Laravel',
    icon: <Image src={`/assets/laravel.svg`} alt='Laravel' className='drop-shadow-lg h-16 bg-white p-2 w-16 pointer-events-none rounded-xl select-none' height={300} width={300} draggable={false}/>
   },
  {name: 'mysql', 
   alt: 'MySQL',
   icon: <Image src={`/assets/mysql.svg`} alt='MySQL' className='drop-shadow-lg h-16 w-16 bg-white p-2 pointer-events-none rounded-xl select-none' height={300} width={300} draggable={false}/>
  },
  // {name: 'postgresql', 
  //   alt: 'PostgreSQL',
  //   icon: <Image src={`/assets/postgresql.svg`} alt='PostgreSQL' className='drop-shadow-lg h-16 p-2 bg-white w-16 pointer-events-none rounded-xl select-none' height={300} width={300} draggable={false}/>
  //  },
  {name: 'mongodb',   
   alt: 'MongoDB',
   icon: <Image src={`/assets/mongodb.svg`} alt='MongoDB' className='drop-shadow-lg h-16 w-16 pointer-events-none rounded-xl select-none' height={300} width={300} draggable={false}/>
  },
  {name: 'git',   
    alt: 'Git',
    icon: <Image src={`/assets/git.svg`} alt='Git' className='drop-shadow-lg h-16 bg-white p-2 w-16 pointer-events-none rounded-xl select-none' height={300} width={300} draggable={false}/>
   },
   {name: 'docker',   
    alt: 'Docker',
    icon: <Image src={`/assets/docker.svg`} alt='Docker' className='drop-shadow-lg h-16 bg-white p-1 w-16 pointer-events-none rounded-xl select-none' height={300} width={300} draggable={false}/>
   },
];

export const summary = [
  {name: 'Web Development', 
   desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio laborum aliquid molestiae ullam alias. Animi nobis placeat cupiditate nemo inventore ipsam, at velit qui perspiciatis repudiandae nulla dignissimos amet vitae', 
  },
  {name: 'Mobile Development', 
   desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio laborum aliquid molestiae ullam alias. Animi nobis placeat cupiditate nemo inventore ipsam, at velit qui perspiciatis repudiandae nulla dignissimos amet vitae', 
  }
];


export const socials = [
  {name: 'facebook', link: 'https://www.facebook.com/yanzxcasdqwe/', icon: <FaFacebook size={40} className="text-slate-800 xl:hover:scale-110 duration-200 dark:text-white"/>},
  {name: 'github', link: 'https://github.com/yanzpdev', icon: <FaGithub size={40} className="text-slate-800 xl:hover:scale-110 duration-200 dark:text-white"/>},
  {name: 'linkedin', link: 'https://www.linkedin.com/in/arris-ian-peralta-95a29b232/', icon: <FaLinkedin size={40} className="text-slate-800 xl:hover:scale-110 duration-200 dark:text-white"/>},
  // {name: 'hackerrank', link: 'https://www.hackerrank.com/profile/yanzxcasdqwe', icon: <FaHackerrank size={40} className="text-slate-800 dark:text-white self-start"/>}
];

export const experience = [
  // {
  //   name: 'Blaze Kultura', 
  //   title: 'Production Assistant',
  //   address: '351 Zone 1, Barangay Guindapunan, Palo, Leyte',
  //   description: 'Shot clips and assisted in the production of films for wedding, debuts, birthdays, and other special events.',
  //   logo: '/assets/bk.png', 
  //   elements: '',
  //   active: false,
  //   date: '2021-2022'
  // },
  {
    name: 'DevTac CRM Inc.', 
    title: 'Software Developer',
    address: 'Barangay 58 Gaspay Compound, Sagkahan Dist., Tacloban City, Leyte',
    description: 'Created and implemented tailored solutions, workflows, and automations utilizing the Zoho platform together with their native scripting language Zoho Deluge and other web technologies (PHP, JavaScript) to optimize corporate and business processes for clients.',
    logo: '/assets/devtac.png', 
    elements: '',
    active: false,
    date: '2022-2023'
  },
  {
    name: 'Rameses Systems Inc.', 
    title: 'Web Developer',
    address: 'Ground floor, Unit 105, Mahogany Place, Pope John Paul II Ave, Kasambagan, Cebu City, Cebu',
    description: 'Working on the development and deployment of the ETRACS (Enhanced Tax Revenue Assessment and Collection System) and its services on web and mobile platforms.',
    logo: '/assets/rameseslogo.png', 
    elements: '',
    active: true,
    date: '2023-present'
  },
];

export const projects = [
  {
    name: 'E-TRACS Web', 
    demo: 'https://etracs.org', 
    sourcecode: '', 
    actions: ['Link'], 
    description: "Official website for E-TRACS (Enhanced Tax Revenue and Collection System)." , 
    images: [
      {id: 1,  src:'/assets/etracsproj/1.png'},
      {id: 2,  src:'/assets/etracsproj/2.png'},
      {id: 3,  src:'/assets/etracsproj/3.png'},
      {id: 4,  src:'/assets/etracsproj/4.png'},
      {id: 5,  src:'/assets/etracsproj/5.png'},
      {id: 6,  src:'/assets/etracsproj/6.png'},
      {id: 7,  src:'/assets/etracsproj/7.png'},
    ], 
    technologies: ['React', 'Tailwind']
  },
  {  
    name: 'Filipizen', 
    demo: 'https://filipizen-clone.vercel.app', 
    sourcecode: '', 
    actions: ['Link'], 
    description: 'A rework of the Filipizen website.', 
    images: [
      {id: 1, src:'/assets/filipizenproj/filipizen.png'},
      {id: 2, src:'/assets/filipizenproj/filipizen.png'},
      {id: 3, src:'/assets/filipizenproj/filipizen.png'},
      {id: 4, src:'/assets/filipizenproj/filipizen.png'},
    ],  
    technologies: ['Next.js', 'NextAuth.js', 'Tailwind', 'TypeScript', 'Material UI', 'MongoDB', 'Google Cloud Console']
  },
  {  
    name: 'Rendered Collectives', 
    demo: 'https://renderedcollectives.vercel.app', 
    sourcecode: 'https://github.com/yanzpdev/rendered-collectives-landing-page', 
    actions: ['Demo', 'Code'], 
    description: 'A portfolio website for Rendered Collectives - a Leyte based photography team from Region VIII in the Philippines.', 
    images: [
      {id: 1, src:'/assets/renderedproj/1.png'},
      {id: 2, src:'/assets/renderedproj/2.png'},
      {id: 3, src:'/assets/renderedproj/3.png'},
    ],  
    technologies: ['Next.js', 'Tailwind']
  }
];

export const contacts = [
  {name: 'number', icon: <FaPhoneSquareAlt className="text-[#2cd46b] dark:text-white" size={24} />, display: '+639762044018 / +639667954151'},
  {name: 'email', icon: <SiGmail className="text-red-600 dark:text-white" size={24} />, display: 'peraltaarris07@gmail.com'},
  {name: 'messenger', icon: <FaFacebookMessenger className="text-[#0888ff] dark:text-white" size={24} />, display: 'Arris Ian Peralta'}
];