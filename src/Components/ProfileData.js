import Description from "./Description";
import Summary from "./Summary.js";
import Session from "./Session";
import Navigation from "./Navigation";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProfileData = (props) => {
  const dates = useParams();
  console.log(dates.id);
  //console.log(props);
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    let mount = true;
    const fetchdata = async () => {
      const res = await fetch(
        `https://6171c3fac20f3a001705fecd.mockapi.io/api/users/${dates.id}`
        // `https://6171c3fac20f3a001705fecd.mockapi.io/api/users/1
      );
      const finalData = await res.json();

      if (mount) {
        setUserData({
          id: finalData.id,
          name: finalData.name,
          avatar: finalData.avatar,
          skills: finalData.skills,
          pastCompanies: finalData.pastCompanies,
          experience: finalData.experience,
          shortBio: finalData.shortBio,
          description: finalData.description,
        });
      }
      // finalData.forEach((value, index) => {
      //   // if (mount)
      //   {
      //     setUserData((userData) => [
      //       ...userData,
      //       {
      //         name: value.name,
      //         experience: value.experience,
      //         seemore: "showMore",
      //       },
      //     ]);
      //   }
      // });
      return userData;
    };
    fetchdata();
    return () => {
      mount = false;
    };
  }, []);

  console.log(userData);
  return (
    <div className="profile-data">
      <Navigation data={userData} />
      <Summary data={userData} />

      <Description data={userData} />

      <Session data={userData} />
    </div>
  );
};

export default ProfileData;
