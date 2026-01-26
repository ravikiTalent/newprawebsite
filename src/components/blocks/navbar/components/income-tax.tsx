// GLOBAL CUSTOM COMPONENTS
import DropdownToggleLink from "components/reuseable/links/DropdownToggleLink";
// LOCAL CUSTOM COMPONENTS
import renderLinks from "./render-links";
// CUSTOM DATA
import { incometaxLink } from "data/navigation";

export default function IncomeTaxNav() {
  return (
    <li className="nav-item dropdown">
      <DropdownToggleLink title="Income Tax" className="nav-link dropdown-toggle" />
       <ul className="dropdown-menu dropdown-lg">
        <ul className="list-unstyled cc-2">{renderLinks(incometaxLink)}</ul>
      </ul>
    </li>
  );
}
