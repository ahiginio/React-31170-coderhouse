import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
export default function CartWidget() {
  return (
    <div className="CartWidget">
      <FontAwesomeIcon icon={faCartShopping} />
    </div>
  );
}
