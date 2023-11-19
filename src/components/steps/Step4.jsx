
import  { useContext } from "react";
import { CampaignContex } from "../../contexts/StepperContext";
import FormInput from "../FormInput/FormInput";
import FormDropdown from "../FormInput/FormDropdown";

const Step4 = () => {
  const { interviewDetails, setInterviewDetails } = useContext(CampaignContex);
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value)
    setInterviewDetails({ ...interviewDetails, [name]: value });

  };

const timeZone=[
"Morning" ,"Afternoon", "Evening"
]
const InterviewMedium=[
  "Online", "Physical"
]

  return (
    <div>
      <div className="grid grid-cols-1 gap-x-6 gap-y-2 py-12  px-40">
     <FormInput placeholder='email' required handleChange={handleChange} title="Email" value={interviewDetails["email"] || ""} type='email' name='email' />
     <FormInput placeholder='location' required handleChange={handleChange} title="location" value={interviewDetails["location"] || ""} type='text' name='location' />
     <FormInput placeholder='interview Date' required handleChange={handleChange} title="Interview Date" value={interviewDetails["idate"] || ""} type='date' name='idate' />
     <FormInput placeholder='interview time' required handleChange={handleChange} title="Interview Time" value={interviewDetails["itime"] || ""} type='time' name='itime' />
     <FormDropdown handleChange={handleChange} data={timeZone} value={interviewDetails["timeZone"] || ""}  placeholder='time' title="Time Zone"  name="timeZone" />
     <FormDropdown handleChange={handleChange} data={InterviewMedium} value={interviewDetails["interviewMedium"] || ""} placeholder='name' required  title="Interview Medium"  name='interviewMedium' />
      </div>
    </div>
  );
};

export default Step4;
