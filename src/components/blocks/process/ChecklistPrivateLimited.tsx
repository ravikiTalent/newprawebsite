import React from "react";
import Image from "next/image";
import styles from "./ChecklistPrivateLimited.module.css";

const checklist = [
  {
    icon: "/img/home/ln2.png",
    title: "Two Directors",
    desc: "A private limited company must have at least two directors, with a maximum of fifteen. A minimum of one of the company's directors must be a resident of India.",
    align: "left"
  },
  {
    icon: "/img/home/ln1.png",
    title: "Minimum Capital Contribution",
    desc: "There is no minimum capital amount for a company. A company should have an authorized capital of at least ₹1 lakh.",
    align: "right"
  },
  {
    icon: "/img/home/ln4.png",
    title: "Unique Name",
    desc: "The name of your business must be unique. The suggested name should not match with any existing companies or trademarks in India.",
    align: "left"
  },
  {
    icon: "/img/home/ln3.png",
    title: "Registered Office",
    desc: "The registered office of a company does not have to be commercial space. Even a rented home can be the registered office, so long as an NOC is obtained from the landlord.",
    align: "right"
  }
];

export default function ChecklistPrivateLimited() {
  return (
    <section className={styles.section + " text-center py-12"}>
      <h2 className="display-5 fw-bold mb-2">
        What to keep in mind while Registering a <span className={styles.highlight}>Private Limited Company Registration?</span>
      </h2>
      <p className="lead mb-7">As defined by the Companies Act 2013, we must guarantee that the checklist requirements are met.</p>
      <div className={styles.checklistWrap + " d-flex flex-column align-items-center position-relative"}>
        <div className={styles.verticalLine}></div>
        {checklist.map((item, idx) => (
          <div className={styles.checklistRow + " d-flex w-100 mb-5 align-items-center justify-content-between flex-wrap"} key={idx}>
            {item.align === "left" && (
              <div className={styles.textBlock + " text-md-end text-start col-md-5 col-12"}>
                <h4 className="fw-bold mb-2">{item.title}</h4>
                <p className="mb-0">{item.desc}</p>
              </div>
            )}
            <div className={styles.iconBlock + " d-flex justify-content-center align-items-center col-md-2 col-12 my-3 my-md-0"}>
              <Image src={item.icon} alt={item.title} width={90} height={90} />
            </div>
            {item.align === "right" && (
              <div className={styles.textBlock + " text-md-start text-start col-md-5 col-12"}>
                <h4 className="fw-bold mb-2">{item.title}</h4>
                <p className="mb-0">{item.desc}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
