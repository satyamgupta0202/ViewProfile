import Calendar from "react-calendar";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";

const Session = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div
      className="col span-1-of-4 session"
      style={{ display: "flex", marginRight: "2px" }}
    >
      <h4>Book Your Session</h4>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
};

export default Session;
