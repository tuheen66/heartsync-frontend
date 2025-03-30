import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const EditBiodata = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  const [info, setInfo] = useState({
    name: "",
    photo: "",
    gender: "",
    birth_date: "",
    height: "",
    weight: "",
    partner_height: "",
    partner_weight: "",
    age: "",
    partner_age: "",
    occupation: "",
    race: "",
    father_name: "",
    mother_name: "",
    permanentDivision: "",
    presentDivision: "",
    email: "",
    phone: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  const { data: biodata = [] } = useQuery({
    queryKey: ["biodata", user.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/biodatas/${user?.email}`);
      return res.data;
    },
  });

  const id = biodata._id;

  useEffect(() => {
    if (id) {
      setIsEditing(true);
      axiosPublic(`biodata/${id}`)
        .then((response) => {
          setInfo(response.data);
        })
        .catch((error) => console.log(error));
    }
  }, [id]);

  const handleChange = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      axiosPublic
        .put(`/new-biodatas/${id}`, info)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axiosPublic.post("/biodata", info).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "Your Biodata is uploaded successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
    }
  };

  return (
    <div>
      <Helmet>
        <title>Heartsync | Edit Biodata</title>
      </Helmet>
      <h2 className="text-4xl font-semibold text-center my-8">
        Create / Edit Biodata
      </h2>

      <div className="text-gray-600">
        <form
          onSubmit={handleSubmit}
          className="max-w-4xl mx-auto text-gray-600 mb-12"
        >
          {/* name & email*/}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative z-0 w-full mb-5 ">
              <input
                type="text"
                name="name"
                id="name"
                value={info.name}
                onChange={handleChange}
                className="block py-2.5 px-2 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Your Name
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="email"
                defaultValue={info.email}
                id="email"
                value={isEditing ? info.email : user?.email}
                onChange={handleChange}
                className="block py-2.5 px-2 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Your email
              </label>
            </div>
          </div>

          {/* photo url & phone*/}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative z-0 w-full mb-5 ">
              <input
                type="text"
                name="photo"
                id="photo"
                value={info.photo}
                onChange={handleChange}
                className="block py-2.5 px-2 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="photo"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Photo URL
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="phone"
                id="phone"
                value={info.phone}
                onChange={handleChange}
                className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="phone"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Your phone number
              </label>
            </div>
          </div>

          {/* parent's name */}
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 ">
              <input
                type="text"
                name="father_name"
                id="father_name"
                value={info.father_name}
                onChange={handleChange}
                className="block py-2.5 px-2 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="father_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Father's Name
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 ">
              <input
                type="text"
                name="mother_name"
                id="mother_name"
                value={info.mother_name}
                onChange={handleChange}
                className="block py-2.5 px-2 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="mother_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Mother's Name
              </label>
            </div>
          </div>

          {/* birthday age partner age */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8  justify-items-center">
            <div className="relative z-0 w-full">
              <input
                type="date"
                name="birth_date"
                id="birth_date"
                value={info.birth_date}
                onChange={handleChange}
                className="block py-2.5 px-2 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer mt-0"
                placeholder=" "
                required
              />
              <label
                htmlFor="birth_date"
                className="peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Birth Date
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 ">
              <input
                type="number"
                name="age"
                id="age"
                value={info.age}
                onChange={handleChange}
                className="block py-2.5 px-2 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="age"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Age
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 ">
              <input
                type="number"
                name="partner_age"
                id="partner_age"
                value={info.partner_age}
                onChange={handleChange}
                className="block py-2.5 px-2 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="partner_age"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Expected Partner Age
              </label>
            </div>
          </div>

          {/* gender height weight */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div>
              <label
                htmlFor="gender"
                className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
              >
                Select an option
              </label>
              <select
                id="gender"
                name="gender"
                value={info.gender}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-md  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="Gender">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="height"
                className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
              >
                Height
              </label>
              <select
                id="height"
                name="height"
                value={info.height}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-md  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="Select">Select</option>
                <option value="5.0">5' 0"</option>
                <option value="5.2">5' 2"</option>
                <option value="5.4">5' 4"</option>
                <option value="5.6">5' 6"</option>
                <option value="5.8">5' 8"</option>
                <option value="5.10">5' 10"</option>
                <option value="6.0">6' 0"</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="weight"
                className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
              >
                Weight
              </label>
              <select
                id="weight"
                name="weight"
                value={info.weight}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-md  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="Select">Select</option>
                <option value="50">45-50 kg</option>
                <option value="55">50-55 kg</option>
                <option value="60">55-60 kg</option>
                <option value="65">60-65 kg</option>
                <option value="70">65-70 kg</option>
                <option value="75">70-75 kg</option>
                <option value="80">75-80 kg</option>
                <option value="85">80-85 kg</option>
                <option value="90">85-90 kg</option>
                <option value="95">90-95 kg</option>
                <option value="100">95-100 kg</option>
              </select>
            </div>
          </div>

          {/*occupation partner's heigh and weight */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-4">
            <div>
              <label
                htmlFor="occupation"
                className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
              >
                Occupation
              </label>
              <select
                id="occupation"
                name="occupation"
                value={info.occupation}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-md  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="Select">Select</option>
                <option value="student">Student</option>
                <option value="job">Job</option>
                <option value="house_wife">House Wife</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="partner_height"
                className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
              >
                Expected Partner's Height
              </label>
              <select
                id="partner_height"
                name="partner_height"
                value={info.partner_height}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-md  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="Select">Select</option>
                <option value="5.0">5' 0"</option>
                <option value="5.2">5' 2"</option>
                <option value="5.4">5' 4"</option>
                <option value="5.6">5' 6"</option>
                <option value="5.8">5' 8"</option>
                <option value="5.10">5' 10"</option>
                <option value="6.0">6' 0"</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="partner_weight"
                className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
              >
                Expected Partner's Weight
              </label>
              <select
                id="partner_weight"
                name="partner_weight"
                value={info.partner_weight}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-md  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="Select">Select</option>
                <option value="50">45-50 kg</option>
                <option value="55">50-55 kg</option>
                <option value="60">55-60 kg</option>
                <option value="65">60-65 kg</option>
                <option value="70">65-70 kg</option>
                <option value="75">70-75 kg</option>
                <option value="80">75-80 kg</option>
                <option value="85">80-85 kg</option>
                <option value="90">85-90 kg</option>
                <option value="95">90-95 kg</option>
                <option value="100">95-100 kg</option>
              </select>
            </div>
          </div>

          {/*  race division */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-4">
            <div>
              <label
                htmlFor="race"
                className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
              >
                Religion
              </label>
              <select
                id="race"
                name="race"
                value={info.race}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-md  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="Select">Select</option>
                <option value="islam">Islam</option>
                <option value="christian">Christian</option>
                <option value="sanatan">Sanatan</option>
                <option value="buddhist">Buddhist</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="permanentDivision"
                className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
              >
                Permanent Division Name
              </label>
              <select
                id="permanentDivision"
                name="permanentDivision"
                value={info.permanentDivision}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-500 text-sm  rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="Select">Select</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Chattagram">Chattagram</option>
                <option value="Rangpur">Rangpur</option>
                <option value="Barisal">Barisal</option>
                <option value="Khulna">Khulna</option>
                <option value="Mymensing">Mymensing</option>
                <option value="Sylhet">Sylhet</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="presentDivision"
                className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
              >
                Present Division Name
              </label>
              <select
                id="presentDivision"
                name="presentDivision"
                value={info.presentDivision}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
              >
                <option value="Select">Select</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Chattagram">Chattagram</option>
                <option value="Rangpur">Rangpur</option>
                <option value="Barisal">Barisal</option>
                <option value="Khulna">Khulna</option>
                <option value="Mymensing">Mymensing</option>
                <option value="Sylhet">Sylhet</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="text-white bg-[#a9106b] hover:bg-pink-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm w-full sm:w-auto px-5 py-2.5 text-center rounded-md "
          >
            Save And Publish Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditBiodata;
