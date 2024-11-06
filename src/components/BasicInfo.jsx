import { Lable } from "./Lable";

export const BasicInfo = ({ changeFirstName, changeLastName }) => {
  return (
    <fieldset className="form__basic-info">
      <h2 className="form__title">Basic Info</h2>
      <span className="form-decore"></span>
      <Lable
        lableName="First name:"
        name="Fname"
        type="text"
        placeholder="First name"
        changeText={changeFirstName}
      />
      <Lable
        lableName="Last name:"
        name="Lname"
        type="text"
        placeholder="Last name"
        changeText={changeLastName}
      />
    </fieldset>
  );
};
