import { Meta } from "@storybook/react";
import Layout, { LayoutProps } from ".";
import i18n from "../../../config/i18n";
import Header from "../Header";

export default {
  title: "Layout",
  component: Layout,
} as Meta;
i18n.init();
export const Example = () => {
  const props: LayoutProps = {
    Header: <Header />,
    children: <div></div>,
  };

  return <Layout {...props} />;
};
