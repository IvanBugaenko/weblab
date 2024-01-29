import "./App.module.scss";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Empty from "./pages/Empty/Empty";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import AppStrings from "./strings";

function App() {
  const pages: INavigationLink[] = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "Find a doctor",
      link: "/find-a-doctor",
    },
    {
      text: "Apps",
      link: "/apps",
    },
    {
      text: "Testimonials",
      link: "/testimonials",
    },
    {
      text: "About us",
      link: "/about-us",
    },
  ];

  const name: string = AppStrings.app_name;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header name={name} buttons={pages} />
              <Outlet />
            </>
          }
        >
          <Route index element={<Home />} />
          <Route path="find-a-doctor" element={<Empty />} />
          <Route path="apps" element={<Empty />} />
          <Route path="testimonials" element={<Empty />} />
          <Route path="about-us" element={<Empty />} />
          <Route path="*" element={<Empty />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
