import Footer from "./Footer";
import FinalFooter from "./FinalFooter";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

export default function Blog() {
  const [blogSelected, setBlogSelected] = useState(false);
  const [selectedPost, setSelectedPost] = useState();

  const blogPosts = [
    {
      blogName: "Reginald Beresford goes viral on his 100th Birthday",
      blogImg: "../src/assets/old man.jpg",
    },
    {
      blogName: "Blog Title 2",
      blogImg: "../src/assets/old man.jpg",
    },
  ];

  console.log(selectedPost);

  return (
    <>
      <div style={{ margin: "1.5em" }}>
        {!selectedPost &&
          blogPosts.map((post, index) => {
            <h1
              className="d-flex justify-content-center"
              style={{
                marginTop: "1em",
                marginBottom: "1em",
                userSelect: "none",
              }}
            >
              Blog
            </h1>;
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
                  margin: "1.5em 0em 2em 0em",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setBlogSelected(true);
                  setSelectedPost(index + 1);
                }}
              >
                <img
                  src={post.blogImg}
                  style={{
                    borderRadius: "50%",
                    width: "5em",
                    height: "5em",
                    objectFit: "cover",
                  }}
                ></img>
                <p style={{ margin: 0 }}>{post.blogName}</p>
              </div>
            );
          })}
      </div>
      {selectedPost === 1 && blogSelected && (
        <div style={{ margin: "1em" }}>
          <Carousel>
            <Carousel.Item>
              <img
                src="../src/assets/old man.jpg"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "80%",
                  height: "80%",
                  objectFit: "cover",
                  margin: "1em auto 1em auto",
                }}
              ></img>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="../src/assets/old man.jpg"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "80%",
                  height: "80%",
                  objectFit: "cover",
                  margin: "1em auto 1em auto",
                }}
              ></img>
            </Carousel.Item>
          </Carousel>
          <h6>Reginald Beresford goes viral on his 100th birthday</h6>
          <p>
            In the vast realm of social media, stories that touch our hearts and
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
            <br></br>The post garnered 2.3k likes, 2.2k heartwarming comments,
            and an astounding 9.2k shares. Fueled by the desire to honor and
            celebrate the incredible life of Mr. Beresford, Deanne Hinks,
            Managing Director of Libra Care, crafted a touching tribute that
            encapsulated his unwavering commitment to various fields, including
            water polo, swimming, and of course, football. Her heartfelt words
            captured the essence of a man who had defied odds, conquered
            challenges, and inspired generations.<br></br>
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
            <br></br>Tragically, as the world continued to celebrate Reginald
            Beresford's century of life, news of his passing due to COVID-19
            cast a somber shadow. However, his legacy remains unshaken – a
            beacon of strength and resilience that continues to inspire and
            uplift, even in the face of adversity.<br></br>
            <br></br>The story of your mother's remarkable feat in making
            Reginald Beresford's 100th birthday go viral on Facebook is a
            testament to the power of love, admiration, and the digital age's
            ability to amplify meaningful stories. While his physical presence
            may no longer grace this world, his legacy lives on through the
            countless lives he touched and the inspiration he provided. As we
            move forward, may we continue to celebrate extraordinary individuals
            like Reginald Beresford and use our platforms to share stories that
            remind us of the remarkable strength of the human spirit.
          </p>
        </div>
      )}
      <Footer />
      <FinalFooter />
    </>
  );
}
