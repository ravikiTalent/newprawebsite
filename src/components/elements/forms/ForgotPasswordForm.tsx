// import { useState, useRef } from "react";
// import { sendPasswordResetEmail } from "firebase/auth";
// import { auth } from "api/firebase";
// import NextLink from "components/reuseable/links/NextLink";

// export default function ForgotPasswordForm() {
//   const [email, setEmail] = useState("");
//   const [modalMessage, setModalMessage] = useState("");
//   const modalRef = useRef();

//   const showModal = (message) => {
//     setModalMessage(message);
//     const modal = new window.bootstrap.Modal(modalRef.current);
//     modal.show();
//   };

//   const handlePasswordReset = async (e) => {
//     e.preventDefault();
//     if (!email) return showModal("Please enter your email address.");

//     try {
//       await sendPasswordResetEmail(auth, email);
//       showModal("✅ Password reset email sent! Check your inbox.");
//     } catch (error) {
//       showModal("❌ " + error.message);
//     }
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
//       <div className="card p-4 shadow-lg rounded-4" style={{ width: "350px" }}>
//         <h3 className="text-center mb-3">Forgot Password</h3>
//         <p className="text-muted text-center mb-3">
//           Enter your registered email to receive a reset link.
//         </p>

//         <form onSubmit={handlePasswordReset}>
//           <input
//             type="email"
//             className="form-control mb-3"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <button type="submit" className="btn btn-primary w-100">
//             Send Reset Link
//           </button>
//         </form>

//         <p className="text-center mt-3 mb-0">
//           <NextLink href="/" title="Back to Login" className="hover" />
//         </p>

//         {/* Bootstrap Modal */}
//         <div
//           className="modal fade"
//           tabIndex="-1"
//           ref={modalRef}
//           aria-hidden="true"
//         >
//           <div className="modal-dialog modal-dialog-centered">
//             <div className="modal-content rounded-4 shadow">
//               <div className="modal-header">
//                 <h5 className="modal-title">Message</h5>
//                 <button
//                   type="button"
//                   className="btn-close"
//                   data-bs-dismiss="modal"
//                   aria-label="Close"
//                 ></button>
//               </div>
//               <div className="modal-body">
//                 <p>{modalMessage}</p>
//               </div>
//               <div className="modal-footer">
//                 <button
//                   type="button"
//                   className="btn btn-secondary"
//                   data-bs-dismiss="modal"
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
