import React from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const GotMarried = () => {
  const axiosSecure = useAxiosSecure();

  const handleMarriageInfo = (e) => {
    e.preventDefault();

    const form = e.target;

    const biodataId = form.biodataId.value;
    const sp_biodataId = form.sp_biodataId.value;
    const photo = form.photo.value;
    const sp_photo = form.sp_photo.value;
    const message = form.message.value;
    const rating = form.rating.value;

    const marriageInfo = {
      biodataId,
      sp_biodataId,
      photo,
      sp_photo,
      message,
      rating
    };

    console.log(marriageInfo);

    axiosSecure.patch("/marriage", marriageInfo).then((res) => {
      console.log(res.data);
      if (res.data.upsertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your marriage info has been saved successfully",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
    e.target.reset();
  };

  return (
    <div className="mb-8">
       <Helmet>
        <title>Heartsync | Got Married</title>
      </Helmet>
      <h2 className="text-center text-3xl font-bold text-gray-700 my-8">
        Please share your marriage info
      </h2>
      <form
        onSubmit={handleMarriageInfo}
        className=" lg:w-[50%] mx-auto bg-blue-300 p-4"
      >
        <div className="flex justify-between">
          <div className="mb-5">
            <label
              htmlFor="text"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your biodata Id
            </label>
            <input
              type="text"
              id="biodataId"
              name="biodataId"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="your biodata Id"
              required
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="sp_biodataId"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Spouse's biodata Id
            </label>
            <input
              type="text"
              id="sp_biodataId"
              name="sp_biodataId"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              placeholder="spouse's biodata Id"
            />
          </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="photo"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your photo link
          </label>
          <input
            type="text"
            id="photo"
            name="photo"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="your photo link"
            required
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="sp_photo"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Spouse's photo link
          </label>
          <input
            type="text"
            id="sp_photo"
            name="sp_photo"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            placeholder="spouse's photo link"
          />
        </div>

        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your message
        </label>
        <textarea
          id="message"
          rows="4"
          name="message"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50  border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Leave a message..."
        ></textarea>

        <div className="flex justify-between items-center mt-4">
          <div>

          <button
            type="submit"
            className="px-4 py-2 rounded-none border-none bg-[#a9106b] hover:bg-[#30336b] text-white"
          >
            Submit
          </button>
          </div>

          <div className="mb-5 ">
            <label
              htmlFor="rating"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Rating
            </label>
            <input
              type="number"
              id="rating"
              name="rating"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              placeholder="your rating"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default GotMarried;
