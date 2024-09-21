import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

const App = () => {
  const [title, setTitle] = useState("Welcome to our form");
  const [description, setDescription] = useState("This is a description of the form");
  const [additionalText, setAdditionalText] = useState("");
  const [uploadedImage, setUploadedImage] = useState(null); 
  return (
    <div className="flex">
      <Sidebar 
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        additionalText={additionalText}
        setAdditionalText={setAdditionalText}
        uploadedImage={uploadedImage}
        setUploadedImage={setUploadedImage}
      />
      
      
      <MainContent 
        title={title}
        description={description}
        additionalText={additionalText}
        uploadedImage={uploadedImage}
      />
    </div>
  );
};

export default App;
