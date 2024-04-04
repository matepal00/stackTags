import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  DataSteps,
  FetchTagsProps,
  Order,
  Sort,
  TagsStateProps,
} from "../../shared/types";

export const fetchTags = createAsyncThunk(
  "tags/fetchTags",
  async ({ order, sort, tagsPerPage, currentPage }: FetchTagsProps) => {
    const response = await axios.get(
      `https://api.stackexchange.com/2.3/tags?order=${order}&sort=${sort}&site=stackoverflow&pagesize=${tagsPerPage}&page=${currentPage}`
    );
    return response.data;
  }
);

const initialState: TagsStateProps = {
  tags: [],
  status: DataSteps.Idle,
  error: "",
  order: Order.Asc,
  sort: Sort.Name,
  tagsPerPage: 10,
  currentPage: 1,
};
const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    setTagsPerPage: (state, action) => {
      state.tagsPerPage = action.payload;
      state.status = DataSteps.Idle;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
      state.status = DataSteps.Idle;
    },
    swapOrder: (state) => {
      if (state.order == Order.Asc) {
        state.order = Order.Desc;
      } else {
        state.order = Order.Asc;
      }
      state.status = DataSteps.Idle;
    },
    swapSort: (state) => {
      if (state.sort == Sort.Name) {
        state.sort = Sort.Popular;
      } else {
        state.sort = Sort.Name;
      }
      state.status = DataSteps.Idle;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTags.pending, (state) => {
        state.status = DataSteps.Loading;
      })
      .addCase(fetchTags.fulfilled, (state, action) => {
        state.status = DataSteps.Succeeded;
        state.tags = action.payload.items;
      })
      .addCase(fetchTags.rejected, (state, action) => {
        state.status = DataSteps.Failed;
        state.error = action.error.message || "";
      });
  },
});
export const { setTagsPerPage, setCurrentPage, swapOrder, swapSort } =
  rootSlice.actions;
export const rootReducer = rootSlice.reducer;
