import Home from "~/pages/Home";
import LandingPage from "~/pages/LandingPage";
import Explore from "~/pages/Explore";
import Create from "~/pages/Create";
import Pin from "~/pages/Pin";
import Profile from "~/pages/Profile";
import Creator from "~/pages/Creator";
import SearchPins from "~/pages/SearchPins";
import Business from "~/pages/Business";
import Message from "~/pages/Message";
import PackageFeature from "~/components/Popup/AccessPrivatePopup";
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/", component: LandingPage },
  { path: "/ideas", component: Explore },
  { path: "/pin-creation-tool", component: Create },
  { path: "/pin/:id", component: Pin },
  { path: "/profile", component: Profile },
  { path: "/creator/:id", component: Creator },
  { path: "/search/pins", component: SearchPins },
  { path: "/convert-business", component: Business },
  { path: "/messages/:id", component: Message },
  { path: "/page", component: PackageFeature },
];

export { publicRoutes };
