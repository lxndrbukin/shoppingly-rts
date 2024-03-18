import Header from './Header/Header';
import Catalog from './Catalog/Catalog';

export default function App(): JSX.Element {
  return (
    <div className='container'>
      <Header />
      <main>
        <Catalog />
      </main>
    </div>
  );
}
