import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import { Hero27 } from "components/blocks/hero";
import { About15, About9 } from "components/blocks/about";


export default function AboutUs() {
  return (
    <Fragment>
      <main className="content-wrapper">
        <Hero27 />
        <section className="pt-12 pb-5">
          <div className="container">
            <div className="row">
              <About9 />
              <About15 />
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
}
