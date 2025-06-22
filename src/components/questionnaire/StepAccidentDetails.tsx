import React from "react";

interface StepAccidentDetailsProps {
  data: {
    accidentDate: string;
    accidentLocation: string;
    accidentDescription: string;
  };
  onChange: (field: string, value: string) => void;
  onNext: () => void;
  onBack: () => void;
  error: string;
}

export default function StepAccidentDetails({ data, onChange, onNext, onBack, error }: StepAccidentDetailsProps) {
  return (
    <div className="space-y-6 animate-fade-in">
      <h3 className="text-xl font-bold font-serif text-gray-900 mb-2">Accident/Incident Details</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Date of Accident</label>
          <input
            type="date"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary font-sans"
            value={data.accidentDate}
            onChange={e => onChange("accidentDate", e.target.value)}
            autoFocus
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Location of Accident</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary font-sans"
            value={data.accidentLocation}
            onChange={e => onChange("accidentLocation", e.target.value)}
            placeholder="e.g. Main St & 1st Ave"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Description of Incident</label>
          <textarea
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary font-sans"
            value={data.accidentDescription}
            onChange={e => onChange("accidentDescription", e.target.value)}
            placeholder="Describe how the incident occurred..."
          />
        </div>
      </div>
      {error && <div className="text-red-600 text-sm font-sans">{error}</div>}
      <div className="flex justify-between pt-4">
        <button
          className="bg-gray-200 text-gray-700 font-semibold px-6 py-2 rounded-lg shadow hover:bg-gray-300 transition-colors font-sans"
          onClick={onBack}
        >
          Back
        </button>
        <button
          className="bg-primary text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-primary/90 transition-colors font-sans"
          onClick={onNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
