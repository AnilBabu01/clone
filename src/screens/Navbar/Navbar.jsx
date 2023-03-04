import React, { useState } from "react";
import Topbar from "./Topbar";
import croppedlogo from "../../assests/croppedlogo.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./Navbar.css";
function Navbar() {
  const [navbar, setnavbar] = useState(false);

  const changebackgrou = () => {
    if (window.scrollY >= 80) {
      setnavbar(true);
    } else {
      setnavbar(false);
    }
  };

  window.addEventListener("scroll", changebackgrou);
  return (
    <>
      <Topbar />

      <nav className="main_div_header">
        <div>
          <img src={croppedlogo} alt="ss" />
        </div>

        <div className="main_div_header10">
          <a className="link_direct" to="/">
            श्री बड़े बाबा
          </a>
          <div class="dropdown">
            <button class="dropbtn">
              कुण्डलपुर <KeyboardArrowDownIcon />
            </button>
            <div class="dropdown-content">
              <a to="/">Link 1</a>
              <a to="/">Link 2</a>
              <a to="/">Link 3</a>
            </div>
          </div>
          <div class="dropdown">
            <button class="dropbtn">
              उपलब्ध सुविधाएं <KeyboardArrowDownIcon />
            </button>
            <div class="dropdown-content">
              <a to="/">Link 1</a>
              <a to="/">Link 2</a>
              <a to="/">Link 3</a>
            </div>
          </div>
          <a className="link_direct" to="/">
            योजनाएं
          </a>
          <div class="dropdown">
            <button class="dropbtn">
              जैन धर्म <KeyboardArrowDownIcon />
            </button>
            <div class="dropdown-content">
              <a to="/">Link 1</a>
              <a to="/">Link 2</a>
              <a to="/">Link 3</a>
            </div>
          </div>
          <a className="link_direct" to="/">
            आचार्य श्री
          </a>
          <div class="dropdown">
            <button class="dropbtn">
              फोटो गैलरी <KeyboardArrowDownIcon />
            </button>
            <div class="dropdown-content">
              <a to="/">Link 1</a>
              <a to="/">Link 2</a>
              <a to="/">Link 3</a>
            </div>
          </div>
          <div class="dropdown">
            <button class="dropbtn">
              वीडियो गैलरी <KeyboardArrowDownIcon />
            </button>
            <div class="dropdown-content">
              <a to="/">Link 1</a>
              <a to="/">Link 2</a>
              <a to="/">Link 3</a>
            </div>
          </div>
          <a className="link_direct" to="/">
            दान
          </a>
          &nbsp;&nbsp; &nbsp;&nbsp;
          <a className="link_direct" to="/">
            संपर्क
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
