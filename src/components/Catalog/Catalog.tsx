import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  RootState,
  Catalog,
  CatalogItem,
  AppDispatch,
  getCatalog,
} from '../../store';

export default function Catalog(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();

  const { catalogItems } = useSelector(
    (state: RootState): Catalog => state.catalog
  );

  useEffect((): void => {
    dispatch(getCatalog());
  }, [dispatch]);

  let content: JSX.Element;

  if (catalogItems.length) {
    const data = catalogItems.map((item: CatalogItem) => {});
  }

  return (
    <section className='catalog'>
      <h5 className='catalog-header'>0 product(s) found</h5>
    </section>
  );
}
