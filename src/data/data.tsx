import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
// import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/background_1.png';
import porfolioImage1 from '../images/eleanor.jpg';
import porfolioImage2 from '../images/bittersweet.jpg';
import porfolioImage3 from '../images/macdon.jpg';
import porfolioImage4 from '../images/portraitbridal.jpg';
import porfolioImage5 from '../images/mensalliance.jpg';
import porfolioImage6 from '../images/wheatly.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
// import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
// import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
// import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Rabab Zakir.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:text-lg lg:prose-lg font-serif">
        <strong className="text-stone-200 text-2xl">Web Developer</strong>
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I design and develop custom websites for businesses and startups using Craft CMS. With a focus on clean design, flexible content management, and performance, I create tailored digital experiences that help clients stand out and grow online. Whether launching a new site or refining an existing one, I work closely with each client to ensure the final product meets their goals and delivers lasting value.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Use this bio section as your way of describing yourself and saying what you do, what technologies you like
  to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing
  in.`,
  aboutItems: [
    { label: 'Location', text: 'Victoria, BC', Icon: MapIcon },
    { label: 'Age', text: '29', Icon: CalendarIcon },
    { label: 'Nationality', text: 'Canadian / Irish', Icon: FlagIcon },
    { label: 'Interests', text: 'Motorcycles, Muay Thai, Banjos', Icon: SparklesIcon },
    { label: 'Study', text: 'University of Victoria', Icon: AcademicCapIcon },
    { label: 'Employment', text: 'Instant Domains, inc.', Icon: BuildingOffice2Icon },
  ],
};

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Eleanor Crook Foundation',
    description: 'Developed a content management system using Craft CMS, enabling flexible and user-friendly backend control. Implemented Alpine.js on the frontend to add lightweight, dynamic interactions—such as a responsive header and smooth scroll behavior—without compromising performance.',
    url: 'https://eleanorcrookfoundation.org/',
    image: porfolioImage1,
  },
  {
    title: 'Bitter Sweet Creative',
    description: '',
    url: 'https://www.bittersweetcreative.com/',
    image: porfolioImage2,
  },
  {
    title: 'Macdon',
    description: '',
    url: 'https://www.macdon.com/',
    image: porfolioImage3,
  },
  {
    title: 'Portrait Bridal',
    description: '',
    url: 'https://portraitbridal.com/en/',
    image: porfolioImage4,
  },
  {
    title: 'Mens Alliance Tribe',
    description: '',
    url: 'https://www.mensalliancetribe.com/',
    image: porfolioImage5,
  },
  {
    title: 'Wheatly Eye Care',
    description: '',
    url: 'https://www.wheatlyneyecare.com/',
    image: porfolioImage6,
  },
  {
    title: 'TMA-UK',
    description: 'Give a short description of your project here.',
    url: 'https://tma-uk.org/',
    image: porfolioImage7,
  },
  // {
  //   title: 'Project title 8',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage8,
  // },
  // {
  //   title: 'Project title 9',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage9,
  // },
  // {
  //   title: 'Project title 10',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage10,
  // },
  // {
  //   title: 'Project title 11',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage11,
  // },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2021',
    location: 'Government College',
    title: 'Bachelors of Engineering',
    content: <p></p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'April 2021 - Present',
    location: 'Amici Infotech',
    title: 'Senior Developer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'rabab@gmail.com',
      href: 'mailto:rabab@gmail.com',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Rabab Zakir',
      href: 'https://github.com/tbakerx',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  { label: 'Github', Icon: GithubIcon, href: 'https://github.com/tbakerx' },
  { label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/' },
];
