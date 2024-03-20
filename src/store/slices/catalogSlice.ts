import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getCatalog } from '../thunks/getCatalog';
import { CatalogProps, CatalogItemProps, Slices } from './types';

const initialState: CatalogProps = {
  catalogItems: [],
  filter: {
    price: {
      min: undefined,
      max: undefined
    },
    sizes: []
  }
};

const catalogSlice = createSlice({
  name: Slices.Catalog,
  initialState,
  reducers: {
    setPrice: (state: CatalogProps, action: PayloadAction<{ min?: number, max?: number; }>): void => {
      if (action.payload.min) {
        state.filter.price.min = action.payload.min;
      } else state.filter.price.min = undefined;
      if (action.payload.max) {
        state.filter.price.max = action.payload.max;
      } else state.filter.price.max = undefined;
    },
    setSizes: (state: CatalogProps, action: PayloadAction<string>): void => {
      if (state.filter.sizes.includes(action.payload)) {
        const filteredSizes = state.filter.sizes.filter((size: string) => {
          return size !== action.payload;
        });
        state.filter.sizes = filteredSizes;
      } else {
        state.filter.sizes.push(action.payload);
      }
    }
  },
  extraReducers: (builder): void => {
    builder.addCase(getCatalog.fulfilled, (state: CatalogProps, action: PayloadAction<Array<CatalogItemProps>>): void => {
      state.catalogItems = action.payload;
    });
  }
});

export default catalogSlice.reducer;
export const { setSizes, setPrice } = catalogSlice.actions;