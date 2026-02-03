import React from "react";

export default function ComplianceSolutionSection() {
  return (
    <section className="py-10 bg-white">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <img
              src="/img/photos/legallens-laptop.png"
              alt="Compliance Solution"
              className="img-fluid rounded-4 shadow"
              style={{ maxHeight: 400, objectFit: 'cover' }}
            />
          </div>
          <div className="col-lg-6">
            <h2 className="mb-4">Complete compliance solution</h2>
            <p className="mb-4">
              From company registration to GST filing, income tax returns to trademark protection – we handle all your compliance needs in one place.
            </p>
            <ul className="list-unstyled fs-18">
              <li className="mb-2"><span className="text-success me-2">&#10003;</span> Company Registration</li>
              <li className="mb-2"><span className="text-success me-2">&#10003;</span> Bank Account Assistance</li>
              <li className="mb-2"><span className="text-success me-2">&#10003;</span> GST Registration</li>
              <li className="mb-2"><span className="text-success me-2">&#10003;</span> Trade License</li>
              <li className="mb-2"><span className="text-success me-2">&#10003;</span> GST Return Filing</li>
              <li className="mb-2"><span className="text-success me-2">&#10003;</span> TDS Return Filing</li>
              <li className="mb-2"><span className="text-success me-2">&#10003;</span> HR & Payroll Processing</li>
              <li className="mb-2"><span className="text-success me-2">&#10003;</span> Trademark Protection</li>
              <li className="mb-2"><span className="text-success me-2">&#10003;</span> MCA Compliance</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
