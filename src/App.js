import { Fragment } from "react";
import MainContent from "./components/MainContent/MainContent";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
function App() {
  return (
    <Fragment>
      <div>
        <Navbar />
        <MainContent />
      </div>
      <Sidebar />
    </Fragment>
  );
}

export default App;
