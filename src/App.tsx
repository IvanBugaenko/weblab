import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Empty from "./pages/Empty/Empty";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import AppStrings from "./strings";
import Footer from "./components/Footer/Footer";

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

  const companyLinks: INavigationLink[] = [
    {
      text: "About",
      link: "#!",
    },
    {
      text: "Testimonials",
      link: "#!",
    },
    {
      text: "Find a doctor",
      link: "#!",
    },
    {
      text: "Apps",
      link: "#!",
    },
  ];

  const regionLinks: INavigationLink[] = [
    {
      text: "Indonesia",
      link: "#!",
    },
    {
      text: "Singapore",
      link: "#!",
    },
    {
      text: "Hongkong",
      link: "#!",
    },
    {
      text: "Canada",
      link: "#!",
    },
  ];

  const helpLinks: INavigationLink[] = [
    {
      text: "Help center",
      link: "#!",
    },
    {
      text: "Contact support",
      link: "#!",
    },
    {
      text: "Instructions",
      link: "#!",
    },
    {
      text: "How it works",
      link: "#!",
    },
  ];

  const footer = (
    <Footer
      content={{
        Company: companyLinks,
        Region: regionLinks,
        Help: helpLinks,
      }}
    />
  );

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
      {footer}
    </BrowserRouter>
  );
}

export default App;
