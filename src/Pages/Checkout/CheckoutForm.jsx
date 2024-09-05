import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const CheckoutForm = ({ biodata }) => {
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const axiosPublic = useAxiosPublic();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
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

    axiosPublic.patch("/contact-request", biodataInfo).then((res) => {
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
    <div className="mb-16 mx-auto w-[50%] bg-blue-300 p-8">
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center gap-20">
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
          disabled={!stripe}
        >
          Pay
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
