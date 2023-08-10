import Footer from "./Footer.jsx";
import FinalFooter from "./FinalFooter.jsx";

export default function OurTeam() {
  const team = [
    {
      name: "Deanne Hinks",
      role: "Registered Manager",
      alt: "Registered Manager of Libra Care - Deanne Hinks",
      img: "../public/Deanne.jpg",
      paragraph1:
        "My career within Health and Social Care has been diverse and focused on supporting individuals with a variety of different needs including frail elderly, elderly mental health and younger adults with profound learning disabilities.",
      paragraph3:
        "I have worked for the NHS answering 999 emergency calls. Employed by the local authority I have been part of the management team that responds to emergency calls from customers who need care and support outside of normal office hours.",
      paragraph4:
        "I have also worked as a Care Manager where my primary role was designing and implementing care packages tailored to meet the holistic needs of an individual, reviewing these to ensure that the best quality and cost effectiveness was being maintained.",
      paragraph5:
        "Within my most recent role I assisted individuals to design support plans that took into account their allocated personal budget and utilise the services that are available from the private, voluntary and Council operated sectors.",
    },
    {
      name: "Vicki Bates",
      role: "Responsible Individual",
      alt: "Responsible Individual of Libra Care - Vicki Bates",
      img: "../public/Vicki.jpg",
      paragraph1:
        "I previously worked as a registered nurse for over nine years, after graduating from the University of Wolverhampton.",
      paragraph2:
        "Seeking a new challenge, I began a career in 2018 as I was seeking a new challenge.",
      paragraph3:
        "I have worked for Libra Care ever since and thoroughly enjoy my role as Responsible Individual.",
      paragraph4:
        "We care for a range of service users all with differing needs and care requirements, and I enjoy the challenge of working with a diverse community.",
      paragraph5: "",
    },
  ];

  return (
    <>
      <div
        className="d-flex justify-content-center"
        style={{
          width: "100%",
          flexWrap: "wrap",
        }}
      >
        {team.map((member, index) => (
          <div key={index} style={{ margin: "1em" }}>
            <div
              className="d-flex justify-content-center"
              style={{ width: "100%" }}
            >
              <img
                style={{
                  marginBottom: "2em",
                  borderRadius: "50%",
                  width: "200px",
                  height: "200px",
                  objectFit: "cover",
                }}
                src={member.img}
                alt={member.alt}
              ></img>
            </div>
            <div style={{}}>
              <h4>{member.name}</h4>
              <p>{member.role}</p>
              <p>{member.paragraph1}</p>
              <p>{member.paragraph2}</p>
              <p>{member.paragraph3}</p>
              <p>{member.paragraph4}</p>
              <p>{member.paragraph5}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
      <FinalFooter />
    </>
  );
}
