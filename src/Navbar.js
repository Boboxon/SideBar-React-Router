import React, { Component } from "react";
import { RiHome7Line } from "react-icons/ri";
import { RiContactsLine } from "react-icons/ri";
import { AiOutlineLineChart } from "react-icons/ai";
import { AiOutlineFieldNumber } from "react-icons/ai";
import { IoIosListBox } from "react-icons/io";
import { Link } from "react-router-dom";
import { MdTextsms } from "react-icons/md";
import { MdPermPhoneMsg } from "react-icons/md";
import { MdChatBubbleOutline } from "react-icons/md";
// import Items from "./Items";

class Navbar extends Component {
  render() {
    return (
      <div className="sidebar">
        <Link to="/">
          <RiHome7Line className="icon-1" />
          Dashboard
        </Link>
        <Link to="/contact">
          {" "}
          <RiContactsLine className="icon-1" />
          Contacts
        </Link>
        <Link to="/statistics">
          <AiOutlineLineChart className="icon-1" />
          Statistics
        </Link>
        <Link to="/number">
          <AiOutlineFieldNumber className="icon-1" />
          Numbers
        </Link>
        <Link to="/flow-builder">
          <IoIosListBox className="icon-1" />
          Flow Builder <span className="item">new</span>
        </Link>
        <div className="second-nav">
          <Link href="/">
            <MdTextsms className="icon-2" />
            SMS
          </Link>
          <Link href="/">
            <MdPermPhoneMsg className="icon-2" />
            Voice
          </Link>
          <Link href="/">
            <MdChatBubbleOutline className="icon-2" />
            Chat
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
