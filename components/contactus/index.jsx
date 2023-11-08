"use client";
import React from "react";
import { Image } from "next/dist/client/image-component";
import Logo from "../../assets/img/Logo.png";
import { IoIosArrowForward } from "react-icons/io";
import { useRouter } from "next/navigation";
import { CiLocationOn } from "react-icons/ci";
import { PiPhoneCallLight } from "react-icons/pi";
import { AiOutlineMail } from "react-icons/ai";
import { useState } from "react";
function Contact() {
  const onSubmit = (event) => {
    event.preventDefault();
  };
  const router = useRouter();
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [question, setQuestion] = useState("");
  return (
    <>
      <div className="cart-bg py-2">
        <div className="flex items-center justify-center">
          <div className="bg-black rounded-full w-[220px] h-[220px]">
            <div className="flex justify-center cursor-pointer">
              <Image
                src={Logo}
                alt="x"
                className="w-[200px] h-[200px]"
                onClick={() => router.push("/")}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 container m-auto">
        <div className="font-bold flex items-center gap-2 my-4">
          <div
            onClick={() => router.push("/")}
            className="bg-[#191919] hover:bg-[#353535] cursor-pointer text-white p-[7px] rounded-md"
          >
            <IoIosArrowForward />
          </div>
          <p className="text-[30px] font-semibold p-1 mb-1">تواصل معنا</p>
        </div>
        <div className="">
          <h1 className="text-[15px] font-medium p-1 mb-8 w-[480px]">
            لا تتردد في التواصل معنا إذا كان لديك أي استفسار متعلق بشركتنا أو
            خدماتنا. سوف نبذل قصارى جهدنا للتواصل معك في أقرب وقت ممكن.
          </h1>
        </div>
        <form className="w-[700px]" onSubmit={onSubmit}>
          <div className="grid grid-cols-2 gap-2">
            <input
              className="p-3 border shadow-lg rounded-sm"
              type="text"
              placeholder="الإسم"
              required={true}
              onChange={(e) => setClientName(e.target.value)}
            />
            <input
              className="p-3 border shadow-lg rounded-sm"
              type="string"
              pattern="^01[0-2]\d{1,8}$"
              placeholder="رقم الموبايل"
              required={true}
              onChange={(e) => setClientPhone(e.target.value)}
            />
          </div>
          <input
            className="w-full p-3 my-2 border shadow-lg rounded-sm"
            type="text"
            placeholder="الموضوع"
            required={true}
            onChange={(e) => setSubject(e.target.value)}
          />
          <textarea
            className="w-full p-3 border shadow-lg rounded-sm"
            cols="30"
            rows="10"
            placeholder="سؤالك"
            required={true}
            onChange={(e) => setQuestion(e.target.value)}
          ></textarea>
          <button className="w-full p-3 rounded-md mt-2 border shadow-lg bg-[#ecc63c] font-semibold">
            إرسال
          </button>
        </form>
        <div className="flex justify-end items-center gap-2 font-medium text-[17px]">
          <div className=" hover:text-[#393f52] cursor-pointer">
            <a href="tel:+2096333">96333</a>
          </div>
          <PiPhoneCallLight />
        </div>
        <div className="flex justify-end items-center gap-2 font-medium text-[17px]">
          <div className=" hover:text-[#393f52] cursor-pointer">
            <a href="mailto:alrefai.business@gmail.com">
              alrefai.business@gmail.com
            </a>
          </div>
          <AiOutlineMail />
        </div>
      </div>
    </>
  );
}

export default Contact;
