import Header from './Header/Header';
import Catalog from './Catalog/Catalog';
import CatalogFilter from './Catalog/CatalogFilter';

export default function App(): JSX.Element {
  return (
    <div className='container'>
      <Header />
      <main>
        <CatalogFilter />
        <Catalog />
      </main>
    </div>
  );
}
