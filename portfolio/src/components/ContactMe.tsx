// src/components/ContactMeSection.tsx
import React, { useState } from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function ContactMe() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
      
        try {
          const response = await fetch("https://formsubmit.co/ajax/palomares.raymond.rivamonte@gmail.com", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              name: formData.name,
              email: formData.email,
              message: formData.message,
              _subject: `New message from ${formData.name} via Portfolio`,
            }),
          });
      
          const data = await response.json();
      
          if (data.success === "true") {
            alert("Message sent successfully!");
            setFormData({
              name: '',
              email: '',
              subject: '',
              message: '',
            });
          } else {
            alert("Failed to send message.");
          }
        } catch (error) {
          alert("An error occurred. Please try again.");
          console.error(error);
        }
      };



  return (
    <section
      id="contactme"
      className="min-h-screen w-full flex flex-col items-center justify-center bg-black px-4"
    >
      <h1 className="text-medium tracking-tighter font-[Montserrat] text-white mt-10">
        Contact Me
      </h1>

      <div className="w-full max-w-[1200px] h-[600px] flex items-center justify-center">
        <div className="w-[900px] h-[500px] bg-black border text-white shadow-xl rounded-xl flex flex-row">
        <form
          onSubmit={handleSubmit}
          className="w-1/2 h-full bg-black rounded-xl p-4 flex flex-col justify-center gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="p-2 rounded bg-black/60 border border-gray-400 placeholder-white text-white"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="p-2 rounded bg-black/60 border border-gray-400 placeholder-white text-white"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="p-2 rounded bg-black/60 border border-gray-400 placeholder-white text-white"
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="p-2 rounded bg-black/60 border border-gray-400 placeholder-white text-white resize-none"
            required
          />
          <button
            type="submit"
            className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
          >
            Send Message
          </button>
        </form>

            <div className='w-1/2 h-full bg-white/10 backdrop-blur-md border rounded-xl p-4 flex flex-col'>
                <p className='font-[Montserrat] text-[30px] text-center'>Let's Connect</p>
                <p className='font-[Lora] text-[15px] text-center'>Feel free to reach out to me through the following channels:</p>
                <div className='flex flex-row mt-10'>
                    <PhoneIcon style={{fontSize:"30px"}}/>
                    <a className='ml-5'>+639159015884</a>
                </div>
                <div className='flex flex-row mt-10'>
                    <LinkedInIcon style={{fontSize:"30px"}}/>
                    <a href="www.linkedin.com/in/palomares-raymond-r-87b22a293" className='ml-5'>PALOMARES, Raymond R.</a>
                </div>
                <div className='flex flex-row mt-10'>
                    <GitHubIcon style={{fontSize:"30px"}}/>
                    <a href="https://github.com/Mon0629" className='ml-5'>Mon0629</a>
                </div>
                <div className='flex flex-row mt-10'>
                    <EmailIcon style={{fontSize:"30px"}}/>
                    <a className='ml-5'>palomares.raymond.rivamonte@gmail.com</a>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
