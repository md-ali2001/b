import React, { useState, useEffect } from "react";
import "./orderTable.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { allOrdersAction } from "../../store/actions/allOrdersActions";
import initialState from "../../store/reducers/initialState";


const OrderTable = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [productArr, setProductArr] = useState([]);

  const eachOrderData = useSelector((state) => state.order.cartItems);
  const allOrdersData = useSelector((state) => state.allOrders.allOrders);

  useEffect(() => {
    setProductArr(eachOrderData)
    dispatch(allOrdersAction(eachOrderData))

 },[eachOrderData])


 useEffect(() => {
}, []);


  let totalPrice = [];

  const takeTotalPriceValue = () => {
    let price = 0;
    let productsPrice = productArr?.forEach((product) => {
      price += product?.price * product?.quantity;
    });
    return price;
  };
  const orderlineTotal = (each) => {
      let price = 0;
      let prod = each
      price += prod?.price * prod?.quantity;
    return price;
  };

  const handleProceed = () => {
    const order = [
      {
        orderID: productArr[productArr.length - 1].id + 1,
        orderLines: productArr,
        totalPrice: totalPrice,
      },
    ];
    navigate("/posScreen/payment")
    console.log("Proceeded----->", order);
  };
  const deleteProd = (single) => {
    productArr.splice(single, 1)

    console.log("kkkkkkkk---->", eachOrderData)
    setProductArr(productArr.filter((selected) => selected !== single))
    console.log(single)
  }

  return (
    <>
      <div style={{ justifyContent: "space-between", padding: "10px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        ></div>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    fontSize: 20,
                    textAlign: "left",
                    backgroundColor: "rgb(201, 201, 201)",
                  }}
                >
                  Name
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: 20,
                    textAlign: "center",
                    backgroundColor: "rgb(201, 201, 201)",
                  }}
                  align="right"
                >
                  Code
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: 20,
                    textAlign: "center",
                    backgroundColor: "rgb(201, 201, 201)",
                  }}
                  align="right"
                >
                  Quantity&nbsp;(number)
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: 20,
                    textAlign: "center",
                    backgroundColor: "rgb(201, 201, 201)",
                  }}
                  align="right"
                >
                  Price&nbsp;(Rs)
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: 20,
                    textAlign: "center",
                    backgroundColor: "rgb(201, 201, 201)",
                  }}
                  align="right"
                >
                  Delete
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {productArr?.map((items, index) => (
                <TableRow
                key={items?.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    key={items?.id}
                    sx={{
                      fontSize: 12,
                      textAlign: "left",
                    }}
                    component="th"
                    scope="row"
                  >
                    {items?.name}
                  </TableCell>
                  <TableCell
                    sx={{ fontSize: 12, textAlign: "center" }}
                    align="right"
                  >
                    {items?.id}
                  </TableCell>
                  <TableCell
                    sx={{ fontSize: 12, textAlign: "center" }}
                    align="right"
                  >
                    {items?.quantity}
                  </TableCell>
                  <TableCell
                    sx={{ fontSize: 12, textAlign: "center" }}
                    align="right"
                    onChange={(e) => console.log(e.target.value)}
                  >
                   {orderlineTotal(items, index)}
                  </TableCell>
                  <TableCell
                    sx={{ fontSize: 12, textAlign: "center" }}
                    align="right"
                    onClick={() => deleteProd(index)}
                  >
                    <DeleteOutlinedIcon />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Card sx={{ marginTop: 5, margin: '10px', }} raised={true}>
        <CardContent>
          <div
            style={{

              paddingRight: "20px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography color="text.primary" variant="h4">
              Total
            </Typography>
            <Typography
              style={{
                marginRight: 60,
              }}
              variant="h4"
            >
              Rs. {takeTotalPriceValue()}
            </Typography>
            <div>
              <Button
                style={{ marginLeft: "20%" }}
                onClick={handleProceed}
                variant="contained"
                sx={{
                  backgroundColor: "rgb(36, 34, 34)",
                  fontSize: 15,
                }}
                size="large"
                disabled={productArr?.length > 0 ? false : true}
              >
                PROCEED
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default OrderTable;
