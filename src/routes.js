import About from "./pages/about/About";
import Contact from "./pages/contect/Contect";
import Home from "./pages/home/Home";
import HomeIcon from "@mui/icons-material/Home";
import FolderSpecialIcon from "@mui/icons-material/FolderSpecial";
import SearchIcon from "@mui/icons-material/Search";

export const routes = [
  {
    component: <Home />,
    title: "Dashboard",
    icon: <HomeIcon sx={{ color: "#ffffff" }} />,
    path: "/",
    isPrivate: false,
  },
  {
    component: <About />,
    title: "About",
    icon: <FolderSpecialIcon sx={{ color: "#ffffff" }} />,
    path: "/about",
    isPrivate: false,
  },
  {
    component: <Contact />,
    title: "Contact",
    icon: <SearchIcon sx={{ color: "#ffffff" }} />,
    path: "/contact",
    isPrivate: false,
  },
];
