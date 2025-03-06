import React from 'react';

const about = () => {
  return (
    <section className="bg-gray-900 text-white py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-yellow-500">Sam</h1>
        <h2 className="text-xl text-gray-300 mt-2">
          Web Developer | Technical Trainer
        </h2>
        <p className="text-gray-400 mt-6 leading-relaxed">
		I am a web programmer with a deep passion for creating seamless and efficient digital experiences. 
		With a background in front-end and back-end development, I have worked on some user-friendly and highly 
		functional web applications.
		Beyond coding, I am also an experienced technical trainer, dedicated to helping others unlock their 
		potential in the world of technology. With a talent for explaining complex concepts in clear, 
		approachable ways, I thrive in environments where teaching and coding go hand-in-hand, empowering 
		individuals and teams to succeed.

        </p>
        
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-blue-400">Skills</h3>
          <p className="text-gray-300 mt-2">
            Next.js, React, Note ++, HTML, SQL
          </p>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold text-blue-400">Contact</h3>
          <p className="text-gray-300 mt-2">samtei45@gmail.com </p>
          <p className="text-gray-300">0544209534</p>
        </div>
      </div>
    </section>
  );
};
 
export default about;
