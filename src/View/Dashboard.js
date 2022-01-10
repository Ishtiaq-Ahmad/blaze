import React from "react";
import Sidebar from "../Component/Sidebar";
import { useSelector } from "react-redux";
import "../style/dashboard.css";
import TotalItemSale from '../Component/charts/TotalItemSale'

const Dashboard = () => {
  const products = useSelector((state) => state.allProducts);
  const { gridOpen } = products;
  return (
    <div style={{background:"#f5f5f5"}}>
      {/* <Grid container spacing={1}>
          <Grid item xs={0.3}  md={2.3}> */}
            <Sidebar />
          {/* </Grid> */}
        {/* <Grid item xs={11.7}  md={9.7}> */}
          <div className="grid_size"><TotalItemSale/></div>
        {/* </Grid> */}
      {/* </Grid> */}
    </div>
  );
};

export default Dashboard;
