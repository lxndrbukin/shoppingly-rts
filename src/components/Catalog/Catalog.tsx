import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  RootState,
  CatalogProps,
  CatalogItemProps,
  AppDispatch,
  getCatalog,
} from '../../store';
import CatalogItem from './CatalogItem';

export default function Catalog(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();

  const { catalogItems, filter } = useSelector(
    (state: RootState): CatalogProps => state.catalog
  );

  useEffect((): void => {
    dispatch(getCatalog());
  }, [dispatch]);

  let content;

  if (catalogItems.length) {
    const items = catalogItems
      .filter((item: CatalogItemProps) => {
        if (filter.sizes.length) {
          return filter.sizes.some((size: string) => item.sizes.includes(size));
        } else {
          return item;
        }
      })
      .filter((item: CatalogItemProps) => {
        if (filter.price.max === 0) return item;
        if (filter.price.min && filter.price.max && filter.price.max !== 0) {
          if (item.price >= filter.price.min && item.price <= filter.price.max)
            return item;
        }
      })
      .map((item: CatalogItemProps) => {
        return <CatalogItem key={item.id} {...item} />;
      });

    content = (
      <div className='catalog-items'>
        <h5 className='catalog-items-header'>
          {catalogItems.length} product(s) found
        </h5>
        <div className='catalog-items-grid'>{items}</div>
      </div>
    );
  }

  return <section className='catalog'>{content}</section>;
}
