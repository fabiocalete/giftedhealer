export interface Service {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  icon?: string;
  children?: Service[];
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

export interface NavItem {
  id: string;
  label: string;
  icon: string;
  targetSection: string;
  href?: string;
}
