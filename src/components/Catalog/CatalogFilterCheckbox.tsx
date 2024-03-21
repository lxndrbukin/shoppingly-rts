import { ChangeEvent, useState } from 'react';
import { CatalogFilterCheckboxProps } from './types';
import { useDispatch } from 'react-redux';
import { AppDispatch, setCategory } from '../../store';

export default function CatalogFilterCheckbox({
  name,
  label,
}: CatalogFilterCheckboxProps): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const [isChecked, setIsChecked] = useState(true);

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setIsChecked(!isChecked);
    console.log(isChecked);
    dispatch(setCategory({ category: e.target.name, isChecked }));
  };

  return (
    <div className='filter-categores-checkbox-wrapper'>
      <input onChange={onChange} type='checkbox' name={name} value={label} />
      <label htmlFor={name}>{label}</label>
    </div>
  );
}
