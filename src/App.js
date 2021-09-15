import React from "react";
import Login from "./Components/Login";
import Register from "./Components/Register";
import MasterData from "./Components/Main Menu/MasterData";
import Purchase from "./Components/Main Menu/Purchase/Purchase";
import PurchaseList from "./Components/Main Menu/Purchase/PurchaseList";
import PurchaseOrder from "./Components/Main Menu/Purchase/PurchaseOrder";
import PurchaseOrderSaved from "./Components/Main Menu/Purchase/PurchaseOrderSaved";
import PurchaseOrderReceive from "./Components/Main Menu/Purchase/PurchaseOrderReceive";
import Bill from "./Components/Main Menu/Purchase/Bill";
import Sales from "./Components/Main Menu/Sales/Sales";
import SalesList from "./Components/Main Menu/Sales/SalesList";
import SalesOrder from "./Components/Main Menu/Sales/SalesOrder";
import SalesOrderSaved from "./Components/Main Menu/Sales/SalesOrderSaved";
import SalesOrderDelivery from "./Components/Main Menu/Sales/SalesOrderDelivery";
import SalesOrderValidate from "./Components/Main Menu/Sales/SalesOrderValidate";
import StockOutList from "./Components/Main Menu/Sales/StockOutList";
import Stock from "./Components/Main Menu/Stock/Stock";
import StockItem from "./Components/Main Menu/Stock/StockItem";
import StockList from "./Components/Main Menu/Stock/StockList";
import StockNewItem from "./Components/Main Menu/Stock/StockNewItem";
import Accounting from "./Components/Main Menu/Accounting";
import Setting from "./Components/Main Menu/Setting";
import Supplier from "./Components/Main Menu/Supplier";
import SupplierList from "./Components/Main Menu/SupplierList";
import SupplierDetail from "./Components/Main Menu/SupplierDetail";
import Customer from "./Components/Main Menu/Customer";
import CustomerList from "./Components/Main Menu/CustomerList";
import Profile from "./Components/Profile/Profile";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CustomerDetail from "./Components/Main Menu/CustomerDetail";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <MasterData />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route exact path="/purchase">
            <Purchase />
          </Route>
          <Route exact path="/purchase/list">
            <PurchaseList />
          </Route>
          <Route exact path="/purchase/purchase-order">
            <PurchaseOrder />
          </Route>
          <Route exact path="/purchase/purchase-order/:id">
            <PurchaseOrderSaved />
          </Route>
          <Route exact path="/purchase/purchase-order/:id/receive">
            <PurchaseOrderReceive />
          </Route>
          <Route path="/purchase/RfQ">
            <Bill />
          </Route>
          <Route exact path="/sales">
            <Sales />
          </Route>
          <Route exact path="/sales/list">
            <SalesList />
          </Route>
          <Route exact path="/sales/sales-order">
            <SalesOrder />
          </Route>
          <Route exact path="/sales/sales-order/:id">
            <SalesOrderSaved />
          </Route>
          <Route exact path="/sales/sales-order/:id/delivery">
            <SalesOrderDelivery />
          </Route>
          <Route
            exact
            path="/sales/sales-order/:id/delivery/:stock_out_id/validation"
          >
            <SalesOrderValidate />
          </Route>
          <Route exact path="/sales/stock-out/list">
            <StockOutList />
          </Route>
          <Route exact path="/stock">
            <Stock />
          </Route>
          <Route exact path="/stock/item">
            <StockItem />
          </Route>
          <Route exact path="/stock/list">
            <StockList />
          </Route>
          <Route exact path="/stock/item/:id">
            <StockNewItem />
          </Route>
          <Route path="/accounting">
            <Accounting />
          </Route>
          <Route path="/setting">
            <Setting />
          </Route>
          <Route exact path="/supplier">
            <Supplier />
          </Route>
          <Route exact path="/supplier/list">
            <SupplierList />
          </Route>
          <Route exact path="/supplier/detail">
            <SupplierDetail />
          </Route>
          <Route exact path="/customer">
            <Customer />
          </Route>
          <Route exact path="/customer/list">
            <CustomerList />
          </Route>
          <Route exact path="/customer/detail">
            <CustomerDetail />
          </Route>
        </Switch>
      </Router>
      {/* <Login /> */}
    </div>
  );
}

export default App;
