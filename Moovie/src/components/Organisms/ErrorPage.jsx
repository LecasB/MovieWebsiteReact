import Layout from "../Molecules/Layout/Layout";
import ImageError from "../../assets/Error404.gif";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Layout>
      <div
        style={{ display: "flex", flexDirection: "column", padding: "20px" }}
      >
        <h1>Oops, This page does not exist</h1>
        <img src={ImageError} />
        <Link style={{ fontSize: "15px", padding: "10px 0px" }} to="/">
          Return to Home Page
        </Link>
      </div>
    </Layout>
  );
};

export default ErrorPage;
