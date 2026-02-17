import React from "react";
import Image from "next/image";
import styles from "./BenefitsPrivateLimited.module.css";

const benefits = [
  {
    img: "/img/home/icon6.png",
    text: "Limited Liability Protection to Directors personal assets",
  },
  {
    img: "/img/home/icon7.png",
    text: "Better image and credibility in Market",
  },
  {
    img: "/img/home/icon8.png",
    text: "Easy to raise fund,capital and loans",
  },
  {
    img: "/img/home/icon9.png",
    text: "Favorite Business structure for Investors",
  },
  {
    img: "/img/home/icon10.png",
    text: "Easy to attract Employees and workers",
  },
  {
    img: "/img/home/icon11.png",
    text: "Quite easy to sell and deal with",
  },
];

export default function BenefitsPrivateLimited() {
  return (
    <section className={styles.section + " text-center py-12"}>
      <h2 className="display-5 fw-bold mb-7">
        <span className={styles.benefitColor}>Benefits</span> of Private Limited Company Registration
      </h2>
      <div className={styles.benefitsGrid + " d-flex flex-wrap justify-content-center gap-4"}>
        {benefits.map((item, idx) => (
          <div className={styles.benefitBox + " d-flex flex-column align-items-center p-4"} key={idx}>
            <div className={styles.benefitImg + " mb-3"}>
              <Image src={item.img} alt={item.text} width={120} height={120} />
            </div>
            <div className={styles.benefitText + " fw-bold"}>{item.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
