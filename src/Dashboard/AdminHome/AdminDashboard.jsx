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

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Total Biodata Card */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Total Biodata
                  </p>
                  <p className="mt-1 text-3xl font-semibold text-gray-900">
                    {totalBiodata}
                  </p>
                </div>
                <div className="p-3 rounded-full bg-blue-50 text-blue-600">
                  <FaRegAddressBook className="text-2xl" />
                </div>
              </div>
              <div className="mt-4">
                <div className="h-1 bg-gray-200 rounded-full">
                  <div
                    className="h-1 bg-blue-500 rounded-full"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Biodata Card */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Premium Biodata
                  </p>
                  <p className="mt-1 text-3xl font-semibold text-gray-900">
                    {premiumBiodata}
                  </p>
                </div>
                <div className="p-3 rounded-full bg-purple-50 text-purple-600">
                  <FaRegAddressBook className="text-2xl" />
                </div>
              </div>
              <div className="mt-4">
                <div className="h-1 bg-gray-200 rounded-full">
                  <div
                    className="h-1 bg-purple-500 rounded-full"
                    style={{
                      width: `${(premiumBiodata / totalBiodata) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Male Biodata Card */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Male Biodata
                  </p>
                  <p className="mt-1 text-3xl font-semibold text-gray-900">
                    {maleBiodata}
                  </p>
                </div>
                <div className="p-3 rounded-full bg-green-50 text-green-600">
                  <FaMale className="text-2xl" />
                </div>
              </div>
              <div className="mt-4">
                <div className="h-1 bg-gray-200 rounded-full">
                  <div
                    className="h-1 bg-green-500 rounded-full"
                    style={{ width: `${(maleBiodata / totalBiodata) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Female Biodata Card */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Female Biodata
                  </p>
                  <p className="mt-1 text-3xl font-semibold text-gray-900">
                    {femaleBiodata}
                  </p>
                </div>
                <div className="p-3 rounded-full bg-yellow-50 text-yellow-600">
                  <FaFemale className="text-2xl" />
                </div>
              </div>
              <div className="mt-4">
                <div className="h-1 bg-gray-200 rounded-full">
                  <div
                    className="h-1 bg-yellow-500 rounded-full"
                    style={{
                      width: `${(femaleBiodata / totalBiodata) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Revenue Card */}
        <div className="md:flex md:justify-center">
          <div className=" md:w-1/2 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl shadow-md overflow-hidden border border-orange-100">
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Total Fees Earned
                  </p>
                  <p className="mt-2 text-4xl font-bold text-gray-900">
                    ${totalFees}
                  </p>
                  <p className="mt-2 text-sm text-gray-500">
                    Total revenue generated
                  </p>
                </div>
                <div className="mt-4 md:mt-0">
                  <div className="p-4 rounded-full bg-orange-100 text-orange-600 inline-flex">
                    <FaDollarSign className="text-3xl" />
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <div className="h-2 bg-orange-100 rounded-full">
                  <div
                    className="h-2 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
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
