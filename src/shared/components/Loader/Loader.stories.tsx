import { Meta } from "@storybook/react";
import Loader from "./Loader";

export default {
  title: "Loader",
  component: Loader,
} as Meta;

export const Example = () => (
  <div style={{ backgroundColor: "black" }}>
    <Loader />
  </div>
);
