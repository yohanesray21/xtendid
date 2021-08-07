import React from "react";
import Login from "./Components/Login";
import Register from "./Components/Register";
import MasterData from "./Components/Main Menu/MasterData";
import Purchase from "./Components/Main Menu/Purchase/Purchase";
import Bill from "./Components/Main Menu/Purchase/Bill";
import Sales from "./Components/Main Menu/Sales";
import Stock from "./Components/Main Menu/Stock";
import StockItem from "./Components/Main Menu/StockItem";
import StockList from "./Components/Main Menu/StockList";
import StockNewItem from "./Components/Main Menu/StockNewItem";
import Accounting from "./Components/Main Menu/Accounting";
import Setting from "./Components/Main Menu/Setting";
import Supplier from "./Components/Main Menu/Supplier";
import SupplierDetail from "./Components/Main Menu/SupplierDetail";
import Customer from "./Components/Main Menu/Customer";

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
          <Route path="/register">
            <Register />
          </Route>
          <Route exact path="/purchase">
            <Purchase />
          </Route>
          <Route path="/purchase/RfQ">
            <Bill />
          </Route>
          <Route path="/sales">
            <Sales />
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
          <Route exact path="/stock/item/new">
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
          <Route exact path="/supplier/detail">
            <SupplierDetail />
          </Route>
          <Route exact path="/customer">
            <Customer />
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
