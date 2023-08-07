import Footer from "./Footer";
import FinalFooter from "./FinalFooter";

export default function PrivacyPolicy() {
  return (
    <>
      <h1
        className="d-flex justify-content-center"
        style={{
          marginTop: "1em",
        }}
      >
        Privacy Policy
      </h1>
      <div style={{ margin: "2em" }}>
        <h4>Who are we?</h4>
        <p>Our website url is: https://www.libracare.co.uk</p>
        <h4>Embedded Content</h4>
        <p>
          Embedded content from other websites Articles on this site may include
          embedded content (e.g. videos, images, articles, etc.). Embedded
          content from other websites behaves in the exact same way as if the
          visitor has visited the other website. These websites may collect data
          about you, use cookies, embed additional third-party tracking, and
          monitor your interaction with that embedded content, including
          tracking your interaction with the embedded content if you have an
          account and are logged in to that website.
        </p>
        <h4>Cookies</h4>
        <p>
          We do not collect cookies data nor will we ask you to accept any
          cookies. We simply do not need it for the functionality of this
          website.
        </p>
        <h4>Data we collect</h4>
        <p>
          When you fill in our Inquiry Form, it does not send the data to any
          database. It is simply sent via email to the owner of the company
          Deanne Hinks, who is the only person with access to applications of
          jobs and care inquiries. This data will be used simply to onboard
          potential new employees, and new customers data will be used similarly to begin the process of assessing the care requirements of a new customer.
        </p>
        <h4>How long we retain your data</h4>
        <p>
          Both employee and customer data collected by our website is only kept for the duration of it's necessity.
        </p>
      </div>
      <Footer />
      <FinalFooter />
    </>
  );
}
