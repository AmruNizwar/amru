import React from 'react';

const MainContent = ({ title, description, additionalText, uploadedImage }) => {
  return (
    <div className='flex justify-center items-center'>
    <div className="flex  flex-col justify-center items-start bg-gray-100 w-[75vw] h-full px-20">
      <div className="mb-10">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-gray-500">{description}</p>
        {additionalText && <p className="text-gray-600 mt-4">{additionalText}</p>}
      </div>

      {uploadedImage && (
        <div className="mt-4">
          <img
            src={uploadedImage}
            alt="Uploaded"
            className="rounded-md max-w-xs mb-4"
          />
        </div>
      )}

      <button className="bg-black text-white py-2 px-4 rounded">Start</button>
    </div>
    </div>
  );
};

export default MainContent;
