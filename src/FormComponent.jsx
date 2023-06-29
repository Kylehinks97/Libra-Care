import { FormGroup } from "@mui/material";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./styles/FormComponent.css";
import { useState } from "react";

export default function FormComponent() {
  const [isChecked, setIsChecked] = useState(false);
  const [wantCare, setWantCare] = useState(false);
  const [wantJob, setWantJob] = useState(false);

  console.log(isChecked);
  console.log(wantJob, "job");
  console.log(wantCare, "care");

  return (
    <div
      style={{
        background: "grey",
      }}
    >
      <Form
        style={{
          width: "280px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h2
            style={{
              marginBottom: "20px",
            }}
          >
            Inquiry Form
          </h2>
        </div>
        <FormGroup
          style={{
            backgroundColor: "white",
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <div className="row">
            <div className="col">
              <Form.Check
                type="radio"
                label="I want care"
                id="care-radio"
                checked={wantCare}
                onChange={() => {
                  setIsChecked(true);
                  setWantCare(true);
                  setWantJob(false);
                }}
                style={
                  {
                    // backgroundColor: "coral"
                  }
                }
              />
            </div>
            <div className="col">
              <Form.Check
                type="radio"
                label="I want a job"
                id="job-radio"
                checked={wantJob}
                onChange={() => {
                  setIsChecked(true);
                  setWantJob(true);
                  setWantCare(false);
                }}
                style={
                  {
                    // backgroundColor: "coral"
                  }
                }
              />
            </div>
          </div>
        </FormGroup>
        {isChecked && (
          <>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email address..." />
              <Form.Text className="text-muted">
                This is so that we are able to reach you.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
              <Form.Text className="text-muted">
                This is so that we are able to reach you.
              </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </>
        )}
      </Form>
    </div>
  );
}
