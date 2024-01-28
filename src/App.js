import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { publicRoutes } from "~/routes";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* <Route path="*" element={<NotFound />} /> */}
          {publicRoutes.map((route, index) => {
            let Page = route.component;
            return <Route key={index} path={route.path} element={<Page />} />;
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
