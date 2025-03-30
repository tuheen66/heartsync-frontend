import React from "react";

const ContactForm = () => {
  return (
    <div>
      <form className=" flex flex-col space-y-4 border-1 border-gray-300 rounded-lg">
        <label className="font-bold" htmlFor="name">
          Your name:
        </label>
        <input
          className="bg-slate-100 py-2 pl-4 w-full rounded-lg"
          type="text"
          name=""
          id="name"
          placeholder="Your name"
        />

        <label className="font-bold" htmlFor="email">
          Your email:
        </label>
        <input
          className="bg-slate-100 py-2 pl-4 w-full rounded-lg"
          type="email"
          name=""
          id="email"
          placeholder="Your email"
        />
        <label className="font-bold" htmlFor="comment">
          Write to us:
        </label>
        <textarea
          className="bg-slate-100 py-2 pl-4 w-full rounded-lg"
          name=""
          placeholder="Write to us"
          cols="50"
          rows="4"
          id="comment"
        ></textarea>
        <input
          className="bg-[#a9106b] text-white text-lg py-2 rounded-lg"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default ContactForm;
