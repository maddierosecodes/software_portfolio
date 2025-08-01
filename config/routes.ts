import { Route } from '../types/routes.types';

export const routes: Route[] = [
  {
    name: 'Home',
    path: '/',
    description: 'Welcome to my portfolio',
  },
  {
    name: 'About Me',
    path: '/about',
    description: 'Learn more about me',
  },
  {
    name: 'My Projects',
    path: '/projects',
    description: 'View my portfolio projects',
  },
  {
    name: 'Blog',
    path: '/blog',
    description: 'Read my latest blog posts',
  },
  {
    name: 'Games',
    path: '/games',
    description: 'Play my interactive games',
  },
  {
    name: 'Contact Me',
    path: '/contact',
    description: 'Get in touch with me',
  },
];

// Navigation routes excluding coming soon pages
export const navigationRoutes: Route[] = routes.filter(
  (route) => route.path !== '/blog' && route.path !== '/games',
);

export const getRouteByPath = (path: string): Route | undefined => {
  return routes.find(
    (route) => route.path.toLowerCase() === path.toLowerCase(),
  );
};

export const getCurrentPageTitle = (path: string): string => {
  const route = getRouteByPath(path);
  return route?.name || path.slice(1);
};
