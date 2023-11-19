
import { useContext } from 'react'
import FormInput from "../FormInput/FormInput";
import { CampaignContex } from '../../contexts/StepperContext';

const Step2 = () => {
  const { docData, setDocData } = useContext(CampaignContex);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDocData({ ...docData, [name]: value });
  };

  return (
    <div>
      <div className="grid grid-cols-1 gap-x-6 gap-y-2 py-12  px-40">
      <FormInput placeholder='10thmarksheet' required handleChange={handleChange} title="Class 10th marksheet" value={docData["marksheet_10"] || ""} type='file' name='marksheet_10' />
      <FormInput placeholder='12thmarksheet' required handleChange={handleChange} title="Class 12th marksheet" value={docData["marksheet_12"] || ""} type='file' name='marksheet_12' />
      <FormInput placeholder='Graduation marksheet' required handleChange={handleChange} title="Graduation marksheet" value={docData["graduation"] || ""} type='file' name='graduation' />
      <FormInput placeholder='Post Graduation marksheet' handleChange={handleChange} title="Post Graduation marksheet" value={docData["pgraduation"] || ""} type='file' name='pgraduation' />
      <FormInput placeholder='Resume/CV' required handleChange={handleChange} title="Resume/CV" value={docData["resume"] || ""} type='file' name='resume' />
      <FormInput placeholder='Recommendation Letter' handleChange={handleChange} title="Recommendation Letter" value={docData["rletter"] || ""} type='file' name='rletter' />
      <FormInput placeholder='Salary Slip' handleChange={handleChange} title="Salary Slip" value={docData["slip"] || ""} type='file' name='slip' />
      <FormInput placeholder='Other' handleChange={handleChange} title="Other" value={docData["other"] || ""} type='file' name='other' />
      </div>
    </div>
  )
}

export default Step2