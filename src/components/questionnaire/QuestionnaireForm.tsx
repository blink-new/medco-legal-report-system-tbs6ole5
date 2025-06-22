import React, { useState } from "react";
import StepClaimantDetails from "./StepClaimantDetails";
import StepAccidentDetails from "./StepAccidentDetails";
import StepInjuries from "./StepInjuries";
import StepMedicalTreatment from "./StepMedicalTreatment";
import StepImpactOnLife from "./StepImpactOnLife";
import StepDeclaration from "./StepDeclaration";
import Summary from "./Summary";
import type { FormData } from "./Summary";

const initialData: FormData = {
  name: "",
  dob: "",
  gender: "",
  contact: "",
  accidentDate: "",
  accidentLocation: "",
  accidentDescription: "",
  injuries: "",
  treatment: "",
  impact: "",
  consent: false,
};

const steps = [
  "Claimant Details",
  "Accident Details",
  "Injuries & Symptoms",
  "Medical Treatment",
  "Impact on Life",
  "Declaration & Consent",
  "Summary",
];

export default function QuestionnaireForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>(initialData);
  const [error, setError] = useState("");

  function handleChange(field: string, value: string | boolean) {
    setData(prev => ({ ...prev, [field]: value }));
    setError("");
  }

  function validateStep() {
    switch (step) {
      case 0:
        if (!data.name.trim() || !data.dob || !data.gender || !data.contact.trim()) return "All fields are required.";
        break;
      case 1:
        if (!data.accidentDate || !data.accidentLocation.trim() || !data.accidentDescription.trim()) return "All fields are required.";
        break;
      case 2:
        if (!data.injuries.trim()) return "Please describe your injuries.";
        break;
      case 3:
        if (!data.treatment.trim()) return "Please describe your treatment.";
        break;
      case 4:
        if (!data.impact.trim()) return "Please describe the impact on your life.";
        break;
      case 5:
        if (!data.consent) return "You must consent to continue.";
        break;
      default:
        break;
    }
    return "";
  }

  function handleNext() {
    const err = validateStep();
    if (err) {
      setError(err);
      return;
    }
    setStep(step + 1);
  }

  function handleBack() {
    setStep(step - 1);
  }

  function handleFinalSubmit() {
    alert("Form submitted successfully!\n" + JSON.stringify(data, null, 2));
    // Here you would typically send the data to a server
    setStep(0);
    setData(initialData);
  }

  const progress = ((step + 1) / steps.length) * 100;

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full animate-fade-in">
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-600 text-center">Step {step + 1} of {steps.length}: {steps[step]}</h2>
        <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
          <div className="bg-primary h-2.5 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      {step === 0 && <StepClaimantDetails data={data} onChange={handleChange} onNext={handleNext} error={error} />}
      {step === 1 && <StepAccidentDetails data={data} onChange={handleChange} onNext={handleNext} onBack={handleBack} error={error} />}
      {step === 2 && <StepInjuries data={data} onChange={handleChange} onNext={handleNext} onBack={handleBack} error={error} />}
      {step === 3 && <StepMedicalTreatment data={data} onChange={handleChange} onNext={handleNext} onBack={handleBack} error={error} />}
      {step === 4 && <StepImpactOnLife data={data} onChange={handleChange} onNext={handleNext} onBack={handleBack} error={error} />}
      {step === 5 && <StepDeclaration data={data} onChange={handleChange} onBack={handleBack} onSubmit={handleNext} error={error} />}
      {step === 6 && <Summary data={data} onBack={handleBack} onFinalSubmit={handleFinalSubmit} />}
    </div>
  );
}
