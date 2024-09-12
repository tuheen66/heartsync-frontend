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
    <div className="my-8  mx-auto">
      <Swiper
        navigation={true}
        loop="true"
        modules={[Navigation]}
        className="mySwiper "
      >
        {marriage.map((item) => (
          <SwiperSlide key={item._id} className="px-12">
            <div className="flex justify-center gap-8 mb-4">
              <div className="w-24 ">
                <img className="rounded-full" src={item.photo} alt="" />
              </div>
              <div className="w-24">
                <img className="rounded-full" src={item.sp_photo} alt="" />
              </div>
            </div>
            <h2 className="text-center my-8">
              Married on :
              <span className="font-semibold ml-4">
                {String(new Date(item.marriage_date).getDate()).padStart(
                  2,
                  "0"
                )}
                -
                {String(new Date(item.marriage_date).getMonth() + 1).padStart(
                  2,
                  "0"
                )}
                -{new Date(item.marriage_date).getFullYear()}
              </span>
            </h2>
            <div>{item.message}</div>

            <div className="flex justify-center mt-8">
              <Rating style={{ maxWidth: 200 }} value={item.rating} readOnly />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewCard;
