import { HelmetProvider } from "react-helmet-async";
import AppRoutes from "./App.routes";
import { BrowserRouter } from "react-router-dom";
import { Loader } from "../shared/components";
import { Suspense } from "react";
import { Provider } from "react-redux";
import { store } from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <HelmetProvider>
        <BrowserRouter>
          <Suspense fallback={<Loader />}>
            <AppRoutes />
          </Suspense>
        </BrowserRouter>
      </HelmetProvider>
    </Provider>
  );
};

export default App;
