"use client";

import LoginForm from "components/elements/forms/LoginForm";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Signin() {
  const [user, setUser] = useState(null); // Stores logged-in user data
  const router = useRouter();
  const [closeModal, setCloseModal]   = useState(false);

//   function handleCloseModal(){            
//     document.getElementById("modal-signin")!.classList.remove("show", "d-block");
//     document.getElementById("modal-signin")!.classList.add("d-none");
//     document.querySelectorAll(".modal-backdrop")
//             .forEach(el => el.classList.remove("modal-backdrop"));
// }

  // const handleLogin = () => { //userData:any
  //   // setUser(userData);
  //   // In a real app, you'd store a token (e.g., in a cookie or localStorage)
  //   // and redirect to a protected page.
  //   // alert(`Logged in as: ${userData.email}`);
  //   handleCloseModal();
  //   // router.push('/'); // Redirect to home page after successful login    
  // };

  return (
    <div
      role="dialog"
      tabIndex={-1}
      aria-modal="true"
      id="modal-signin"
      className="modal fade"
      style={{ display: "none" }}>
      <div className="modal-dialog modal-dialog-centered modal-sm">
        <div className="modal-content text-center">
          <div className="modal-body">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />

            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}
