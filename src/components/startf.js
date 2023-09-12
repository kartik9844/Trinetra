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
          <label className="block mb-2 text-sm font-medium " htmlFor="email">
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
          <label className="block mb-2 text-sm font-medium" htmlFor="whoAreYou">
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
          <label className="block mb-2 text-sm font-medium" htmlFor="founderName">
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
          <label className="block mb-2 text-sm font-medium " htmlFor="startupName">
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
          <label className="block mb-2 text-sm font-medium " htmlFor="founderEmail">
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
          <label className="block mb-2 text-sm font-medium " htmlFor="phoneNumber">
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
          <label className="block mb-2 text-sm font-medium " htmlFor="hasFemaleCoFounder">
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
          <label className="block mb-2 text-sm font-medium " htmlFor="startupSector">
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
          <label className="block mb-2 text-sm font-medium " htmlFor="startupStage">
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
          <label className="block mb-2 text-sm font-medium " htmlFor="founderLinkedInId">
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
          <label className="block mb-2 text-sm font-medium " htmlFor="startupWebsite">
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
          <label className="block mb-2 text-sm font-medium " htmlFor="isRegistered">
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
          <label className="block mb-2 text-sm font-medium " htmlFor="registrationYear">
            Year of Registration
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            type="date"
            id="registrationYear"
            name="registrationYear"
            value={formData.registrationYear}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium " htmlFor="problemStatement">
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
          <label className="block mb-2 text-sm font-medium " htmlFor="prototypingsupport">
            What support are you looking from protyping lab ? *
          </label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            id="prototypingSupport"
            name="prototypingSupport"
            value={formData.prototypingSupport}
            onChange={handleInputChange}
            required
          >
            <option value="">Select an option</option>
            <option value="rapidprototype">Rapid Prototype Support</option>
            <option value="technicalconsultation">Technical Consultation</option>
            <option value="designsupport">CAD design support</option>
            <option value="technology">Access to Technology Lab</option>
            <option value="other">Other:</option>
          </select>
          
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium " htmlFor="projectCompletionTime">
            Expected time of your Project completion *
          </label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            id="projectCompletionTime"
            name="projectCompletionTime"
            value={formData.projectCompletionTime}
            onChange={handleInputChange}
            required
          >
            <option value="">Select an option</option>
            <option value="less30">Less than 30 days</option>
            <option value="btw 30 to 60">Between 30 to 60 days</option>
            <option value="btw 60 to 90">Between 60 to 90 days</option>
            <option value="more90">More than 90 days</option>
            <option value="other">Other:</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium " htmlFor="labSupport">
          Which lab support do you need ? *
          </label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            id="labSupport"
            name="labSupport"
            value={formData.labSupport}
            onChange={handleInputChange}
            required
          >
            <option value="">Select an option</option>
            <option value="mechanical">Mechanical Lab</option>
            <option value="3dlab">3D Printing Lab (3D Designing || 3D Printing</option>
            <option value="smart">Smart Lab (Electronics || IoT || Robotics</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium " htmlFor="projectBudget">
          Estimated budget of the project*
          </label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            id="projectBudget"
            name="projectBudget"
            value={formData.projectBudget}
            onChange={handleInputChange}
            required
          >
            <option value="">Select an option</option>
            <option value="100">Less than 100 rupees</option>
            <option value="5000">100 - 5000 rupees</option>
            <option value="25000">5000 - 25000 rupees</option>
            <option value="50000">25000 - 50000 rupees</option>
            <option value="more50000">More than 50000 rupees</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium " htmlFor="howDidYouKnow">
          How did you get to know about us?*
          </label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            id="howDidYouKnow"
            name="howDidYouKnow"
            value={formData.howDidYouKnow}
            onChange={handleInputChange}
            required
          >
            <option value="">Select an option</option>
            <option value="linkedin">LinkedIn</option>
            <option value="instagram">Instagram</option>
            <option value="website">Deshpande Startups Website</option>
            <option value="college">College</option>
            <option value="reference">Reference</option>
            <option value="whatsapp">WhatsApp</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium " htmlFor="awareOfCharges">
          Are you aware about the charges?*
          </label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            id="awareOfCharges"
            name="awareOfCharges"
            value={formData.awareOfCharges}
            onChange={handleInputChange}
            required
          >
            <option value="">Select an option</option>
            <option value="yes">Yes I'm aware.</option>
            <option value="no">No please share the details.</option>
          </select>
        </div>

        

        <div className="flex justify-center">
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