import { Provider } from "react-redux";
import { Meta } from "@storybook/react";
import configureStore from "redux-mock-store";
import TagsList from "./TagsList";
import i18n from "../../../../config/i18n";

export default {
  title: "TagsList",
  component: TagsList,
} as Meta;

const mockStore = configureStore([]);
const store = mockStore({
  root: {
    tags: [
      { name: "Tag1", count: 10 },
      { name: "Tag2", count: 20 },
      { name: "Tag3", count: 30 },
    ],
  },
});
i18n.init();
export const Example = () => (
  <Provider store={store}>
    <TagsList />
  </Provider>
);
