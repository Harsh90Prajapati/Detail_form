export default function StepperControl({ handleClick, currentStep, steps }) {

  return (
    <div className=" py-4 flex justify-between px-12 border">
      <button
        onClick={() => handleClick()}
        className={`cursor-pointer rounded-xl border-2 border-slate-300 bg-white py-2 px-4 font-semibold uppercase text-slate-400 transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white  ${
          currentStep === 1 ? " cursor-not-allowed opacity-50 " : ""
        }`}
      >
        Back
      </button>

      <button
        onClick={() => handleClick("next")}
        className="cursor-pointer rounded-lg bg-blue-500 py-1 px-12 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white"
      >
        {/* {currentStep === steps.length - 1 ? "Confirm" : "Next"} */}
        {currentStep === steps.length ? "Submit" : "Next"}
      </button>
    </div>
  );
}
