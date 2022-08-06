//external lib imports
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FullScreenLoader from "./components/MasterLayout/FullScreenLoader";
import SessionHelper from "./helper/SessionHelper";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProductListPage from "./pages/ProductListPage/ProductListPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";

const A = () => {
  return <div>hello1</div>;
};
const B = () => {
  return <div>hello2</div>;
};

//enternel lib imports
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductListPage />} />
        </Routes>
      </BrowserRouter>
      <FullScreenLoader />
    </>
  );
};

export default App;
