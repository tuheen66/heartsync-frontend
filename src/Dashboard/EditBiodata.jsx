import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EditBiodata = () => {
  const [birthDate, setBirthDate] = useState(null);

  return (
    <div>
      <h2 className="text-4xl font-semibold text-center my-8">Create / Edit Biodata</h2>
      <div className="text-gray-600">
        <form class="max-w-md mx-auto text-gray-600">
          {/* name */}
          <div class="relative z-0 w-full mb-5 ">
            <input
              type="text"
              name="name"
              id="name"
              class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="name"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Your Name
            </label>
          </div>
          {/* photo url */}
          <div class="relative z-0 w-full mb-5 ">
            <input
              type="text"
              name="photo"
              id="photo"
              class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="photo"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Photo URL
            </label>
          </div>

          {/* gender and birth day */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label
                for="gender"
                class="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
              >
                Select an option
              </label>
              <select
                id="gender"
                class="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div>
              <label className="text-gray-500">Date of Birth</label>
              <br />
              <DatePicker
                className="border-2 border-gray-300 rounded-lg"
                selected={birthDate}
                showIcon
                onChange={(date) => setBirthDate(date)}
                dateFormat="dd/MM/yyyy"
              />
            </div>
          </div>
          {/* heigh and weight */}
          <div className="grid grid-cols-2 gap-6 my-4 text-gray-500">
            <div>
              <label
                for="height"
                class="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
              >
                Height
              </label>
              <select
                id="height"
                class="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Select</option>
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
                for="weight"
                class="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
              >
                Weight
              </label>
              <select
                id="weight"
                class="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Select</option>
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
                for="partner_height"
                class="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
              >
                Expected Partner's Height
              </label>
              <select
                id="partner_height"
                class="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Select</option>
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
                for="partner_weight"
                class="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
              >
                Expected Partner's Weight
              </label>
              <select
                id="partner_weight"
                class="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Select</option>
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
            <div class="relative z-0 w-full mb-5 ">
              <input
                type="number"
                name="age"
                id="age"
                class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="age"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Age
              </label>
            </div>
            <div class="relative z-0 w-full mb-5 ">
              <input
                type="number"
                name="partner_age"
                id="partner_age"
                class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="partner_age"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Expected Partner Age
              </label>
            </div>
          </div>

          {/* occupation and race */}

          <div className="grid grid-cols-2 gap-6 my-4">
            <div>
              <label
                for="occupation"
                class="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
              >
                Occupation
              </label>
              <select
                id="occupation"
                class="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Select</option>
                <option value="student">Student</option>
                <option value="job">Job</option>
                <option value="house_wife">House Wife</option>
              </select>
            </div>

            <div>
              <label
                for="race"
                class="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
              >
                Religion
              </label>
              <select
                id="race"
                class="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Select</option>
                <option value="islam">Islam</option>
                <option value="christian">Christian</option>
                <option value="sanatan">Sanatan</option>
                <option value="buddhist">Buddhist</option>
              </select>
            </div>
          </div>

          {/* parent's name */}
          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-5 ">
              <input
                type="text"
                name="fathers_name"
                id="fathers_name"
                class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />

              <label
                for="fathers_name"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Father's Name
              </label>
            </div>

            <div class="relative z-0 w-full mb-5 ">
              <input
                type="text"
                name="mothers_name"
                id="mothers_name"
                class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="mothers_name"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Mother's Name
              </label>
            </div>
          </div>

          {/* division */}

          <div className="grid grid-cols-2 gap-6 my-4">
            <div>
              <label
                for="permanentDivision"
                class="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
              >
                Permanent Division Name
              </label>
              <select
                id="permanentDivision"
                class="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Select</option>
                <option value="dhaka">Dhaka</option>
                <option value="chattagram">Chattagram</option>
                <option value="rangpur">Rangpur</option>
                <option value="barisal">Barisal</option>
                <option value="khulna">Khulna</option>
                <option value="mymensing">Mymensing</option>
                <option value="sylhet">Sylhet</option>
              </select>
            </div>

            <div>
              <label
                for="presentDivision"
                class="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
              >
                Present Division Name
              </label>
              <select
                id="presentDivision"
                class="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Select</option>
                <option value="dhaka">Dhaka</option>
                <option value="chattagram">Chattagram</option>
                <option value="rangpur">Rangpur</option>
                <option value="barisal">Barisal</option>
                <option value="khulna">Khulna</option>
                <option value="mymensing">Mymensing</option>
                <option value="sylhet">Sylhet</option>
              </select>
            </div>
          </div>

          {/* email and phone */}
          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="email"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                name="email"
                id="email"
                class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="email"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Your email
              </label>
            </div>
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="phone"
                id="phone"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="phone"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Your phone number
              </label>
            </div>
          </div>
          <button
            type="submit"
            class="text-white bg-[#a9106b] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditBiodata;
