import {
  Edit,
  PersonPinCircle,
  PersonPinCircleSharp,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Button, Card, Table } from "react-bootstrap";
import {
  addOrUpdateItemInArray,
  productRegisterFields,
  users,
} from "../../common/constants";
import AddCustomer from "./AddCustomer";

const CustomerRegister = () => {
  const [customers, setCustomers] = useState([]);
  const [openAddCustomerModal, setOpenAddCustomerModal] = useState(null);

  const handleSaveCustomerDetails = async (detail) => {
    const data = { ...detail };
    try {
      const res = await fetch(
        "https://sheet.best/api/sheets/538b85bd-c5d6-40fc-a161-c797dbbbd25e",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (res.ok) {
        getData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getData = async () => {
    try {
      const res = await fetch(
        "https://sheet.best/api/sheets/538b85bd-c5d6-40fc-a161-c797dbbbd25e"
      );
      const data = await res.json();
      setCustomers(data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleEdit = async (data, rowIndex) => {
    try {
      const res = await fetch(
        `https://sheet.best/api/sheets/538b85bd-c5d6-40fc-a161-c797dbbbd25e/${rowIndex}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (res.ok) {
        getData();
      }
    } catch (error) {
      console.log(error);
    }
  };
  // useEffect(() => {
  //   getData();
  // }, []);
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
          {customers?.map((customer, index) => {
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
                    onClick={() =>
                      setOpenAddCustomerModal({ ...customer, index })
                    }
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
        handleEdit={handleEdit}
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
