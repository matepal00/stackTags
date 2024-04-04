import { Meta } from "@storybook/react";
import i18n from "../../../config/i18n";
import Header from "./Header";

export default {
  title: "Header",
  component: Header,
} as Meta;

i18n.init();

export const Example = () => <Header />;
