import React from "react";

interface StepDeclarationProps {
  data: {
    consent: boolean;
  };
  onChange: (field: string, value: boolean) => void;
  onBack: () => void;
  onSubmit: () => void;
  error: string;
}

export default function StepDeclaration({ data, onChange, onBack, onSubmit, error }: StepDeclarationProps) {
  return (
    <div className="space-y-6 animate-fade-in">
      <h3 className="text-xl font-bold font-serif text-gray-900 mb-2">Declaration & Consent</h3>
      <div className="space-y-4">
        <div className="prose prose-sm max-w-none font-sans">
          <p>I declare that the information provided in this questionnaire is true and accurate to the best of my knowledge.</p>
          <p>I consent to the collection and use of my personal and medical information for the purpose of creating a medico-legal report.</p>
        </div>
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="consent"
              name="consent"
              type="checkbox"
              className="focus:ring-primary h-4 w-4 text-primary border-gray-300 rounded"
              checked={data.consent}
              onChange={e => onChange("consent", e.target.checked)}
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="consent" className="font-medium text-gray-700">I agree</label>
          </div>
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
          className="bg-green-600 text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-green-700 transition-colors font-sans disabled:opacity-50"
          onClick={onSubmit}
          disabled={!data.consent}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
