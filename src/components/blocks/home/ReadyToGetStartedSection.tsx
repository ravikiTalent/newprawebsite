import React from "react";
import NextLink from "components/reuseable/links/NextLink";

export default function ReadyToGetStartedSection() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="rounded-4 border p-4 d-flex flex-column flex-md-row align-items-center justify-content-between bg-white">
          <div>
            <h2 className="mb-2">Ready to get started?</h2>
            <p className="mb-0 fs-18 text-muted">
              Create an account to start your company registration or migrate your existing business. No credit card required to explore.
            </p>
          </div>
          <div className="mt-4 mt-md-0">
            <NextLink href="/StartupIndia" className="btn btn-dark btn-lg rounded-pill px-4">
              Start in India &rarr;
            </NextLink>
          </div>
        </div>
      </div>
    </section>
  );
}
