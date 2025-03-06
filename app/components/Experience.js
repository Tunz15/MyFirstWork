'use client';

import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="bg-gray-900 text-white py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-blue-500 mb-4">My Experience</h2>
        <p className="text-gray-400 text-lg leading-relaxed">
        Meet a <strong className="text-white"> web programmer </strong> and<strong className="text-white"> technical trainer</strong> with a passion for creating
        efficient, user-friendly websites and web applications. 
        Experienced in JavaScript, HTML, and CSS, VS Code, Python and Github.
        With a talent for explaining complex concepts in clear, approachable ways, I am meticulous in code reviews, proactive in problem-solving, and committed to designing modern and user-friendly web applications.
        </p>
        <p className="text-gray-400 text-lg leading-relaxed mt-4">
          My experience spans designing websites, training teams and creating engaging technical content. I am always
           eager to learn, adapt, and contribute to innovative tech solutions.
        </p>
      </div>
    </section>
  )
}
import Image from "next/image";

const Portfolio = () => {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <Image 
        src="/profile.jpg" 
        alt="Samuel Martei" 
        width={300} 
        height={300} 
        className="profile-pic" 
      />
    </div>
  );
};
export default Experience;

