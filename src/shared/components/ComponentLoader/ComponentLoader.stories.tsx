import { Meta } from "@storybook/react";
import ComponentLoader, { ComponentLoaderProps } from ".";
import i18n from "../../../config/i18n";
import TagListItem from "../../../modules/root/components/TagListItem";

export default {
  title: "ComponentLoader",
  component: ComponentLoader,
} as Meta;
i18n.init();
export const Example = () => {
  const props: ComponentLoaderProps = {
    component: TagListItem,
  };

  return (
    <div style={{ backgroundColor: "green" }}>
      <ComponentLoader {...props} />
    </div>
  );
};
