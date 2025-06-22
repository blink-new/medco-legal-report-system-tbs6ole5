import React from "react";

interface StepClaimantDetailsProps {
  data: {
    name: string;
    dob: string;
    gender: string;
    contact: string;
  };
  onChange: (field: string, value: string) => void;
  onNext: () => void;
  error: string;
}

const genders = ["Male", "Female", "Other"];

export default function StepClaimantDetails({ data, onChange, onNext, error }: StepClaimantDetailsProps) {
  return (
    <div className="space-y-6 animate-fade-in">
      <h3 className="text-xl font-bold font-serif text-gray-900 mb-2">Claimant Details</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary font-sans"
            value={data.name}
            onChange={e => onChange("name", e.target.value)}
            placeholder="e.g. John Doe"
            autoFocus
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
          <input
            type="date"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary font-sans"
            value={data.dob}
            onChange={e => onChange("dob", e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Gender</label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary font-sans"
            value={data.gender}
            onChange={e => onChange("gender", e.target.value)}
          >
            <option value="">Select...</option>
            {genders.map(g => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Contact Info</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary font-sans"
            value={data.contact}
            onChange={e => onChange("contact", e.target.value)}
            placeholder="Email or phone number"
          />
        </div>
      </div>
      {error && <div className="text-red-600 text-sm font-sans">{error}</div>}
      <div className="flex justify-end pt-4">
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
