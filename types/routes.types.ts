export interface NavItem {
  name: string;
  path: string;
}

export interface Route extends NavItem {
  description?: string;
  meta?: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
}
