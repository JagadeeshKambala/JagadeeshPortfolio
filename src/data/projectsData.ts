import { tr } from "framer-motion/client";
import React from "react";

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  featured: boolean;
  demoUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A modern, Mobile landing page inspired by Apple’s clean and minimal design aesthetic. Built to elegantly showcase the product.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    image: 'https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    featured: true,
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 2,
    title: 'Modern Product Landing Page',
    description: 'A modern, Desktop landing page inspired by Apple’s clean and minimal design aesthetic. Built to elegantly showcase a Mobile product',
    technologies: ['React.js', 'Tailwind CSS', 'TypeScript'],
    image: 'src/MobileImage.jpg',
    featured: true,
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com/JagadeeshKambala/Modern-Product-Landing-Page.git',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A weather dashboard that provides current weather information and forecasts for locations worldwide.',
    technologies: ['JavaScript', 'OpenWeather API', 'Chart.js', 'HTML/CSS'],
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    featured: true,
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 4,
    title: 'Modern Product Landing Page',
    description: 'A modern, Desktop landing page inspired by Apple’s clean and minimal design aesthetic. Built to elegantly showcase a Mobile product',
    technologies: ['React.js', 'Tailwind CSS', 'TypeScript'],
    image: 'src/MobileImage.jpg',
    featured: false,
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com/JagadeeshKambala/Modern-Product-Landing-Page.git',
  },
  {
    id: 5,
    title: 'Fitness Tracker',
    description: 'A mobile-first fitness tracking application for logging workouts, tracking progress, and setting fitness goals.',
    technologies: ['React Native', 'GraphQL', 'Apollo Client', 'MongoDB'],
    image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    featured: false,
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 6,
    title: 'Movie Database',
    description: 'A database application for browsing movies, reading reviews, and tracking watched movies and watchlists.',
    technologies: ['React', 'Redux', 'TMDb API', 'Styled Components'],
    image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    featured: false,
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 7,
    title: 'Budget Planner',
    description: 'A personal finance application for budgeting, expense tracking, and financial goal setting.',
    technologies: ['Angular', 'TypeScript', 'Firebase', 'Chart.js'],
    image: 'https://images.pexels.com/photos/5466810/pexels-photo-5466810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    featured: false,
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 8,
    title: 'Social Media Dashboard',
    description: 'A dashboard for managing and analyzing social media accounts across multiple platforms.',
    technologies: ['React', 'Node.js', 'Express', 'Social Media APIs'],
    image: 'https://images.pexels.com/photos/5967751/pexels-photo-5967751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    featured: false,
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 9,
    title: 'Real Estate Listings',
    description: 'A real estate platform for browsing property listings, with search filters and interactive maps.',
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Google Maps API'],
    image: 'https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    featured: false,
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
];

export const featuredProjects = projects.filter(project => project.featured);