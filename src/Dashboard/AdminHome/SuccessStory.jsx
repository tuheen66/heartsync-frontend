import useAxiosSecure from "./../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const SuccessStory = () => {
  const axiosSecure = useAxiosSecure();

  const [openModal, setOpenModal] = useState(false);
  const [story, setStory] = useState("");

  const { data: marriage = [] } = useQuery({
    queryKey: ["marriage"],
    queryFn: async () => {
      const res = await axiosSecure.get("/marriage");
      return res.data;
    },
  });

  const handleStory = (message) => {
    setOpenModal(true);
    setStory(message);
  };

  return (
    <div className="mb-8">
       <Helmet>
        <title>Heartsync | Success Story</title>
      </Helmet>
      <div className="relative overflow-x-auto">
        <h2 className="text-center text-3xl font-bold text-gray-700 my-8">
          All The Success Stories
        </h2>
        <table className="lg:w-1/2 mx-auto text-sm text-left rtl:text-right text-gray-600 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-pink-200 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Male Biodata Id
              </th>
              <th scope="col" className="px-6 py-3">
                Female Biodata Id
              </th>
              <th scope="col" className="px-6 py-3">
                View Story
              </th>
            </tr>
          </thead>
          <tbody>
            {marriage.map((item) => (
              <tr
                key={item._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td scope="row" className="px-6 py-4">
                  {item.biodataId}
                </td>
                <td className="px-6 py-4">{item.sp_biodataId}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleStory(item.message)}
                    className="py-2 px-4 border-none rounded-md bg-[#a9106b] hover:bg-[#30336b] text-white"
                  >
                    View Story
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div>
          <Modal
            className="lg:w-1/2 mx-auto"
            show={openModal}
            onClose={() => setOpenModal(false)}
          >
            <Modal.Header className="bg-green-300 px-4 py-2">
              Our Story:
            </Modal.Header>
            <Modal.Body className="bg-green-200 p-4">
              <div className="space-y-6">
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-400">
                  {story}
                </p>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button 
                className=" px-2 rounded-none border-none bg-[#a9106b] hover:bg-[#30336b] text-white mt-6"
                onClick={() => setOpenModal(false)}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default SuccessStory;
