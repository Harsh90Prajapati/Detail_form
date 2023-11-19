import  { useContext, useState } from "react";
import Stepper from "./components/Stepper";

import { CampaignContex } from "./contexts/StepperContext";
import Step1 from "./components/steps/Step1";
import Step2 from "./components/steps/Step2";
import Step3 from "./components/steps/Step3";
import Step4 from "./components/steps/Step4";
import StepperControl from "./components/StepperControl";
import { toast } from "react-toastify";
import LeftCard from "./components/leftComponent/LeftCard";
import FormCard from "./components/leftComponent/FormCard";

const App = () => {
  const {
    userInfo,
    docData,
    questions,
    interviewDetails,
    handlebtn1,
    handlebtn2,
    handlebtn3,
    handlebtn4,
  } = useContext(CampaignContex);
  const [currentStep, setCurrentStep] = useState(1);
 
  const steps = [
    "Form Selection",
    "Set up",
    "Form Creation",
    "Review",
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      case 4:
        return <Step4 />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;
   
    direction === "next" ? newStep++ : newStep--;

    if (newStep === 2) {
      if (
        userInfo.name &&
        userInfo.email

      ) {
        handlebtn1();
      } else {
        newStep--;
        toast.error("Please add all the details");
        return;
      }
    }

    if (newStep === 3) {
      if (
        docData.marksheet_10 &&
        docData.marksheet_12 &&
        docData.graduation &&
        docData.resume 
      ) {
        handlebtn2();
      } else {
        newStep--;
        toast.error("Please add all the details");
        return;
      }
    }
    if (newStep === 4) {
      if (questions.question1 && questions.question2 && questions.question3) {
        handlebtn3();
      } else {
        newStep--;
        toast.error("Please add all the details");
        return;
      }
    }
    if (newStep === 5) {
      if (
        interviewDetails.email &&
        interviewDetails.location &&
        interviewDetails.idate &&
        interviewDetails.itime 
      ) {
        handlebtn4();
        toast.success("Form Submited Successfully!")

      } else {
        newStep--;
        toast.error("Please add all the details");
        return;
      }
    }
   
  
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <div className="">
      {/* Stepper */}
      <div className=" mt-5 w-full">
        <Stepper steps={steps} currentStep={currentStep} />
        <div className="grid grid-cols-6 ">
        <LeftCard/>
        <div className=" p-10 col-span-4 bg-gray-100 px-32">
          <div className="mb-4">
            <h6 className="font-bold text-[20px]">Preview</h6>
            <p className="text-[16px]">You will be able to customize the fields in the later stage</p>
          </div>
          <div>
            <FormCard/>
          </div>
          <div className="bg-white shadow-md rounded-md ">
          {displayStep(currentStep)}
          </div>
          </div>
        </div>
       
      </div>

   
  {currentStep && (
        <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />
      )}
      {/* Navigation Controls */}
      
    </div>
  );
};

export default App;
