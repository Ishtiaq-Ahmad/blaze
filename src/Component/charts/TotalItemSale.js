import React from "react";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { LineChart, Line, Tooltip, ResponsiveContainer } from "recharts";
import Grid from "@mui/material/Grid";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FeaturedPlayListOutlinedIcon from "@mui/icons-material/FeaturedPlayListOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import "../../style/charts.css";
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const data = [
  {
    name: "Page A",
    uv: 100,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
];

const TotalItemSale = () => {
  return (
    <div>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4} md={3}>
        
          <div className="sales_table">
            <ShoppingCartOutlinedIcon  style={{transform: 'scale(1.8)', marginTop:'20%' }} />
            <div style={{width:"90%", paddingLeft:'20px', textAlign:"center"}}>
              <Typography variant="body1" component="div" gutterBottom>
                Total Sales
              </Typography>
              <Typography variant="h6" component="div" gutterBottom>
                9879
              </Typography>

              <ResponsiveContainer width="100%" aspect={5 / 1}>
              <LineChart height={50} data={data}>
                <Line type="monotone" dataKey="uv" stroke="#09ac32" />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
            </div>
          
          {/* <MoreVertOutlinedIcon/> */}
          </div>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
        <div className="sales_table">
            <FeaturedPlayListOutlinedIcon  style={{transform: 'scale(1.8)', marginTop:'20%' }} />
            <div style={{width:"90%", paddingLeft:'20px', textAlign:"center"}}>
              <Typography variant="body1" component="div" gutterBottom>
                Total Items
              </Typography>
              <Typography variant="h6" component="div" gutterBottom>
                8982
              </Typography>

              <ResponsiveContainer width="100%" aspect={5 / 1}>
              <LineChart height={50} data={data}>
                <Line type="monotone" dataKey="uv" stroke="#09ac32" />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
            </div>
          
          {/* <MoreVertOutlinedIcon/> */}
          </div>
          
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <div className="sales_table">
            <PeopleAltOutlinedIcon  style={{transform: 'scale(1.8)', marginTop:'20%' }} />
            <div style={{width:"90%", paddingLeft:'20px', textAlign:"center"}}>
              <Typography variant="body1" component="div" gutterBottom>
                Total Customers
              </Typography>
              <Typography variant="h6" component="div" gutterBottom>
                7688
              </Typography>

              <ResponsiveContainer width="100%" aspect={5 / 1}>
              <LineChart height={50} data={data}>
                <Line type="monotone" dataKey="uv" stroke="#09ac32" />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
            </div>
          
          {/* <MoreVertOutlinedIcon/> */}
          </div>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <div className="sales_table">
            <StorefrontOutlinedIcon  style={{transform: 'scale(1.8)', marginTop:'20%' }} />
            <div style={{width:"90%", paddingLeft:'20px', textAlign:"center"}}>
              <Typography variant="body1" component="div" gutterBottom>
                Total item Kits
              </Typography>
              <Typography variant="h6" component="div" gutterBottom>
            897
              </Typography>

              <ResponsiveContainer width="100%" aspect={5 / 1}>
              <LineChart height={50} data={data}>
                <Line type="monotone" dataKey="uv" stroke="#09ac32" />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
            </div>
          
          {/* <MoreVertOutlinedIcon/> */}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default TotalItemSale;
