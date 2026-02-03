import React from "react";

export default function StartBusinessIndiaSection() {
  return (
    <section className="py-10 bg-white">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 mb-5 mb-lg-0">
            <h2 className="mb-4">Start your business in India</h2>
            <p className="mb-4">
              Choose your business structure - Private Limited, LLP, or OPC. We
              guide you through company registration, GST registration, tax
              filing, and all compliance requirements so you can focus on
              growing your business.
            </p>
            <ul className="list-unstyled fs-18">
              <li className="mb-2">
                <span className="text-success me-2">&#10003;</span> Private
                Limited / LLP / OPC registration
              </li>
              <li className="mb-2">
                <span className="text-success me-2">&#10003;</span> GST
                registration & monthly filing
              </li>
              <li className="mb-2">
                <span className="text-success me-2">&#10003;</span> Income tax
                return filing
              </li>
              <li className="mb-2">
                <span className="text-success me-2">&#10003;</span> ROC
                compliance & annual filing
              </li>
            </ul>
          </div>
          <div className="col-lg-5">
            <div className="d-flex flex-column gap-4">
              <div className="p-4 bg-light rounded shadow-sm">
                <div
                  className="fw-bold text-success mb-1"
                  style={{ fontSize: "30px" }}
                >
                  01
                </div>
                <div className="fw-bold">Choose business structure</div>
                <div className="text-muted">
                  Select Private Limited, LLP, or OPC based on your needs.
                </div>
              </div>
              <div className="p-4 bg-light rounded shadow-sm">
                <div
                  className="fw-bold text-success mb-1"
                  style={{ fontSize: "30px" }}
                >
                  02
                </div>
                <div className="fw-bold">We prepare & register</div>
                <div className="text-muted">
                  DIN, DSC, company name approval, incorporation documents.
                </div>
              </div>
              <div className="p-4 bg-light rounded shadow-sm">
                <div
                  className="fw-bold text-success mb-1"
                  style={{ fontSize: "30px" }}
                >
                  03
                </div>
                <div className="fw-bold">GST & Tax setup</div>
                <div className="text-muted">
                  GST registration, PAN, TAN, and bank account opening support.
                </div>
              </div>
              <div className="p-4 bg-light rounded shadow-sm">
                <div
                  className="fw-bold text-success mb-1"
                  style={{ fontSize: "30px" }}
                >
                  04
                </div>
                <div className="fw-bold">Stay compliant</div>
                <div className="text-muted">
                  GST filing, income tax returns, ROC compliance & annual
                  filing.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
