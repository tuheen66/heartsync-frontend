import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "./../../hooks/useAxiosSecure";

import { FaDollarSign, FaRegAddressBook } from "react-icons/fa6";
import { FaFemale, FaMale } from "react-icons/fa";

import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const AdminDashboard = () => {
  const axiosSecure = useAxiosSecure();

  const { data: biodatas = [] } = useQuery({
    queryKey: ["biodatas"],
    queryFn: async () => {
      const res = await axiosSecure.get("/biodata");
      return res.data;
    },
  });

  const { data: payments = [] } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const res = await axiosSecure.get("/payments");
      return res.data;
    },
  });

  const allFees = payments.map((item) => item.fees);

  const totalFees = allFees.reduce((total, item) => total + item, 0);
  const totalBiodata = biodatas.length;
  const premiumBiodata = biodatas.filter(
    (item) => item.status === "premium"
  ).length;
  const maleBiodata = biodatas.filter((item) => item.gender === "Male").length;
  const femaleBiodata = biodatas.filter(
    (item) => item.gender === "Female"
  ).length;

  const data = [
    { name: "Total Biodata", value: totalBiodata },
    { name: "Premium Biodata", value: premiumBiodata },
    { name: "Male Biodata", value: maleBiodata },
    { name: "Female Biodata", value: femaleBiodata },
    { name: "Total Fees", value: totalFees },
  ];

  const COLORS = ["#0088FE", "#9b59b6", "#00C49F", "#ffa801", "#FF8042"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div>
      <Helmet>
        <title>Heartsync | Admin Dashboard</title>
      </Helmet>

      <div className="grid md:grid-cols-2 gap-8 mx-auto w-[95%] border-2 mt-8 justify-center">
        <div className="  border-2 border-blue-500 rounded-lg text-center p-4 bg-blue-300">
          <h4 className="text-center uppercase text-3xl font-semibold text-gray-800">
            Total No of Biodata
          </h4>
          <div className="flex justify-center items-center gap-8 my-4">
            <div className="text-5xl text-[#0088FE]">
              <FaRegAddressBook></FaRegAddressBook>
            </div>
            <p className="text-5xl font-bold text-[#0088FE]">{totalBiodata}</p>
          </div>
        </div>

        <div className="  border-2 border-purple-500 rounded-lg text-center p-4 bg-purple-300">
          <h4 className="text-center uppercase text-3xl font-semibold text-gray-800">
            Premium Biodata
          </h4>
          <div className="flex justify-center items-center gap-8 my-4">
            <div className="text-5xl text-[#9b59b6]">
              <FaRegAddressBook></FaRegAddressBook>
            </div>
            <p className="text-5xl font-bold text-[#9b59b6]">
              {premiumBiodata}
            </p>
          </div>
        </div>

        <div className=" border-2 border-green-500 rounded-lg text-center p-4 bg-green-300 ">
          <h4 className="text-center uppercase text-3xl font-semibold text-gray-800">
            Total Male Biodata
          </h4>
          <div className="flex justify-center items-center gap-8 my-4">
            <div className="text-6xl text-[#00C49F]">
              <FaMale></FaMale>
            </div>
            <p className="text-5xl font-bold text-[#00C49F]">{maleBiodata}</p>
          </div>
        </div>

        <div className="  border-2 border-yellow-500 rounded-lg text-center p-4 bg-yellow-100">
          <h4 className="text-center uppercase text-3xl font-semibold text-gray-800">
            Total Female Biodata
          </h4>
          <div className="flex justify-center items-center gap-8 my-4">
            <div className="text-6xl text-[#ffa801]">
              <FaFemale></FaFemale>
            </div>
            <p className="text-5xl font-bold text-[#ffa801]">{femaleBiodata}</p>
          </div>
        </div>
      </div>

      <div className="mx-auto w-[95%] mt-8  border-2 border-orange-500 rounded-lg text-center p-4 bg-orange-200">
        <div>
          <h4 className="text-center uppercase text-3xl font-semibold text-gray-800">
            Total Fees earned
          </h4>
        </div>
        <div className="flex justify-center mt-4">
          <div className="text-6xl text-[#FF8042]">
            <FaDollarSign></FaDollarSign>
          </div>
          <p className="text-6xl font-bold text-[#FF8042] ">{totalFees}</p>
        </div>
      </div>
      <div className="my-8 flex justify-center w-[100%] h-[400px] ">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend style={{ width: "100px", position: "static" }}></Legend>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AdminDashboard;
