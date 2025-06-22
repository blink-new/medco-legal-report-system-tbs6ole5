import React from "react";

export interface FormData {
  name: string;
  dob: string;
  gender: string;
  contact: string;
  accidentDate: string;
  accidentLocation: string;
  accidentDescription: string;
  injuries: string;
  treatment: string;
  impact: string;
  consent: boolean;
}

interface SummaryProps {
  data: FormData;
  onBack: () => void;
  onFinalSubmit: () => void;
}

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-6">
    <h4 className="text-lg font-semibold font-serif text-gray-800 border-b pb-2 mb-3">{title}</h4>
    <div className="space-y-2 text-gray-700 font-sans">{children}</div>
  </div>
);

const DataRow: React.FC<{ label: string; value: string | boolean | undefined }> = ({ label, value }) => (
  <div className="flex justify-between">
    <span className="font-medium">{label}:</span>
    <span>{value ? (typeof value === 'boolean' ? (value ? 'Yes' : 'No') : value) : "N/A"}</span>
  </div>
);

export default function Summary({ data, onBack, onFinalSubmit }: SummaryProps) {
  return (
    <div className="space-y-8 animate-fade-in">
      <h3 className="text-2xl font-bold font-serif text-gray-900 text-center">Review Your Information</h3>
      
      <Section title="Claimant Details">
        <DataRow label="Full Name" value={data.name} />
        <DataRow label="Date of Birth" value={data.dob} />
        <DataRow label="Gender" value={data.gender} />
        <DataRow label="Contact Info" value={data.contact} />
      </Section>

      <Section title="Accident/Incident Details">
        <DataRow label="Date of Accident" value={data.accidentDate} />
        <DataRow label="Location" value={data.accidentLocation} />
        <p className="font-medium mt-2">Description:</p>
        <p className="text-sm bg-gray-50 p-3 rounded-md">{data.accidentDescription || "N/A"}</p>
      </Section>

      <Section title="Injuries & Symptoms">
        <p className="font-medium">Description:</p>
        <p className="text-sm bg-gray-50 p-3 rounded-md">{data.injuries || "N/A"}</p>
      </Section>

      <Section title="Medical Treatment">
        <p className="font-medium">Description:</p>
        <p className="text-sm bg-gray-50 p-3 rounded-md">{data.treatment || "N/A"}</p>
      </Section>

      <Section title="Impact on Life">
        <p className="font-medium">Description:</p>
        <p className="text-sm bg-gray-50 p-3 rounded-md">{data.impact || "N/A"}</p>
      </Section>

      <Section title="Consent">
        <DataRow label="Consent" value={data.consent} />
      </Section>

      <div className="flex justify-between pt-6 border-t">
        <button
          className="bg-gray-200 text-gray-700 font-semibold px-6 py-2 rounded-lg shadow hover:bg-gray-300 transition-colors font-sans"
          onClick={onBack}
        >
          Back to Edit
        </button>
        <button
          className="bg-green-600 text-white font-semibold px-8 py-2 rounded-lg shadow hover:bg-green-700 transition-colors font-sans"
          onClick={onFinalSubmit}
        >
          Confirm & Submit
        </button>
      </div>
    </div>
  );
}