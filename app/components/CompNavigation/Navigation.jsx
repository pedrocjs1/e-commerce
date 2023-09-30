"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navigation.module.css";
import Image from "next/image";
import { BiSearchAlt } from "react-icons/bi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { GoPerson } from "react-icons/go";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
const links = [
  {
    label: "New Arrivals",
    route: "/new-arrivals",
  },
  {
    label: "DU exclusive",
    route: "/du-exclusive",
  },
  {
    label: "Clothing",
    route: "/clothing",
  },
  {
    label: "Dresses",
    route: "/dresses",
  },
  {
    label: "Shoes",
    route: "/shoes",
  },
  {
    label: "Accessories",
    route: "/accessories",
  },
  {
    label: "Sale",
    route: "/sale",
  },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isWideScreen, setIsWideScreen] = useState(true);

  useEffect(() => {
    const handleRezide = () => {
      const widthScreen = window.innerWidth < 769;
      setIsWideScreen(widthScreen);
    };
    handleRezide();
    window.addEventListener("resize", handleRezide);

    return () => window.removeEventListener("resize", handleRezide);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.headerAssets}>
        <div className={styles.menuIcon} onClick={() => setIsOpen(!isOpen)}>
          <GiHamburgerMenu size={30} />
        </div>
        {!isWideScreen && <BiSearchAlt size={30} />}
        <Image
          alt="Logo"
          width="150"
          height="50"
          src="/images/logodressup.jpg"
        />
        <div>
          {isWideScreen && <BiSearchAlt size={30} />}
          {!isWideScreen && <GoPerson size={30} />}
          <HiOutlineShoppingBag size={30} />
        </div>
      </div>
      {isOpen && (
        <div className={styles.overlay} onClick={() => setIsOpen(false)}></div>
      )}

      <nav className={`${styles.navigation} ${isOpen ? styles.open : ""}`}>
        {isOpen && (
          <li className={styles.licloseicon} onClick={() => setIsOpen(!isOpen)}>
            <AiOutlineClose size={30} />
          </li>
        )}
        <ul>
          {links.map(({ label, route }) => (
            <li key={route}>
              <Link href={route}>{label}</Link>
            </li>
          ))}
          {isOpen && (
            <li className={styles.lipersonicon}>
              <GoPerson size={30} />
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
