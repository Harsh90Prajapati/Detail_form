import { useContext } from "react";
import { CampaignContex } from "../../contexts/StepperContext";
import FormInput from "../FormInput/FormInput";

const Step1 = () => {
  const { userInfo, setUserInfo } = useContext(CampaignContex);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <div>
      <div className="grid grid-cols-1 gap-x-6 gap-y-2 py-12  px-40">
        <FormInput
          placeholder="name"
          required
          handleChange={handleChange}
          title="Name"
          value={userInfo["name"] || ""}
          type="text"
          name="name"
        />
        <FormInput
          placeholder="email"
          required
          handleChange={handleChange}
          title="Email"
          value={userInfo["email"] || ""}
          type="email"
          name="email"
        />
        <FormInput
          placeholder="Mobile Number"
          handleChange={handleChange}
          title="Mobile Number"
          value={userInfo["number"] || ""}
          type="tel"
          name="number"
        />
        <FormInput
          placeholder="DOB"
          handleChange={handleChange}
          title="Date Of Birth"
          value={userInfo["dob"] || ""}
          type="date"
          name="dob"
        />
      </div>
    </div>
  );
};

export default Step1;
