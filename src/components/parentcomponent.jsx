
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

const App = () => {
  const [activeStep, setActiveStep] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false); 

  const handleFormOpen = () => {
    setIsFormOpen(true); 
    setActiveStep(null); 
  };

  const handleFormClose = () => {
    setIsFormOpen(false);
    setActiveStep(null); 
  };

  return (
    <div className="flex">
      <Sidebar setActiveStep={setActiveStep} onOpenForm={handleFormOpen} onCloseForm={handleFormClose} />
      <div className="flex-1">
        {activeStep === "Welcome screen" ? (
          <MainContent />
        ) : isFormOpen ? (
          <div className="p-10"> </div>
        ) : (
          <div className="p-10">  </div>
        )}
      </div>
    </div>
  );
};

export default App;
