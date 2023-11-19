import { createContext, useState } from "react";
export const CampaignContex = createContext();
const StepperContext = ({ children }) => {
  const [allData, setAllData] = useState({});

  //Campaign Logo
  const [campaignLogoForUrl, setCampaignLogoForUrl] = useState({ logo: "" });

  // console.log(campaignLogoForUrl,"campaignLogoForUrl");

  // inf_campaign
  const [userData, setUserData] = useState({});
  const [userInfo, setUserInfo] = useState({});

  // brand
  const [allDocData, setAllDocData] = useState({});
  const [docData, setDocData] = useState({});
  // taf

  //questions
  const [questions, setQuestions] = useState({});
  const [questionsData, setQuestionsData] = useState({});

  //requirement
  const [interviewData, setInterviewData] = useState({});
  const [interviewDetails, setInterviewDetails] = useState({});

  const handlebtn1 = () => {
    setUserData(userInfo);
  };
  const handlebtn2 = () => {
    setAllDocData(docData);
  };

  const handlebtn3 = () => {
    setQuestionsData(questions);
  };
  // console.warn(requirement,"requirement")
  const handlebtn4 = () => {
    setInterviewData(interviewDetails);
    setAllData({
      userData: userData,
      Doc: allDocData,
      questions: questionsData,
      interview_Detail: interviewData,
    });
    console.log(allData)
    if (allData) {
      const dataString = JSON.stringify(allData);
      localStorage.setItem("submitForm", dataString);
    }
  };
  const handlebtn5 = () => {
    setAllData({
      userData: userData,
      Doc: allDocData,
      questions: questionsData,
      interview_Detail: interviewData,
    });
    if (allData) {
      const dataString = JSON.stringify(allData);
      localStorage.setItem("submitForm", dataString);
    }
  };

  // const handlebtn6 = (data) => {
  //   const dataString = JSON.stringify(data);
  //   localStorage.setItem("submitCampaignForm", dataString);
  // };
console.log(interviewDetails,"interviewDetails")
  return (
    <CampaignContex.Provider
      value={{
        userInfo,
        setUserInfo,
        setDocData,
        docData,
        setQuestions,
        questions,
        setInterviewDetails,
        interviewDetails,
        handlebtn1,
        handlebtn2,
        handlebtn3,
        handlebtn4,
        handlebtn5,
        allData,
        setCampaignLogoForUrl,
        userData,
      }}
    >
      {children}
    </CampaignContex.Provider>
  );
};

export default StepperContext;
