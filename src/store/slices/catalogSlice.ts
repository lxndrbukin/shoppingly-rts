import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getCatalog } from '../thunks/getCatalog';
import { Catalog, CatalogItem, Slices } from './types';

const initialState: Catalog = {
  catalogItems: []
};

const catalogSlice = createSlice({
  name: Slices.Catalog,
  initialState,
  reducers: {},
  extraReducers: (builder): void => {
    builder.addCase(getCatalog.fulfilled, (state: Catalog, action: PayloadAction<Array<CatalogItem>>): void => {
      state.catalogItems = action.payload;
    });
  }
});

export default catalogSlice.reducer;