// components/FooterSection.tsx
import Link from "next/link";
import { FaEnvelope, FaFacebook, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-blue-500 text-white p-6">
      <div className="flex justify-center items-center mb-4">
        <div className="flex">
          <Link href="mailto:info@adventurerflorida.com" className="mr-4 hover:underline">
            Book Now
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact Us
          </Link>
        </div>
      </div>
      <div className="text-center mb-4">
        <p className="mb-2">Boat Maintained by Adventurer Florida</p>
        <p>Website Created by Cory Nickerson</p>
      </div>
      <div className="flex justify-center">
        <Link
          href="mailto:info@adventurerflorida.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4 text-2xl"
        >
          <FaEnvelope />
        </Link>
        <Link
          href="https://www.facebook.com/adventurer.fla"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl"
        >
          <FaFacebook />
        </Link>
        <Link
          href="tel:6018504357"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl"
        >
          <FaPhone className="ml-4 text-2xl" />
        </Link>
      </div>
    </div>
  );
}
