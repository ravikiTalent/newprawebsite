// import ForgotPasswordForm from "components/elements/forms/ForgotPasswordForm";

export default function Forgotpassword() {
  return (
    <div role="dialog" tabIndex={-1} aria-modal="true" id="modal-forgotpassword" className="modal fade">
      <div className="modal-dialog modal-dialog-centered modal-sm">
        <div className="modal-content text-center">
          <div className="modal-body">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            <h2 className="mb-3 text-start">Sign up to LegallensIndia</h2>
            <p className="lead mb-6 text-start">Registration takes less than a minute.</p>
            {/* <ForgotPasswordForm /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
