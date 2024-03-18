export enum Slices {
  Catalog = 'catalog'
}

export interface CatalogItemProps {
  id: number;
  sizes: Array<string>;
  img: string;
  name: string;
  price: number;
}

export interface CatalogProps {
  catalogItems: Array<CatalogItemProps>;
  filter: {
    sizes: Array<string>;
  };
}