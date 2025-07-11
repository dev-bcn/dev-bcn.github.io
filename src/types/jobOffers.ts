export interface Company {
  id: string;
  name: string;
  url: string;
  logo: string;
  description: string;
  twitter?: string;
  linkedin?: string;
  offers: Offer[];
}

export interface Offer {
  id: string;
  title: string;
  location: "Hybrid" | "Remote" | "Onsite";
  text: string;
  url: string;
}

export interface CompanyProps {
  company: Company;
}
