import { useState } from "react";
import { BasicInfo } from "./BasicInfo.jsx";
import { CvHeader } from "./CvHeader.jsx";

export const CvEditor = () => {
  const [user, setUser] = useState({ Fname: "", Lname: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <div className="editor">
      <CvHeader />
      <BasicInfo changeFirstName={handleChange} changeLastName={handleChange} />
      <h2>{user.Fname}</h2>
      <h2>{user.Lname}</h2>
    </div>
  );
};
