import React from 'react'
import Sidebar from "../Component/Sidebar";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import "../style/dashboard.css";

const Product = () => {
   const products = useSelector((state) => state.allProducts);
  const { gridOpen } = products;
  return (
    <div>
      <Grid container spacing={1}>
        {gridOpen ? (
          <Grid item xs={0.3} sm={2.3}>
            <Sidebar />
          </Grid>
        ) : null}

        <Grid item xs={11.7} sm={9.7}>
          <div className="grid_size">i am product</div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Product
