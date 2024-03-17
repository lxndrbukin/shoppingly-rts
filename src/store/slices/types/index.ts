export enum Slices {
  Catalog = 'catalog'
}

export interface CatalogItem {
  id: number;
  sizes: Array<string>;
  img: string;
  name: string;
  price: number;
}

export interface Catalog {
  catalogItems: Array<CatalogItem>;
}