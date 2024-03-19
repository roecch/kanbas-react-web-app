import ModuleList from "../Modules/List";
import Status from "./Status";
import "./index.css"

function Home() {
  return (
    <div className="home-container">
      <div className="module-list-container">
        <h2>Home</h2>
        <ModuleList />
      </div>
      <div className="status-container ">
        <Status />
      </div>
    </div>
  );
}
export default Home;

