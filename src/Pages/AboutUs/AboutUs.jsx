// import "./../AboutUsCss/AboutUs.css";
import bannerImg from "./../../assets/images/about.jpg";
import { Helmet } from "react-helmet-async";
import team from "../../assets/images/team.jpg";
import mission from "../../assets/images/mission.jpg";
import process from "../../assets/images/process.jpg";
import values from "../../assets/images/values.jpg";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="bg-gray-50">
      <Helmet>
        <title>Heartsync | About Us</title>
      </Helmet>
      <div
        className="mx-auto min-h-[200px] md:min-h-[300px] lg:min-h-[450px]  bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bannerImg})`,
        }}
      >
        <div className="flex justify-center ">
          <h2 className=" text-3xl md:text-4xl lg:text-5xl text-center font-bold text-white items-center my-20 md:my-40 lg:my-52">
            About Us
          </h2>
        </div>
      </div>

      {/* Main Content */}
      <div className=" mx-auto mt-12 py-12">
        {/* Introduction */}
        <section className="mb-16 px-[5%] ">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Welcome to <span className="text-[#a9106b]">Heartsync</span>
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Where hearts find harmony and souls connect for a lifetime.
              </p>
              <p className="text-gray-600 mb-4">
                At Heartsync, we believe that love is not just a feeling; it is
                the ultimate connection between two souls destined to be
                together. Our platform is designed to help you find your perfect
                life partner through a meaningful, safe, and personalized
                matchmaking experience.
              </p>
            </div>
            <div className="lg:w-1/2 h-64 md:h-80 bg-gray-200 rounded-lg flex items-center justify-center">
              <img src={team} alt="Team" />
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="px-[5%] mb-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/2 order-2 lg:order-1 h-64 md:h-80  flex items-center justify-center md:mt-12">
              <img src={mission} alt="Team" />
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Our Mission
              </h2>
              <p className="text-gray-600 mb-4">
                We are on a mission to help individuals from all walks of life
                discover genuine relationships that lead to long-lasting, happy
                marriages.
              </p>
              <p className="text-gray-600">
                We believe that compatibility, shared values, and mutual respect
                are at the heart of successful relationships. That's why we aim
                to go beyond superficial attributes, helping you find someone
                who truly complements your personality and life goals.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-10 px-[5%] ">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Why Choose Heartsync?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6  shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-[#a9106b] mb-3">
                Personalized Matchmaking
              </h3>
              <p className="text-gray-600">
                Our advanced algorithms analyze multiple aspects of your
                personality, preferences, and lifestyle to present you with the
                most compatible matches. We understand that everyone is unique,
                and we tailor our services to meet your specific needs.
              </p>
            </div>
            <div className="bg-white p-6  shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-[#a9106b] mb-3">
                Verified Profiles
              </h3>
              <p className="text-gray-600">
                At Heartsync, we prioritize your safety and trust. Every profile
                undergoes strict verification to ensure that you are meeting
                genuine people with honest intentions. We take privacy and
                security seriously, providing you with a trustworthy platform to
                find love.
              </p>
            </div>
            <div className="bg-white p-6  shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-[#a9106b] mb-3">
                Cultural Diversity
              </h3>
              <p className="text-gray-600">
                We celebrate love in all its forms and are proud to serve a
                diverse community. Whether you are looking for someone within
                your own culture or someone who shares your interests from a
                different background, Heartsync connects hearts across
                boundaries.
              </p>
            </div>
            <div className="bg-white p-6  shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-[#a9106b] mb-3">
                User-Friendly Experience
              </h3>
              <p className="text-gray-600">
                Our easy-to-navigate interface and intuitive design make it
                simple for you to find potential matches. Whether you're new to
                online matchmaking or an experienced user, we make the journey
                enjoyable and stress-free.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-8 bg-gray-100 px-[5%]  py-8">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Our Values
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-pink-100 rounded-full p-2 mr-4">
                    <svg
                      className="w-5 h-5 text-[#a9106b]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Respect & Dignity
                    </h3>
                    <p className="text-gray-600">
                      Every individual deserves to be treated with respect. We
                      foster a respectful community where users can engage
                      authentically and comfortably.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-pink-100 rounded-full p-2 mr-4">
                    <svg
                      className="w-5 h-5 text-[#a9106b]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Trust</h3>
                    <p className="text-gray-600">
                      Building trust is at the core of everything we do. We take
                      strong measures to ensure a safe and reliable environment
                      for everyone.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-pink-100 rounded-full p-2 mr-4">
                    <svg
                      className="w-5 h-5 text-[#a9106b]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Inclusivity</h3>
                    <p className="text-gray-600">
                      We embrace all backgrounds, cultures, and beliefs. Love
                      knows no boundaries, and we are committed to connecting
                      people without barriers.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2 h-64 md:h-80  flex items-center justify-center md:mt-12">
              <img src={values} alt="Team" />
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="my-16 px-[5%] ">
          <h2 className="text-3xl font-bold text-center text-gray-800  lg:mb-20">
            How It Works
          </h2>
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/2 h-64 md:h-80  flex items-center justify-center md:mb-12 mt-8 md:mt-20 lg:mt-0">
              <img src={process} alt="Team" />
            </div>
            <div className="lg:w-1/2">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#a9106b] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg">
                      Create a Profile
                    </h3>
                    <p className="text-gray-600">
                      Share details about yourself, your values, and what you're
                      looking for in a partner.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#a9106b] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg">
                      Get Matched
                    </h3>
                    <p className="text-gray-600">
                      Our intelligent system suggests matches based on your
                      preferences, compatibility, and shared goals.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#a9106b] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg">
                      Connect
                    </h3>
                    <p className="text-gray-600">
                      Take your time to get to know your potential partners
                      through messages, video calls, or even guided
                      conversations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#a9106b] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg">
                      Find Your Forever
                    </h3>
                    <p className="text-gray-600">
                      When you find someone who resonates with your heart and
                      soul, you'll be ready to take the next step toward
                      building a future together.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#a9106b] to-purple-600 rounded-xl mx-[5%]  py-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Join Heartsync Today!</h2>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            Whether you're looking for a partner who shares your faith, values,
            or interests, Heartsync offers a safe, secure, and welcoming space
            to find your soulmate.
          </p>
          <p className="text-xl font-medium mb-8">
            Let us help you hear the sync of two hearts as they come together in
            perfect harmony.
          </p>
          <Link to="/biodatas">
            <button className="bg-white text-[#a9106b] font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors shadow-lg">
              Start Your Journey
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
