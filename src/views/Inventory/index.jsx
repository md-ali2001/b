import Navbar from "../../components/navbar/Navbar";

import Productsinventory from "./productManagement/productsinventory";
import Stockreport from "./reportsManagement/stockreport";
import Printer from "./printerManagement/printer";

import { Button, Typography, Stack, TextField } from "@mui/material";
import { useState } from "react";
import './index.css'
const Inventory = () => {

  const [prodManage, setProdManage] = useState(false)
  const [printerManage, setPrinterManage] = useState(false)
  const [reportManage, setReportManage] = useState(false)

  const changingState = (buttonName) => {
    if(buttonName == "PRODUCTS"){
      setProdManage(!prodManage)
      setReportManage(false)
      setPrinterManage(false)

    }else if(buttonName == "STOCK REPORT"){
      setReportManage(!reportManage)
      setProdManage(false)
      setPrinterManage(false)

    }else if(buttonName == "PRINTER"){
      setPrinterManage(!printerManage)
      setProdManage(false)
      setReportManage(false)
    }else{
    }
  }

  return (

    <div>

      <Navbar
        title={[
          { label: "Log Out", href: "/login" },
          { label: "Managing Screen", href: "/managerSelector" },
        ]}
      />
      <h1 
      className="inventorymanagement"> INVENTORY MANAGEMENT 
      </h1>

      <div 
      style={{width: "1150px",
        position: "absolute",
         height: "270px",
          left: "300px"}}
      >


        <Button sx={{ width: "180px", margin: '6px', height: '100px', border: "2px solid black", position: "absolute", left: "200px" }} variant="contained" color="info" size="small" onClick={(e)=>changingState(e.target.innerText)} > PRODUCTS
        </Button>


        <Button sx={{ width: "180px", margin: '6px', height: '100px', border: "2px solid black", position: "absolute", left: "400px" }} variant="contained" color="info" size="small" onClick={(e)=>changingState(e.target.innerText)} > STOCK REPORT
        </Button>


        <Button sx={{ width: "180px", margin: '6px', height: '100px', border: "2px solid black", position: "absolute", left: "600px" }} variant="contained" color="info" size="small" onClick={(e)=>changingState(e.target.innerText)} >  PRINTER
        </Button>

      </div>

        <div>
          {prodManage && !printerManage && !reportManage ? (
            <div>
              <Productsinventory />
            </div>

          ): !prodManage && !printerManage && reportManage ? (
            <div>
              <Stockreport/>
            </div>

          ): !prodManage && printerManage && !reportManage ? (
            <div>
              <Printer/>
            </div>
          ) : null}
        </div>

    </div>
  );
};
export default Inventory;
