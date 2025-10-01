import Link from "next/link";
import React, { useEffect, useState } from "react";
type Props = {
  mobileMenuOpen: boolean;
};
const MainNav = ({ mobileMenuOpen }: Props) => {
  const [activeNav, setActiveNav] = useState<string>("");
  const [isMobile, setIsMobile] = useState(false);

  const toggleNav = (nav: string) => {
    if (isMobile) {
      setActiveNav((prevNav) => (prevNav === nav ? "" : nav));
    } else {
      return;
    }
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check on initial render

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <nav id="main-menu" className={mobileMenuOpen ? "show" : ""}>
      <ul className="main-nav-items">
        <li
          className=""
          role="button"
        > 
        <Link href="/">Epim</Link>
          
          
        </li>
        <li
          className="menu-item-has-children"
          role="button"
          onClick={() => toggleNav("course")}
        >
          <a>Formations</a>
          <ul
            className={`subdropdown-menu ${
              activeNav === "course" ? "show" : ""
            }`}
          >
            <li>
              <Link href="/course">Formations</Link>
            </li>
            {/* <li>
              <Link href="/course/complete-html-css-and-javascript-course">
                Course Details
              </Link>
            </li> */}
          </ul>
        </li>
        <li
          className="menu-item-has-children"
          role="button"
          onClick={() => toggleNav("pages")}
        >
          <a>Branches</a>
          <ul
            className={`subdropdown-menu ${
              activeNav === "pages" ? "show" : ""
            }`}
          >
            <li>
              <Link href="/instructor">Enseignants</Link>
            </li>
            <li>
            </li>
          </ul>
        </li>
        <li
          className=""
        
         
        > 
        
        <Link href="/blog">ÉVÉNEMENT</Link> 
          
        
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
