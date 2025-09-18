
import { Link } from "react-router-dom";
import "../css/sideBar.css";

const nav = [
  { name: "Latest News", link: "/" },
  { name: "World", link: "/world" },
  { name: "Politics", link: "/politics" },
  { name: "Business", link: "/business" },
  { name: "Technology", link: "/tech" },
  { name: "Sports", link: "/sports" },
  { name: "Culture", link: "/culture" },
];

const SideBar = () => {
  return (
    <aside className="sidebar">

      <nav>
        <ul>
          {nav.map((item) => (
            <li key={item.name} className="sidebar-item">
              <Link to={item.link} className="sidebar-link">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
