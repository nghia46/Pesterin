import Container from "~/layouts/Container";
import Explore from "~/pages/Explore";
import Create from "~/pages/Create";
import Pin from "~/pages/Pin";
const publicRoutes = [
  { path: "/", component: Container },
  { path: "/ideas", component: Explore },
  { path: "/pin-creation-tool", component: Create },
  { path: "/pin", component: Pin },
];

export { publicRoutes };
