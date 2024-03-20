import { ChangeEvent, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch, setPrice } from '../../store';
import { CatalogFilterPriceInputProps } from './types';

export default function CatalogFilterPriceInput({
  currency,
  name,
}: CatalogFilterPriceInputProps): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const [value, setValue] = useState<number | undefined>(undefined);

  useEffect(() => {
    dispatch(setPrice({ [name]: value }));
  }, [value, dispatch]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') return setValue(undefined);
    setValue(parseInt(e.target.value));
  };

  return (
    <div className='filter-prices-input-wrapper'>
      <span>{currency}</span>
      <input min={0} onChange={onChange} placeholder={name} name={name} />
    </div>
  );
}
