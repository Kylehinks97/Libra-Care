import { FormGroup } from "@mui/material";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./styles/FormComponent.css";
import { useState, useEffect } from "react";

export default function FormComponent() {
  const [isChecked, setIsChecked] = useState(false);
  const [wantCare, setWantCare] = useState(false);
  const [wantJob, setWantJob] = useState(false);
  const [forMyself, setForMyself] = useState(false);
  const [forAnother, setForAnother] = useState(false);
  const [relationship, setRelationship] = useState("");
  const [inquirersName, setInquirersName] = useState("");
  const [personReceivingCare, setPersonReceivingCare] = useState("");
  const [inquirersEmail, setInquirersEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [firstLineOfAddress, setFirstLineOfAddress] = useState("");
  const [secondLineOfAddress, setSecondLineOfAddress] = useState("");
  const [postCode, setPostCode] = useState("");

  const [continenceCare, setContinenceCare] = useState(false);
  const [personalCare, setPersonalCare] = useState(false);
  const [mealPrep, setMealPrep] = useState(false);
  const [medicationAdmin, setMedicationAdmin] = useState(false);
  const [domesticDuties, setDomesticDuties] = useState(false);
  const [feeding, setFeeding] = useState(false);
  const [oralCare, setOralCare] = useState(false);
  const [notSure, setNotSure] = useState(false);
  const [other, setOther] = useState(false);
  const [moreDetails, setMoreDetails] = useState("");
  const [visits, setVisits] = useState("");
  const [inquirerAndReceiversName, setInquirerAndReceiversName] = useState("")

  const visitsGreenList = [
    "Weekly",
    "Every other day",
    "Daily",
    "Twice a day",
    "Three times a day",
    "Four times a day",
    "Five, or more times a day",
  ];

  console.log(forMyself)
  console.log(inquirerAndReceiversName)

  const careRequirements = [
    continenceCare,
    personalCare,
    mealPrep,
    medicationAdmin,
    domesticDuties,
    feeding,
    oralCare,
    notSure,
    other,
  ];

  useEffect(() => {}, []);

  // console.log(careRequirements, "<--continence");

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
            <Form.Label>Is this care for yourself or for another?</Form.Label>
            <div className="row">
              <div className="col">
                <Form.Check
                  type="radio"
                  label="For myself"
                  id="for-who-myself"
                  checked={forMyself}
                  onChange={() => {
                    setForMyself(true);
                    setForAnother(false);
                    setInquirersName("")
                    setRelationship("")
                    setPersonReceivingCare("")
                    setContactNumber("")
                    setInquirersEmail("")
                    setFirstLineOfAddress("")
                    setPostCode("")
                    setContinenceCare(false)
                    setPersonalCare(false)
                    setContinenceCare(false)
                    setDomesticDuties(false)
                    setMealPrep(false)
                    setMedicationAdmin(false)
                    setFeeding(false)
                    setOralCare(false)
                    setOther(false)
                    setNotSure(false)
                    setVisits("")
                    setMoreDetails("")
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
                  label="For another"
                  id="for-who-another"
                  checked={forAnother}
                  onChange={() => {
                    setForAnother(true);
                    setForMyself(false);
                  }}
                  style={
                    {
                      // backgroundColor: "coral"
                    }
                  }
                />
              </div>
            </div>
          </>
        )}
        {forAnother && (
          <>
            <Form.Group className="mb-3" controlId="formBasicSelect">
              <Form.Label>What is your relationship to this person?</Form.Label>
              <Form.Select
                value={relationship}
                onChange={(e) => setRelationship(e.target.value)}
              >
                <option value="">Select relationship</option>
                <option value="Son/Daughter">Son/Daughter</option>
                <option value="Spouse">Spouse</option>
                <option value="Sibling">Sibling</option>
                <option value="Grandparent">Grandparent</option>
                <option value="Parent">Parent</option>
                <option value="Friend">Friend</option>
                <option value="Other">Other</option>
              </Form.Select>
            </Form.Group>
          </>
        )}
        {relationship !== "" && (
          <>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>What is your full name?</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter full name..."
                onChange={(e) => setInquirersName(e.target.value)}
              />
            </Form.Group>
          </>
        )}
        {inquirersName !== "" && (
          <>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                What is the full name of the person to receive care?
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter full name..."
                onChange={(e) => setPersonReceivingCare(e.target.value)}
              />
            </Form.Group>
          </>
        )}
        {personReceivingCare !== "" && (
          <>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "8% 0 8%",
                  fontWeight: "650",
                  pointerEvents: "none",
                }}
              >
                Your contact details
              </Form.Label>
              <Form.Label style={{ pointerEvents: "none" }}>
                Email address
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email address"
                onChange={(e) => setInquirersEmail(e.target.value)}
              />
            </Form.Group>
          </>
        )}
        {inquirersEmail !== "" && (
          <>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={{ pointerEvents: "none" }}>
                Contact number
              </Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter contact number"
                onChange={(e) => setContactNumber(e.target.value)}
              />
            </Form.Group>
          </>
        )}
        {contactNumber !== "" && (
          <>
          <Form.Group className="text-center">
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
              </Form.Group>
         
            <Form.Label>1st Line of Address</Form.Label>
            <Form.Control
              type="email"
              onChange={(e) => setFirstLineOfAddress(e.target.value)}
            />
            <Form.Label>2nd Line of Address</Form.Label>
            <Form.Control
              type="email"
              onChange={(e) => setSecondLineOfAddress(e.target.value)}
            />
            <Form.Label>Post Code</Form.Label>
            <Form.Control
              type="email"
              onChange={(e) => setPostCode(e.target.value)}
            />
          </>
        )}
        {firstLineOfAddress !== "" && postCode !== "" && (
          <>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "8% 0 8%",
                  fontWeight: "650",
                  pointerEvents: "none",
                }}
              >
                What care is required?
              </Form.Label>
              <Form.Label
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Select all that apply
              </Form.Label>
              <div className="row">
                <div className="col">
                  <Form.Check
                    type="radio"
                    label="Continence Care"
                    // disabled={other}
                    id="care-req-1"
                    checked={continenceCare}
                    onClick={() => {
                      setContinenceCare((prevState) => !prevState);
                      setOther(false);
                      setNotSure(false);
                      
                    }}
                  />
                </div>
                <div className="col">
                  <Form.Check
                    type="radio"
                    label="Personal Care"
                    id="care-req-2"
                    checked={personalCare}
                    // disabled={other}
                    onClick={() => {
                      setPersonalCare((prevState) => !prevState);
                      setOther(false);
                      setNotSure(false);
                    
                    }}
                  />
                </div>
                <div className="col">
                  <Form.Check
                    type="radio"
                    label="Meal preparation"
                    id="care-req-3"
                    checked={mealPrep}
                    // disabled={other}
                    onClick={() => {
                      setMealPrep((prevState) => !prevState);
                      setOther(false);
                      setNotSure(false);
                     
                    }}
                  />
                </div>
                <div className="col">
                  <Form.Check
                    type="radio"
                    label="Medication administration"
                    id="care-req-4"
                    checked={medicationAdmin}
                    // disabled={other}
                    onClick={() => {
                      setMedicationAdmin((prevState) => !prevState);
                      setOther(false);
                      setNotSure(false);
                      
                    }}
                  />
                </div>
                <div className="col">
                  <Form.Check
                    type="radio"
                    label="Domestic duties"
                    id="care-req-5"
                    checked={domesticDuties}
                    // disabled={other}
                    onClick={() => {
                      setDomesticDuties((prevState) => !prevState);
                      setOther(false);
                      setNotSure(false);
                      
                    }}
                  />
                </div>
                <div className="col">
                  <Form.Check
                    type="radio"
                    label="Feeding"
                    id="care-req-6"
                    checked={feeding}
                    // disabled={other}
                    onClick={() => {
                      setFeeding((prevState) => !prevState);
                      setOther(false);
                      setNotSure(false);
                     
                    }}
                  />
                </div>
                <div className="col">
                  <Form.Check
                    type="radio"
                    label="Oral Care"
                    id="care-req-7"
                    checked={oralCare}
                    // disabled={other}
                    onClick={() => {
                      setOralCare((prevState) => !prevState);
                      setOther(false);
                      setNotSure(false);
                      
                    }}
                  />
                </div>
                <div className="col">
                  <Form.Check
                    type="radio"
                    label="Other"
                    id="care-req-8"
                    checked={other}
                    onClick={() => {
                      setOther((prevState) => !prevState);
                      setContinenceCare(false);
                      setPersonalCare(false);
                      setMealPrep(false);
                      setMedicationAdmin(false);
                      setDomesticDuties(false);
                      setFeeding(false);
                      setOralCare(false);
                      setNotSure(false);
                      setMoreDetails("")
                      setVisits("")
                    }}
                  />
                </div>
                <div className="col">
                  <Form.Check
                    type="radio"
                    label="Not sure"
                    id="care-req-9"
                    checked={notSure}
                    // disabled={other}
                    onClick={() => {
                      setNotSure((prevState) => !prevState);
                      setContinenceCare(false);
                      setPersonalCare(false);
                      setMealPrep(false);
                      setMedicationAdmin(false);
                      setDomesticDuties(false);
                      setFeeding(false);
                      setOralCare(false);
                      setOther(false);
                      setMoreDetails("")
                      setVisits("")
                    }}
                  />
                </div>
                {(other || notSure) && (
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{pointerEvents: "none"}}>Please describe the care required</Form.Label>
                    <Form.Control
                      type="email"
                      value={moreDetails}
                      placeholder="Tell us how we can help..."
                      onChange={(e) => setMoreDetails(e.target.value)}
                    />
                  </Form.Group>
                )}
              </div>
            </Form.Group>
          </>
        )}
        {(((other || notSure) && moreDetails !== "") ||
          continenceCare ||
          personalCare ||
          mealPrep ||
          medicationAdmin ||
          domesticDuties ||
          oralCare ||
          feeding) && (
          <Form.Group className="mb-3" controlId="formBasicSelect">
            <Form.Label style={{pointerEvents: "none"}}>
              Lastly, how many visits do you think are needed?
            </Form.Label>
            <Form.Select
              value={visits}
              onChange={(e) => setVisits(e.target.value)}
            >
              <option value="">Select visits</option>
              <option value="Weekly">Weekly</option>
              <option value="Every other day">Every other day</option>
              <option value="Daily">Daily</option>
              <option value="Twice a day">Twice a day</option>
              <option value="Three times a day">Three times a day</option>
              <option value="Four times a day">Four times a day</option>
              <option value="Five, or more times a day">
                Five, or more times a day
              </option>
              <option value="Other">Other</option>
            </Form.Select>
          </Form.Group>
        )}
        {visits === "Other" && (
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              If other, tell us how many visits you think are needed
            </Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setMoreDetails(e.target.value)}
            />
          </Form.Group>
        )}
        {((moreDetails !== "" && visits !== "") || visitsGreenList.includes(visits)) && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button
              style={{
                width: "100%",
                color: "white",
                fontSize: "15px",
                fontWeight: "bold",
                textShadow: "2px 2px 4px black",
                whiteSpace: "nowrap",
                padding: "1.8%",
                borderRadius: "10px",
                border: "none",
                background: "#FF6B3D",
                boxShadow: "1px 1px 6px black",
              }}
            >
              Submit
            </button>
          </div>
        )}

        {forMyself && (
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>What is your full name?</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter full name..."
              onChange={(e) => setInquirerAndReceiversName(e.target.value)}
            />
          </Form.Group>
        )}
      </Form>
    </div>
  );
}
