import { ChangeEventHandler, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTags,
  setCurrentPage,
  setTagsPerPage,
  swapOrder,
  swapSort,
} from "../../rootSlice";
import {
  DataSteps,
  Order,
  RootStateProps,
  Sort,
} from "../../../../shared/types";
import { Loader } from "../../../../shared/components";
import { AppDispatch } from "../../../../app/store";
import { FailedDownload, TagsList } from "../../components";
import { debounce } from "lodash";
import { ChangeEvent } from "react";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { MainContainer, NavContainer, Wrapper } from "./Root.styles";
import { useModuleTranslation } from "../../utils";
const Root = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { t } = useModuleTranslation({});
  const status = useSelector((state: RootStateProps) => state.root.status);
  const tagsPerPage = useSelector(
    (state: RootStateProps) => state.root.tagsPerPage
  );
  const currentPage = useSelector(
    (state: RootStateProps) => state.root.currentPage
  );
  const order = useSelector((state: RootStateProps) => state.root.order);
  const sort = useSelector((state: RootStateProps) => state.root.sort);
  const fetchTagsDebounced = useCallback(
    debounce((args) => dispatch(fetchTags(args)), 300),
    [dispatch]
  );
  useEffect(() => {
    if (status == DataSteps.Idle) {
      fetchTagsDebounced({ order, sort, tagsPerPage, currentPage });
    }
  }, [status, fetchTagsDebounced]);

  const handleOrderChange = (e: SelectChangeEvent) => {
    const newOrder = e.target.value;
    if (order != newOrder) dispatch(swapOrder());
  };
  const handleSortChange = (e: SelectChangeEvent) => {
    const newSort = e.target.value;
    if (sort != newSort) dispatch(swapSort());
  };
  const handleChangePage = (
    e: ChangeEvent<unknown> | null,
    newPage: number
  ) => {
    if (e) e.preventDefault();
    dispatch(setCurrentPage(newPage));
  };
  const handleChangeRowsPerPage: ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value ? parseInt(e.target.value, 10) : null;
    dispatch(setTagsPerPage(value));
    dispatch(setCurrentPage(1));
  };
  return (
    <Wrapper>
      <NavContainer>
        <Grid
          container
          height={"100%"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Grid
            item
            xs={2}
            container
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <FormControl>
              <InputLabel>{t("filter.order.name")}</InputLabel>
              <Select
                value={order}
                label="Order"
                onChange={handleOrderChange}
                disabled={status == DataSteps.Succeeded ? false : true}
              >
                <MenuItem value={Order.Asc}>
                  {t("filter.order.ascent")}
                </MenuItem>
                <MenuItem value={Order.Desc}>
                  {t("filter.order.descent")}
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid
            item
            xs={2}
            container
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <FormControl>
              <InputLabel>{t("filter.sort.name")}</InputLabel>
              <Select
                value={sort}
                label="Sort"
                onChange={handleSortChange}
                disabled={status == DataSteps.Succeeded ? false : true}
              >
                <MenuItem value={Sort.Name}>{t("filter.sort.byName")}</MenuItem>
                <MenuItem value={Sort.Popular}>
                  {t("filter.sort.byPopularity")}
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid
            item
            xs={2}
            container
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <TextField
              label="Type number of tags per site"
              type="number"
              value={tagsPerPage}
              onChange={handleChangeRowsPerPage}
              InputProps={{
                inputMode: "numeric",
              }}
              variant="outlined"
              size="small"
            />
          </Grid>
        </Grid>
      </NavContainer>
      <Pagination
        count={Infinity}
        page={currentPage}
        onChange={handleChangePage}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "10%",
        }}
      />

      <MainContainer>
        {status == DataSteps.Succeeded ? (
          <TagsList />
        ) : status == DataSteps.Failed ? (
          <FailedDownload />
        ) : (
          <Loader />
        )}
      </MainContainer>
    </Wrapper>
  );
};

export default Root;
