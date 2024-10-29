import Layout from "../Molecules/Layout/Layout";
import ImageError from "../../assets/Error404.gif";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Oops, This page does not exist</h1>
        <img
          style={{ height: "50%", width: "50%", maxWidth: "90vw" }}
          src={ImageError}
        />
        <Link
          style={{
            padding: "10px 0px",
            textDecoration: "underline",
            display: "flex",
            gap: "20px",
          }}
          to="/"
        >
          Return to Home Page <FaHome />
        </Link>
      </div>
    </Layout>
  );
};

export default ErrorPage;
