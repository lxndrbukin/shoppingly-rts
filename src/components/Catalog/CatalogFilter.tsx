import CatalogFilterButton from './CatalogFilterButton';

export default function CatalogFilter(): JSX.Element {
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  const renderedSizeButtons = sizes.map((size: string): JSX.Element => {
    return <CatalogFilterButton key={size} value={size} />;
  });

  return (
    <div className='filter'>
      <h3 className='filter-header'>Filter</h3>
      <div className='filter-prices'>
        <h5 className='filter-sub-header'>Price</h5>
        <div className='filter-prices-inputs'>
          <div className='filter-prices-input-wrapper'>
            <span>£</span>
            <input type='number' placeholder='Min' />
          </div>
          <div className='filter-prices-input-wrapper'>
            <span>£</span>
            <input type='number' placeholder='Max' />
          </div>
        </div>
      </div>
      <div className='fitler-sizes'>
        <h5 className='filter-sub-header'>Sizes</h5>
        <div className='filter-sizes-btns'>{renderedSizeButtons}</div>
      </div>
    </div>
  );
}
