import { useContext } from "react";

import { CampaignContex } from "../../contexts/StepperContext";
import FormTextArea from "../FormInput/FormTextArea";

// import PImg from './Logo.jpg';

const Step3 = () => {
  const { questions, setQuestions } = useContext(CampaignContex);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuestions({ ...questions, [name]: value });
  };

  return (
    <div>
      <div className="grid grid-cols-1 gap-x-6 gap-y-2 py-12  px-40">
        <FormTextArea
          placeholder="Enter a description for the long answer"
          handleChange={handleChange}
          title="Tell me about a time you were asked to do something you had never done before. How did you react? What did you learn?"
          value={questions["question1"] || ""}
          type="text"
          name="question1"
        />
        <FormTextArea
          placeholder="Enter a description for the long answer"
          handleChange={handleChange}
          title="Tell me about the last time something significant didn’t go according to plan at work. What was your role? What was the outcome?"
          value={questions["question2"] || ""}
          type="text"
          name="question2"
        />
        <FormTextArea
          placeholder="Enter a description for the long answer"
          handleChange={handleChange}
          title="What are the three things that are most important to you in a job?"
          value={questions["question3"] || ""}
          type="text"
          name="question3"
        />
      </div>
    </div>
  );
};

export default Step3;
