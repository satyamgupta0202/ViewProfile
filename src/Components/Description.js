import Cardss from "./Cardss";
const Description = (props) => {
  return (
    <div className="col span-1-of-2 description">
      <div className="title">
        <h2>
          {props.data.name}
          <img src="https://img.icons8.com/color/48/000000/tiktok-verified-account.png" />
        </h2>
        <img
          style={{ height: "40px" }}
          src="https://img.icons8.com/windows/32/000000/bookmark-ribbon--v2.png"
        />
      </div>
      {props.data.shortBio}
      <div className="experience">
        <ul>
          <li>
            <h4>Experience</h4>
            <br />
            {props.data.experience}
          </li>
          <li>
            <h4>Languages</h4> <br /> Hindi , English
          </li>
        </ul>
      </div>
      <div className="intro">
        <p>{props.data.description}</p>
      </div>
      <Cardss />
      <Cardss />
    </div>
  );
};

export default Description;
