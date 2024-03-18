import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getCatalog } from '../thunks/getCatalog';
import { CatalogProps, CatalogItemProps, Slices } from './types';

const initialState: CatalogProps = {
  catalogItems: [],
  filter: {
    sizes: []
  }
};

const catalogSlice = createSlice({
  name: Slices.Catalog,
  initialState,
  reducers: {
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
export const { setSizes } = catalogSlice.actions;