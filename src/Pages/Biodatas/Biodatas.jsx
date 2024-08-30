import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Biodata from "../../Components/Biodata";

const Biodatas = () => {
  const axiosPublic = useAxiosPublic();
  const { data: biodatas = [] } = useQuery({
    queryKey: ["biodata"],
    queryFn: async () => {
      const res = await axiosPublic.get("/biodata");
      return res.data;
    },
  });

  return (
    <div className="w-[90%] mx-auto">
      <h2>Biodata : {biodatas.length}</h2>

      <div className="grid grid-cols-2 gap-8">
        {biodatas.map((biodata) => (
          <Biodata key={biodata._id} biodata={biodata}></Biodata>
        ))}
      </div>
    </div>
  );
};

export default Biodatas;
