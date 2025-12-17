export interface StatItem {
  label: string;
  value: string;
  sublabel?: string;
}

export interface ProgramCategory {
  title: string;
  items: string[];
  color: string;
}

export interface BookCategory {
  title: string;
  count?: string;
}