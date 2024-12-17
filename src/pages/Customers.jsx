import React from 'react';
import { RiTwitterXLine } from 'react-icons/ri';
import {motion} from "framer-motion";

const Customers = () => {
  const testimonials = [

    {
      image:
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'John Doe',
      username: '@johndoe',
      text: 'This is an amazing company. Highly recommended!',
      social: '#',
    },
    {
      image:
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Jane Smith',
      username: '@janesmith',
      text: 'The design is so clean and intuitive. Love it!',
      social: '#',
    },
    {
      image:
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'John Doe',
      username: '@johndoe',
      text: 'This is an amazing company. Highly recommended!',
      social: '#',
    },
    {
      image:
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Jane Smith',
      username: '@janesmith',
      text: 'The design is so clean and intuitive. Love it!',
      social: '#',
    },
    {
      image:
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'John Doe',
      username: '@johndoe',
      text: 'This is an amazing company. Highly recommended!',
      social: '#',
    },
    {
      image:
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Jane Smith',
      username: '@janesmith',
      text: 'The design is so clean and intuitive. Love it!',
      social: '#',
    },
    {
      image:
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'John Doe',
      username: '@johndoe',
      text: 'This is an amazing company. Highly recommended!',
      social: '#',
    },
    {
      image:
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Jane Smith',
      username: '@janesmith',
      text: 'The design is so clean and intuitive. Love it!',
      social: '#',
    },
    {
      image:
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'John Doe',
      username: '@johndoe',
      text: 'This is an amazing company. Highly recommended!',
      social: '#',
    },
    {
      image:
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Jane Smith',
      username: '@janesmith',
      text: 'The design is so clean and intuitive. Love it!',
      social: '#',
    },
    {
      image:
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'John Doe',
      username: '@johndoe',
      text: 'This is an amazing company. Highly recommended!',
      social: '#',
    },
    {
      image:
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Jane Smith',
      username: '@janesmith',
      text: 'The design is so clean and intuitive. Love it!',
      social: '#',
    },
    {
      image:
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'John Doe',
      username: '@johndoe',
      text: 'This is an amazing company. Highly recommended!',
      social: '#',
    },
    {
      image:
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Jane Smith',
      username: '@janesmith',
      text: 'The design is so clean and intuitive. Love it!',
      social: '#',
    },
    {
      image:
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'John Doe',
      username: '@johndoe',
      text: 'This is an amazing company. Highly recommended!',
      social: '#',
    },
    {
      image:
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Jane Smith',
      username: '@janesmith',
      text: 'The design is so clean and intuitive. Love it!',
      social: '#',
    },
    {
      image:
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'John Doe',
      username: '@johndoe',
      text: 'This is an amazing company. Highly recommended!',
      social: '#',
    },
    {
      image:
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Jane Smith',
      username: '@janesmith',
      text: 'The design is so clean and intuitive. Love it!',
      social: '#',
    },
    
  ];

  return (
    <div className='h-screen flex flex-col justify-center items-center '>
      <div className="flex flex-col items-center justify-center  ">
        <div className="flex flex-col gap-5 mb-8">
          <span className="text-center text-4xl">Read what people are saying</span>
          <span className="text-center text-slate-300">
            Dummy feedback from virtual customers <br /> using our component library.
          </span>
        </div>
      </div>
      <div className="relative w-full overflow-hidden mx-auto">
        <motion.div
                 animate={{
                  x: ["-200%", "0%"], // Loop animation through left and right
                }}
                transition={{
                  repeat: Infinity, // Loop animation
                  duration: 30, // Animation duration (adjust for speed)
                  ease: "linear",
          }}
          className="flex gap-8 w-auto flex-grow-1">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/90 border border-slate-300 min-w-80 h-auto rounded-2xl p-5 relative "
            >
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt="profile"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="flex flex-col pl-4">
                  <span className="text-black">{testimonial.name}</span>
                  <span className="text-sm text-slate-500">{testimonial.username}</span>
                </div>
              </div>
              <div className="mt-5 mb-5">
                <span className="text-black">{testimonial.text}</span>
              </div>
              <div className="absolute top-5 right-5 cursor-pointer">
                <RiTwitterXLine className="text-slate-800" size={20} />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Customers;

// import React from "react"

// const Customers = (props) => {
//   return (
//       <div className="relative min-h-screen flex flex-col justify-center items-center p-20 w-full">
//                          <div
//         className="w-80 h-80 rounded-full absolute top-[20%] -right-20 bg-white/40"
//         style={{
//           imageRendering: "pixelated", // Ensures sharp edges for pixelation
//           filter: "blur(120px)", // Adds a blur to simulate pixelation
//         }}
//           />
          
//                          <div
//         className="w-80 h-80 rounded-full absolute top-[60%] -left-20 bg-[#22d3ee]"
//         style={{
//           imageRendering: "pixelated", // Ensures sharp edges for pixelation
//           filter: "blur(120px)", // Adds a blur to simulate pixelation
//         }}
//       />
//           <h2 className="bruno-ace-sc-regular">Our Happy Customers</h2>
//           <div className="w-5/6 flex justify-between gap-12 mt-12">
//               <div className="card w-48 h-36 bg-white/70 rounded-2xl"/>
//               <div className="card w-48 h-36 bg-pink-300/70 rounded-2xl"/>
//               <div className="card w-48 h-36 bg-white/70 rounded-2xl"/>
//               <div className="card w-48 h-36 bg-pink-300/70 rounded-2xl"/>
//               <div className="card w-48 h-36 bg-white/70 rounded-2xl"/>
//           </div>
//     </div>
//   )
// };

// export default Customers;
