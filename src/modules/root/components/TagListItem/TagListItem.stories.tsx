import { Meta } from "@storybook/react";
import TagListItem from ".";
import { TagListItemProps } from "../../../../shared/types";
import i18n from "../../../../config/i18n";

export default {
  title: "TagListItem",
  component: TagListItem,
} as Meta;
i18n.init();
export const Example = () => {
  const props: TagListItemProps = {
    name: "Przykładowy tag",
    count: 5,
  };

  return <TagListItem {...props} />;
};
