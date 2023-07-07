import emailjs from 'emailjs-com';
import { useEffect } from 'react';

export default function FormData({ getCareInquiry, getJobInquiry }) {

    useEffect(() => {
        // Function to send email using emailJS
        const sendEmail = () => {
          emailjs
            .send("kyle_s_hinks1997", "care_submission_template", {
              // Specify the email parameters here
              // e.g., to_email, from_email, subject, message, etc.
            })
            .then((response) => {
              console.log("Email sent successfully!", response);
            })
            .catch((error) => {
              console.error("Error sending email:", error);
            });
        };

        sendEmail(); // Invoke the email sending function when component is rendered
      }, []);

    function sendCareSubmission(e) {
        const careForm = getCareInquiry()
        emailjs.sendForm("kyle_s_hinks1997", "care_submission_template", careForm, "rqsyJZjJk7EV4UrPe1Yus")
    }

    console.log(getCareInquiry())
    console.log(getJobInquiry())
}