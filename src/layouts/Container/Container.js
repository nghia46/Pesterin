import LandingPage from "~/pages/LandingPage";
import Home from "~/pages/Home";
function Container() {
  const isLogin = true;
  return <div>{isLogin ? <Home /> : <LandingPage />}</div>;
}

export default Container;
