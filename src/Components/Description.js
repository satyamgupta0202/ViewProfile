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

      <p className="short-bio">{props.data.shortBio}</p>
      {/*  */}
      <div className="experience">
        <ul>
          <li className="Experience-item">
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
        <p className="Description-heading">Description</p>
        <p className="Description-data">{props.data.description}</p>
      </div>

      {/*  */}
      <Cardss className="card1" />
      <br />
      <br />
      <Cardss className="card2" />
    </div>
  );
};

export default Description;
