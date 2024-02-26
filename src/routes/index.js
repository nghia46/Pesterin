import Container from "~/layouts/Container";
import Explore from "~/pages/Explore";
import Create from "~/pages/Create";
import Pin from "~/pages/Pin";
import Profile from "~/pages/Profile";
import Creator from "~/pages/Creator";
import Notifications from "~/components/Notifications";
const publicRoutes = [
  { path: "/", component: Container },
  { path: "/ideas", component: Explore },
  { path: "/pin-creation-tool", component: Create },
  { path: "/pin", component: Pin },
  { path: "/profile", component: Profile },
  { path: "/creator", component: Creator },
  { path: "/page", component: Notifications },
];

export { publicRoutes };
