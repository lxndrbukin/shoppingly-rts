import { MouseEvent, useState } from 'react';
import { CatalogFilterButtonProps } from './types';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState, setSizes } from '../../store';

export default function CatalogFilterButton({
  value,
}: CatalogFilterButtonProps): JSX.Element {
  const [isActive, setIsActive] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  const { sizes } = useSelector(
    (state: RootState): { sizes: Array<string> } => state.catalog.filter
  );

  const handleClick = (value: string): void => {
    dispatch(setSizes(value));
    if (!sizes.includes(value)) setIsActive(true);
    else setIsActive(false);
  };

  return (
    <input
      type='submit'
      className={`filter-btn ${isActive ? 'active' : ''}`}
      onClick={() => handleClick(value)}
      value={value}
    />
  );
}
