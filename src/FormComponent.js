"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var material_1 = require("@mui/material");
var react_1 = require("react");
var Form_1 = require("react-bootstrap/Form");
require("./styles/FormComponent.css");
var react_2 = require("react");
function FormComponent() {
    var _a = (0, react_2.useState)(false), isChecked = _a[0], setIsChecked = _a[1];
    var _b = (0, react_2.useState)(false), wantCare = _b[0], setWantCare = _b[1];
    var _c = (0, react_2.useState)(false), wantJob = _c[0], setWantJob = _c[1];
    var _d = (0, react_2.useState)(false), forMyself = _d[0], setForMyself = _d[1];
    var _e = (0, react_2.useState)(false), forAnother = _e[0], setForAnother = _e[1];
    var _f = (0, react_2.useState)(""), relationship = _f[0], setRelationship = _f[1];
    var _g = (0, react_2.useState)(""), customRelationship = _g[0], setCustomRelationship = _g[1];
    var _h = (0, react_2.useState)(""), inquirersName = _h[0], setInquirersName = _h[1];
    var _j = (0, react_2.useState)(""), personReceivingCare = _j[0], setPersonReceivingCare = _j[1];
    var _k = (0, react_2.useState)(""), inquirersEmail = _k[0], setInquirersEmail = _k[1];
    var _l = (0, react_2.useState)(""), contactNumber = _l[0], setContactNumber = _l[1];
    var _m = (0, react_2.useState)(""), firstLineOfAddress = _m[0], setFirstLineOfAddress = _m[1];
    var _o = (0, react_2.useState)(""), secondLineOfAddress = _o[0], setSecondLineOfAddress = _o[1];
    var _p = (0, react_2.useState)(""), postCode = _p[0], setPostCode = _p[1];
    var _q = (0, react_2.useState)(false), continenceCare = _q[0], setContinenceCare = _q[1];
    var _r = (0, react_2.useState)(false), personalCare = _r[0], setPersonalCare = _r[1];
    var _s = (0, react_2.useState)(false), mealPrep = _s[0], setMealPrep = _s[1];
    var _t = (0, react_2.useState)(false), medicationAdmin = _t[0], setMedicationAdmin = _t[1];
    var _u = (0, react_2.useState)(false), domesticDuties = _u[0], setDomesticDuties = _u[1];
    var _v = (0, react_2.useState)(false), feeding = _v[0], setFeeding = _v[1];
    var _w = (0, react_2.useState)(false), oralCare = _w[0], setOralCare = _w[1];
    var _x = (0, react_2.useState)(false), notSure = _x[0], setNotSure = _x[1];
    var _y = (0, react_2.useState)(false), other = _y[0], setOther = _y[1];
    var _z = (0, react_2.useState)(""), moreDetails = _z[0], setMoreDetails = _z[1];
    var _0 = (0, react_2.useState)(""), visits = _0[0], setVisits = _0[1];
    var _1 = (0, react_2.useState)(""), visitsForMyself = _1[0], setVisitsForMyself = _1[1];
    var _2 = (0, react_2.useState)(""), moreDetailsForMyself = _2[0], setMoreDetailsForMyself = _2[1];
    var _3 = (0, react_2.useState)(""), anythingMore = _3[0], setAnythingMore = _3[1];
    var _4 = (0, react_2.useState)(""), employeeName = _4[0], setEmployeeName = _4[1];
    var _5 = (0, react_2.useState)(""), employeeEmail = _5[0], setEmployeeEmail = _5[1];
    var _6 = (0, react_2.useState)(""), employeeContactNumber = _6[0], setEmployeeContactNumber = _6[1];
    var _7 = (0, react_2.useState)(""), employeeDOB = _7[0], setEmployeeDOB = _7[1];
    var _8 = (0, react_2.useState)(""), employeeNationalInsurance = _8[0], setEmployeeNationalInsurance = _8[1];
    var _9 = (0, react_2.useState)(""), employeeFirstLineOfAddress = _9[0], setEmployeeFirstLineOfAddress = _9[1];
    var _10 = (0, react_2.useState)(""), employeeSecondLineOfAddress = _10[0], setEmployeeSecondLineOfAddress = _10[1];
    var _11 = (0, react_2.useState)(""), employeePostCode = _11[0], setEmployeePostCode = _11[1];
    var _12 = (0, react_2.useState)(""), employeeExperience = _12[0], setEmployeeExperience = _12[1];
    var _13 = (0, react_2.useState)(""), employeeSkills = _13[0], setEmployeeSkills = _13[1];
    var _14 = (0, react_2.useState)(""), employeeQualifications = _14[0], setEmployeeQualifications = _14[1];
    var _15 = (0, react_2.useState)(false), employeeCanDrive = _15[0], setEmployeeCanDrive = _15[1];
    var _16 = (0, react_2.useState)(false), employeeCannotDrive = _16[0], setEmployeeCannotDrive = _16[1];
    var _17 = (0, react_2.useState)(false), employeeIsWilling = _17[0], setEmployeeIsWilling = _17[1];
    var _18 = (0, react_2.useState)(false), employeeIsNotWilling = _18[0], setEmployeeIsNotWilling = _18[1];
    var _19 = (0, react_2.useState)(""), employeeRefEmail = _19[0], setEmployeeRefEmail = _19[1];
    var _20 = (0, react_2.useState)(""), employeeRefName = _20[0], setEmployeeRefName = _20[1];
    var _21 = (0, react_2.useState)(""), employeeRefContactNumber = _21[0], setEmployeeRefContactNumber = _21[1];
    var _22 = (0, react_2.useState)(false), cv = _22[0], setCV = _22[1];
    var _23 = (0, react_2.useState)(""), inquirersAndReceiversName = _23[0], setInquirersAndReceiversName = _23[1];
    var _24 = (0, react_2.useState)(""), inquirersAndReceiversEmail = _24[0], setInquirersAndReceiversEmail = _24[1];
    var _25 = (0, react_2.useState)(""), inquirersAndReceiversContactNumber = _25[0], setInquirersAndReceiversContactNumber = _25[1];
    var _26 = (0, react_2.useState)(""), inquirersAndReceiversFirstLineOfAddress = _26[0], setInquirersAndReceiversFirstLineOfAddress = _26[1];
    var _27 = (0, react_2.useState)(""), inquirersAndReceiversSecondLineOfAddress = _27[0], setInquirersAndReceiversSecondLineOfAddress = _27[1];
    var _28 = (0, react_2.useState)(""), inquirersAndReceiversPostCode = _28[0], setInquirersAndReceiversPostCode = _28[1];
    var visitsGreenList = [
        "Weekly",
        "Every other day",
        "Daily",
        "Twice a day",
        "Three times a day",
        "Four times a day",
        "Five, or more times a day",
        "Not sure",
    ];
    var relationshipsGreenList = [
        "Son/Daughter",
        "Spouse",
        "Sibling",
        "Grandparent",
        "Grandchild",
        "Parent",
        "Friend",
        "Other",
    ];
    var careInquiry = {
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
                inquirersAndReceiversFirstLineOfAddress: inquirersAndReceiversFirstLineOfAddress,
                inquirersAndReceiversSecondLineOfAddress: inquirersAndReceiversSecondLineOfAddress,
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
    var jobInquiry = {
        employeeName: employeeName,
        employeeDOB: employeeDOB,
        employeeEmail: employeeEmail,
        employeeContactNumber: employeeContactNumber,
        employeeNationalInsurance: employeeNationalInsurance,
        address: {
            employeeFirstLineOfAddress: employeeFirstLineOfAddress,
            employeeSecondLineOfAddress: employeeSecondLineOfAddress,
            employeePostCode: employeePostCode,
        },
        reference: {
            employeeRefName: employeeRefName,
            employeeRefEmail: employeeRefEmail,
            employeeRefContactNumber: employeeRefContactNumber,
        },
        skillsAndExperience: {
            employeeExperience: employeeExperience,
            employeeSkills: employeeSkills,
            employeeQualifications: employeeQualifications,
        },
        employeeIsWilling: employeeIsWilling,
        employeeIsNotWilling: employeeIsNotWilling,
        employeeCanDrive: employeeCanDrive,
        employeeCannotDrive: employeeCannotDrive,
    };
    var careRequirements = [
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
    return (<div style={{
            background: "white",
        }}>
      <Form_1.default style={{
            width: "80vw",
        }}>
        <div style={{
            display: "flex",
            justifyContent: "center",
        }}>
          <h2>Inquiry Form</h2>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Form_1.default.Label className="text-center align-middle" style={{
            margin: "3% 0 9%",
            fontWeight: "580",
            pointerEvents: "none",
        }}>
            You can expect to hear from us regarding your inquiry within 48
            hours...
          </Form_1.default.Label>
        </div>
        <material_1.FormGroup style={{
            backgroundColor: "white",
            display: "flex",
            justifyContent: "space-between",
        }}>
          <div className="row">
            <div className="col">
              <Form_1.default.Check type="radio" label="I want care" className="longer-questions" id="care-radio" checked={wantCare} onChange={function () {
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
        }}/>
            </div>
            <div className="col">
              <Form_1.default.Check type="radio" label="I want a career" id="job-radio" className="longer-questions" checked={wantJob} onChange={function () {
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
        }}/>
            </div>
          </div>
        </material_1.FormGroup>
        {wantCare && (<div style={{ marginTop: "20px", marginBottom: "20px" }}>
            <Form_1.default.Group>
              <Form_1.default.Label>Is this care for yourself or for another?</Form_1.default.Label>
              <div className="row">
                <div className="col">
                  <Form_1.default.Check type="radio" label="For myself" id="for-who-myself" className="longer-questions" checked={forMyself} onChange={function () {
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
            }}/>
                </div>
                <div className="col">
                  <Form_1.default.Check type="radio" label="For another" id="for-who-another" checked={forAnother} className="longer-questions" onChange={function () {
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
            }}/>
                </div>
              </div>
            </Form_1.default.Group>
          </div>)}
        {forAnother && (<div style={{ marginTop: "20px", marginBottom: "20px" }}>
            <Form_1.default.Group className="mb-3">
              <Form_1.default.Label>What is your relationship to this person?</Form_1.default.Label>
              <Form_1.default.Select value={relationship} onChange={function (e) { return setRelationship(e.target.value); }}>
                <option value="">Select relationship</option>
                <option value="Son/Daughter">Son/Daughter</option>
                <option value="Spouse">Spouse</option>
                <option value="Grandchild">Grandchild</option>
                <option value="Sibling">Sibling</option>
                <option value="Grandparent">Grandparent</option>
                <option value="Parent">Parent</option>
                <option value="Friend">Friend</option>
                <option value="Other">Other</option>
              </Form_1.default.Select>
            </Form_1.default.Group>
          </div>)}
        {relationship === "Other" && (<div style={{ marginTop: "20px", marginBottom: "20px" }}>
            <Form_1.default.Group className="mb-3">
              <Form_1.default.Label htmlFor="describe-relationship">
                Please describe your relationship with this person
              </Form_1.default.Label>
              <Form_1.default.Control type="text" id="describe-relationship" placeholder="Enter contact number..." onChange={function (e) { return setCustomRelationship(e.target.value); }}/>
            </Form_1.default.Group>
          </div>)}
        {(relationshipsGreenList.includes(relationship) ||
            customRelationship) && (<div style={{ marginTop: "20px", marginBottom: "20px" }}>
            <Form_1.default.Group className="mb-3">
              <Form_1.default.Label>What is your full name?</Form_1.default.Label>
              <Form_1.default.Control type="text" placeholder="Enter full name..." onChange={function (e) { return setInquirersName(e.target.value); }}/>
            </Form_1.default.Group>
          </div>)}

        {inquirersName !== "" && (<div style={{ marginTop: "20px", marginBottom: "20px" }}>
            <Form_1.default.Group className="mb-3">
              <Form_1.default.Label htmlFor="name-receiving-care">
                What is the full name of the person to receive care?
              </Form_1.default.Label>
              <Form_1.default.Control id="name-receiving-care" type="text" placeholder="Enter full name..." onChange={function (e) { return setPersonReceivingCare(e.target.value); }}/>
            </Form_1.default.Group>
          </div>)}
        {personReceivingCare !== "" && (<div style={{ marginTop: "20px", marginBottom: "20px" }}>
            <Form_1.default.Group className="mb-3">
              <Form_1.default.Label style={{
                display: "flex",
                justifyContent: "center",
                margin: "8% 0 8%",
                fontWeight: "650",
                pointerEvents: "none",
            }}>
                Your contact details
              </Form_1.default.Label>
              <Form_1.default.Label htmlFor="poc-email">Email address</Form_1.default.Label>
              <Form_1.default.Control type="email" id="poc-email" placeholder="Enter email address..." onChange={function (e) { return setInquirersEmail(e.target.value); }}/>
            </Form_1.default.Group>
          </div>)}
        {inquirersEmail !== "" && (<div style={{ marginTop: "20px", marginBottom: "20px" }}>
            <Form_1.default.Group className="mb-3">
              <Form_1.default.Label htmlFor="poc-number">Contact number</Form_1.default.Label>
              <Form_1.default.Control type="tel" id="poc-number" placeholder="Enter contact number..." onChange={function (e) { return setContactNumber(e.target.value); }}/>
            </Form_1.default.Group>
          </div>)}
        {contactNumber !== "" && (<div style={{ marginTop: "20px", marginBottom: "20px" }}>
            <Form_1.default.Group className="text-center">
              <Form_1.default.Label style={{
                display: "flex",
                justifyContent: "center",
                margin: "8% 0 8%",
                fontWeight: "650",
            }}>
                Address of person to receive care
              </Form_1.default.Label>
            </Form_1.default.Group>
            <Form_1.default.Group style={{ marginTop: "20px", marginBottom: "20px" }}>
              <Form_1.default.Label htmlFor="receivers-1st-line-address">
                1st Line of Address
              </Form_1.default.Label>
              <Form_1.default.Control id="receivers-1st-line-address" type="text" onChange={function (e) { return setFirstLineOfAddress(e.target.value); }}/>
            </Form_1.default.Group>
            <Form_1.default.Group style={{ marginTop: "20px", marginBottom: "20px" }}>
              <Form_1.default.Label htmlFor="receivers-2nd-line-address">
                2nd Line of Address
              </Form_1.default.Label>
              <Form_1.default.Control id="receivers-2nd-line-address" type="text" onChange={function (e) { return setSecondLineOfAddress(e.target.value); }}/>
            </Form_1.default.Group>
            <Form_1.default.Group style={{ marginTop: "20px", marginBottom: "20px" }}>
              <Form_1.default.Label htmlFor="receivers-post-code">Post Code</Form_1.default.Label>
              <Form_1.default.Control id="receivers-post-code" type="text" onChange={function (e) { return setPostCode(e.target.value); }}/>
            </Form_1.default.Group>
          </div>)}
        {firstLineOfAddress !== "" && postCode !== "" && (<div style={{ marginTop: "20px", marginBottom: "20px" }}>
            <Form_1.default.Group className="mb-3">
              <Form_1.default.Label style={{
                display: "flex",
                justifyContent: "center",
                margin: "8% 0 8%",
                fontWeight: "650",
                pointerEvents: "none",
            }}>
                What care is required?
              </Form_1.default.Label>
              <Form_1.default.Label style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
                marginBottom: "20px",
                pointerEvents: "none",
            }}>
                Select all that apply
              </Form_1.default.Label>
              <div className="row">
                <div className="col">
                  <Form_1.default.Check type="radio" label="Continence Care" id="care-req-1" checked={continenceCare} className="text-nowrap" onClick={function () {
                setContinenceCare(function (prevState) { return !prevState; });
                setOther(false);
                setNotSure(false);
            }}/>
                  <Form_1.default.Check type="radio" label="Personal Care" id="care-req-2" className="text-nowrap" checked={personalCare} onClick={function () {
                setPersonalCare(function (prevState) { return !prevState; });
                setOther(false);
                setNotSure(false);
            }}/>
                  <Form_1.default.Check type="radio" label="Meal preparation" className="text-nowrap" id="care-req-3" checked={mealPrep} onClick={function () {
                setMealPrep(function (prevState) { return !prevState; });
                setOther(false);
                setNotSure(false);
            }}/>
                  <Form_1.default.Check type="radio" label="Medication administration" id="care-req-4" checked={medicationAdmin} onClick={function () {
                setMedicationAdmin(function (prevState) { return !prevState; });
                setOther(false);
                setNotSure(false);
            }}/>
                </div>
                <div className="col">
                  <Form_1.default.Check type="radio" label="Feeding" id="care-req-6" checked={feeding} onClick={function () {
                setFeeding(function (prevState) { return !prevState; });
                setOther(false);
                setNotSure(false);
            }}/>
                  <Form_1.default.Check type="radio" label="Oral Care" id="care-req-7" checked={oralCare} onClick={function () {
                setOralCare(function (prevState) { return !prevState; });
                setOther(false);
                setNotSure(false);
            }}/>
                  <Form_1.default.Check type="radio" label="Not sure" id="care-req-9" checked={notSure} onClick={function () {
                setNotSure(function (prevState) { return !prevState; });
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
            }}/>
                  <Form_1.default.Check type="radio" label="Other" id="care-req-8" checked={other} onClick={function () {
                setOther(function (prevState) { return !prevState; });
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
            }}/>
                  <Form_1.default.Check type="radio" label="Domestic duties" id="care-req-5" checked={domesticDuties} onClick={function () {
                setDomesticDuties(function (prevState) { return !prevState; });
                setOther(false);
                setNotSure(false);
            }}/>
                </div>
              </div>
              {(other || notSure) && (<Form_1.default.Group className="mb-3" style={{ marginTop: "20px", marginBottom: "20px" }}>
                  <Form_1.default.Label htmlFor="set-more-details">
                    Please describe the care required
                  </Form_1.default.Label>
                  <Form_1.default.Control id="set-more-details" type="text" value={moreDetails} placeholder="Tell us how we can help..." onChange={function (e) { return setMoreDetails(e.target.value); }}/>
                </Form_1.default.Group>)}
            </Form_1.default.Group>
          </div>)}
        {forAnother &&
            (((other || notSure) && moreDetails !== "") ||
                continenceCare ||
                personalCare ||
                mealPrep ||
                medicationAdmin ||
                domesticDuties ||
                oralCare ||
                feeding) && (<div style={{ marginTop: "20px", marginBottom: "20px" }}>
              <Form_1.default.Group className="mb-3" controlId="formBasicSelect">
                <Form_1.default.Label htmlFor="how-many-visits">
                  Lastly, many visits do you think are needed?
                </Form_1.default.Label>
                <Form_1.default.Select id="how-many-visits" value={visits} onChange={function (e) { return setVisits(e.target.value); }}>
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
                </Form_1.default.Select>
              </Form_1.default.Group>
            </div>)}
        {(moreDetails !== "" && visits !== "") ||
            visitsGreenList.includes(visits) ||
            (inquirersAndReceiversContactNumber &&
                inquirersAndReceiversEmail &&
                inquirersAndReceiversName &&
                inquirersAndReceiversFirstLineOfAddress &&
                inquirersAndReceiversPostCode &&
                (continenceCare ||
                    personalCare ||
                    mealPrep ||
                    medicationAdmin ||
                    domesticDuties ||
                    oralCare ||
                    other ||
                    notSure) &&
                visitsForMyself &&
                !forMyself && (<div style={{
                    display: "flex",
                    justifyContent: "center",
                }}>
                <button style={{
                    width: "100%",
                    color: "white",
                    fontSize: "18px",
                    fontWeight: "bold",
                    textShadow: "2px 2px 4px black",
                    whiteSpace: "nowrap",
                    padding: "1.8%",
                    letterSpacing: "1.3px",
                    borderRadius: "10px",
                    border: "none",
                    background: "#FF6B3D",
                    boxShadow: "1px 1px 6px black",
                    marginTop: "20px",
                }}>
                  Submit
                </button>
              </div>))}
        {forMyself && (<Form_1.default.Group className="mb-3" style={{ marginTop: "20px", marginBottom: "20px" }}>
            <Form_1.default.Label>What is your full name?</Form_1.default.Label>
            <Form_1.default.Control type="text" placeholder="Enter full name..." onChange={function (e) { return setInquirersAndReceiversName(e.target.value); }}/>
          </Form_1.default.Group>)}
        {inquirersAndReceiversName !== "" && (<>
            <Form_1.default.Group className="mb-3" style={{ marginTop: "20px", marginBottom: "20px" }}>
              <Form_1.default.Label style={{
                display: "flex",
                justifyContent: "center",
                margin: "8% 0 8%",
                fontWeight: "650",
                pointerEvents: "none",
                marginTop: "20px",
                marginBottom: "20px",
            }}>
                Your contact details
              </Form_1.default.Label>
              <Form_1.default.Label htmlFor="inquirer-and-receivers-email">
                Email address
              </Form_1.default.Label>
              <Form_1.default.Control type="email" placeholder="Enter email address..." id="inquirer-and-receivers-email" onChange={function (e) { return setInquirersAndReceiversEmail(e.target.value); }}/>
            </Form_1.default.Group>
          </>)}
        {inquirersAndReceiversEmail !== "" && (<div style={{ marginTop: "20px", marginBottom: "20px" }}>
            <Form_1.default.Group className="mb-3">
              <Form_1.default.Label htmlFor="inquirer-and-receivers-contact-number">
                Contact number
              </Form_1.default.Label>
              <Form_1.default.Control type="tel" placeholder="Enter contact number..." id="inquirer-and-receivers-contact-number" onChange={function (e) {
                return setInquirersAndReceiversContactNumber(e.target.value);
            }}/>
            </Form_1.default.Group>
          </div>)}
        {inquirersAndReceiversContactNumber && (<div style={{ marginTop: "20px", marginBottom: "20px" }}>
            <Form_1.default.Group className="text-center">
              <Form_1.default.Label style={{
                display: "flex",
                justifyContent: "center",
                margin: "8% 0 8%",
                fontWeight: "650",
                marginTop: "20px",
                marginBottom: "20px",
            }}>
                Your Address
              </Form_1.default.Label>
            </Form_1.default.Group>
            <Form_1.default.Group style={{ marginTop: "20px", marginBottom: "20px" }}>
              <Form_1.default.Label htmlFor="inquirers-and-receivers-first-line-of-address">
                1st Line of Address
              </Form_1.default.Label>
              <Form_1.default.Control type="text" id="inquirers-and-receivers-first-line-of-address" onChange={function (e) {
                return setInquirersAndReceiversFirstLineOfAddress(e.target.value);
            }}/>
            </Form_1.default.Group>
            <Form_1.default.Group style={{ marginTop: "20px", marginBottom: "20px" }}>
              <Form_1.default.Label htmlFor="inquirers-and-receivers-second-line-of-address">
                2nd Line of Address
              </Form_1.default.Label>

              <Form_1.default.Control type="text" id="inquirers-and-receivers-second-line-of-address" onChange={function (e) {
                return setInquirersAndReceiversSecondLineOfAddress(e.target.value);
            }}/>
            </Form_1.default.Group>
            <Form_1.default.Group style={{ marginTop: "20px", marginBottom: "20px" }}>
              <Form_1.default.Label htmlFor="inquirers-and-receivers-post-code">
                Post Code
              </Form_1.default.Label>

              <Form_1.default.Control type="text" id="inquirers-and-receivers-post-code" onChange={function (e) {
                return setInquirersAndReceiversPostCode(e.target.value);
            }}/>
            </Form_1.default.Group>
          </div>)}
        {inquirersAndReceiversFirstLineOfAddress &&
            inquirersAndReceiversPostCode && (<div style={{ marginTop: "20px", marginBottom: "20px" }}>
              <Form_1.default.Group className="mb-3">
                <Form_1.default.Label style={{
                display: "flex",
                justifyContent: "center",
                margin: "8% 0 8%",
                fontWeight: "650",
                pointerEvents: "none",
            }}>
                  What care is required?
                </Form_1.default.Label>
                <Form_1.default.Label style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
                marginBottom: "20px",
                pointerEvents: "none",
            }}>
                  Select all that apply
                </Form_1.default.Label>
                <div className="row">
                  <div className="col">
                    <Form_1.default.Check type="radio" label="Continence Care" id="care-req-1" checked={continenceCare} className="text-nowrap" onClick={function () {
                setContinenceCare(function (prevState) { return !prevState; });
                setOther(false);
                setNotSure(false);
            }}/>
                    <Form_1.default.Check type="radio" label="Personal Care" id="care-req-2" className="text-nowrap" checked={personalCare} onClick={function () {
                setPersonalCare(function (prevState) { return !prevState; });
                setOther(false);
                setNotSure(false);
            }}/>
                    <Form_1.default.Check type="radio" label="Meal preparation" className="text-nowrap" id="care-req-3" checked={mealPrep} onClick={function () {
                setMealPrep(function (prevState) { return !prevState; });
                setOther(false);
                setNotSure(false);
            }}/>
                    <Form_1.default.Check type="radio" label="Medication administration" id="care-req-4" checked={medicationAdmin} onClick={function () {
                setMedicationAdmin(function (prevState) { return !prevState; });
                setOther(false);
                setNotSure(false);
            }}/>
                  </div>
                  <div className="col">
                    <Form_1.default.Check type="radio" label="Feeding" id="care-req-6" checked={feeding} onClick={function () {
                setFeeding(function (prevState) { return !prevState; });
                setOther(false);
                setNotSure(false);
            }}/>
                    <Form_1.default.Check type="radio" label="Oral Care" id="care-req-7" checked={oralCare} onClick={function () {
                setOralCare(function (prevState) { return !prevState; });
                setOther(false);
                setNotSure(false);
            }}/>
                    <Form_1.default.Check type="radio" label="Not sure" id="care-req-9" checked={notSure} onClick={function () {
                setNotSure(function (prevState) { return !prevState; });
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
            }}/>
                    <Form_1.default.Check type="radio" label="Other" id="care-req-8" checked={other} onClick={function () {
                setOther(function (prevState) { return !prevState; });
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
            }}/>
                    <Form_1.default.Check type="radio" label="Domestic duties" id="care-req-5" checked={domesticDuties} onClick={function () {
                setDomesticDuties(function (prevState) { return !prevState; });
                setOther(false);
                setNotSure(false);
            }}/>
                  </div>
                </div>
                {(other || notSure) && (<Form_1.default.Group className="mb-3" style={{ marginTop: "20px", marginBottom: "20px" }}>
                    <Form_1.default.Label htmlFor="set-more-details">
                      Please describe the care required
                    </Form_1.default.Label>
                    <Form_1.default.Control id="set-more-details" type="text" value={moreDetails} placeholder="Tell us how we can help..." onChange={function (e) { return setMoreDetails(e.target.value); }}/>
                  </Form_1.default.Group>)}
              </Form_1.default.Group>
            </div>)}
        {(((other || notSure) && moreDetails !== "") ||
            continenceCare ||
            personalCare ||
            mealPrep ||
            medicationAdmin ||
            domesticDuties ||
            oralCare ||
            feeding) &&
            inquirersAndReceiversContactNumber && (<div style={{ marginTop: "20px", marginBottom: "20px" }}>
              <Form_1.default.Group className="mb-3" controlId="formBasicSelect">
                <Form_1.default.Label htmlFor="set-visits">
                  Lastly, how many visits do you think are needed?
                </Form_1.default.Label>
                <Form_1.default.Select id="set-visits" value={visits} onChange={function (e) { return setVisits(e.target.value); }}>
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
                </Form_1.default.Select>
              </Form_1.default.Group>
            </div>)}
        {(visits || visitsForMyself) && (<div style={{ marginTop: "20px", marginBottom: "20px" }}>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">
                Anything else we should know? (optional)
              </label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} onChange={function (e) { return setAnythingMore(e.target.value); }}></textarea>
            </div>
          </div>)}

        {((moreDetails !== "" && visits !== "") ||
            visitsGreenList.includes(visits)) && (<div style={{
                display: "flex",
                justifyContent: "center",
            }}>
            <button style={{
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
                marginTop: "20px",
                letterSpacing: "1.3px",
            }}>
              Submit
            </button>
          </div>)}
        {wantJob && (<div style={{ marginTop: "20px", marginBottom: "20px" }}>
            <Form_1.default.Group className="mb-3">
              <Form_1.default.Label htmlFor="employee-name">
                What is your full name?
              </Form_1.default.Label>
              <Form_1.default.Control type="text" id="employee-name" placeholder="Enter full name..." onChange={function (e) { return setEmployeeName(e.target.value); }}/>
            </Form_1.default.Group>
          </div>)}
        {employeeName && (<div style={{ marginTop: "20px", marginBottom: "20px" }}>
            <Form_1.default.Group className="mb-3">
              <Form_1.default.Label htmlFor="employee-dob">Date of birth</Form_1.default.Label>
              <Form_1.default.Control id="employee-dob" type="date" placeholder="DD/MM/YYYY" onChange={function (e) { return setEmployeeDOB(e.target.value); }}/>
            </Form_1.default.Group>
          </div>)}
        {employeeDOB && (<div style={{ marginTop: "20px", marginBottom: "20px" }}>
            <Form_1.default.Group className="mb-3">
              <Form_1.default.Label>National insurance number</Form_1.default.Label>
              <Form_1.default.Control type="text" placeholder="AB 12 34 C" onChange={function (e) { return setEmployeeNationalInsurance(e.target.value); }}/>
            </Form_1.default.Group>
          </div>)}
        {employeeNationalInsurance && (<div style={{ marginTop: "20px", marginBottom: "20px" }}>
            <Form_1.default.Group className="mb-3">
              <Form_1.default.Label style={{
                display: "flex",
                justifyContent: "center",
                margin: "8% 0 8%",
                fontWeight: "650",
                pointerEvents: "none",
            }}>
                Your Contact Details
              </Form_1.default.Label>
              <Form_1.default.Label htmlFor="employee-email">Email address</Form_1.default.Label>
              <Form_1.default.Control type="email" id="employee-email" placeholder="Enter email address..." onChange={function (e) { return setEmployeeEmail(e.target.value); }}/>
            </Form_1.default.Group>
          </div>)}
        {employeeEmail && (<div style={{ marginTop: "20px", marginBottom: "20px" }}>
            <Form_1.default.Group className="mb-3">
              <Form_1.default.Label htmlFor="employee-contact">Contact Number</Form_1.default.Label>
              <Form_1.default.Control id="employee-contact" type="tel" placeholder="Enter full name..." onChange={function (e) { return setEmployeeContactNumber(e.target.value); }}/>
            </Form_1.default.Group>
          </div>)}
        {employeeContactNumber && (<div style={{ marginTop: "20px", marginBottom: "20px" }}>
            <Form_1.default.Group className="text-center">
              <Form_1.default.Label style={{
                display: "flex",
                justifyContent: "center",
                margin: "8% 0 8%",
                fontWeight: "650",
                marginTop: "20px",
                marginBottom: "20px",
            }}>
                Your Address
              </Form_1.default.Label>
            </Form_1.default.Group>
            <Form_1.default.Group style={{ marginTop: "20px", marginBottom: "20px" }}>
              <Form_1.default.Label htmlFor="employee-1st-address">
                1st Line of Address
              </Form_1.default.Label>
              <Form_1.default.Control id="employee-1st-address" type="text" onChange={function (e) { return setEmployeeFirstLineOfAddress(e.target.value); }}/>
            </Form_1.default.Group>
            <Form_1.default.Group style={{ marginTop: "20px", marginBottom: "20px" }}>
              <Form_1.default.Label htmlFor="employee-2nd-address">
                2nd Line of Address
              </Form_1.default.Label>
              <Form_1.default.Control id="employee-2nd-address" type="text" onChange={function (e) { return setEmployeeSecondLineOfAddress(e.target.value); }}/>
            </Form_1.default.Group>
            <Form_1.default.Group style={{ marginTop: "20px", marginBottom: "20px" }}>
              <Form_1.default.Label htmlFor="employee-post-code">Post Code</Form_1.default.Label>
              <Form_1.default.Control id="employee-post-code" type="text" onChange={function (e) { return setEmployeePostCode(e.target.value); }}/>
            </Form_1.default.Group>
          </div>)}
        {employeeFirstLineOfAddress && employeePostCode && (<div style={{ marginTop: "20px", marginBottom: "20px" }}>
            <Form_1.default.Group className="mb-3">
              <Form_1.default.Label style={{
                display: "flex",
                justifyContent: "center",
                margin: "8% 0 8%",
                fontWeight: "650",
                pointerEvents: "none",
            }}>
                Experience and Qualifications
              </Form_1.default.Label>
              <div class="mb-3">
                <label htmlFor="experience" className="form-label">
                  What experience do you have that would strengthen your
                  application?
                </label>
                <textarea className="form-control" id="experience" rows="3" placeholder="e.g. I have worked in care for two years..." onChange={function (e) { return setEmployeeExperience(e.target.value); }}></textarea>
              </div>
            </Form_1.default.Group>
          </div>)}
        {employeeExperience && (<div className="mb-3">
            
            <label htmlFor="skills" className="form-label">
              What relevant skills/abilities do you have?
            </label>
            <textarea className="form-control" id="skills" rows={3} placeholder="e.g. Empathy, patience, communication skills..." onChange={function (e) { return setEmployeeSkills(e.target.value); }}></textarea>
          </div>)}
        {employeeSkills && (<div className="mb-3">
            <label htmlFor="qualifications" className="form-label">
              What relevant qualifications do you have?
            </label>
            <textarea className="form-control" id="qualifications" rows={3} placeholder="e.g. Level 2 Health and Social Care, Food Hygeine, First Aid..." onChange={function (e) { return setEmployeeQualifications(e.target.value); }}></textarea>
          </div>)}
        {employeeQualifications && (<div style={{ marginTop: "20px", marginBottom: "20px" }}>
            <Form_1.default.Group>
              <Form_1.default.Label>
                Do you hold a valid UK Drivers License, and have access to a
                vehicle?
              </Form_1.default.Label>
              <div className="row">
                <div className="col">
                  <Form_1.default.Check type="radio" label="Yes" className="yes-or-no" id="can-drive" checked={employeeCanDrive} onChange={function () {
                setEmployeeCanDrive(true);
                setEmployeeCannotDrive(false);
            }}/>
                </div>
                <div className="col">
                  <Form_1.default.Check type="radio" label="No" className="yes-or-no" id="cannot-drive" checked={employeeCannotDrive} onChange={function () {
                setEmployeeCannotDrive(true);
                setEmployeeCanDrive(false);
            }}/>
                </div>
              </div>
            </Form_1.default.Group>
          </div>)}
        {(employeeCanDrive || employeeCannotDrive) && (<div style={{ marginTop: "20px", marginBottom: "20px" }}>
            <Form_1.default.Group>
              <Form_1.default.Label>
                Are you willing/able to work one weekend on, one weekend off?
              </Form_1.default.Label>
              <div className="row">
                <div className="col">
                  <Form_1.default.Check type="radio" label="Yes" id="willing" className="yes-or-no" checked={employeeIsWilling} onChange={function () {
                setEmployeeIsWilling(true);
                setEmployeeIsNotWilling(false);
            }}/>
                </div>
                <div className="col">
                  <Form_1.default.Check type="radio" className="yes-or-no" label="No" id="not-willing" checked={employeeIsNotWilling} onChange={function () {
                setEmployeeIsNotWilling(true);
                setEmployeeIsWilling(false);
            }}/>
                </div>
              </div>
            </Form_1.default.Group>
          </div>)}
        {(employeeIsWilling || employeeIsNotWilling) && (<div style={{ marginTop: "20px", marginBottom: "20px" }}>
            <Form_1.default.Group className="mb-3">
              <Form_1.default.Label style={{
                display: "flex",
                justifyContent: "center",
                margin: "8% 0 8%",
                fontWeight: "650",
                pointerEvents: "none",
            }}>
                Reference
              </Form_1.default.Label>
              <Form_1.default.Label style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
                marginBottom: "20px",
                pointerEvents: "none",
            }}>
                It is a mandatory requirement from the CQC that we obtain
                references for all staff hires.
                <br></br>
                <br></br>
                Whom may we contact that can speak to your character?
                <br></br>
                <br></br>
                e.g. a former employer, teacher or college tutor...
              </Form_1.default.Label>
              <Form_1.default.Label htmlFor="ref-name">
                Full name of your reference
              </Form_1.default.Label>
              <Form_1.default.Control id="ref-name" type="text" placeholder="Enter their full name..." onChange={function (e) { return setEmployeeRefName(e.target.value); }}/>
            </Form_1.default.Group>
          </div>)}
        {employeeRefName && (<div style={{ marginTop: "20px", marginBottom: "20px" }}>
            <Form_1.default.Group className="mb-3">
              <Form_1.default.Label htmlFor="ref-email">
                Email address of your reference
              </Form_1.default.Label>
              <Form_1.default.Control type="email" id="ref-email" placeholder="Enter their email address..." onChange={function (e) { return setEmployeeRefEmail(e.target.value); }}/>
            </Form_1.default.Group>
            <Form_1.default.Group className="mb-3">
              <Form_1.default.Label htmlFor="ref-contact">
                Contact Number (optional)
              </Form_1.default.Label>
              <Form_1.default.Control id="ref-contact" type="tel" placeholder="Enter full name..." onChange={function (e) { return setEmployeeRefContactNumber(e.target.value); }}/>
            </Form_1.default.Group>
          </div>)}
        {employeeRefEmail && (<div className="mb-3">
            <label htmlFor="formFile" className="form-label">
              Lastly, upload your CV:
            </label>
            <input className="form-control" type="file" id="formFile" onChange={function (e) { return setCV(true); }}></input>
          </div>)}
        {cv && (<div style={{
                display: "flex",
                justifyContent: "center",
            }}>
            <button style={{
                marginTop: "20px",
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
            }}>
              Submit
            </button>
          </div>)}
      </Form_1.default>
    </div>);
}
exports.default = FormComponent;
