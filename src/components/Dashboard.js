import Orders from "./Orders";
import Holdings from "./Holding";
import Positions from "./Position";
import Summary from "./Summary";
import Funds from "./Funds";

import App from "../App.js";
import WatchList from "./WatchList";
import { Route,Routes } from "react-router-dom";





const Dashboard = () => {


  return (
    <div className="dashboard-container">
      <WatchList />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/app" element={<App />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
