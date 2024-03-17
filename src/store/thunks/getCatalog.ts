import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Thunks } from './types';

export const getCatalog = createAsyncThunk(Thunks.GetCatalog, async () => {
  const res = await axios.get('https://lxndrbukin.github.io/apis/shoppingly_catalog.json');
  return res.data;
});