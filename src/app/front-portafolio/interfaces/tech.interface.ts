export interface TechItem {
  name: string;
  svg: string;
}

export interface TechCategory {
  title: string;
  items: TechItem[];
}
