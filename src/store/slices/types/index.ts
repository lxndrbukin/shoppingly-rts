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
      min: number | undefined;
      max: number | undefined;
    };
    sizes: Array<string>;
  };
  isLoaded: boolean;
}