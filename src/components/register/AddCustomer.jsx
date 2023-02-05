import React, { useEffect, useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { productRegisterFormFields } from "../../common/constants";

const AddCustomer = ({
  show,
  handleClose,
  handleSaveCustomerDetails,
  handleEdit,
  handelDeleteCustomer,
}) => {
  const [customerDetail, setCustomerDetail] = useState();

  const handleSaveChanges = () => {
    if (!customerDetail?._id) {
      handleSaveCustomerDetails({
        ...customerDetail,
        _id: randomId(),
      });
    } else {
      handleEdit(customerDetail, show?.index);
    }
    handleClose();
  };

  useEffect(() => {
    setCustomerDetail(show);
  }, [show]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{show?.name} 's Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          {productRegisterFormFields.map((field) => {
            return (
              <Col xs={field.xs} className="mt-3">
                <h6 className="small mb-1 text-muted">{field.label}:</h6>
                {field.type === "enum" && (
                  <select
                    className="form-control form-control-sm w-100"
                    value={customerDetail?.[field.name]}
                    onChange={(e) =>
                      setCustomerDetail({
                        ...customerDetail,
                        [field.name]:
                          e.target.value === "null" ? "No" : e.target.value,
                      })
                    }
                  >
                    {" "}
                    <option className="null">Select One</option>
                    <option value="Yes">Yes</option>{" "}
                    <option value="No">No</option>
                    {field.name === "payment" && (
                      <option value="Half">Half</option>
                    )}
                  </select>
                )}
                {field.type === "text" && (
                  <input
                    placeholder=""
                    required=""
                    rows="4"
                    type="text"
                    value={customerDetail?.[field.name]}
                    onChange={(e) =>
                      setCustomerDetail({
                        ...customerDetail,
                        [field.name]: e.target.value,
                      })
                    }
                    class="form-control form-control-sm"
                  ></input>
                )}
              </Col>
            );
          })}
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="danger"
          onClick={() => {
            handelDeleteCustomer(customerDetail);
            handleClose();
          }}
        >
          Delete
        </Button>
        <Button variant="success" onClick={handleSaveChanges}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddCustomer;

const randomId = () => {
  return Math.floor(Math.random() * 10000 + 1);
};
