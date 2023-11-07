import { FaAnchor } from "react-icons/fa"; // Import the anchor icon from Font Awesome


export default function Book() {
    const emailAddress = "mailto:bookadvfla@outlook.com"; // Replace this with your desired email address
  
    return (
      <div className="fixed bottom-4 right-2 transform -translate-x-1/2 z-20">
        <a href={`${emailAddress}`} className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex items-center space-x-2 transition duration-300 z-100 ease-in-out transform hover:scale-105 border border-white">
          <FaAnchor />
          <span>Book now</span>
        </a>
      </div>
    );
  }