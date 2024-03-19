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
    price: {
      min: number;
      max: number;
    };
    sizes: Array<string>;
  };
}