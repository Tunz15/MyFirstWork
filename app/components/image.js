import Image from "next/image";

const Portfolio = () => {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <Image 
        src="/Prof.jpg" 
        alt="Samuel Martei" 
        width={300} 
        height={300} 
        className="profile-pic" 
      />
    </div>
  );
};

export default Portfolio;
