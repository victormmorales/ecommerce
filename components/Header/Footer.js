import Link from "next/link";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <p>
        Designed by <span>Víctor Ruiz &copy;</span>{" "}
      </p>
      <Link href="https://www.linkedin.com/in/victormmorales/">
        <a>
          <Image src="/logo-vr.png" alt="logo-vr" width={30} height={30} />
        </a>
      </Link>
    </div>
  );
};

export default Footer;
