import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaInbox, FaClock, FaArrowRight, FaTv ,FaQuestion} from "react-icons/fa";
function KanbasNavigation() {
  const links = [
    { label: "Account",   icon: <FaRegUserCircle className="fs-2" />  },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" />  },
    { label: "Courses",   icon: <FaBook className="fs-2" />           },
    { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2" /> },
    { label: "Inbox",  icon: <FaInbox className="fs-2" /> },
    { label: "History",  icon: <FaClock className="fs-2" /> },
    { label: "Studio",  icon: <FaArrowRight className="fs-2" /> },
    { label: "Commons",  icon: <FaTv className="fs-2" /> },
    { label: "Help",  icon: <FaQuestion className="fs-2" /> },
  ];
  const { pathname } = useLocation();
  return (
    <div>
      <ul className="wd-kanbas-navigation">
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""} id= {link.label === "Account" ? "acc-icon" : ""}>
          <Link to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>
        </li>
      ))}
    </ul>
    <div className="wd-kanbas-navigation-spacer"></div>
    </div>
    
  );
}
export default KanbasNavigation;