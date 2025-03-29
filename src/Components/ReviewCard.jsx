import { useQuery } from "@tanstack/react-query";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import "swiper/css/autoplay";

const ReviewCard = () => {
  const axiosSecure = useAxiosSecure();

  const { data: marriage = [] } = useQuery({
    queryKey: ["marriage"],
    queryFn: async () => {
      const res = await axiosSecure.get("/marriage");
      return res.data;
    },
  });

  return (
    <div className="w-[90%] mx-auto">
      <Swiper
        navigation={true}
        loop="true"
        modules={[Navigation]}
        className="mySwiper "
      >
        {marriage.map((item) => (
          <SwiperSlide key={item._id} className="">
            <div className=" bg-white p-4  shadow-lg border border-gray-100">
              {/* Header with couple photos and names */}
              <div className="flex items-center justify-center gap-12 mb-4">
                {/* Couple photos with elegant decoration */}
                <div className="flex items-center justify-center -space-x-6">
                  <div className="w-40 h-40 p-1.5 bg-gradient-to-br from-rose-50 to-amber-50 rounded-full shadow-lg z-10">
                    <img
                      className="w-full h-full object-cover rounded-full border-4 border-white"
                      src={item.photo}
                      alt="Groom"
                    />
                  </div>
                  <div className="w-40 h-40 p-1.5 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-full shadow-lg z-10">
                    <img
                      className="w-full h-full object-cover rounded-full border-4 border-white"
                      src={item.sp_photo}
                      alt="Bride"
                    />
                  </div>
                </div>
              </div>

              {/* Wedding details in elegant layout */}
              <div className="flex flex-col lg:flex-row gap-8 mb-4">
                {/* Wedding date */}
                <div className="col-span-1 text-center p-6 bg-gray-50 rounded-xl w-[25%]">
                  <div className="text-xs font-medium text-gray-500 tracking-widest mb-2">
                    WEDDING DATE
                  </div>
                  <div className="text-2xl font-serif text-gray-700">
                    {new Date(item.marriage_date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </div>
                </div>

                {/* Main message */}
                <div className="col-span-2 p-2 bg-rose-50 rounded-xl border border-rose-100 w-[75%]">
                  <div className="text-gray-700 leading-relaxed text-center font-serif text-lg italic">
                    "{item.message}"
                  </div>
                </div>
              </div>

              {/* Rating with decorative elements */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-4 bg-amber-50 rounded-full blur-sm opacity-50"></div>
                  <div className="relative bg-white px-10  rounded-full shadow-sm border border-amber-100">
                    <div className="flex flex-col items-center">
                      <div className="text-sm font-medium text-amber-600 mb-2">
                        Their Wedding Experience
                      </div>
                      <div className="flex items-center">
                        <Rating
                          style={{ maxWidth: 200 }}
                          value={item.rating}
                          readOnly
                          className="[&>span]:gap-1 [&>svg]:w-6 [&>svg]:h-6"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewCard;
