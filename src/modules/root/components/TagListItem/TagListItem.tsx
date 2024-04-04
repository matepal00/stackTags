import { Box, Typography } from "@mui/material";
import { TagListItemProps } from "../../../../shared/types";
import { useModuleTranslation } from "../../utils";

const TagListItem = ({ name, count }: TagListItemProps) => {
  const { t } = useModuleTranslation({});
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        height: "3%",
        border: "1px solid black",
        marginTop: "0.5rem",
        padding: "0.5rem",
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        borderRadius: "4px",
        width: "80%",
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0.5rem",
        }}
      >
        <Typography variant="body1">{t("list.item.tag", { name })}</Typography>
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0.5rem",
        }}
      >
        <Typography variant="body1">
          {t("list.item.poleCount", { count })}
        </Typography>
      </Box>
    </Box>
  );
};

export default TagListItem;
