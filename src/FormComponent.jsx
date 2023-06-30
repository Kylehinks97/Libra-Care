import { FormGroup } from "@mui/material";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./styles/FormComponent.css";
import { useState } from "react";

export default function FormComponent() {
  const [isChecked, setIsChecked] = useState(false);
  const [wantCare, setWantCare] = useState(false);
  const [wantJob, setWantJob] = useState(false);
  const [other, setOther] = useState(false);

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
          width: "60vw",
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
            justifyContent: "space-between",
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
                label="I want a career"
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
        {wantCare && (
          <>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name of person to receive care</Form.Label>
              <Form.Control type="text" placeholder="Enter full name..." />
              {/* <Form.Text className="text-muted">
                This is so that we are able to reach you.
              </Form.Text> */}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name of person inquiring for care</Form.Label>
              <Form.Control type="text" placeholder="Enter full name..." />
              <Form.Text className="text-muted">
                This is incase of inquiry on behalf of another.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address of person making inquiry</Form.Label>
              <Form.Control type="email" placeholder="Enter email address..." />
              <Form.Text className="text-muted">
                This is so that we are able to reach you.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Care needs</Form.Label>
              <div className="row">
            <div className="col">
              <Form.Check
                type="radio"
                label="Continence Care"
                id="care-radio"
                checked={wantCare}
                onChange={() => {
                  // setIsChecked(true);
                  // setWantCare(true);
                  // setWantJob(false);
                }}
              />
            </div>
            <div className="col">
              <Form.Check
                type="radio"
                label="Personal Care"
                id="job-radio"
                checked={wantJob}
                onChange={() => {
                  // setIsChecked(true);
                  // setWantJob(true);
                  // setWantCare(false);
                }}
              />
            </div>
            <div className="col">
              <Form.Check
                type="radio"
                label="Meal preparation"
                id="job-radio"
                checked={wantJob}
                onChange={() => {
                  // setIsChecked(true);
                  // setWantJob(true);
                  // setWantCare(false);
                }}
              />
            </div>
            <div className="col">
              <Form.Check
                type="radio"
                label="Medication administration"
                id="job-radio"
                checked={wantJob}
                onChange={() => {
                  // setIsChecked(true);
                  // setWantJob(true);
                  // setWantCare(false);
                }}
              />
            </div>
            <div className="col">
              <Form.Check
                type="radio"
                label="Domestic duties"
                id="job-radio"
                checked={wantJob}
                onChange={() => {
                  // setIsChecked(true);
                  // setWantJob(true);
                  // setWantCare(false);
                }}
              />
            </div>
            <div className="col">
              <Form.Check
                type="radio"
                label="Feeding"
                id="job-radio"
                checked={wantJob}
                onChange={() => {
                  // setIsChecked(true);
                  // setWantJob(true);
                  // setWantCare(false);
                }}
              />
            </div>
            <div className="col">
              <Form.Check
                type="radio"
                label="Oral Care"
                id="job-radio"
                checked={wantJob}
                onChange={() => {
                  // setIsChecked(true);
                  // setWantJob(true);
                  // setWantCare(false);
                }}
              />
            </div>
            <div className="col">
              <Form.Check
                type="radio"
                label="Other"
                id="job-radio"
                checked={other}
                onChange={() => {
                  setOther(prevState => !prevState);
                  setWantJob(false)
                }}
              />
            </div>
            <div className="col">
              <Form.Check
                type="radio"
                label="Not sure"
                id="job-radio"
                checked={wantJob}
                onChange={() => {
                  // setIsChecked(true);
                  // setWantJob(true);
                  // setWantCare(false);
                }}
              />
            </div>
            {other &&  <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Please describe the care required</Form.Label>
              <Form.Control type="email" placeholder="Enter email address..." />
            </Form.Group>}
          </div>
            </Form.Group>
              <Form.Text className="text-muted" style={{display: "flex", justifyContent: "center"}}>
                Please select all that apply
              </Form.Text>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "8% 0 8%",
                  fontWeight: "650",
                }}
              >
                Address of person to receive care
              </Form.Label>
              <Form.Label>1st line of address</Form.Label>
              <Form.Control type="password" placeholder="Enter password..." />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>2nd line of address</Form.Label>
              <Form.Control type="email" placeholder="Enter email address..." />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Post Code</Form.Label>
              <Form.Control type="email" placeholder="Enter email address..." />
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
