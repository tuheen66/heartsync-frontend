import React, { useState } from "react";
import news from "../assets/images/news.jpg";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Subscribed with:", email);
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail("");
    }, 1500);
  };

  if (isSubscribed) {
    return (
      <div className="bg-blue-50 rounded-xl  text-center w-[90%] mx-auto">
        <div className="text-green-500 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          Thank you for subscribing!
        </h3>
        <p className="text-gray-600 mb-6">
          You'll receive our next newsletter in your inbox.
        </p>
        <button
          onClick={() => setIsSubscribed(false)}
          className="px-6 py-2 bg-[#a9106b] hover:bg-[#570a38] text-white rounded-lg transition-colors"
        >
          Subscribe again
        </button>
      </div>
    );
  }

  return (
    <section className="bg-gray-50 py-16   lg:py-20 px-[5%]  ">
      <div className=" mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Content Section */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Stay in the loop
            </h2>
            <p className="text-lg text-gray-600 mb-6 max-w-lg">
              Join our newsletter to get the latest updates, news, and exclusive
              offers directly to your inbox.
            </p>

            <form className="w-full max-w-md">
              <div className="flex flex-col sm:flex-row gap-3 mb-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 transition-all"
                  required
                />
                <button
                  type="submit"
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className={`text-white bg-[#a9106b] hover:bg-pink-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm w-full sm:w-auto px-5 py-2.5 text-center rounded-md transition-colors duration-200 whitespace-nowrap ${
                    isLoading ? "opacity-75 cursor-not-allowed" : ""
                  }`}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    "Subscribe"
                  )}
                </button>
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="newsletter-terms"
                    name="newsletter-terms"
                    type="checkbox"
                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="ml-3">
                  <label
                    htmlFor="newsletter-terms"
                    className="text-sm text-gray-500"
                  >
                    I agree to the{" "}
                    <a href="#" className="text-[#a9106b] hover:text-[#721b4f]">
                      Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-[#a9106b] hover:text-[#721b4f]">
                      Terms
                    </a>
                  </label>
                </div>
              </div>
            </form>
          </div>

          {/* Illustration Section */}
          <div className="lg:w-1/2 hidden lg:block">
            <div className="bg-blue-100 rounded-xl">
              <img className="rounded-lg" src={news} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
