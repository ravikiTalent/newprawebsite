import React from "react";
import Image from "next/image";
import styles from "./CompanyRegistrationSteps.module.css";

const steps = [
  {
    number: "01",
    title: "Fill up the forms",
    img: "/img/home/Login.png",
  },
  {
    number: "02",
    title: "Submit the Documents",
    img: "/img/home/Certificate_edited.webp",
  },
  {
    number: "03",
    title: "Pay Fees",
    img: "/img/home/Wallet.webp",
  },
  {
    number: "04",
    title: "Get your Company Registered",
    img: "/img/home/Submit.webp",
  },
];

export default function CompanyRegistrationSteps() {
  return (
    <section className={styles.section + " text-center py-12"}>
      <h2 className="display-5 fw-bold mb-2">
        Private Limited Company Registration In
        <br />
        <span className="text-primary">4 Easy Steps</span>
      </h2>
      <div className={styles.stepsRow + " d-flex justify-content-center align-items-center gap-4 my-5 flex-wrap"}>
        {steps.map((step, idx) => (
          <React.Fragment key={step.number}>
            {idx > 0 && (
              <span className={styles.arrow}>
                <Image src="/img/home/arrow_new.png" alt="arrow" width={90} height={20} />
              </span>
            )}
            <div className={styles.stepBox + " d-flex flex-column align-items-center"}>
              <div className={styles.stepNumberIconWrap + " d-flex flex-column align-items-center mb-2"}>
                <span className={styles.stepNumber}>{step.number}</span>
                <div className={styles.stepImg + " mt-2 mb-2"}>
                  <Image src={step.img} alt={step.title} width={120} height={120} />
                </div>
              </div>
              <div className={styles.stepTitle}>{step.title}</div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
