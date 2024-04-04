import { Grid } from "@mui/material";
import { TagListItemProps } from "../../../../shared/types";
import { useModuleTranslation } from "../../utils";

const TagListItem = ({ name, count }: TagListItemProps) => {
  const { t } = useModuleTranslation({});
  return (
    <Grid container display={"flex"} flexDirection={"row"} height={"5%"}>
      <Grid
        item
        xs={9}
        container
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {t("list.item.tag", { name })}
      </Grid>
      <Grid
        item
        xs={3}
        container
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {t("list.item.poleCount", { count })}
      </Grid>
    </Grid>
  );
};

export default TagListItem;
