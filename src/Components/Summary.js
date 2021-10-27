const Summary = (props) => {
  console.log(props);
  const kill = props.data.skills;
  //skills display karne mai dikkat aarai.....@nikku
  // const skills = kill.split(" ");
  // console.log(skills);

  return (
    <div className="col span-1-of-4 summary">
      <img
        id="pfp"
        // src="https://www.pinkvilla.com/imageresize/rdj_bday_feature_main_1.jpg?width=752&format=webp&t=pvorg"
        src={props.data.avatar}
        alt="Bruh"
      />

      <div className="social-networks">
        <img src="https://img.icons8.com/color/48/000000/twitter--v1.png" />
        <img src="https://img.icons8.com/metro/26/000000/linkedin.png" />
        <img src="https://img.icons8.com/ios-glyphs/30/000000/github.png"></img>
      </div>

      <div className="skills">
        <h4>Core Skills</h4>
        <ul className="skills-list">
          <li>saag</li>
          {/* <li>{skills[0]}</li>
          <li>{skills[1]}</li>
          <li>{skills[2]}</li> */}
        </ul>
      </div>

      <div className="skills">
        <h4>Past Companies</h4>
        <ul className="past-companies">
          <li>
            <img src={props.data.pastCompanies} />
            {/* <img src="https://img.icons8.com/material-sharp/50/000000/amazon.png" /> */}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Summary;
