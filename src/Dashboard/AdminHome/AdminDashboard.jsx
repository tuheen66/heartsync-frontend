import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "./../../hooks/useAxiosSecure";

const AdminDashboard = () => {
  const axiosSecure = useAxiosSecure();

  const { data: biodatas = [] } = useQuery({
    queryKey: ["biodatas"],
    queryFn: async () => {
      const res = await axiosSecure.get("/biodata");
      return res.data;
    },
  });

  return (
    <div>
      <Helmet>
        <title>Heartsync | Admin Dashboard</title>
      </Helmet>

      <div>
        <div>
          <h4>Total Biodata</h4>
        </div>
      </div>
      <h2>Admin dashboard</h2>
    </div>
  );
};

export default AdminDashboard;
