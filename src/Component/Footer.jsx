import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6"

const Footer = () => {
  return (
    <footer className="bg-black/90 text-gray-300 py-10 mt-10 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* === Left: Logo / Name === */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Xhaffi Xcript
          </h2>
          <p className="text-sm text-gray-400 mt-2">Building creative & smart web solutions.</p>
        </div>
        {/* === Right: Contact Info & Socials === */}
        <div className="text-center md:text-right">
          <h3 className="text-lg font-semibold text-white mb-2">Connect With Me</h3>
          <div className="flex justify-center md:justify-end gap-5 text-xl">
            <a href="mrasadullahnoor@gmail.com" className="hover:text-red-400 transition">
              <FaEnvelope />
            </a>
            <a href="https://github.com/Asadullah-Noor" target="_blank" rel="noreferrer" className="hover:text-gray-400 transition">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/xhaffi-xcript/" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">
              <FaLinkedin />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61557421341717" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition">
              <FaFacebook />
            </a>
            <a href="https://x.com/Asadullah_Nor" target="_blank" rel="noreferrer" className="hover:text-sky-400 transition">
              <FaSquareXTwitter  />
            </a>
          </div>
        </div>
      </div>

      {/* === Bottom line === */}
      <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-800 pt-4">
        © {new Date().getFullYear()} Xhaffi Xcript. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
