// GLOBAL CUSTOM COMPONENTS
import ListItemLink from "components/reuseable/links/ListItemLink";
import DropdownToggleLink from "components/reuseable/links/DropdownToggleLink";
// LOCAL CUSTOM COMPONENTS
import renderLinks from "./render-links";
// CUSTOM DATA
import { startupLink, pages } from "data/navigation";

export default function StartupNav() {
  return (
    <li className="nav-item dropdown">
      <DropdownToggleLink
        title="Startup"
        className="nav-link dropdown-toggle"
      />
      <ul className="dropdown-menu dropdown-lg">
        <ul className="list-unstyled cc-2">{renderLinks(startupLink)}</ul>
      </ul>
    </li>
  );
}
