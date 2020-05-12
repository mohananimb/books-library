import React from "react";
import "./css/Footer.css";

export default function Footer() {
  let year = new Date().getFullYear();
  return (
    <div>
      <footer class="footer bg-dark">
        <div className="">
          <p className="my-2">© {year} eBook</p>
        </div>
      </footer>
    </div>
  );
}
