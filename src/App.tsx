import React from 'react';
import QuestionnaireForm from './components/questionnaire/QuestionnaireForm';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 flex flex-col items-center justify-center py-12 px-4">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-serif font-bold text-gray-900 tracking-tight">Medco Legal Report System</h1>
        <p className="mt-2 text-lg text-gray-600 font-sans">Generate and manage personal injury assessment reports</p>
      </div>
      <QuestionnaireForm />
    </div>
  );
}