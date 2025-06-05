import { ArrowLeft } from "lucide-react";
import PageTransition from "../Component/PageTransition";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaLinkedin, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import Notification from "../Admin/Component/Notification";
import axios from "axios";

const Contact: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [notification, setNotification] = useState<{
    message: string,
    type: "success" | "error"
    visible: boolean
  }>({
    message: "",
    type: "success",
    visible: false
  })

  const handleSendEmail = async(e: any) => {
    e.preventDefault()
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const data = {
  service_id: serviceId,
  template_id: templateId,
  user_id: publicKey,
  template_params: {
    from_name: name,
    from_email: email,
    to_name: 'Mucyo Blaise',
    message: message
  }
};

    try {
     const res = await axios.post('https://api.emailjs.com/api/v1.0/email/send', data)
     console.log(res.data)
      setNotification({
        message: `✅ ${name} Your message was sent successfully. I will get back to you soon`,
        type: "success",
        visible:true
      })
     setName('')
     setEmail('')
     setMessage('')
    } catch (error) {
      console.log('Failed to send Email', error)
        setNotification({
          message: `⚠️ Oops! Something went wrong. Please try again or contact me directly at mucyoblaise86@gmail.com.`,
          type: "error",
          visible:true
        })
    }finally{
      setTimeout(() => {
        setNotification((prev)=>({...prev, visible:false}))
      }, 3000);
    }
  };


  return (
    <div className="w-full min-h-screen bg-lightbg dark:bg-Color1 p-8">
      <PageTransition>
        <div className="max-w-[1024px] mx-auto">
          <button
            className="pb-8 flex flex-row items-center justify-center gap-1"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="text-gray-400" />
            <p className="text-gray-400 text-[20px]">Back</p>
          </button>

          <div className="flex items-center justify-center gap-4 pb-5">
            <h1 className="font-bold text-[30px] text-lightThirdColor dark:text-[#ffc86b]">
              Let's Work Together
            </h1>
            <div className="flex-1 bg-Color2 h-[1px]" />
          </div>

          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex flex-col gap-5">
              <h1 className="text-Color1 dark:text-white text-[25px] font-poppins">
                Get in Touch
              </h1>
              <div className="flex flex-row gap-3">
                <Mail className="text-lightText dark:text-gray-400" />
                <p className="text-lightText dark:text-gray-400 font-poppins">
                  mucyoblaise86@gmail.com
                </p>
              </div>
              <div className="flex flex-row gap-3">
                <Phone className="text-lightText dark:text-gray-400" />
                <p className="text-lightText dark:text-gray-400 font-poppins">+250 786 663 069</p>
              </div>
              <div className="flex flex-row gap-3">
                <MapPin className="text-lightText dark:text-gray-400" />
                <p className="text-lightText dark:text-gray-400 font-poppins">Kigali, Rwanda</p>
              </div>
            </div>

            {/* Contact Boxes */}
            <form onSubmit={handleSendEmail} className="flex flex-col bg-lightCard dark:bg-Color2 w-[350px] md:w-[400px] p-4 rounded-2xl gap-6 mt-10 md:mt-0">
              <div className="flex flex-col">
                <label
                  htmlFor="names"
                  className="text-lightText dark:text-gray-400 font-poppins mb-1"
                >
                  Names
                </label>
                <input
                  type="text"
                  name="names"
                  value={name}
                  onChange={(e)=> setName(e.target.value)}
                  className="dark:bg-[#333333] bg-lightbg h-10 rounded-xl outline-none p-4 text-lightText dark:text-white font-poppins  focus:ring-2 focus:ring-lightThirdColor dark:focus:ring-[#ffc86b]"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="text-lightText dark:text-gray-400 font-poppins mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e)=> setEmail(e.target.value)}
                  className="dark:bg-[#333333] bg-lightbg h-10 rounded-xl outline-none p-4 text-lightText dark:text-white font-poppins focus:ring-2 focus:ring-lightThirdColor dark:focus:ring-[#ffc86b]"
                />
              </div>

              <textarea
                name="txtArea"
                id=""
                placeholder="Message Here"
                value={message}
                onChange={(e)=> setMessage(e.target.value)}
                className="dark:bg-[#333333] bg-lightbg min-h-36 p-4 outline-none font-poppins text-lightText dark:text-whitee rounded-xl focus:ring-2 focus:ring-lightThirdColor dark:focus:ring-[#ffc86b]"
              ></textarea>

              <button type="submit" className="text-black font-poppins text-[15px] bg-lightThirdColor dark:bg-[#ffc86b] p-2 rounded-xl hover:hover:bg-[#cf825f] dark:hover:bg-[#c09855]">
                Send Message
              </button>
            </form>
          </div>

          <div className="flex items-center justify-center gap-4 pb-5 mt-20">
            <div className="flex-1 max-w-[30%] bg-[#6c6c6c] h-[1px]" />
            <div className="flex flex-row text-[20px] font-poppins text-Color1 dark:text-white gap-10">
              <a href="" className="hover:text-lightThirdColor dark:hover:text-[#ffc86b]">
                <FaLinkedin />
              </a>
              <a href="" className="hover:text-lightThirdColor dark:hover:text-[#ffc86b]">
                <FaGithub />
              </a>
              <a href="" className="hover:text-lightThirdColor dark:hover:text-[#ffc86b]">
                <FaTwitter />
              </a>
              <a href="" className="hover:text-lightThirdColor dark:hover:text-[#ffc86b]">
                <FaInstagram />
              </a>
            </div>
            <div className="flex-1 max-w-[30%] bg-[#6c6c6c] h-[1px]" />
          </div>
          {notification.visible && (
            <Notification 
            message={notification.message}
            type={notification.type}
          />
          )}
        </div>
      </PageTransition>
    </div>
  );
};

export default Contact;
