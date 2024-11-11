import { useState } from "react";

const usePost = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isSuccessful, setIsSuccessful] = useState(false);

  const submitReview = async (reviewData) => {
    setIsSubmitting(true);
    setErrorMessage(null);
    setIsSuccessful(false);

    try {
      const response = await fetch(
        "https://brightflixapii.vercel.app/api/v1/SubmitReview",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(reviewData),
        }
      );

      if (!response.ok) {
        throw new Error("Error in submitting review");
      }

      await response.json();
      setIsSuccessful(true);
      return true;
    } catch (error) {
      setErrorMessage(error.message);
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return { submitReview, isSubmitting, errorMessage, isSuccessful };
};

export default usePost;
