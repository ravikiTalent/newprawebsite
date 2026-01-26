// GLOBAL CUSTOM COMPONENTS
import DropdownToggleLink from "components/reuseable/links/DropdownToggleLink";
// LOCAL CUSTOM COMPONENTS
import renderLinks from "./render-links";
// CUSTOM DATA
import { gstLink } from "data/navigation";

export default function GstNav() {
  return (
    <li className="nav-item dropdown">
      <DropdownToggleLink title="Goods & Services Tax" className="nav-link dropdown-toggle" />
      <ul className="dropdown-menu dropdown-lg">
        <ul className="list-unstyled cc-2">{renderLinks(gstLink)}</ul>
      </ul>
    </li>
  );
}
