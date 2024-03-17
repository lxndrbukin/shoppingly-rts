import { ChangeEvent, useState } from 'react';
import { CatalogItemProps } from '../../store';

export default function CatalogItem({
  name,
  sizes,
  img,
  price,
}: CatalogItemProps): JSX.Element {
  const [size, setSize] = useState(sizes[0]);

  const setItemSize = (e: ChangeEvent<HTMLSelectElement>): void => {
    setSize(e.target.value);
  };

  const renderedSizes = sizes.map((size: string): JSX.Element => {
    return <option key={size}>{size}</option>;
  });

  return (
    <div className='item'>
      <div className='item-img'>
        <img src={img} alt={name} />
      </div>
      <div className='item-sizes'>
        <label>Sizes</label>:{' '}
        <select onChange={setItemSize} name='size'>
          {renderedSizes}
        </select>
      </div>
      <div className='item-name'>{name}</div>
      <div className='item-price'>£{price.toFixed(2)}</div>
      <button onClick={() => console.log('added')} className='item-add'>
        Add to Cart
      </button>
    </div>
  );
}
