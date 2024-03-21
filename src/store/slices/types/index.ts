export enum Slices {
  Catalog = 'catalog'
}

export interface CatalogItemProps {
  id: number;
  sizes: Array<string>;
  img: string;
  name: string;
  price: number;
  category: string;
}

export interface CatalogProps {
  catalogItems: Array<CatalogItemProps>;
  filter: {
    categories: Array<string>,
    price: {
      min: number | undefined;
      max: number | undefined;
    };
    sizes: Array<string>;
  };
  isLoaded: boolean;
}