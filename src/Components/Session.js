import Calendar from "react-calendar";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";

const Session = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className="col span-1-of-4 session">
      <Calendar onChange={onChange} value={value} className="react-calendar" />
    </div>
  );
};

export default Session;
