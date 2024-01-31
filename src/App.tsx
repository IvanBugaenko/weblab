import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Empty from "./pages/Empty/Empty";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import { pages, companyLinks, regionLinks, helpLinks } from "./links";

function App() {
  const footer = (
    <Footer
      content={{
        Company: companyLinks,
        Region: regionLinks,
        Help: helpLinks,
      }}
    />
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header buttons={pages} />
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
