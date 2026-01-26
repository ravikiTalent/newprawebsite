import { ServiceCard1 } from "components/reuseable/service-cards";
// CUSTOM DATA
import { serviceList1 } from "data/service";

export default function Services1() {
  return (
    <section className="wrapper bg-light">
      <div className="container pt-14 pt-md-16">
        <div className="row text-center">
          <div className="col-md-12 col-lg-12">
            <h3 className="display-4 mb-3">Our Services</h3>
            <h2 className="fs-16 text-uppercase text-muted mb-10 px-xl-10">
              Grow your business and remain compliant by partnering with LegallensIndia for a range of high quality, business services from incorporation to payroll delivered through a seamless online platform.
            </h2>
          </div>
        </div>

        <div className="position-relative">
          <div
            className="shape rounded-circle bg-soft-blue rellax w-16 h-16"
            style={{ zIndex: 0, right: "-2.2rem", bottom: "-0.5rem" }}
          />

          <div
            className="shape bg-dot primary rellax w-16 h-17"
            style={{ zIndex: 0, top: "-0.5rem", left: "-2.2rem" }}
          />

          <div className="row gx-md-5 gy-5 text-center">
            {serviceList1.map((item) => (
              <ServiceCard1
                key={item.id}
                Icon={item.icon}
                title={item.title}
                linkUrl={item.link}
                linkType={item.linkType}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
