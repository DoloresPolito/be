"use client";
import React from "react";
import styles from "./style.module.css";
import Image from "next/image";

export default function Index() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.container}>
          <div>
            <p>logo</p>
          </div>
          <div className={styles.linkscontainer}>
          <p className={styles.link}>QUIENES SOMOS</p>
          <p className={styles.link}>QUE HACEMOS</p>
          <p className={styles.link}>EVENTOS</p>
          <p className={styles.link}>CONTACTO</p>
          </div>
   
        </div>
      </div>
    </>
  );
}
