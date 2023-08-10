export default function LogoBoard() {
  return (
    <div className="d-flex justify-content-around align-items-center">
      <a href="https://www.cqc.org.uk/location/1-2564241746" target="_blank">
        <img
          src="../public/CQC.png"
          id="cqc"
          alt="Care Quality Commission Logo - Rated Good"
        ></img>
      </a>
      <a href="https://www.skillsforcare.org.uk/Home.aspx" target="_blank">
        <img
          src="../public/skills for care.png"
          id="skills-for-care"
          alt="Skills for care logo"
        ></img>
      </a>

      <a href="https://www.savinglivesuk.com/" target="_blank">
        <img
          src="../public/save lives.png"
          id="save-lives"
          alt="Save lives charity logo for HIV"
        ></img>
      </a>
      <a
        href="https://uk.indeed.com/cmp/Libra-Care-Ltd/reviews"
        target="_blank"
      >
        <img
          src="../public/Indeed_logo.svg.png"
          id="indeed"
          alt="Indeed Logo"
        ></img>
      </a>
    </div>
  );
}
