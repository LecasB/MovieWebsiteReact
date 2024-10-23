import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <section>{children}</section>
      <Footer />
    </>
  );
};
export default Layout;
