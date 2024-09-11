import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
// import useAxiosPublic from "../../hooks/useAxiosPublic";

const CheckoutForm = ({ biodata }) => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");

  const stripe = useStripe();
  const elements = useElements();

  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  // const axiosPublic = useAxiosPublic();

  const fees = 5;

  useEffect(() => {
    axiosSecure.post("/create-payment-intent", { price: fees }).then((res) => {
      console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    });
  }, [axiosSecure, fees]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("confirm Error");
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transaction Id", paymentIntent.id);
        setTransactionId(paymentIntent.id);

        const payment = {
          email: user?.email,
          fees: fees,
          transactionId: paymentIntent.id,
          date: new Date(),
          name: biodata.name,
          biodataId: biodata.biodataId,
        };

        const res = await axiosSecure.post("/payments", payment);

        if (res.data?.paymentResult?.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Thank you for your payment",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    }

    const email = event.target.email.value;
    const biodataId = event.target.biodataId.value;

    const biodataInfo = {
      userEmail: user.email,
      name: biodata.name,
      biodataId: biodata.biodataId,
      phone: biodata.phone,
      email: biodata.email,
    };

    axiosSecure.patch("/contact-request", biodataInfo).then((res) => {
      console.log(res.data);
      if (res.data.upsertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your contact request has been sent to the Admin for approval",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };

  return (
    <div className="mb-16 mx-auto lg:w-[50%] bg-blue-300 p-8">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row justify-center md:gap-20">
          <div className="mb-5 flex-1">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              defaultValue={user?.email}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
              required
              disabled
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="biodataId"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Biodata Id
            </label>
            <input
              type="number"
              id="biodataId"
              name="biodataId"
              defaultValue={biodata.biodataId}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              disabled
            />
          </div>
        </div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your card details
        </label>
        <CardElement className="border-2 py-2 px-4">
          options=
          {{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        </CardElement>

        <button
          className="mt-8 bg-[#a9106b] text-white px-4 py-2 my-"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>

        <p className="text-red-600 font-bold my-4">{error}</p>
        {transactionId && (
          <p className="text-green-600">
            Your Transaction Id :{" "}
            <span className="font-semibold">{transactionId}</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default CheckoutForm;
