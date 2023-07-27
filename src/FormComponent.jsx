import { FormGroup } from "@mui/material";
import React from "react";
import Form from "react-bootstrap/Form";
import "./styles/FormComponent.css";
import { useState } from "react";
import emailjs from "emailjs-com";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import axios from "axios";



export default function FormComponent() {
  const [isChecked, setIsChecked] = useState(false);
  const [wantCare, setWantCare] = useState(false);
  const [wantJob, setWantJob] = useState(false);
  const [forMyself, setForMyself] = useState(false);
  const [forAnother, setForAnother] = useState(false);
  const [relationship, setRelationship] = useState("");
  const [customRelationship, setCustomRelationship] = useState("");
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
  const [visitsForMyself, setVisitsForMyself] = useState("");
  const [moreDetailsForMyself, setMoreDetailsForMyself] = useState("");
  const [anythingMore, setAnythingMore] = useState("");

  const [employeeName, setEmployeeName] = useState("");
  const [employeeEmail, setEmployeeEmail] = useState("");
  const [employeeContactNumber, setEmployeeContactNumber] = useState("");
  const [employeeDOB, setEmployeeDOB] = useState("");
  const [employeeNationalInsurance, setEmployeeNationalInsurance] =
    useState("");
  const [employeeFirstLineOfAddress, setEmployeeFirstLineOfAddress] =
    useState("");
  const [employeeSecondLineOfAddress, setEmployeeSecondLineOfAddress] =
    useState("");
  const [employeePostCode, setEmployeePostCode] = useState("");
  const [employeeExperience, setEmployeeExperience] = useState("");
  const [employeeSkills, setEmployeeSkills] = useState("");
  const [employeeQualifications, setEmployeeQualifications] = useState("");
  const [employeeCanDrive, setEmployeeCanDrive] = useState(false);
  const [employeeCannotDrive, setEmployeeCannotDrive] = useState(false);
  const [employeeIsWilling, setEmployeeIsWilling] = useState(false);
  const [employeeIsNotWilling, setEmployeeIsNotWilling] = useState(false);
  const [employeeRefEmail, setEmployeeRefEmail] = useState("");
  const [employeeRefName, setEmployeeRefName] = useState("");
  const [employeeRefContactNumber, setEmployeeRefContactNumber] = useState("");
  const [cv, setCV] = useState(false);

  const [inquirersAndReceiversName, setInquirersAndReceiversName] =
    useState("");
  const [inquirersAndReceiversEmail, setInquirersAndReceiversEmail] =
    useState("");
  const [
    inquirersAndReceiversContactNumber,
    setInquirersAndReceiversContactNumber,
  ] = useState("");
  const [
    inquirersAndReceiversFirstLineOfAddress,
    setInquirersAndReceiversFirstLineOfAddress,
  ] = useState("");
  const [
    inquirersAndReceiversSecondLineOfAddress,
    setInquirersAndReceiversSecondLineOfAddress,
  ] = useState("");
  const [inquirersAndReceiversPostCode, setInquirersAndReceiversPostCode] =
    useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [jobApplication, setJobApplication] = useState(false);
  const [activeStep, setActiveStep] = React.useState(0);

  const [completedJobApplication, setCompletedJobApplication] = useState(false);

  const visitsGreenList = [
    "Weekly",
    "Every other day",
    "Daily",
    "Twice a day",
    "Three times a day",
    "Four times a day",
    "Five, or more times a day",
    "Not sure",
  ];
  const relationshipsGreenList = [
    "Son/Daughter",
    "Spouse",
    "Sibling",
    "Grandparent",
    "Grandchild",
    "Parent",
    "Friend",
    "Other",
  ];

  const steps = [
    {
      label: "Submit application",
      description: `Congratulations ${employeeName}, you are one step closer to joining our team!`,
    },
    {
      label: "Submit your CV",
      description: "Please send your CV to us via email.",
    },
    {
      label: "Await our response",
      description: `Please confirm you have sent your CV.`,
    },
  ];

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

  const getCareInquiry = () => {
    const careInquiry = {
      forMyself: forMyself,
      forAnother: forAnother,
      onBehalfDetails: {
        relationship: relationship,
        customRelationship: customRelationship,

        inquirersName: inquirersName,
        inquirersEmail: inquirersEmail,
        contactNumber: contactNumber,
        address: {
          firstLineOfAddress: firstLineOfAddress,
          secondLineOfAddress: secondLineOfAddress,
          postCode: postCode,
        },
      },
      forMyselfDetails: {
        inquirersAndReceiversName: inquirersAndReceiversName,
        inquirersAndReceiversEmail: inquirersAndReceiversEmail,
        inquirersAndReceiversContactNumber: inquirersAndReceiversContactNumber,
        address: {
          inquirersAndReceiversFirstLineOfAddress:
            inquirersAndReceiversFirstLineOfAddress,
          inquirersAndReceiversSecondLineOfAddress:
            inquirersAndReceiversSecondLineOfAddress,
          inquirersAndReceiversPostCode: inquirersAndReceiversPostCode,
        },
      },
      careRequirements: {
        continenceCare: continenceCare,
        personalCare: personalCare,
        mealPrep: mealPrep,
        medicationAdmin: medicationAdmin,
        domesticDuties: domesticDuties,
        feeding: feeding,
        oralCare: oralCare,
        notSure: notSure,
        other: other,
        moreDetails: moreDetails,
        visits: visits,
        visitsForMyself: visitsForMyself,
        moreDetailsForMyself: forMyself,
        anythingMore: anythingMore,
      },
    };
    return careInquiry;
  };

  const handleEmployeeSubmit = () => {
    console.log("hi");

    const formData = {};

    formData["from_name"] = "kyle.s.hinks1997@gmail.com";
    formData["to_name"] = "kyle.s.hinks@outlook.com";
    formData["subject"] = "Test Email";
    formData[
      "message"
    ] = `${employeeName} has applied for a job with Libra Care. Their details are as follows:
    \n
Email:   ${employeeEmail},
\n
Contact Number:   ${employeeContactNumber},
\n
Date of Birth:   ${employeeDOB},
\n
National Insurance No.:   ${employeeNationalInsurance},
\n
1st Line of Address: ${employeeFirstLineOfAddress},
\n
2nd Line of Address:   ${employeeSecondLineOfAddress},
\n
Post Code:   ${employeePostCode},
\n
Willing to work 1 weekend on, 1 weekend off?:   ${employeeIsWilling},
\n
NOT willing to work 1 weekend on, 1 weekend off?:   ${employeeIsNotWilling},
\n
Experience:   ${employeeExperience},
\n
Skills:   ${employeeSkills},
\n
Qualifications:   ${employeeQualifications},
\n
Can they drive? (if true, they can):   ${employeeCanDrive},
\n
Can they NOT drive? (if true, they cannot):   ${employeeCannotDrive},
\n
Name of their reference:   ${employeeRefName},
\n
Email of their reference:   ${employeeRefEmail},
\n
Contact number of their reference:   ${employeeRefContactNumber}`;

    emailjs
      .send(
        "kyle_s_hinks1997",
        "care_submission_template",
        formData,
        "6qbARiXYk2OZNtVe3"
      )
      .then((response) => {
        console.log("Email sent successfully:", response.status, response.text);
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
      });
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  function handleSubmitForMyself() {
    const formDataForMyself = {};

    formDataForMyself["from_name"] = "kyle.s.hinks1997@gmail.com";
    formDataForMyself["to_name"] = "kyle.s.hinks@outlook.com";
    formDataForMyself["subject"] = "Test Email";
    formDataForMyself[
      "message"
    ] = `${inquirersAndReceiversName} has applied for care for themselves. Their details are as follows:
    \n
Email:   ${inquirersAndReceiversEmail},
\n
Contact Number:   ${inquirersAndReceiversContactNumber},
\n
1st Line of Address:   ${inquirersAndReceiversFirstLineOfAddress},
\n
2nd Line of Address:   ${inquirersAndReceiversSecondLineOfAddress},
\n
Post Code:   ${inquirersAndReceiversPostCode},
\n
They need the following care: (true if they need it, false if they don't):
\n  
Continence care: ${continenceCare},
\n
Personal Care: ${personalCare},
\n
Meal prep: ${mealPrep},
\n
Medication admin: ${medicationAdmin},
\n
Feeding: ${feeding},
\n
Oral Care: ${oralCare}
\n
Domestic Duties: ${domesticDuties}
\n
Other: ${other}
\n
Not sure: ${notSure}
\n
Further details entered about care requirements (if they selected other or not sure): ${moreDetails},
\n
They need this many visits: ${visits},
\n
They gave this as optional further information: ${anythingMore}
`;

    emailjs
      .send(
        "kyle_s_hinks1997",
        "care_submission_template",
        formDataForMyself,
        "6qbARiXYk2OZNtVe3"
      )
      .then((response) => {
        console.log("Email sent successfully:", response.status, response.text);
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
      });
  }

  function handleSubmitForAnother() {
    const formDataForAnother = {};

    formDataForAnother["from_name"] = "kyle.s.hinks1997@gmail.com";
    formDataForAnother["to_name"] = "kyle.s.hinks@outlook.com";
    formDataForAnother["subject"] = "Test Email";
    formDataForAnother[
      "message"
    ] = `${inquirersName} has applied for care for another.
    \n
    They applied for care for their: ${relationship}.
    \n
    If other, they described their relationship as: ${customRelationship}
    \n
Email:   ${inquirersEmail},
\n
Contact Number:   ${contactNumber},
\n
1st Line of Address:   ${firstLineOfAddress},
\n
2nd Line of Address:   ${secondLineOfAddress},
\n
Post Code:   ${postCode},
\n
They need the following care: (true if they need it, false if they don't):
\n  
Continence care: ${continenceCare},
\n
Personal Care: ${personalCare},
\n
Meal prep: ${mealPrep},
\n
Medication admin: ${medicationAdmin},
\n
Feeding: ${feeding},
\n
Oral Care: ${oralCare}
\n
Domestic Duties: ${domesticDuties}
\n
Other: ${other}
\n
Not sure: ${notSure}
\n
Further details entered about care requirements (if they selected other or not sure): ${moreDetails},
\n
They need this many visits: ${visits},
\n
They gave this as optional further information: ${anythingMore}
`;

    emailjs
      .send(
        "kyle_s_hinks1997",
        "care_submission_template",
        formDataForAnother,
        "6qbARiXYk2OZNtVe3"
      )
      .then((response) => {
        console.log("Email sent successfully:", response.status, response.text);
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
      });
  }

  return (
    <div
      style={{
        background: "red",
        display: "flex"
      }}
      id="inquiry-form-wrapper"
    >
      {!jobApplication && (
        <Form
        
          id="inquiry-form"
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <h2>Inquiry Form</h2>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Form.Label
              className="text-center align-middle"
              style={{
                margin: "3% 0 9%",
                fontWeight: "580",
                pointerEvents: "none",
              }}
            >
              You can expect to hear from us regarding your inquiry within 48
              hours...
            </Form.Label>
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
                  className="longer-questions"
                  id="care-radio"
                  checked={wantCare}
                  onChange={() => {
                    setIsChecked(true);
                    setWantCare(true);
                    setWantJob(false);
                    setEmployeeName("");
                    setEmployeeDOB("");
                    setEmployeeEmail("");
                    setEmployeeContactNumber("");
                    setEmployeeFirstLineOfAddress("");
                    setEmployeeSecondLineOfAddress("");
                    setEmployeePostCode("");
                    setEmployeeNationalInsurance("");
                    setEmployeeExperience("");
                    setEmployeeSkills("");
                    setEmployeeQualifications("");
                    setEmployeeCanDrive(false);
                    setEmployeeCannotDrive(false);
                    setEmployeeIsWilling(false);
                    setEmployeeIsNotWilling(false);
                    setEmployeeRefName("");
                    setEmployeeRefEmail("");
                    setEmployeeRefContactNumber("");
                    setCV(false);
                  }}
                />
              </div>
              <div className="col">
                <Form.Check
                  type="radio"
                  label="I want a career"
                  id="job-radio"
                  className="longer-questions"
                  checked={wantJob}
                  onChange={() => {
                    setIsChecked(true);
                    setWantJob(true);
                    setWantCare(false);
                    setForAnother(false);
                    setForMyself(false);
                    setPersonReceivingCare("");
                    setContinenceCare(false);
                    setPersonalCare(false);
                    setOralCare(false);
                    setMealPrep(false);
                    setMedicationAdmin(false);
                    setFeeding(false);
                    setOther(false);
                    setNotSure(false);
                    setDomesticDuties(false);
                    setPostCode("");
                    setFirstLineOfAddress("");
                    setInquirersEmail("");
                    setInquirersAndReceiversName("");
                    setInquirersAndReceiversContactNumber("");
                    setInquirersAndReceiversEmail("");
                    setInquirersAndReceiversPostCode("");
                    setInquirersAndReceiversSecondLineOfAddress("");
                    setPersonReceivingCare("");
                    setMoreDetails("");
                    setRelationship("");
                    setCustomRelationship("");
                    setInquirersName("");
                    setForMyself(false);
                    setForAnother(false);
                    setAnythingMore("");
                    setVisits("");
                    setVisitsForMyself("");
                    setContactNumber("");
                  }}
                />
              </div>
            </div>
          </FormGroup>
          {wantCare && (
            <div style={{ marginTop: "1.5em", marginBottom: "1.5em" }}>
              <Form.Group>
                <Form.Label>
                  Is this care for yourself or for another?
                </Form.Label>
                <div className="row">
                  <div className="col">
                    <Form.Check
                      type="radio"
                      label="For myself"
                      id="for-who-myself"
                      className="longer-questions"
                      checked={forMyself}
                      onChange={() => {
                        setForMyself(true);
                        setForAnother(false);
                        setInquirersName("");
                        setRelationship("");
                        setPersonReceivingCare("");
                        setContactNumber("");
                        setInquirersEmail("");
                        setFirstLineOfAddress("");
                        setPostCode("");
                        setContinenceCare(false);
                        setPersonalCare(false);
                        setContinenceCare(false);
                        setDomesticDuties(false);
                        setMealPrep(false);
                        setMedicationAdmin(false);
                        setFeeding(false);
                        setOralCare(false);
                        setOther(false);
                        setNotSure(false);
                        setVisits("");
                        setMoreDetails("");
                        setInquirersAndReceiversName("");
                        setCustomRelationship("");
                      }}
                    />
                  </div>
                  <div className="col">
                    <Form.Check
                      type="radio"
                      label="For another"
                      id="for-who-another"
                      checked={forAnother}
                      className="longer-questions"
                      onChange={() => {
                        setForAnother(true);
                        setForMyself(false);
                        setInquirersAndReceiversName("");
                        setInquirersAndReceiversEmail("");
                        setInquirersAndReceiversContactNumber("");
                        setCustomRelationship("");
                        setForMyself(false);
                        setPersonReceivingCare("");
                        setContinenceCare(false);
                        setPersonalCare(false);
                        setOralCare(false);
                        setMealPrep(false);
                        setMedicationAdmin(false);
                        setFeeding(false);
                        setOther(false);
                        setNotSure(false);
                        setDomesticDuties(false);
                        setPostCode("");
                        setFirstLineOfAddress("");
                        setInquirersEmail("");
                        setInquirersAndReceiversContactNumber("");
                        setInquirersAndReceiversEmail("");
                        setInquirersAndReceiversPostCode("");
                        setInquirersAndReceiversSecondLineOfAddress("");
                        setVisits("");
                        setVisitsForMyself("");
                      }}
                    />
                  </div>
                </div>
              </Form.Group>
            </div>
          )}
          {forAnother && (
            <div style={{ marginTop: "1.5em", marginBottom: "1.5em" }}>
              <Form.Group className="mb-3">
                <Form.Label>
                  What is your relationship to this person?
                </Form.Label>
                <Form.Select
                  value={relationship}
                  onChange={(e) => setRelationship(e.target.value)}
                >
                  <option value="">Select relationship</option>
                  <option value="Son/Daughter">Son/Daughter</option>
                  <option value="Spouse">Spouse</option>
                  <option value="Grandchild">Grandchild</option>
                  <option value="Sibling">Sibling</option>
                  <option value="Grandparent">Grandparent</option>
                  <option value="Parent">Parent</option>
                  <option value="Friend">Friend</option>
                  <option value="Other">Other</option>
                </Form.Select>
              </Form.Group>
            </div>
          )}
          {relationship === "Other" && (
            <div style={{ marginTop: "1.5em", marginBottom: "1.5em" }}>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="describe-relationship">
                  Please describe your relationship with this person
                </Form.Label>
                <Form.Control
                  type="text"
                  id="describe-relationship"
                  placeholder="Enter contact number..."
                  onChange={(e) => setCustomRelationship(e.target.value)}
                />
              </Form.Group>
            </div>
          )}
          {(relationshipsGreenList.includes(relationship) ||
            customRelationship) && (
            <div style={{ marginTop: "1.5em", marginBottom: "1.5em" }}>
              <Form.Group className="mb-3">
                <Form.Label>What is your full name?</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter full name..."
                  onChange={(e) => setInquirersName(e.target.value)}
                />
              </Form.Group>
            </div>
          )}

          {inquirersName !== "" && (
            <div style={{ marginTop: "1.5em", marginBottom: "1.5em" }}>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="name-receiving-care">
                  What is the full name of the person to receive care?
                </Form.Label>
                <Form.Control
                  id="name-receiving-care"
                  type="text"
                  placeholder="Enter full name..."
                  onChange={(e) => setPersonReceivingCare(e.target.value)}
                />
              </Form.Group>
            </div>
          )}
          {personReceivingCare !== "" && (
            <div style={{ marginTop: "1.5em", marginBottom: "1.5em" }}>
              <Form.Group className="mb-3">
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
                <Form.Label htmlFor="poc-email">Email address</Form.Label>
                <Form.Control
                  type="email"
                  id="poc-email"
                  placeholder="Enter email address..."
                  onChange={(e) => setInquirersEmail(e.target.value)}
                />
              </Form.Group>
            </div>
          )}
          {inquirersEmail !== "" && (
            <div style={{ marginTop: "1.5em", marginBottom: "1.5em" }}>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="poc-number">Contact number</Form.Label>
                <Form.Control
                  type="tel"
                  id="poc-number"
                  placeholder="Enter contact number..."
                  onChange={(e) => setContactNumber(e.target.value)}
                />
              </Form.Group>
            </div>
          )}
          {contactNumber !== "" && (
            <div style={{ marginTop: "1.5em", marginBottom: "1.5em" }}>
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
              <Form.Group style={{ marginTop: "1.5em", marginBottom: "1.5em" }}>
                <Form.Label htmlFor="receivers-1st-line-address">
                  1st Line of Address
                </Form.Label>
                <Form.Control
                  id="receivers-1st-line-address"
                  type="text"
                  onChange={(e) => setFirstLineOfAddress(e.target.value)}
                />
              </Form.Group>
              <Form.Group style={{ marginTop: "1.5em", marginBottom: "1.5em" }}>
                <Form.Label htmlFor="receivers-2nd-line-address">
                  2nd Line of Address
                </Form.Label>
                <Form.Control
                  id="receivers-2nd-line-address"
                  type="text"
                  onChange={(e) => setSecondLineOfAddress(e.target.value)}
                />
              </Form.Group>
              <Form.Group style={{ marginTop: "1.5em", marginBottom: "1.5em" }}>
                <Form.Label htmlFor="receivers-post-code">Post Code</Form.Label>
                <Form.Control
                  id="receivers-post-code"
                  type="text"
                  onChange={(e) => setPostCode(e.target.value)}
                />
              </Form.Group>
            </div>
          )}
          {firstLineOfAddress !== "" && postCode !== "" && (
            <div style={{ marginTop: "1.5em", marginBottom: "1.5em" }}>
              <Form.Group className="mb-3">
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
                    marginTop: "1.5em",
                    marginBottom: "1.5em",
                    pointerEvents: "none",
                  }}
                >
                  Select all that apply
                </Form.Label>
                <div className="row">
                  <div className="col">
                    <Form.Check
                      type="radio"
                      label="Continence Care"
                      id="care-req-1"
                      checked={continenceCare}
                      className="text-nowrap"
                      onClick={() => {
                        setContinenceCare((prevState) => !prevState);
                        setOther(false);
                        setNotSure(false);
                      }}
                    />
                    <Form.Check
                      type="radio"
                      label="Personal Care"
                      id="care-req-2"
                      className="text-nowrap"
                      checked={personalCare}
                      onClick={() => {
                        setPersonalCare((prevState) => !prevState);
                        setOther(false);
                        setNotSure(false);
                      }}
                    />
                    <Form.Check
                      type="radio"
                      label="Meal preparation"
                      className="text-nowrap"
                      id="care-req-3"
                      checked={mealPrep}
                      onClick={() => {
                        setMealPrep((prevState) => !prevState);
                        setOther(false);
                        setNotSure(false);
                      }}
                    />
                    <Form.Check
                      type="radio"
                      label="Medication administration"
                      id="care-req-4"
                      checked={medicationAdmin}
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
                      label="Feeding"
                      id="care-req-6"
                      checked={feeding}
                      onClick={() => {
                        setFeeding((prevState) => !prevState);
                        setOther(false);
                        setNotSure(false);
                      }}
                    />
                    <Form.Check
                      type="radio"
                      label="Oral Care"
                      id="care-req-7"
                      checked={oralCare}
                      onClick={() => {
                        setOralCare((prevState) => !prevState);
                        setOther(false);
                        setNotSure(false);
                      }}
                    />
                    <Form.Check
                      type="radio"
                      label="Not sure"
                      id="care-req-9"
                      checked={notSure}
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
                        setMoreDetails("");
                        setVisits("");
                      }}
                    />
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
                        setMoreDetails("");
                        setVisits("");
                      }}
                    />
                    <Form.Check
                      type="radio"
                      label="Domestic duties"
                      id="care-req-5"
                      checked={domesticDuties}
                      onClick={() => {
                        setDomesticDuties((prevState) => !prevState);
                        setOther(false);
                        setNotSure(false);
                      }}
                    />
                  </div>
                </div>
                {(other || notSure) && (
                  <Form.Group
                    className="mb-3"
                    style={{ marginTop: "1.5em", marginBottom: "1.5em" }}
                  >
                    <Form.Label htmlFor="set-more-details">
                      Please describe the care required
                    </Form.Label>
                    <Form.Control
                      id="set-more-details"
                      type="text"
                      value={moreDetails}
                      placeholder="Tell us how we can help..."
                      onChange={(e) => setMoreDetails(e.target.value)}
                    />
                  </Form.Group>
                )}
              </Form.Group>
            </div>
          )}
          {forAnother &&
            (((other || notSure) && moreDetails !== "") ||
              continenceCare ||
              personalCare ||
              mealPrep ||
              medicationAdmin ||
              domesticDuties ||
              oralCare ||
              feeding) && (
              <div style={{ marginTop: "1.5em", marginBottom: "1.5em" }}>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="how-many-visits">
                    Lastly, many visits do you think are needed?
                  </Form.Label>
                  <Form.Select
                    id="how-many-visits"
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
                    <option value="Not sure">Not sure</option>
                  </Form.Select>
                </Form.Group>
              </div>
            )}

          {forMyself && (
            <Form.Group
              className="mb-3"
              style={{ marginTop: "1.5em", marginBottom: "1.5em" }}
            >
              <Form.Label>What is your full name?</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter full name..."
                onChange={(e) => setInquirersAndReceiversName(e.target.value)}
              />
            </Form.Group>
          )}
          {inquirersAndReceiversName !== "" && (
            <>
              <Form.Group
                className="mb-3"
                style={{ marginTop: "1.5em", marginBottom: "1.5em" }}
              >
                <Form.Label
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "8% 0 8%",
                    fontWeight: "650",
                    pointerEvents: "none",
                    marginTop: "1.5em",
                    marginBottom: "1.5em",
                  }}
                >
                  Your contact details
                </Form.Label>
                <Form.Label htmlFor="inquirer-and-receivers-email">
                  Email address
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email address..."
                  id="inquirer-and-receivers-email"
                  onChange={(e) =>
                    setInquirersAndReceiversEmail(e.target.value)
                  }
                />
              </Form.Group>
            </>
          )}
          {inquirersAndReceiversEmail !== "" && (
            <div style={{ marginTop: "1.5em", marginBottom: "1.5em" }}>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="inquirer-and-receivers-contact-number">
                  Contact number
                </Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter contact number..."
                  id="inquirer-and-receivers-contact-number"
                  onChange={(e) =>
                    setInquirersAndReceiversContactNumber(e.target.value)
                  }
                />
              </Form.Group>
            </div>
          )}
          {inquirersAndReceiversContactNumber && (
            <div style={{ marginTop: "1.5em", marginBottom: "1.5em" }}>
              <Form.Group className="text-center">
                <Form.Label
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "8% 0 8%",
                    fontWeight: "650",
                    marginTop: "1.5em",
                    marginBottom: "1.5em",
                  }}
                >
                  Your Address
                </Form.Label>
              </Form.Group>
              <Form.Group style={{ marginTop: "1.5em", marginBottom: "1.5em" }}>
                <Form.Label htmlFor="inquirers-and-receivers-first-line-of-address">
                  1st Line of Address
                </Form.Label>
                <Form.Control
                  type="text"
                  id="inquirers-and-receivers-first-line-of-address"
                  onChange={(e) =>
                    setInquirersAndReceiversFirstLineOfAddress(e.target.value)
                  }
                />
              </Form.Group>
              <Form.Group style={{ marginTop: "1.5em", marginBottom: "1.5em" }}>
                <Form.Label htmlFor="inquirers-and-receivers-second-line-of-address">
                  2nd Line of Address
                </Form.Label>

                <Form.Control
                  type="text"
                  id="inquirers-and-receivers-second-line-of-address"
                  onChange={(e) =>
                    setInquirersAndReceiversSecondLineOfAddress(e.target.value)
                  }
                />
              </Form.Group>
              <Form.Group style={{ marginTop: "1.5em", marginBottom: "1.5em" }}>
                <Form.Label htmlFor="inquirers-and-receivers-post-code">
                  Post Code
                </Form.Label>

                <Form.Control
                  type="text"
                  id="inquirers-and-receivers-post-code"
                  onChange={(e) =>
                    setInquirersAndReceiversPostCode(e.target.value)
                  }
                />
              </Form.Group>
            </div>
          )}
          {inquirersAndReceiversFirstLineOfAddress &&
            inquirersAndReceiversPostCode && (
              <div style={{ marginTop: "1.5em", marginBottom: "1.5em" }}>
                <Form.Group className="mb-3">
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
                      marginTop: "1.5em",
                      marginBottom: "1.5em",
                      pointerEvents: "none",
                    }}
                  >
                    Select all that apply
                  </Form.Label>
                  <div className="row">
                    <div className="col">
                      <Form.Check
                        type="radio"
                        label="Continence Care"
                        id="care-req-1"
                        checked={continenceCare}
                        className="text-nowrap"
                        onClick={() => {
                          setContinenceCare((prevState) => !prevState);
                          setOther(false);
                          setNotSure(false);
                        }}
                      />
                      <Form.Check
                        type="radio"
                        label="Personal Care"
                        id="care-req-2"
                        className="text-nowrap"
                        checked={personalCare}
                        onClick={() => {
                          setPersonalCare((prevState) => !prevState);
                          setOther(false);
                          setNotSure(false);
                        }}
                      />
                      <Form.Check
                        type="radio"
                        label="Meal preparation"
                        className="text-nowrap"
                        id="care-req-3"
                        checked={mealPrep}
                        onClick={() => {
                          setMealPrep((prevState) => !prevState);
                          setOther(false);
                          setNotSure(false);
                        }}
                      />
                      <Form.Check
                        type="radio"
                        label="Medication administration"
                        id="care-req-4"
                        checked={medicationAdmin}
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
                        label="Feeding"
                        id="care-req-6"
                        checked={feeding}
                        onClick={() => {
                          setFeeding((prevState) => !prevState);
                          setOther(false);
                          setNotSure(false);
                        }}
                      />
                      <Form.Check
                        type="radio"
                        label="Oral Care"
                        id="care-req-7"
                        checked={oralCare}
                        onClick={() => {
                          setOralCare((prevState) => !prevState);
                          setOther(false);
                          setNotSure(false);
                        }}
                      />
                      <Form.Check
                        type="radio"
                        label="Not sure"
                        id="care-req-9"
                        checked={notSure}
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
                          setMoreDetails("");
                          setVisits("");
                        }}
                      />
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
                          setMoreDetails("");
                          setVisits("");
                        }}
                      />
                      <Form.Check
                        type="radio"
                        label="Domestic duties"
                        id="care-req-5"
                        checked={domesticDuties}
                        onClick={() => {
                          setDomesticDuties((prevState) => !prevState);
                          setOther(false);
                          setNotSure(false);
                        }}
                      />
                    </div>
                  </div>
                  {(other || notSure) && (
                    <Form.Group
                      className="mb-3"
                      style={{ marginTop: "1.5em", marginBottom: "1.5em" }}
                    >
                      <Form.Label htmlFor="set-more-details">
                        Please describe the care required
                      </Form.Label>
                      <Form.Control
                        id="set-more-details"
                        type="text"
                        value={moreDetails}
                        placeholder="Tell us how we can help..."
                        onChange={(e) => setMoreDetails(e.target.value)}
                      />
                    </Form.Group>
                  )}
                </Form.Group>
              </div>
            )}
          {(((other || notSure) && moreDetails !== "") ||
            continenceCare ||
            personalCare ||
            mealPrep ||
            medicationAdmin ||
            domesticDuties ||
            oralCare ||
            feeding) &&
            inquirersAndReceiversContactNumber && (
              <div style={{ marginTop: "1.5em", marginBottom: "1.5em" }}>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="set-visits">
                    Lastly, how many visits do you think are needed?
                  </Form.Label>
                  <Form.Select
                    id="set-visits"
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

                    <option value="Not sure">Not sure</option>
                  </Form.Select>
                </Form.Group>
              </div>
            )}
          {(visits || visitsForMyself) && (
            <div style={{ marginTop: "1.5em", marginBottom: "1.5em" }}>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Anything else we should know? (optional)
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={3}
                  onChange={(e) => setAnythingMore(e.target.value)}
                ></textarea>
              </div>
            </div>
          )}

          {((moreDetails !== "" && visits !== "") ||
            visitsGreenList.includes(visits)) && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  color: "white",
                  fontSize: "18px",
                  fontWeight: "500",
                  textShadow: "2px 2px 4px black",
                  whiteSpace: "nowrap",
                  padding: "1.8%",
                  borderRadius: "10px",
                  border: "none",
                  background: "#FF6B3D",
                  boxShadow: "1px 1px 6px black",
                  marginTop: "1.5em",
                  letterSpacing: "1.3px",
                }}
                onClick={() => {
                  forMyself
                    ? handleSubmitForMyself()
                    : handleSubmitForAnother();
                }}
              >
                SUBMIT
              </div>
            </div>
          )}
          {wantJob && (
            <div style={{ marginTop: "1.5em", marginBottom: "1.5em" }}>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="employee-name">
                  What is your full name?
                </Form.Label>
                <Form.Control
                  type="text"
                  id="employee-name"
                  placeholder="Enter full name..."
                  onChange={(e) => setEmployeeName(e.target.value)}
                />
              </Form.Group>
            </div>
          )}
          {employeeName && (
            <div style={{ marginTop: "1.5em", marginBottom: "1.5em" }}>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="employee-dob">Date of birth</Form.Label>
                <Form.Control
                  id="employee-dob"
                  type="date"
                  placeholder="DD/MM/YYYY"
                  onChange={(e) => setEmployeeDOB(e.target.value)}
                />
              </Form.Group>
            </div>
          )}
          {employeeDOB && (
            <div style={{ marginTop: "1.5em", marginBottom: "1.5em" }}>
              <Form.Group className="mb-3">
                <Form.Label>National insurance number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="AB 12 34 C"
                  onChange={(e) => setEmployeeNationalInsurance(e.target.value)}
                />
              </Form.Group>
            </div>
          )}
          {employeeNationalInsurance && (
            <div style={{ marginTop: "1.5em", marginBottom: "1.5em" }}>
              <Form.Group className="mb-3">
                <Form.Label
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "8% 0 8%",
                    fontWeight: "650",
                    pointerEvents: "none",
                  }}
                >
                  Your Contact Details
                </Form.Label>
                <Form.Label htmlFor="employee-email">Email address</Form.Label>
                <Form.Control
                  type="email"
                  id="employee-email"
                  placeholder="Enter email address..."
                  onChange={(e) => setEmployeeEmail(e.target.value)}
                />
              </Form.Group>
            </div>
          )}
          {employeeEmail && (
            <div style={{ marginTop: "1.5em", marginBottom: "1.5em" }}>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="employee-contact">
                  Contact number
                </Form.Label>
                <Form.Control
                  id="employee-contact"
                  type="tel"
                  placeholder="Enter full name..."
                  onChange={(e) => setEmployeeContactNumber(e.target.value)}
                />
              </Form.Group>
            </div>
          )}
          {employeeContactNumber && (
            <div style={{ marginTop: "1.5em", marginBottom: "1.5em" }}>
              <Form.Group className="text-center">
                <Form.Label
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "8% 0 8%",
                    fontWeight: "650",
                    marginTop: "1.5em",
                    marginBottom: "1.5em",
                  }}
                >
                  Your Address
                </Form.Label>
              </Form.Group>
              <Form.Group style={{ marginTop: "1.5em", marginBottom: "1.5em" }}>
                <Form.Label htmlFor="employee-1st-address">
                  1st Line of Address
                </Form.Label>
                <Form.Control
                  id="employee-1st-address"
                  type="text"
                  onChange={(e) =>
                    setEmployeeFirstLineOfAddress(e.target.value)
                  }
                />
              </Form.Group>
              <Form.Group style={{ marginTop: "1.5em", marginBottom: "1.5em" }}>
                <Form.Label htmlFor="employee-2nd-address">
                  2nd Line of Address
                </Form.Label>
                <Form.Control
                  id="employee-2nd-address"
                  type="text"
                  onChange={(e) =>
                    setEmployeeSecondLineOfAddress(e.target.value)
                  }
                />
              </Form.Group>
              <Form.Group style={{ marginTop: "1.5em", marginBottom: "1.5em" }}>
                <Form.Label htmlFor="employee-post-code">Post Code</Form.Label>
                <Form.Control
                  id="employee-post-code"
                  type="text"
                  onChange={(e) => setEmployeePostCode(e.target.value)}
                />
              </Form.Group>
            </div>
          )}
          {employeeFirstLineOfAddress && employeePostCode && (
            <div style={{ marginTop: "1.5em", marginBottom: "1.5em" }}>
              <Form.Group className="mb-3">
                <Form.Label
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "8% 0 8%",
                    fontWeight: "650",
                    pointerEvents: "none",
                  }}
                >
                  Experience and Qualifications
                </Form.Label>
                <div class="mb-3">
                  <label htmlFor="experience" className="form-label">
                    What experience do you have that would strengthen your
                    application?
                  </label>
                  <textarea
                    className="form-control"
                    id="experience"
                    rows="3"
                    placeholder="e.g. I have worked in care for two years..."
                    onChange={(e) => setEmployeeExperience(e.target.value)}
                  ></textarea>
                </div>
              </Form.Group>
            </div>
          )}
          {employeeExperience && (
            <div className="mb-3">
              <label htmlFor="skills" className="form-label">
                What relevant skills/abilities do you have?
              </label>
              <textarea
                className="form-control"
                id="skills"
                rows={3}
                placeholder="e.g. Empathy, patience, communication skills..."
                onChange={(e) => setEmployeeSkills(e.target.value)}
              ></textarea>
            </div>
          )}
          {employeeSkills && (
            <div className="mb-3">
              <label htmlFor="qualifications" className="form-label">
                What relevant qualifications do you have?
              </label>
              <textarea
                className="form-control"
                id="qualifications"
                rows={3}
                placeholder="e.g. Level 2 Health and Social Care, Food Hygeine, First Aid..."
                onChange={(e) => setEmployeeQualifications(e.target.value)}
              ></textarea>
            </div>
          )}
          {employeeQualifications && (
            <div style={{ marginTop: "1.5em", marginBottom: "1.5em" }}>
              <Form.Group>
                <Form.Label>
                  Do you hold a valid UK Drivers License, and have access to a
                  vehicle?
                </Form.Label>
                <div className="row">
                  <div className="col">
                    <Form.Check
                      type="radio"
                      label="Yes"
                      className="yes-or-no"
                      id="can-drive"
                      checked={employeeCanDrive}
                      onChange={() => {
                        setEmployeeCanDrive(true);
                        setEmployeeCannotDrive(false);
                      }}
                    />
                  </div>
                  <div className="col">
                    <Form.Check
                      type="radio"
                      label="No"
                      className="yes-or-no"
                      id="cannot-drive"
                      checked={employeeCannotDrive}
                      onChange={() => {
                        setEmployeeCannotDrive(true);
                        setEmployeeCanDrive(false);
                      }}
                    />
                  </div>
                </div>
              </Form.Group>
            </div>
          )}
          {(employeeCanDrive || employeeCannotDrive) && (
            <div style={{ marginTop: "1.5em", marginBottom: "1.5em" }}>
              <Form.Group>
                <Form.Label>
                  Are you willing/able to work one weekend on, one weekend off?
                </Form.Label>
                <div className="row">
                  <div className="col">
                    <Form.Check
                      type="radio"
                      label="Yes"
                      id="willing"
                      className="yes-or-no"
                      checked={employeeIsWilling}
                      onChange={() => {
                        setEmployeeIsWilling(true);
                        setEmployeeIsNotWilling(false);
                      }}
                    />
                  </div>
                  <div className="col">
                    <Form.Check
                      type="radio"
                      className="yes-or-no"
                      label="No"
                      id="not-willing"
                      checked={employeeIsNotWilling}
                      onChange={() => {
                        setEmployeeIsNotWilling(true);
                        setEmployeeIsWilling(false);
                      }}
                    />
                  </div>
                </div>
              </Form.Group>
            </div>
          )}
          {(employeeIsWilling || employeeIsNotWilling) && (
            <div style={{ marginTop: "1.5em", marginBottom: "1.5em" }}>
              <Form.Group className="mb-3">
                <Form.Label
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "8% 0 8%",
                    fontWeight: "650",
                    pointerEvents: "none",
                  }}
                >
                  Reference
                </Form.Label>
                <Form.Label
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "1.5em",
                    marginBottom: "1.5em",
                    pointerEvents: "none",
                  }}
                >
                  It is a mandatory requirement from the CQC that we obtain
                  references for all staff hires.
                  <br></br>
                  <br></br>
                  Whom may we contact that can speak to your character?
                  <br></br>
                  <br></br>
                  e.g. a former employer, teacher or college tutor...
                </Form.Label>
                <Form.Label htmlFor="ref-name">
                  Full name of your reference
                </Form.Label>
                <Form.Control
                  id="ref-name"
                  type="text"
                  placeholder="Enter their full name..."
                  onChange={(e) => setEmployeeRefName(e.target.value)}
                />
              </Form.Group>
            </div>
          )}
          {employeeRefName && (
            <div style={{ marginTop: "1.5em", marginBottom: "1.5em" }}>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="ref-email">
                  Email address of your reference
                </Form.Label>
                <Form.Control
                  type="email"
                  id="ref-email"
                  placeholder="Enter their email address..."
                  onChange={(e) => setEmployeeRefEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="ref-contact">
                  Contact number (optional)
                </Form.Label>
                <Form.Control
                  id="ref-contact"
                  type="tel"
                  placeholder="Enter full name..."
                  onChange={(e) => setEmployeeRefContactNumber(e.target.value)}
                />
              </Form.Group>
            </div>
          )}
          {/* {employeeRefEmail && (
            <Form style={{ border: "none", padding: 0 }} id="emailForm">
              <Form.Group>
                <Form.Label htmlFor="ref-contact">
                  Lastly, upload CV (.pdf, .doc, .docx)
                </Form.Label>
                <div class="input-group mb-3">
                  <input
                    style={{
                      marginBottom: "1.5em",
                    }}
                    type="file"
                    className="form-control"
                    id="inputGroupFile02"
                    name="attachment"
                    accept=".pdf, .doc, .docx"
                    onChange={(e) => {
                      setCV(true);
                      handleFileChange(e);
                    }}
                  ></input>
                </div>
              </Form.Group>
            </Form>
          )} */}
          {employeeRefEmail && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  color: "white",
                  fontSize: "18px",
                  fontWeight: "bold",
                  textShadow: "2px 2px 4px black",
                  whiteSpace: "nowrap",
                  padding: "1.8%",
                  borderRadius: "10px",
                  border: "none",
                  background: "#FF6B3D",
                  boxShadow: "1px 1px 6px black",
                  letterSpacing: "1.3px",
                  marginBottom: "1.5em",
                  marginTop: "1.5em",
                }}
                onClick={() => {
                  setJobApplication(true);
                  handleEmployeeSubmit();
                  // handleSubmit()
                }}
              >
                Submit
              </div>
            </div>
          )}
        </Form>
      )}
      {/* <FormData getCareInquiry={getCareInquiry} getJobInquiry={getJobInquiry} /> */}
      {jobApplication && !completedJobApplication && (
        <>
          {" "}
          <Box sx={{ width: "300px" }}>
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((step, index) => (
                <Step key={step.label}>
                  <StepLabel>{step.label}</StepLabel>
                  <StepContent>
                    <Typography style={{ color: "grey" }}>
                      {step.description}
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      <div>
                        <Button
                          variant="contained"
                          style={{ backgroundColor: "#FF6B3D" }}
                          onClick={() => {
                            if (index === steps.length - 1) {
                              setTimeout(() => {
                                setCompletedJobApplication(true);
                              }, 1000);
                            }
                            if (index === steps.length - 2) {
                              window.open("mailto:recipient@example.com");
                              handleNext();
                            } else {
                              handleNext();
                            }
                          }}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          {index === 0
                            ? "continue"
                            : index === steps.length - 1
                            ? "confirm"
                            : "SEND CV"}
                        </Button>
                        {index !== 0 && (
                          <Button
                            disabled={index === 0}
                            onClick={() => {
                              handleBack();
                            }}
                            sx={{ mt: 1, mr: 1, color: "grey" }}
                          >
                            Back
                          </Button>
                        )}
                        {/* <Button
                          disabled={index === 0}
                          onClick={() => {
                            handleBack()
                          }}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          Back
                        </Button> */}
                      </div>
                    </Box>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
          </Box>
        </>
      )}
      {completedJobApplication && (
        <div className="text text-center">
          <h4>
            Thank you for applying, you can expect to hear from us shortly...
          </h4>
        </div>
      )}
    </div>
  );
}
