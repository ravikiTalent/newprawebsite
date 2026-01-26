// GLOBAL CUSTOM COMPONENTS
import DropdownToggleLink from "components/reuseable/links/DropdownToggleLink";
// LOCAL CUSTOM COMPONENTS
import renderLinks from "./render-links";
// CUSTOM DATA
import { registrationsLink } from "data/navigation";

export default function RegistrationsNav() {
  return (
    <li className="nav-item dropdown">
      <DropdownToggleLink title="Registrations" className="nav-link dropdown-toggle" />
      <ul className="dropdown-menu dropdown-lg">
              <ul className="list-unstyled cc-3">{renderLinks(registrationsLink)}</ul>
            </ul>
    </li>
  );
}
