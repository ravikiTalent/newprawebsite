import Link from "next/link";
import DocLayout from "components/layouts/DocLayout";
import NextLink from "components/reuseable/links/NextLink";
import CodeHighlight from "components/reuseable/CodeHighlight";
// MARKUP
import {
  iconMarkup,
  playMarkup,
  sizesMarkup,
  colorsMarkup,
  shapesMarkup,
  stylesMarkup,
  circleMarkup,
  socialMarkup,
  expandMarkup,
  gradientsMarkup
} from "markups/elements/buttons";
// CUSTOM DATA
const quickAccess = [
  { title: "Colors", url: "snippet-1" },
  { title: "Gradient", url: "snippet-2" },
  { title: "Sizes", url: "snippet-3" },
  { title: "Shapes", url: "snippet-4" },
  { title: "Style", url: "snippet-5" },
  { title: "Circle", url: "snippet-6" },
  { title: "Social", url: "snippet-7" },
  { title: "Icon", url: "snippet-8" },
  { title: "Expand", url: "snippet-9" },
  { title: "Play", url: "snippet-10" }
];

export default function Buttons() {
  return (
    <DocLayout
      pageTitle="Buttons"
      quickAccessLinks={quickAccess}
      description={
        <>
          Use our custom button styles for actions in forms, dialogs, with support for multiple sizes, states, etc.{" "}
          <a
            href="https://getbootstrap.com/docs/5.2/components/buttons/"
            target="_blank"
            className="hover more"
            rel="noreferrer">
            Bootstrap docs
          </a>
        </>
      }>
      {/* ========== section 1 ========== */}
      <section id="snippet-1" className="wrapper pt-16">
        <h2 className="mb-5">Colors</h2>
        <div className="card">
          <div className="card-body">
            <NextLink href="#" className="btn btn-yellow rounded-pill mb-2 me-1">Button</NextLink>
            <NextLink href="#" className="btn btn-orange rounded-pill mb-2 me-1">Button</NextLink>
            <NextLink href="#" className="btn btn-pink rounded-pill mb-2 me-1">Button</NextLink>
            <NextLink href="#" className="btn btn-violet rounded-pill mb-2 me-1">Button</NextLink>
            <NextLink href="#" className="btn btn-purple rounded-pill mb-2 me-1">Button</NextLink>
            <NextLink href="#" className="btn btn-blue rounded-pill mb-2 me-1">Button</NextLink>
            <NextLink href="#" className="btn btn-aqua rounded-pill mb-2 me-1">Button</NextLink>
            <NextLink href="#" className="btn btn-leaf rounded-pill mb-2 me-1">Button</NextLink>
            <NextLink href="#" className="btn btn-fuchsia rounded-pill mb-2 me-1">Button</NextLink>
            <NextLink href="#" className="btn btn-sky rounded-pill mb-2 me-1">Button</NextLink>
            <NextLink href="#" className="btn btn-grape rounded-pill mb-2 me-1">Button</NextLink>
            <NextLink href="#" className="btn btn-navy rounded-pill mb-2 me-1">Button</NextLink>
            <NextLink href="#" className="btn btn-ash rounded-pill mb-2 me-1">Button</NextLink>

            <br className="d-none d-lg-block" />

            <NextLink href="#" className="btn btn-soft-yellow rounded-pill mb-2 me-1">Button</NextLink>
            <NextLink href="#" className="btn btn-soft-orange rounded-pill mb-2 me-1">Button</NextLink>
            <NextLink href="#" className="btn btn-soft-pink rounded-pill mb-2 me-1">Button</NextLink>
            <NextLink href="#" className="btn btn-soft-violet rounded-pill mb-2 me-1">Button</NextLink>
            <NextLink href="#" className="btn btn-soft-purple rounded-pill mb-2 me-1">Button</NextLink>
            <NextLink href="#" className="btn btn-soft-blue rounded-pill mb-2 me-1">Button</NextLink>
            <NextLink href="#" className="btn btn-soft-aqua rounded-pill mb-2 me-1">Button</NextLink>
            <NextLink href="#" className="btn btn-soft-leaf rounded-pill mb-2 me-1">Button</NextLink>
            <NextLink href="#" className="btn btn-soft-fuchsia rounded-pill mb-2 me-1">Button</NextLink>
            <NextLink href="#" className="btn btn-soft-sky rounded-pill mb-2 me-1">Button</NextLink>
            <NextLink href="#" className="btn btn-soft-grape rounded-pill mb-2 me-1">Button</NextLink>
            <NextLink href="#" className="btn btn-soft-navy rounded-pill mb-2 me-1">Button</NextLink>
            <NextLink href="#" className="btn btn-soft-ash rounded-pill mb-2 me-1">Button</NextLink>
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-colors">
              View example's code
            </a>
          </div>

          <div id="collapse-colors" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{colorsMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 2 ========== */}
      <section id="snippet-2" className="wrapper pt-16">
        <h2 className="mb-5">Gradients</h2>
        <div className="card">
          <div className="card-body">
            <NextLink href="#" className="btn btn-gradient gradient-1 rounded-pill mb-2 me-1">Button</NextLink>
            <NextLink href="#" className="btn btn-gradient gradient-2 rounded-pill mb-2 me-1">Button</NextLink>
            <NextLink href="#" className="btn btn-gradient gradient-3 rounded-pill mb-2 me-1">Button</NextLink>
            <NextLink href="#" className="btn btn-gradient gradient-4 rounded-pill mb-2 me-1">Button</NextLink>
            <NextLink href="#" className="btn btn-gradient gradient-5 rounded-pill mb-2 me-1">Button</NextLink>
            <NextLink href="#" className="btn btn-gradient gradient-6 rounded-pill mb-2 me-1">Button</NextLink>
            <NextLink href="#" className="btn btn-gradient gradient-7 rounded-pill mb-2 me-1">Button</NextLink>
            <br className="d-none d-lg-block" />
            <NextLink href="#" className="btn btn-outline-gradient gradient-1 rounded-pill mb-2 me-1"><span>Button</span></NextLink>
            <NextLink href="#" className="btn btn-outline-gradient gradient-2 rounded-pill mb-2 me-1"><span>Button</span></NextLink>
            <NextLink href="#" className="btn btn-outline-gradient gradient-3 rounded-pill mb-2 me-1"><span>Button</span></NextLink>
            <NextLink href="#" className="btn btn-outline-gradient gradient-4 rounded-pill mb-2 me-1"><span>Button</span></NextLink>
            <NextLink href="#" className="btn btn-outline-gradient gradient-5 rounded-pill mb-2 me-1"><span>Button</span></NextLink>
            <NextLink href="#" className="btn btn-outline-gradient gradient-6 rounded-pill mb-2 me-1"><span>Button</span></NextLink>
            <NextLink href="#" className="btn btn-outline-gradient gradient-7 rounded-pill mb-2 me-1"><span>Button</span></NextLink>
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-gradients">
              View example's code
            </a>
          </div>

          <div id="collapse-gradients" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{gradientsMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 3 ========== */}
      <section id="snippet-3" className="wrapper pt-16">
        <h2 className="mb-5">Sizes</h2>
        <div className="card">
          <div className="card-body">
            <NextLink href="#" className="btn btn-primary btn-lg rounded-pill me-1 mb-2 mb-md-0">Large Button</NextLink>
            <NextLink href="#" className="btn btn-primary rounded-pill me-1 mb-2 mb-md-0">Default Button</NextLink>
            <NextLink href="#" className="btn btn-primary btn-sm rounded-pill me-1 mb-2 mb-md-0">Small Button</NextLink>
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-sizes">
              View example's code
            </a>
          </div>

          <div id="collapse-sizes" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{sizesMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 4 ========== */}
      <section id="snippet-4" className="wrapper pt-16">
        <h2 className="mb-5">Shapes</h2>
        <div className="card">
          <div className="card-body">
            <NextLink href="#" className="btn btn-primary rounded-0 me-1 mb-2 mb-md-0">Square</NextLink>
            <NextLink href="#" className="btn btn-primary me-1 mb-2 mb-md-0">Rounded</NextLink>
            <NextLink href="#" className="btn btn-primary rounded-pill me-1 mb-2 mb-md-0">Pill</NextLink>
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-shapes">
              View example's code
            </a>
          </div>

          <div id="collapse-shapes" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{shapesMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 5 ========== */}
      <section id="snippet-5" className="wrapper pt-16">
        <h2 className="mb-5">Style</h2>
        <div className="card">
          <div className="card-body">
            <NextLink href="#" className="btn btn-primary rounded-pill me-1 mb-2 mb-md-0">Solid</NextLink>
            <NextLink href="#" className="btn btn-soft-primary rounded-pill me-1 mb-2 mb-md-0">Soft</NextLink>
            <NextLink href="#" className="btn btn-outline-primary rounded-pill me-1 mb-2 mb-md-0">Outline</NextLink>

            <NextLink href="#" className="btn btn-gradient gradient-1 rounded-pill me-1 mb-2 mb-md-0">Gradient</NextLink>
            <NextLink href="#" className="btn btn-outline-gradient gradient-1 rounded-pill me-1 mb-2 mb-md-0"><span>Outline Gradient</span></NextLink>
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-styles">
              View example's code
            </a>
          </div>

          <div id="collapse-styles" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{stylesMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 6 ========== */}
      <section id="snippet-6" className="wrapper pt-16">
        <h2 className="mb-5">Circle</h2>
        <div className="card">
          <div className="card-body">
            <NextLink href="#" className="btn btn-circle btn-primary btn-lg me-2 mb-2"><i className="uil uil-check" /></NextLink>
            <NextLink href="#" className="btn btn-circle btn-primary me-2 mb-2"><i className="uil uil-check" /></NextLink>
            <NextLink href="#" className="btn btn-circle btn-primary btn-sm me-2 mb-2"><i className="uil uil-check" /></NextLink>
            <NextLink href="#" className="btn btn-circle btn-soft-primary btn-lg me-2 mb-2"><i className="uil uil-check" /></NextLink>
            <NextLink href="#" className="btn btn-circle btn-soft-primary me-2 mb-2"><i className="uil uil-check" /></NextLink>
            <NextLink href="#" className="btn btn-circle btn-soft-primary btn-sm me-2 mb-2"><i className="uil uil-check" /></NextLink>
            <NextLink href="#" className="btn btn-circle btn-outline-primary btn-lg me-2 mb-2"><i className="uil uil-check" /></NextLink>

            <NextLink href="#" className="btn btn-circle btn-outline-primary me-2 mb-2"><i className="uil uil-check" /></NextLink>
            <NextLink href="#" className="btn btn-circle btn-outline-primary btn-sm me-2 mb-2"><i className="uil uil-check" /></NextLink>
            <br className="d-none d-lg-block" />
            <NextLink href="#" className="btn btn-circle btn-gradient gradient-1 btn-lg me-2 mb-2"><i className="uil uil-check" /></NextLink>
            <NextLink href="#" className="btn btn-circle btn-gradient gradient-1 me-2 mb-2"><i className="uil uil-check" /></NextLink>
            <NextLink href="#" className="btn btn-circle btn-gradient gradient-1 btn-sm me-2 mb-2"><i className="uil uil-check" /></NextLink>
            <NextLink href="#" className="btn btn-circle btn-outline-gradient gradient-1 btn-lg me-2 mb-2"><span><i className="uil uil-check" /></span></NextLink>
            <NextLink href="#" className="btn btn-circle btn-outline-gradient gradient-1 me-2 mb-2"><span><i className="uil uil-check" /></span></NextLink>
            <NextLink href="#" className="btn btn-circle btn-outline-gradient gradient-1 btn-sm me-2 mb-2"><span><i className="uil uil-check" /></span></NextLink>
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-circle">
              View example's code
            </a>
          </div>

          <div id="collapse-circle" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{circleMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 7 ========== */}
      <section id="snippet-7" className="wrapper pt-16">
        <h2 className="mb-5">Social</h2>
        <div className="card">
          <div className="card-body">
            <div className="d-md-flex">
              <div className="me-8 mb-2 mb-md-0">
                <nav className="nav social">
                  <a href="#" className="btn btn-circle btn-sm btn-twitter">
                    <i className="uil uil-twitter" />
                  </a>

                  <a href="#" className="btn btn-circle btn-sm btn-facebook">
                    <i className="uil uil-facebook-f" />
                  </a>

                  <a href="#" className="btn btn-circle btn-sm btn-dribbble">
                    <i className="uil uil-dribbble" />
                  </a>
                </nav>
              </div>

              <div className="me-8">
                <nav className="nav social social-muted">
                  <a href="#">
                    <i className="uil uil-twitter" />
                  </a>
                  <a href="#">
                    <i className="uil uil-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="uil uil-dribbble" />
                  </a>
                </nav>
              </div>

              <div className="me-8">
                <nav className="nav social">
                  <a href="#">
                    <i className="uil uil-twitter" />
                  </a>
                  <a href="#">
                    <i className="uil uil-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="uil uil-dribbble" />
                  </a>
                </nav>
              </div>
            </div>
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-social">
              View example's code
            </a>
          </div>

          <div id="collapse-social" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{socialMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 8 ========== */}
      <section id="snippet-8" className="wrapper pt-16">
        <h2 className="mb-5">Icon</h2>
        <div className="card">
          <div className="card-body">
            <a className="btn btn-primary btn-icon btn-icon-start rounded me-2">
              <i className="uil uil-apple" /> App Store
            </a>
            <a className="btn btn-primary btn-icon btn-icon-end rounded">
              Google Play <i className="uil uil-google-play" />
            </a>
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-icon">
              View example's code
            </a>
          </div>

          <div id="collapse-icon" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{iconMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 9 ========== */}
      <section id="snippet-9" className="wrapper pt-16">
        <h2 className="mb-5">Expand</h2>
        <div className="card">
          <div className="card-body">
            <Link href="#" className="btn btn-expand btn-primary rounded-pill me-5 mb-3 mb-lg-0">
              <i className="uil uil-arrow-right" />
              <span>Learn More</span>
            </Link>

            <br className="d-lg-none" />

            <Link href="#" className="btn btn-expand btn-soft-primary rounded-pill me-5">
              <i className="uil uil-arrow-right" />
              <span>Learn More</span>
            </Link>
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-expand">
              View example's code
            </a>
          </div>

          <div id="collapse-expand" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{expandMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 10 ========== */}
      <section id="snippet-10" className="wrapper py-16">
        <h2 className="mb-5">Play</h2>
        <div className="card">
          <div className="card-body">
            <Link href="#" className="btn btn-circle btn-primary btn-play ripple me-5">
              <i className="icn-caret-right" />
            </Link>

            <Link href="#" className="btn btn-circle btn-soft-primary btn-play ripple">
              <i className="icn-caret-right" />
            </Link>
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-play">
              View example's code
            </a>
          </div>

          <div id="collapse-play" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{playMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DocLayout>
  );
}
