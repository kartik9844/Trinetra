import React, { useState } from 'react';

const StartupForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    whoAreYou: '',
    founderName: '',
    startupName: '',
    founderEmail: '',
    phoneNumber: '',
    hasFemaleCoFounder: '',
    startupSector: '',
    startupStage: '',
    founderLinkedInId: '',
    startupWebsite: '',
    isRegistered: '',
    registrationYear: '',
    problemStatement: '',
    prototypingSupport: '',
    projectCompletionTime: '',
    projectBudget: '',
    labSupport: '',
    howDidYouKnow: '',
    awareOfCharges: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="max-w-lg mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="email">
            Email *
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="whoAreYou">
            Who are you? *
          </label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            id="whoAreYou"
            name="whoAreYou"
            value={formData.whoAreYou}
            onChange={handleInputChange}
            required
          >
            <option value="">Select an option</option>
            <option value="student">I am a student looking for technical validation for my startup idea</option>
            <option value="innovator">I am an innovator looking for a space to build my hardware prototype</option>
            <option value="founder">I am a startup founder looking for prototyping support</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="founderName">
            Founder Name *
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            type="text"
            id="founderName"
            name="founderName"
            value={formData.founderName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="startupName">
            Startup Name *
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            type="text"
            id="startupName"
            name="startupName"
            value={formData.startupName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="founderEmail">
            Founder's Email Id *
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            type="email"
            id="founderEmail"
            name="founderEmail"
            value={formData.founderEmail}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="phoneNumber">
            Phone Number *
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigoApologies for the truncated response. Here's the continuation of the code:

```jsx
            500 focus:border-indigo-500"
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="hasFemaleCoFounder">
            Do you have a female co-founder? *
          </label>
          <div className="flex items-center">
            <input
              className="mr-2"
              type="radio"
              id="femaleCoFounderYes"
              name="hasFemaleCoFounder"
              value="yes"
              checked={formData.hasFemaleCoFounder === 'yes'}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="femaleCoFounderYes">Yes</label>
          </div>
          <div className="flex items-center">
            <input
              className="mr-2"
              type="radio"
              id="femaleCoFounderNo"
              name="hasFemaleCoFounder"
              value="no"
              checked={formData.hasFemaleCoFounder === 'no'}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="femaleCoFounderNo">No</label>
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="startupSector">
            Startup Sector *
          </label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            id="startupSector"
            name="startupSector"
            value={formData.startupSector}
            onChange={handleInputChange}
            required
          >
            <option value="">Select an option</option>
            <option value="agritech">Agri-Tech</option>
            <option value="healthtech">Health-Tech</option>
            <option value="edutech">Edu-Tech</option>
            <option value="deeptech">Deep-Tech</option>
            <option value="cleantech">Clean-Tech</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="startupStage">
            Startup Stage *
          </label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            id="startupStage"
            name="startupStage"
            value={formData.startupStage}
            onChange={handleInputChange}
            required
          >
            <option value="">Select an option</option>
            <option value="idea">Idea</option>
            <option value="proofOfConcept">Proof of Concept</option>
            <option value="prototype">Prototype</option>
            <option value="mvp">MVP (Minimum Viable Product)</option>
            <option value="earlyRevenue">Early Revenue</option>
            <option value="profitMaking">Profit Making</option>
            <option value="scaling">Scaling</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="founderLinkedInId">
            Founder's LinkedIn ID *
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            type="text"
            id="founderLinkedInId"
            name="founderLinkedInId"
            value={formData.founderLinkedInId}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="startupWebsite">
            Startup's Website
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            type="url"
            id="startupWebsite"
            name="startupWebsite"
            value={formData.startupWebsite}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="isRegistered">
            Have you registered your startup? *
          </label>
          <div className="flex items-center">
            <input
              className="mr-2"
              type="radio"
              id="registeredYes"
              name="isRegistered"
              value="yes"
              checked={formData.isRegistered === 'yes'}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="registeredYes">Yes</label>
          </div>
          <div className="flex items-center">
            <input
              className="mr-2"
              type="radio"
              id="registeredNo"
              name="isRegistered"
              value="no"
              checked={formData.isRegistered === 'no'}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="registeredNo">No</label>
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="registrationYear">
            Year of Registration
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            type="text"
            id="registrationYear"
            name="registrationYear"
            value={formData.registrationYear}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="problemStatement">
            Problem Statement *
          </label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            id="problemStatement"
            name="problemStatement"
            value={formData.problemStatement}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="prototypingSupport">
            Do you need prototyping support? *
          </label>
          <div className="flex items-center">
            <input
              className="mr-2"
              type="radio"
              id="prototypingSupportYes"
              name="prototypingSupport"
              value="yes"
              checked={formData.prototypingSupport === 'yes'}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="prototypingSupportYes">Yes</label>
          </div>
          <div className="flex items-center">
            <input
              className="mr-2"
              type="radio"
              id="prototypingSupportNo"
              name="prototypingSupport"
              value="no"
              checked={formData.prototypingSupport === 'no'}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="prototypingSupportNo">No</label>
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="projectCompletionTime">
            Project Completion Time *
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            type="text"
            id="projectCompletionTime"
            name="projectCompletionTime"
            value={formData.projectCompletionTime}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="projectBudget">
            Project Budget *
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            type="text"
            id="projectBudget"
            name="projectBudget"
            value={formData.projectBudget}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="labSupport">
            Do you need lab support? *
          </label>
          <div className="flex items-center">
            <input
              className="mr-2"
              type="radio"
              id="labSupportYes"
              name="labSupport"
              value="yes"
              checked={formData.labSupport === 'yes'}
              onChange={handleInputChange}
              required
            />
           ```jsx
            <label htmlFor="labSupportYes">Yes</label>
          </div>
          <div className="flex items-center">
            <input
              className="mr-2"
              type="radio"
              id="labSupportNo"
              name="labSupport"
              value="no"
              checked={formData.labSupport === 'no'}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="labSupportNo">No</label>
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="additionalComments">
            Additional Comments
          </label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            id="additionalComments"
            name="additionalComments"
            value={formData.additionalComments}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <div className="flex justify-end">
          <button
            className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default StartupForm;