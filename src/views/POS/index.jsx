import OrderTable from "../../components/orderTableWork/orderTable";
import SearchBar from "../../components/searchBarWork/searchBar";
import Navbar from "../../components/navbar/Navbar";
import { Grid } from "@mui/material";

import { useState } from "react";
const POS = () => {
  
  return (
    <div>
      
      <h1 style={{position:"absolute",left:"670px",top:"13px",color:"green"}}>POINT OF SALE </h1>
      <Navbar
        title={[
          { label: "Log Out", href: "/login" },
          { label: "Managing Screen", href: "/managerSelector" },
        ]}
      />
      <Grid container spacing={2}>
        <Grid item xs={6} md={4} >
         <SearchBar/>
    
        </Grid>
        <Grid item xs={6} md={8} >
          <OrderTable />
        </Grid>
      </Grid>
    
    </div>
  );

};
export default POS;
