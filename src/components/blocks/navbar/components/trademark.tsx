// GLOBAL CUSTOM COMPONENTS
import DropdownToggleLink from "components/reuseable/links/DropdownToggleLink";
// LOCAL CUSTOM COMPONENTS
import renderLinks from "./render-links";
// CUSTOM DATA
import { trademarkLink } from "data/navigation";

export default function TrademarkNav() {
  return (
    <li className="nav-item dropdown">
      <DropdownToggleLink title="Trademark" className="nav-link dropdown-toggle" />
      <ul className="dropdown-menu dropdown-lg">
              <ul className="list-unstyled cc-2">{renderLinks(trademarkLink)}</ul>
            </ul>
    </li>
  );
}
