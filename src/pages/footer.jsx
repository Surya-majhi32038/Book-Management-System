import React from "react";

function Footer() {
  return (
    <footer>
      <nav className="  p-3 sm:p-5 md:p-10 gap-1  justify-around  text-white flex flex-row bottom-0 md:justify-evenly bg-gray-800 md:text-xl md:font-bold ">
        <a href="#" className="hover:underline hover:text-amber-600">Facebook</a>
        <a href="https://www.linkedin.com/in/surya-majhi/" target="_blank" className="hover:underline hover:text-amber-600">LinkedIn</a>
        <a href="#" className="hover:underline hover:text-amber-600">Twitter</a>
      </nav>
    </footer>
  );
}

export default Footer;
