// GLOBAL CUSTOM COMPONENTS
import DropdownToggleLink from "components/reuseable/links/DropdownToggleLink";
// LOCAL CUSTOM COMPONENTS
import renderLinks from "./render-links";
// CUSTOM DATA
import { MCALink } from "data/navigation";

export default function MCANav() {
  return (
    <li className="nav-item dropdown">
      <DropdownToggleLink title="MCA" className="nav-link dropdown-toggle" />
      <ul className="dropdown-menu dropdown-lg">
        <ul className="list-unstyled cc-2">{renderLinks(MCALink)}</ul>
      </ul>
    </li>
  );
}
