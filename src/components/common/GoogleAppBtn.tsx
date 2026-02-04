import { Fragment } from "react";
import NextLink from "components/reuseable/links/NextLink";
// CUSTOM UTILS LIBRARY FUNCTIONS
import { slideInDownAnimate } from "utils/animation";

export default function GoogleAppBtn() {
  return (
    <div className="d-flex justify-content-center justify-content-lg-start" style={slideInDownAnimate("900ms")}>
      <span style={slideInDownAnimate("1200ms")}>
        <NextLink
          href="#"
          className="btn btn-primary btn-icon btn-icon-start rounded me-2"
        >
          <Fragment>
            <i className="uil uil-apple" /> App Store
          </Fragment>
        </NextLink>
      </span>

      <span style={slideInDownAnimate("1500ms")}>
        <NextLink
          href="#"
          className="btn btn-green btn-icon btn-icon-start rounded"
        >
          <Fragment>
            <i className="uil uil-google-play" /> Google Play
          </Fragment>
        </NextLink>
      </span>
    </div>
  );
}
