import "./navbar.css"
function Navbar() {
    return (
      <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-sm px-10 py-4 flex justify-center items-center shadow-[0_4px_10px_rgba(25,25,25,0.5)]">
        <ul className="flex space-x-10">
          {["Home", "Profile", "Projects", "Certifications", "Contact Me"].map((label) => {
            const href = "#" + label.toLowerCase().replace(/\s/g, '');
            return (
              <li key={label}>
                <a
                  href={href}
                  className="home text-white px-4 py-2 rounded transition duration-200 hover:bg-gradient-to-r hover:from-[#404040] hover:to-[#191919]"
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
  
  export default Navbar;
  