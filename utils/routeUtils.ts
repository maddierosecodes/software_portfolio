import { Route } from '../types/routes.types';
import { routes } from '../config/routes';

/**
 * Gets a route by its path
 * @param path The path to search for
 * @returns The matching route or undefined if not found
 */
export const getRouteByPath = (path: string): Route | undefined => {
  return routes.find(
    (route) => route.path.toLowerCase() === path.toLowerCase(),
  );
};

/**
 * Gets the current page title based on the path
 * @param path The current path
 * @returns The page title or the path without leading slash if no route found
 */
export const getCurrentPageTitle = (path: string): string => {
  const route = getRouteByPath(path);
  return route?.name || path.slice(1);
};
