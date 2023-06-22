import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import PasswordTester from "./containers/PasswordTester";
import DataViewer from "./containers/DataViewer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  const routers = [
    {
      path: "/",
      label: "Tester",
      component: <PasswordTester />,
    },
    {
      path: "/testData",
      label: "Test Data",
      component: <DataViewer />,
    },
  ];
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Header routers={routers} />
      <Routes>
        {routers.map(({ path, component }) => (
          <Route exact path={path} element={component} />
        ))}
      </Routes>
    </div>
  );
};

export default App;
