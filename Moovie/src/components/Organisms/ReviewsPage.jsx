import Layout from "../Molecules/Layout/Layout";
import FormSubmit from "../Molecules/Form/FormSubmit";
import LastReviews from "../Molecules/LastReviews/LastReviews";
import { useState } from "react";

const ReviewsPage = () => {
  const [reload, setReload] = useState(false);

  return (
    <Layout>
      <FormSubmit setReload={setReload} />
      <LastReviews reload={reload} />
    </Layout>
  );
};

export default ReviewsPage;
