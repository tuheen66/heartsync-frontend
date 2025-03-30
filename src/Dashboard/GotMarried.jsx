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
      rating,
    };

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
        className="max-w-2xl mx-auto bg-white p-6 shadow-md"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label
              htmlFor="biodataId"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Your Biodata ID
            </label>
            <input
              type="text"
              id="biodataId"
              name="biodataId"
              className="w-full px-4 py-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-pink-700 focus:border-transparent rounded-md"
              placeholder="Enter your biodata ID"
              required
            />
          </div>

          <div>
            <label
              htmlFor="sp_biodataId"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Spouse's Biodata ID
            </label>
            <input
              type="text"
              id="sp_biodataId"
              name="sp_biodataId"
              className="w-full px-4 py-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-pink-700 focus:border-transparent rounded-md"
              placeholder="Enter spouse's biodata ID"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label
              htmlFor="photo"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Your Photo URL
            </label>
            <input
              type="text"
              id="photo"
              name="photo"
              className="w-full px-4 py-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-pink-700 focus:border-transparent rounded-md"
              placeholder="Paste your photo link"
              required
            />
          </div>

          <div>
            <label
              htmlFor="sp_photo"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Spouse's Photo URL
            </label>
            <input
              type="text"
              id="sp_photo"
              name="sp_photo"
              className="w-full px-4 py-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-pink-700 focus:border-transparent rounded-md"
              placeholder="Paste spouse's photo link"
              required
            />
          </div>
        </div>

        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Your Review
          </label>
          <textarea
            id="message"
            rows="4"
            name="message"
            className="w-full px-4 py-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-pink-700focus:border-transparent rounded-md"
            placeholder="Share your experience..."
          ></textarea>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="w-full md:w-auto">
            <button
              type="submit"
              className="w-full px-6 py-2 bg-[#a9106b] text-white font-medium  hover:bg-pink-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md"
            >
              Submit Review
            </button>
          </div>

          <div className="w-full md:w-32">
            <label
              htmlFor="rating"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Rating (1-5)
            </label>
            <input
              type="number"
              id="rating"
              name="rating"
              min="1"
              max="5"
              className="w-full px-4 py-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent rounded-md"
              required
              placeholder="1-5"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default GotMarried;
