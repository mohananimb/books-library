import React from "react";
import "./styles/Footer.scss";

export default function Footer() {
  let year = new Date().getFullYear();
  return (
    <div>
      <footer className="footer bg-dark">
        <div className="">
          <p className="my-2">© {year} eBook</p>
        </div>
      </footer>
    </div>
  );
}
