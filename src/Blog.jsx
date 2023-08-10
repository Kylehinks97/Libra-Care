import Footer from "./Footer";
import FinalFooter from "./FinalFooter";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../src/styles/Blog.css";
import { IoArrowBackCircle } from "react-icons/io5";

export default function Blog() {
  const [blogSelected, setBlogSelected] = useState(false);
  const [selectedPost, setSelectedPost] = useState();

  const blogPosts = [
    {
      blogName: "Reginald Beresford goes viral on his 100th Birthday",
      blogImg: "/images/Reg1.jpg",
      alt: "Reginald Beresford donning his many war medals and outfit",
    },
    {
      blogName:
        "From Support Worker to Paramedic Graduate: Georgia Rowbotham's Inspiring Journey",
      blogImg: "/images/Georgia (2).png",
      alt: "Georgia throwing her graduation cap in the air on graduation day",
    },
    {
      blogName: "Enhancing Quality Care: Libra Care's Staff Training Update",
      blogImg: "/images/Scales.png",
    },
  ];

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  console.log(selectedPost);

  return (
    <>
      <div style={{ margin: "1.5em" }}>
        {!selectedPost &&
          blogPosts.map((post, index) => {
            return (
              <div
                key={index}
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: "1em",
                  alignItems: "center",
                  backgroundColor: "rgba(158, 158, 158, 0.4)",
                  border: "1.5px solid #ff6b3d",
                  boxShadow: "0.4em 0.5em 0.4em 0.1em",
                  padding: "0.5em",
                  borderRadius: "2em 0em 2em 0em",
                  margin: "1em auto 2em auto",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setBlogSelected(true);
                  setSelectedPost(index + 1);
                }}
                id="blog-posts"
              >
                <img
                  src={post.blogImg}
                  alt={post.alt}
                  style={{
                    borderRadius: "50%",
                    width: "5em",
                    height: "5em",
                    objectFit: "cover",
                  }}
                ></img>
                <p
                  style={{ margin: 0, fontWeight: "500", cursor: "pointer" }}
                  id="blog-title"
                >
                  {post.blogName}
                </p>
              </div>
            );
          })}
      </div>
      {selectedPost === 1 && blogSelected && (
        <div style={{ margin: "auto auto 2em auto" }} id="reginald-blog">
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
            onClick={() => {
              setBlogSelected(false);
              setSelectedPost(false);
            }}
          >
            <IoArrowBackCircle
              style={{
                fontSize: "2em",
                margin: "0em 0.2em 0.5em 0em",
                alignItems: "center",
                color: "#ff6b3d",
                cursor: "pointer",
              }}
              alt="Go back arrow"
            />
            <p style={{ cursor: "pointer" }} id="blog-back">
              BACK
            </p>
          </div>
          <Carousel
            activeIndex={index}
            className="carousel"
            id="review-carousel"
            onSelect={handleSelect}
            style={{
              maxWidth: "100%",
              height: "auto",
              margin: "auto auto 2em auto",
            }}
          >
            <Carousel.Item>
              <img
                src="/images/Reg4.jpg"
                alt="Reginald Beresford holding a birthday balloon with 100 on it"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "cover",
                  margin: "0 auto",
                }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="/images/Reg2.jpg"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "cover",
                  margin: "0 auto",
                }}
                alt="Reginald smiling with Deanne Hinks for a selfie on his 100th Birthday"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="/images/Reg3.jpg"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "cover",
                  margin: "0 auto",
                }}
                alt="Reginald smiling with Deanne Hinks for a selfie on his 100th Birthday"
              />
            </Carousel.Item>
          </Carousel>

          <h6>Reginald Beresford goes viral on his 100th birthday</h6>
          <p>
            In the vastness of social media, stories that touch our hearts and
            inspire us to celebrate the extraordinary lives of remarkable
            individuals often take center stage. Such was the case when a
            heartwarming post shared by Deanne Hinks went viral on Facebook.
            This is the inspiring story of how such post catapulted hero
            Reginald Beresford into the digital limelight on his 100th birthday,
            showcasing his awe-inspiring journey as a sports legend, a war hero,
            and a beacon of resilience.
            <br></br>
            <br></br>Reginald Beresford, an embodiment of strength and
            determination, has left an indelible mark on history. Not only was
            he a former professional footballer for Aston Villa and Crystal
            Palace, but he was also a valiant World War II veteran. Reginald a
            navy decoder, played a role in the persuit of the mighty Bismarck,
            and witnessed history as it sucumbed to gunfire and sunk beneath
            North Atlantic waves. <br></br>
            <br></br>
            The{" "}
            <a
              href="https://www.facebook.com/1155057714/posts/pfbid02Y4cqLR8XnydjCUgUhtCQU68puSfWa7Vo9fUNSm7nXwsvgmsdj8jfGj2uaV7SnTRnl/"
              target="_blank"
            >
              post
            </a>{" "}
            garnered 2.3k likes, 2.2k heartwarming comments, and an astounding
            9.2k shares. Fueled by the desire to honor and celebrate the
            incredible life of Mr. Beresford, Deanne Hinks, Managing Director of
            Libra Care, crafted a touching tribute that encapsulated his
            unwavering commitment to various fields, including water polo,
            swimming, and of course, football. Her heartfelt words captured the
            essence of a man who had defied odds, conquered challenges, and
            inspired generations.<br></br>
            <a
              href="https://www.facebook.com/1155057714/posts/pfbid02Y4cqLR8XnydjCUgUhtCQU68puSfWa7Vo9fUNSm7nXwsvgmsdj8jfGj2uaV7SnTRnl/"
              target="_blank"
            >
              <img
                src="/images/Post.jpg"
                alt="Facebook post of Reginald Beresford with thousands of likes and comments"
                style={{
                  maxWidth: "100%",
                  margin: "1em auto auto auto",
                  cursor: "pointer",
                }}
                className="d-flex justify-content-center"
              ></img>
            </a>
            <br></br>The digital age has given us a unique platform to share
            stories that inspire, uplift, and unite us. In this instance,
            Facebook became the canvas upon which a tale of courage and triumph
            was painted. As the post spread like wildfire across the platform,
            it served as a powerful reminder of the potential of social media to
            amplify the voices of unsung heroes and spread messages of hope and
            positivity. <br></br>
            <br></br>The viral post became more than just a collection of
            numbers – it symbolized a collective celebration of a life
            well-lived. The outpouring of love, warm wishes, and heartfelt
            anecdotes from people across the globe showcased the remarkable
            impact that individuals like Reginald Beresford can have on our
            lives, even through the digital realm.
            <br></br>
            <br></br>Reginald Beresford's 100th birthday going viral on Facebook
            is a testament to the power of love, admiration, and the digital
            age's ability to amplify meaningful stories.
          </p>
        </div>
      )}
      {selectedPost === 2 && (
        <>
          <div style={{ margin: "auto auto 2em auto" }} id="reginald-blog">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={() => {
                setBlogSelected(false);
                setSelectedPost(false);
              }}
            >
              <IoArrowBackCircle
                alt="Go back arrow"
                style={{
                  fontSize: "2em",
                  margin: "0em 0.2em 0.5em 0em",
                  alignItems: "center",
                  color: "#ff6b3d",
                }}
              />
              <p style={{ cursor: "pointer" }} id="blog-back">
                BACK
              </p>
            </div>
            <img
              src="/images/Georgia.png"
              alt="Georgia Rowbotham throwing her graduation cap into the air on graduation day"
              style={{
                width: "100%",
                marginBottom: "1em",
              }}
            />
            <h6>
              From Support Worker to Paramedic Graduate: Georgia Rowbotham's
              Inspiring Journey
            </h6>
            <p>
              Meet Georgia Rowbotham, a determined individual who recently
              graduated from Staffordshire University with a degree in Paramedic
              Science. At just 22 years old, Georgia's passion for healthcare
              and commitment to helping others have shaped her journey to
              becoming a Paramedic Science graduate.<br></br>
              <br></br>Georgia's journey in the healthcare industry began at the
              age of 19 when she joined Libra Care as a Support Worker. For over
              three years, Georgia devoted herself to her role at Libra Care,
              making a profound impact on the lives of countless individuals.
              Her experiences as a Support Worker provided invaluable insights
              into the healthcare field, fueling her desire to make a difference
              in people's lives.
              <br></br>
              <br></br>Determined to expand her knowledge and skill set, Georgia
              pursued a degree in Paramedic Science at Staffordshire University.
              Balancing work and studies was no easy task. Georgia's dedication
              and hard work at Libra Care did not go unnoticed. Recognizing her
              exceptional abilities, she was recently promoted to the position
              of Senior Support Worker.
              <br></br>
              <br></br>This new role allowed her to take on greater
              responsibilities, supervise junior staff, and contribute even more
              significantly to the welfare of the individuals under her care.
              <br></br>
              <br></br>After years of relentless effort and a rigorous academic
              journey, Georgia proudly donned her cap and gown for her Paramedic
              Science graduation ceremony. The moment was one of immense pride,
              not only for Georgia but also for her family, friends, and
              colleagues at Libra Care, who witnessed her growth and dedication
              firsthand.<br></br>
              <br></br>Congratulations to Georgia on her well-deserved success,
              and we eagerly await the positive impact she will undoubtedly make
              in the lives of many as she embarks on her journey as a qualified
              paramedic.
            </p>
          </div>
        </>
      )}
      {selectedPost === 3 && (
        <div style={{ margin: "auto auto 2em auto" }} id="reginald-blog">
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
            onClick={() => {
              setBlogSelected(false);
              setSelectedPost(false);
            }}
          >
            <IoArrowBackCircle
              style={{
                fontSize: "2em",
                margin: "0em 0.2em 0.5em 0em",
                alignItems: "center",
                color: "#ff6b3d",
                cursor: "pointer",
              }}
              alt="Go back arrow"
            />
            <p style={{ cursor: "pointer" }} id="blog-back">
              BACK
            </p>
          </div>
          <h6>Enhancing Quality Care: Libra Care's Staff Training Update</h6>
          <p>
            In its unyielding commitment to providing top-notch care services,
            Libra Care is excited to announce a significant advancement in staff
            training. With the new training update, Libra Care's staff members
            are now fully equipped to deliver exceptional care to their
            customers.<br></br>
            <br></br>This comprehensive training program ensures that every
            staff member possesses the skills, knowledge, and empathy necessary
            to provide compassionate and effective care across a range of
            critical areas.<br></br>
            <br></br>Recognizing the multifaceted nature of care provision,
            Libra Care's new training program encompasses a wide spectrum of
            courses that address the diverse needs of their clients. From
            medical concerns to emotional well-being, each course has been
            carefully curated to ensure staff members are well-prepared to
            handle various situations with competence and sensitivity. <br></br>
            <br></br>Key courses include, but not limited to:<br></br>
            <br></br>
            <ul>
              <li>
                Adult Safeguarding: Libra Care's staff are trained to recognize
                and respond to signs of abuse or neglect, ensuring the safety
                and well-being of their customers at all times.
              </li>
              <br />
              <li>
                Duty of Care: This course underscores the ethical and legal
                responsibilities that staff members have toward their customers,
                ensuring a high standard of care delivery.{" "}
              </li>
              <br />
              <li>
                Dementia Care: Equipping staff with the knowledge and techniques
                to provide specialized care for individuals living with
                dementia, fostering a supportive and understanding environment.
              </li>
              <br />
              <li>
                Infection Control: With a focus on hygiene and disease
                prevention, this course ensures that staff members can maintain
                a safe and clean environment for their customers.{" "}
              </li>
              <br />
              <li>
                Mental Capacity: Libra Care's staff are trained to respect the
                rights and autonomy of individuals while also ensuring their
                safety and well-being. Nutrition and Hydration: Recognizing the
                importance of proper nutrition, staff members are educated on
                dietary requirements and how to support customers' dietary
                needs.
              </li>
              <br />
              <li>
                Catheter Care: A specialized course that prepares staff to
                provide attentive care to individuals with catheters, promoting
                comfort and health.
              </li>
              <br />
              <li>
                Personal Care: This course emphasizes the significance of
                maintaining personal dignity while delivering essential care
                services.{" "}
              </li>
              <br />
              <li>
                Safe Administration of Medicines: Staff members are trained to
                administer medications safely and accurately, minimizing risks
                and ensuring proper treatment.
              </li>
              <br />
              <li>
                Manual Handling: To prevent injuries, staff members are taught
                proper techniques for lifting and assisting individuals.{" "}
              </li>
              <br />
              <li>
                Basic Life Support: This critical course equips staff with
                life-saving skills such as CPR, ensuring they can respond
                effectively in emergencies.{" "}
              </li>
              <br />
              <li>
                The Care Certificate: A comprehensive program that covers
                various aspects of care delivery, setting a high standard for
                all Libra Care staff members.{" "}
              </li>
              <br />
              <li>
                Equality and Diversity: Fostering an inclusive environment, this
                course sensitizes staff members to the diverse needs of their
                customers.
              </li>
              <br />
              <li>
                Falls Awareness: Staff are trained to identify fall risks and
                take preventive measures to ensure customer safety.
              </li>
              <br />
              <li>
                {" "}
                Sepsis Awareness: This course educates staff about the signs,
                symptoms, and proper response to sepsis, a potentially
                life-threatening condition.
              </li>
            </ul>
              With this new training update, Libra Care has reaffirmed its
              dedication to providing exceptional care services. By ensuring
              that staff members are well-versed in a comprehensive range of
              topics, from medical procedures to empathetic communication, Libra
              Care stands as a shining example of excellence in the caregiving
              industry. <br />
              <br />
              The enhanced skills and knowledge of the staff are bound to have a
              positive impact on the lives of the customers they serve, creating
              an environment of trust, compassion, and professionalism.
          </p>
        </div>
      )}
      <Footer />
      <FinalFooter />
    </>
  );
}
