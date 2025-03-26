export interface Route {
  name: string;
  path: string;
  description?: string;
}

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
    name: 'Contact Me',
    path: '/contact',
    description: 'Get in touch with me',
  },
];

export const getRouteByPath = (path: string): Route | undefined => {
  return routes.find((route) => route.path === path);
};

export const getCurrentPageTitle = (path: string): string => {
  const route = getRouteByPath(path);
  return route?.name || path.slice(1);
};
