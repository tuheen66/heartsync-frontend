import Banner from "../../Components/Banner";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import PremiumMemberCard from "../../Components/PremiumMemberCard";
import { useState } from "react";
import ReviewCard from "../../Components/ReviewCard";
import Statistics from "../../Components/Statistics";
import HowItWorks from "../../Components/HowItWorks";
import BiodataCard from "../../Components/BiodataCard";
import Newsletter from "../../Components/Newsletter";

const Home = () => {
  const axiosPublic = useAxiosPublic();

  const [asc, setAsc] = useState(true);

  const [premiumBiodata, setPremiumBiodata] = useState([]);

  const { data: biodatas = [], refetch } = useQuery({
    queryKey: ["biodata", asc],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/premium-biodata?sort=${asc ? "asc" : "desc"}`
      );
      setPremiumBiodata(res.data);
      return res.data;
    },
  });

  const premiumBiodatas = premiumBiodata.filter(
    (premBiodata) => premBiodata.status === "premium"
  );

  const displayPremBiodata = premiumBiodatas.slice(0, 8);

  return (
    <div className=" mx-auto">
      <Helmet>
        <title>Heartsync | Home</title>
      </Helmet>
      <Banner/>
      <section className="mt-4 mb-12 w-[90%] mx-auto">
        <div className="flex  flex-col-reverse lg:flex-row items-center lg:gap-56">
          <form>
            <label
              htmlFor="sorting"
              className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
            >
              Select an option
            </label>
            <select
              onChange={() => setAsc(!asc)}
              id="sorting"
              name="sorting"
              className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </form>

          <h2 className="text-center font-bold text-3xl text-gray-600 my-12 align-center">
            Premium member profile cards
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mt-8">
          {displayPremBiodata.map((biodata) => (
            <BiodataCard
              key={biodata._id}
              biodata={biodata}
            ></BiodataCard>
          ))}
        </div>
      </section>

      <section>
        
        <HowItWorks/>
      </section>

      <section className="my-12">
        <h2 className="font-bold text-3xl text-center text-gray-700 ">
          Success Counter
        </h2>
        <Statistics/>
      </section>

      <section className="my-4">
        <h2 className="font-bold text-3xl text-center text-gray-700 mb-4">
          Success Story
        </h2>
        <div className="bg-slate-100 p-4">
          <ReviewCard/>
        </div>
      </section>

      <section>
        <Newsletter/>
      </section>
    </div>
  );
};

export default Home;
