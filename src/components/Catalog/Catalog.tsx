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

export default function CatalogProps(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();

  const { catalogItems } = useSelector(
    (state: RootState): CatalogProps => state.catalog
  );

  useEffect((): void => {
    dispatch(getCatalog());
  }, [dispatch]);

  let content: JSX.Element;

  if (catalogItems.length) {
    const items = catalogItems.map((item: CatalogItemProps) => {
      return <CatalogItem key={item.id} {...item} />;
    });

    content = <div className='catalog-items'>{items}</div>;
  }

  return (
    <section className='catalog'>
      <h5 className='catalog-header'>{catalogItems.length} product(s) found</h5>
    </section>
  );
}
