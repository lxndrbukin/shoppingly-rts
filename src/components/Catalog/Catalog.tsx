import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  RootState,
  CatalogProps,
  CatalogItemProps,
  AppDispatch,
  getCatalog,
} from '../../store';
import CatalogFilter from './CatalogFilter';
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
      .map((item: CatalogItemProps) => {
        return <CatalogItem key={item.id} {...item} />;
      });

    content = <div className='catalog-items'>{items}</div>;
  }

  return (
    <section className='catalog'>
      <h5 className='catalog-header'>{catalogItems.length} product(s) found</h5>
      <CatalogFilter />
      {content}
    </section>
  );
}
