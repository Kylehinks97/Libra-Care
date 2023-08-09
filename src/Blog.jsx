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
      blogImg: "../src/assets/Reg1.jpg",
      alt: "Reginald Beresford donning his many war medals and outfit",
    },
    {
      blogName:
        "From Support Worker to Paramedic Graduate: Georgia Rowbotham's Inspiring Journey",
      blogImg: "./src/assets/Georgia (2).png",
      alt: "Georgia throwing her graduation cap in the air on graduation day",
    },
    {
      blogName: "Libra Care Training Update",
      blogImg: "../src/assets/old man.jpg",
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
                src="../src/assets/Reg4.jpg"
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
                src="../src/assets/Reg2.jpg"
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
                src="../src/assets/Reg3.jpg"
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
                src="../src/assets/Post.jpg"
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
              src="./src/assets/Georgia.png"
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
        <div>
          <p>hello</p>
        </div>
      )}
      <Footer />
      <FinalFooter />
    </>
  );
}
