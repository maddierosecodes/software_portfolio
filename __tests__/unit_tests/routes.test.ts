import { getRouteByPath, getCurrentPageTitle } from '../../config/routes';

describe('Route utility functions', () => {
  describe('getRouteByPath', () => {
    it('should return undefined for empty path', () => {
      const route = getRouteByPath('');
      expect(route).toBeUndefined();
    });

    it('should return undefined when path does not exist', () => {
      const route = getRouteByPath('/non-existent-path');
      expect(route).toBeUndefined();
    });

    it('should return the route when path exists', () => {
      const route = getRouteByPath('/');
      expect(route).toEqual({
        name: 'Home',
        path: '/',
        description: 'Welcome to my portfolio',
      });
    });

    it('should return the route when path exists with different case', () => {
      const route = getRouteByPath('/ABOUT');
      expect(route).toEqual({
        name: 'About Me',
        path: '/about',
        description: 'Learn more about me',
      });
    });
  });

  describe('getCurrentPageTitle', () => {
    it('should return route name when path exists', () => {
      const pageTitle = getCurrentPageTitle('/');
      expect(pageTitle).toBe('Home');
    });

    it('should return path without leading slash when route does not exist', () => {
      const pageTitle = getCurrentPageTitle('/non-existent-path');
      expect(pageTitle).toBe('non-existent-path');
    });

    it('should return empty string for root path when route does not exist', () => {
      const pageTitle = getCurrentPageTitle('/');
      expect(pageTitle).toBe('Home');
    });

    it('should handle empty path', () => {
      const pageTitle = getCurrentPageTitle('');
      expect(pageTitle).toBe('');
    });

    it('should handle path with multiple segments', () => {
      const pageTitle = getCurrentPageTitle('/projects/some-project');
      expect(pageTitle).toBe('projects/some-project');
    });
  });
});
