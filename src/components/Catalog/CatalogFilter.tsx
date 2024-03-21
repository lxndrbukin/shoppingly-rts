import CatalogFilterPriceInput from './CatalogFilterPriceInput';
import CatalogFilterButton from './CatalogFilterButton';

export default function CatalogFilter(): JSX.Element {
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  const renderedSizeButtons = sizes.map((size: string): JSX.Element => {
    return <CatalogFilterButton key={size} value={size} />;
  });

  return (
    <div className='filter'>
      <h3 className='filter-header'>Filter</h3>
      <div className='filter-sections'>
        <div className='filter-categories'>
          <h5 className='filter-sub-header'>Categories</h5>
          <div className='filter-categories-checkboxes'>
            <div>
              <input type='checkbox' name='men' value={"Men's fashion"} />{' '}
              <label htmlFor='men'>Men's Fashion</label>
            </div>
            <div>
              <input type='checkbox' name='men' value={"Women's fashion"} />{' '}
              <label htmlFor='men'>Men's Fashion</label>
            </div>
          </div>
        </div>
        <div className='filter-prices'>
          <h5 className='filter-sub-header'>Price</h5>
          <div className='filter-prices-inputs'>
            <CatalogFilterPriceInput currency='£' name='min' />
            <CatalogFilterPriceInput currency='£' name='max' />
          </div>
        </div>
        <div className='fitler-sizes'>
          <h5 className='filter-sub-header'>Sizes</h5>
          <div className='filter-sizes-btns'>{renderedSizeButtons}</div>
        </div>
      </div>
    </div>
  );
}
