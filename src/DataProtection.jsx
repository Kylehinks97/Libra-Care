import Footer from "./Footer.jsx";
import "./styles/DataProtection.css";

export default function DataProtection() {
  return (
    <>
      <div
        style={{
          marginBottom: "5em",
        }}
      >
        <h1
          className="d-flex justify-content-center"
          style={{
            margin: "1em 0 1em",
          }}
        >
          Data Protection
        </h1>
        <div
          id="text-container"
          style={{
            margin: "auto",
            marginTop: "2em",
          }}
        >
          <p>
            Libra Care Limited is committed to ensuring that the data and
            information that you share with us is kept securely and processed in
            line with legislation. <br></br>
            <br></br>To tailor our services to meet your own personal
            circusmtances some of this information is both personal and
            sensitive to you. The Principles below are embedded within to our
            practices.
          </p>
          <p className="d-flex justify-content-center">
            <br></br>
            <span>The principles are:</span>
          </p>
          <ol>
            <li>
              <span>Lawful, fair and transparent</span>
              <br></br>Data collection must be fair, for a legal purpose and we
              must be open and transparent as to how the data will be used.
            </li>
            <br></br>
            <li>
              <span>Limited for its purpose</span>
              <br></br> Data can only be collected for a specific purpose..
            </li>
            <br></br>
            <li>
              <span>Data minimisation</span>
              <br></br> Any data collected must be necessary and not excessive
              for its purpose.
            </li>
            <br></br>
            <li>
              <span>Accurate</span>
              <br></br> The data we hold must be accurate and kept up to date.
            </li>
            <br></br>
            <li>
              <span>Retention </span>
              <br></br>We cannot store data longer than necessary.
            </li>
            <br></br>
            <li>
              <span>Integrity and confidentiality </span>
              <br></br>The data we hold must be kept safe and secure.
            </li>
          </ol>
        </div>
      </div>
      <Footer />
    </>
  );
}
