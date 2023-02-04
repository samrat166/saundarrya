import {
  Edit,
  PersonPinCircle,
  PersonPinCircleSharp,
} from "@mui/icons-material";
import React, { useState } from "react";
import { Button, Card, Table } from "react-bootstrap";
import {
  addOrUpdateItemInArray,
  productRegisterFields,
  users,
} from "../../common/constants";
import AddCustomer from "./AddCustomer";

const CustomerRegister = () => {
  const [customers, setCustomers] = useState(users);
  const [openAddCustomerModal, setOpenAddCustomerModal] = useState(null);

  //   const createClientService = async (userData) => {
  //     const config = {
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Access-Control-Allow-Origin": "*",
  //       },
  //     };
  //     const response = await axios.get(
  //       "http://localhost:5000/api/v1/customer",
  //       {},
  //       config
  //     );
  //     console.log(response, "customers");
  //     setCustomers(response);
  //   };
  //   useEffect(() => {
  //     createClientService();
  //   }, []);

  const handleSaveCustomerDetails = (detail) => {
    setCustomers(addOrUpdateItemInArray(customers, detail));
  };
  const handelDeleteCustomer = (detail) => {
    setCustomers(customers.filter((x) => x._id !== detail._id));
  };
  console.log(customers, "sdasdas");

  return (
    <Card className="m-1  ">
      <div className="d-flex justify-content-between">
        <div className="d-flex m-2 ">
          <div className="d-flex">
            <div
              style={{
                height: 10,
                width: 10,
                borderRadius: "50%",
                backgroundColor: "red",
              }}
            />
            <h5 style={{ fontSize: 10 }} className="ms-1 me-1">
              Incomplete
            </h5>
          </div>{" "}
          <div className="d-flex">
            <div
              style={{
                height: 10,
                width: 10,
                borderRadius: "50%",
                backgroundColor: "green",
              }}
            />
            <h5 style={{ fontSize: 10 }} className="ms-1">
              Completed
            </h5>
          </div>
        </div>
        <Button
          variant="success"
          className="px-1 mb-2 mt-1 py-0 me-1"
          style={{ fontSize: 11 }}
          onClick={() => setOpenAddCustomerModal({})}
        >
          Add New Customer
        </Button>
      </div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            {productRegisterFields.map((field) => {
              return <td style={{ fontSize: 11 }}>{field.label}</td>;
            })}
            <td style={{ fontSize: 12 }}>Action</td>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => {
            return (
              <tr
                className={
                  checkIfCompleted(customer) ? "bg-success" : "bg-danger"
                }
              >
                {productRegisterFields.map((field) => {
                  return (
                    <td style={{ fontSize: 10, color: "white" }}>
                      {customer?.[field.name]}
                    </td>
                  );
                })}
                <td>
                  <Button
                    variant="warning"
                    size="sm"
                    className="mx-2 text-white px-1 py-0"
                    style={{ fontSize: 10 }}
                    onClick={() => setOpenAddCustomerModal({ ...customer })}
                  >
                    Edit
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <AddCustomer
        show={openAddCustomerModal}
        handleClose={() => setOpenAddCustomerModal(null)}
        handleSaveCustomerDetails={handleSaveCustomerDetails}
        handelDeleteCustomer={handelDeleteCustomer}
      />
    </Card>
  );
};

export default CustomerRegister;

const checkIfCompleted = (customer) => {
  return (
    customer?.payment === "Yes" &&
    customer?.isProductReady === "Yes" &&
    customer?.isCouriered === "Yes" &&
    customer?.isProductReceivedByCustomer === "Yes"
  );
};
