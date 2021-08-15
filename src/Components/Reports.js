import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import ReportsPurchase from "./Reports & Masters/ReportsPurchase";
import ReportsCustomer from "./Reports & Masters/ReportsCustomer";
import ReportsSupplier from "./Reports & Masters/ReportsSupplier";
import ReportsSales from "./Reports & Masters/ReportsSales";
import ReportsStock from "./Reports & Masters/ReportsStock";

function Reports() {
  return (
    <div>
      <Heading size="md" pt={5} pb={2}>
        Reports & Masters
      </Heading>

      <Flex mb={10}>
        {window.location.pathname === "/" ? (
          <>
            <ReportsPurchase />
            <ReportsSales />
            <ReportsStock />
          </>
        ) : (
          " "
        )}

        {window.location.pathname === "/purchase" ? (
          <>
            <ReportsPurchase />
            <ReportsStock />
            <ReportsSupplier />
          </>
        ) : (
          " "
        )}

        {window.location.pathname === "/sales" ? (
          <>
            <ReportsSales />
            <ReportsStock />
            <ReportsCustomer />
          </>
        ) : (
          " "
        )}
        {window.location.pathname === "/stock" ? (
          <>
            <ReportsStock />
            <ReportsSupplier />
            <ReportsCustomer />
          </>
        ) : (
          " "
        )}

        {/* 
        <ReportsStock />

        <ReportsSupplier />
        <ReportsPurchase />
        <ReportsCustomer /> */}
      </Flex>
    </div>
  );
}

export default Reports;
