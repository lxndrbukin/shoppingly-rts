import { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch, setPrice } from '../../store';
import { CatalogFilterPriceInputProps } from './types';

export default function CatalogFilterPriceInput({
  currency,
  name,
}: CatalogFilterPriceInputProps): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setPrice({ [e.target.name]: parseInt(e.target.value) }));
  };

  return (
    <div className='filter-prices-input-wrapper'>
      <span>{currency}</span>
      <input min={0} onChange={onChange} placeholder={name} name={name} />
    </div>
  );
}
