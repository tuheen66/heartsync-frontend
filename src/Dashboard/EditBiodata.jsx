import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const EditBiodata = () => {
  const [birthDate, setBirthDate] = useState(null);
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  const handleSubmitBiodata = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const photo = form.photo.value;
    const gender = form.gender.value;
    const birth_date = birthDate;
    const height = form.height.value;
    const weight = form.weight.value;
    const partner_weight = form.partner_weight.value;
    const partner_height = form.partner_height.value;
    const age = form.age.value;
    const partner_age = form.partner_age.value;
    const occupation = form.occupation.value;
    const race = form.race.value;
    const father_name = form.fathers_name.value;
    const mother_name = form.mothers_name.value;
    const permanentDivision = form.permanentDivision.value;
    const presentDivision = form.presentDivision.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const biodata = {
      name,
      photo,
      gender,
      birth_date,
      height,
      weight,
      partner_height,
      partner_weight,
      age,
      partner_age,
      occupation,
      race,
      father_name,
      mother_name,
      permanentDivision,
      presentDivision,
      email,
      phone,
    };

    console.log(biodata);

    axiosPublic.post("/biodata", biodata).then((res) => {
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
  };

  return (
    <div>
      <h2 className="text-4xl font-semibold text-center my-8">
        Create / Edit Biodata
      </h2>
      <div className="text-gray-600">
        <form
          onSubmit={handleSubmitBiodata}
          className="max-w-md mx-auto text-gray-600 mb-12"
        >
          {/* name */}
          <div className="relative z-0 w-full mb-5 ">
            <input
              type="text"
              name="name"
              id="name"
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
          {/* photo url */}
          <div className="relative z-0 w-full mb-5 ">
            <input
              type="text"
              name="photo"
              id="photo"
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

          {/* gender and birth day */}
          <div className="grid grid-cols-2 gap-6">
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
                className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="Gender">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div>
              <label className="text-gray-500">Date of Birth</label>
              <br />
              <DatePicker
                showIcon
                selected={birthDate}
                onChange={(date) => setBirthDate(date)}
                dateFormat="dd/MM/yyyy"
              />
            </div>
          </div>

          {/* heigh and weight */}
          <div className="grid grid-cols-2 gap-6 my-4 text-gray-500">
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
                className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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

          {/*partner's heigh and weight */}
          <div className="grid grid-cols-2 gap-6 my-4">
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
                className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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

          {/* age */}
          <div className="grid grid-cols-2 gap-6">
            <div className="relative z-0 w-full mb-5 ">
              <input
                type="number"
                name="age"
                id="age"
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

          {/* occupation and race */}

          <div className="grid grid-cols-2 gap-6 my-4">
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
                className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="Select">Select</option>
                <option value="student">Student</option>
                <option value="job">Job</option>
                <option value="house_wife">House Wife</option>
              </select>
            </div>

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
                className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="Select">Select</option>
                <option value="islam">Islam</option>
                <option value="christian">Christian</option>
                <option value="sanatan">Sanatan</option>
                <option value="buddhist">Buddhist</option>
              </select>
            </div>
          </div>

          {/* parent's name */}
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 ">
              <input
                type="text"
                name="fathers_name"
                id="fathers_name"
                className="block py-2.5 px-2 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />

              <label
                htmlFor="fathers_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Father's Name
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 ">
              <input
                type="text"
                name="mothers_name"
                id="mothers_name"
                className="block py-2.5 px-2 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="mothers_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Mother's Name
              </label>
            </div>
          </div>

          {/* division */}

          <div className="grid grid-cols-2 gap-6 my-4">
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
                className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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

          {/* email and phone */}
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="email"
                defaultValue={user.email}
                id="email"
                className="block py-2.5 px-2 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                disabled
              />
              <label
                htmlFor="email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Your email
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="phone"
                id="phone"
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
          <button
            type="submit"
            className="text-white bg-[#a9106b] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditBiodata;
