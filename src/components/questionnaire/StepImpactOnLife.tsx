import React from "react";

interface StepImpactOnLifeProps {
  data: {
    impact: string;
  };
  onChange: (field: string, value: string) => void;
  onNext: () => void;
  onBack: () => void;
  error: string;
}

export default function StepImpactOnLife({ data, onChange, onNext, onBack, error }: StepImpactOnLifeProps) {
  return (
    <div className="space-y-6 animate-fade-in">
      <h3 className="text-xl font-bold font-serif text-gray-900 mb-2">Impact on Life</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Describe how the injuries have impacted your daily life</label>
          <textarea
            rows={6}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary font-sans"
            value={data.impact}
            onChange={e => onChange("impact", e.target.value)}
            placeholder="e.g., Difficulty with work, unable to enjoy hobbies, impact on family life..."
            autoFocus
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
