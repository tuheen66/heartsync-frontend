import Banner from "../../Components/Banner";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import PremiumMemberCard from "../../Components/PremiumMemberCard";
import { useState } from "react";

const Home = () => {
  const axiosPublic = useAxiosPublic();

  const [asc, setAsc] = useState(true);

  // const { data: premiumBiodata = [], refetch } = useQuery({
  //   queryKey: ["premiumBiodata", asc],
  //   queryFn: async () => {
  //     const res = await axiosPublic.get(
  //       `/biodata/premium?sort=${asc ? "asc" : "desc"}`
  //     );

  //     return res.data;
  //   },
  // });

  // refetch();

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

  return (
    <div className="w-[90%] mx-auto">
      <Helmet>
        <title>Heartsync | Home</title>
      </Helmet>
      <Banner></Banner>
      <section className="my-12">
        <div className="flex items-center gap-56">
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
              <option value="Sort">Select</option>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </form>

          <h2 className="text-center font-bold text-3xl text-gray-600 my-12 align-center">
            Premium member profile cards
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-12">
          {premiumBiodatas.map((biodata) => (
            <PremiumMemberCard
              key={biodata._id}
              biodata={biodata}
            ></PremiumMemberCard>
          ))}
        </div>
      </section>
      <section>
        <h2 className="font-bold text-3xl">How it works:</h2>
      </section>
      <section>
        <h2 className="font-bold text-3xl">Success Counter Section</h2>
      </section>
      <section>
        <h2 className="font-bold text-3xl">Success Story Section : Reviews</h2>
      </section>
    </div>
  );
};

export default Home;
