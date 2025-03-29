import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const ViewBiodata = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  const { data: biodata = [], refetch } = useQuery({
    queryKey: ["biodata", user.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/biodatas/${user?.email}`);
      return res.data;
    },
  });

  const birthDate = biodata.birth_date;
  const date = new Date(birthDate);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handleBiodataPremiumRequest = (biodata) => {
    Swal.fire({
      title: "Upgrade to Premium?",
      text: "This will make your biodata featured for potential matches.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#7c3aed",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Upgrade Now",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.patch(`/prem-biodata/premium/${biodata._id}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              title: "Success!",
              text: `${biodata.name}'s biodata is now Premium`,
              icon: "success",
              confirmButtonColor: "#7c3aed",
            });
          }
        });
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Heartsync | View Biodata</title>
      </Helmet>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {biodata.name}'s Biodata
          </h1>
          {biodata.status === "premium" && (
            <span className="inline-block bg-purple-100 text-[#a9106b] text-sm font-semibold px-3 py-1 rounded-full">
              Premium Profile
            </span>
          )}
        </div>

        <div className="bg-white shadow-lg  overflow-hidden">
          <div className="md:flex">
            {/* Profile Image */}
            <div className="md:w-1/3 p-6 flex justify-center">
              <div className="relative">
                <img
                  src={biodata.photo}
                  alt={biodata.name}
                  className="w-64 h-64 object-cover  shadow-md"
                />
                {biodata.status !== "premium" && (
                  <button
                    onClick={() => handleBiodataPremiumRequest(biodata)}
                    className="absolute -bottom-4 left-1/2 transform -translate-x-1/2
                     bg-[#a9106b] text-white px-6 py-2  shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
                  >
                    Upgrade to Premium
                  </button>
                )}
              </div>
            </div>

            {/* Biodata Details */}
            <div className="md:w-2/3 p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <DetailItem label="Biodata Type" value={biodata.gender} />
                <DetailItem label="Biodata ID" value={biodata.biodataId} />
                <DetailItem label="Date of Birth" value={formattedDate} />
                <DetailItem label="Age" value={`${biodata.age} years`} />
                <DetailItem label="Height" value={`${biodata.height} ft`} />
                <DetailItem label="Weight" value={`${biodata.weight} kg`} />
                <DetailItem label="Religion" value={biodata.race} />
                <DetailItem
                  label="Occupation"
                  value={biodata.occupation}
                />
                <DetailItem
                  label="Permanent Division"
                  value={biodata.permanentDivision}
                />
                <DetailItem
                  label="Present Division"
                  value={biodata.presentDivision}
                />
                <DetailItem label="Contact Email" value={biodata.email} />
                <DetailItem
                  label="Contact Phone"
                  value={biodata.phone}
                />
              </div>

              {/* Partner Preferences Section */}
              <div className="mt-10 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Partner Preferences
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <DetailItem
                    label="Preferred Age"
                    value={`${biodata.partner_age} years`}
                  />
                  <DetailItem
                    label="Preferred Height"
                    value={`${biodata.partner_height} ft`}
                  />
                  <DetailItem
                    label="Preferred Weight"
                    value={`${biodata.partner_weight} kg`}
                  />
                </div>
              </div>

              {/* Family Information Section */}
              <div className="mt-10 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Family Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <DetailItem
                    label="Father's Name"
                    value={biodata.father_name}
                  />
                  <DetailItem
                    label="Mother's Name"
                    value={biodata.mother_name}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable component for detail items
const DetailItem = ({ label, value }) => (
  <div>
    <p className="text-sm font-medium text-gray-500">{label}</p>
    <p className="mt-1 text-lg font-semibold text-gray-900">
      {value || "Not specified"}
    </p>
  </div>
);

export default ViewBiodata;