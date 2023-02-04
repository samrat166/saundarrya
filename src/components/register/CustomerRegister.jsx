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

  return (
    <Card className="m-1 py-3 ">
      <div className="d-flex justify-content-end me-2">
        <Button
          variant="success"
          className="px-1 py-0 "
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
                    variant="dark"
                    size="sm"
                    className="mx-2 text-white px-1 py-0"
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
