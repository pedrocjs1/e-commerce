"use client";

import { useState, useEffect } from "react";
import style from "./TextCarousel.module.css";

export default function TextCarousel() {
  const [index, setIndex] = useState(0);

  const advertisements = [
    "¡FREE SHIPPING ON ORDERS OVER $75!",
    "¡BUY ONLINE + PICK UP IN STORE!",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % advertisements.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [advertisements.length]);

  return (
    <div className={style.carouselcontainer}>
      <div>{advertisements[index]}</div>
    </div>
  );
}
