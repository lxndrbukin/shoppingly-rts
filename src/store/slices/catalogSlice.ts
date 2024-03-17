import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getCatalog } from '../thunks/getCatalog';
import { CatalogProps, CatalogItemProps, Slices } from './types';

const initialState: CatalogProps = {
  catalogItems: []
};

const catalogSlice = createSlice({
  name: Slices.Catalog,
  initialState,
  reducers: {},
  extraReducers: (builder): void => {
    builder.addCase(getCatalog.fulfilled, (state: CatalogProps, action: PayloadAction<Array<CatalogItemProps>>): void => {
      state.catalogItems = action.payload;
    });
  }
});

export default catalogSlice.reducer;