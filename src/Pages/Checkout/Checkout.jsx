import { useLoaderData } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Checkout = () => {
  const biodata = useLoaderData();

  return (
    <div>
      <h2 className="text-center text-3xl text-gray-600 font-bold mb-12 mt-16">
        Please pay here{" "}
      </h2>

      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm biodata={biodata}></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Checkout;
