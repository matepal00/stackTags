import { Provider } from "react-redux";
import { Meta } from "@storybook/react";
import configureStore from "redux-mock-store";
import FailedDownload from "./FailedDownload";
import i18n from "../../../../config/i18n";

export default {
  title: "FailedDownload",
  component: FailedDownload,
} as Meta;

const mockStore = configureStore([]);
const store = mockStore({
  root: {
    error: "Przykładowy błąd",
  },
});
i18n.init();

export const Example = () => (
  <Provider store={store}>
    <FailedDownload />
  </Provider>
);
