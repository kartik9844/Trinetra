import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import Navbaradmin from "../components/Navbaradmin";
import React, { useState } from 'react';
import { doc, setDoc, Timestamp, addDoc, collection} from "firebase/firestore";
import {db} from '../components/firebase';

const AddProduct = () => {
  const navigate = useNavigate();

  const onEquipmentsTextClick = useCallback(() => {
    navigate("/smart");
  }, [navigate]);

  const onOrdersTextClick = useCallback(() => {
    navigate("/orders");
  }, [navigate]);

  const onSingoutClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAddTextClick = useCallback(() => {
    navigate("/add-product");
  }, [navigate]);

  const onIconUserClick = useCallback(() => {
    navigate("/admin-profile");
  }, [navigate]);

  const onUsersTextClick = useCallback(() => {
    navigate("/userprofile-admin");
  }, [navigate]);

  const onImageClick = useCallback(() => {
    navigate("/admin-try");
  }, [navigate]);

  const[equipmentData , setequipmentData]=useState({ 
    name:'',
    status:'',
    lab:'',
    make:'',
    modelno:'',
    quantity:'',
    assetno:'',
  perhourcost:'',
  perdaycost:'',
permonthcost:'',
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setequipmentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    const docData = {
   Name: equipmentData.name,
   Status: equipmentData.status,
   Lab: equipmentData.lab,
   Make: equipmentData.make,
   Modelno: equipmentData.modelno,
   Quantity: equipmentData.quantity,
   Assetno: equipmentData.assetno,
   Perhourcost: equipmentData.perhourcost,
   Perdaycost: equipmentData.perdaycost,
   Permonthcost: equipmentData.permonthcost,
};
const docRef = await addDoc(collection(db, "Equipments"), docData);
    console.log("Document written with ID: ", docRef.id);
    console.log(equipmentData);
    setequipmentData({
      name:'',
    status:'',
    lab:'',
    make:'',
    modelno:'',
    quantity:'',
    assetno:'',
  perhourcost:'',
  perdaycost:'',
permonthcost:'',
    });
  };

  return (
    <div className="relative w-full flex flex-col items-center justify-start">
      <Navbaradmin
        dimensionCode="/maxresdefault-33@2x.png"
        carDimensions="/-icon-user.svg"
        onEquipmentsTextClick={onEquipmentsTextClick}
        onOrdersTextClick={onOrdersTextClick}
        onAddTextClick={onAddTextClick}
        onIconUserClick={onIconUserClick}
        onUsersTextClick={onUsersTextClick}
        onMaxresdefault3ImageClick={onImageClick}
        onSingoutClick={onSingoutClick}
      />
      <div className="bg-white-200 w-[1461px] h-[1330px] flex -col pt-[190px] px-5 pb-5 box-border items-center justify-start">
      <div className="max-w-lg mx-auto">
      <form onSubmit={handleSubmit}>
      <div className="space-y-10">
        <div className=" border-b border-gray-900/10 pb-12 ">
          
          <div className="mt-10 grid grid-cols-1 gap-x-11 gap-y-11 sm:grid-cols-6">
            <div className=" relative w-[516px] h-[120px] sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium leading-10 text-black ">
                Name
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="block flex-1 border-0 bg-white py-1.5 pl-1 text-black placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Enter name"
                    value={equipmentData.name}
            onChange={handleInputChange}
            required
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-[516px] h-[120px] sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium leading-10 text-black">
                Status
              </label>
              <div className="mt-2">
                <select
                  id="status"
                  name="status"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-md sm:text-sm sm:leading-10"
                  value={equipmentData.status}
            onChange={handleInputChange}
            required
                >    <option>select option</option>
                  <option>Available</option>
                  <option>working</option>
                  <option>Not working</option>
                  <option>Dead</option>
                  <option>Not working</option>
                </select>
              </div>
            </div>
            <div className="  relative w-[516px] h-[85px] sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium leading-10 text-black">
                Lab
              </label>
              <div className="mt-2">
                <select
                  id="lab"
                  name="lab"
                  autoComplete="country-name"
                 className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-md sm:text-sm sm:leading-10"
                 value={equipmentData.lab}
            onChange={handleInputChange}
            required
                >   <option>Select option</option>
                  <option>Smart lab</option>
                  <option>3-D lab</option>
                  <option>Mech lab</option>
                </select>
              </div>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="relative w-[516px] h-[90px] sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium leading-10 text-black">
                Make
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="make"
                    id="make"
                    autoComplete="make"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-black placeholder:text-gray-400 focus:ring-10 sm:text-sm sm:leading-6"
                    placeholder=""
                    value={equipmentData.make}
            onChange={handleInputChange}
            
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="relative w-[516px] h-[70px] sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-black">
                Model no.
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="modelno"
                    id="modelno"
                    autoComplete="modelno"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-black placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Enter model number"
                    value={equipmentData.modelno}
            onChange={handleInputChange}
            required
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className=" relative w-[516px] h-[80px] sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-black">
                Quantity
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="number"
                    name="quantity"
                    id="quantity"
                    autoComplete="quantity"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-black placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-10"
                    placeholder="Enter quantity"
                    value={equipmentData.quantity}
            onChange={handleInputChange}
            required
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="relative w-[516px] h-[80px] sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-black">
                Asset No.
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="assetno"
                    id="assetno"
                    autoComplete="assetno"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-black placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-10"
                    placeholder="Enter asset number"
                    value={equipmentData.assetno}
            onChange={handleInputChange}
            required
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="relative w-[516px] h-[90px] sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium leading-10 text-black">
                Per Hour Cost
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="number"
                    name="perhourcost"
                    id="perhourcost"
                    autoComplete="perhourcost"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-black placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-10"
                    placeholder="Enter cost per hour"
                    value={equipmentData.perhourcost}
            onChange={handleInputChange}
            
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="relative w-[516px] h-[100px] sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium leading-10 text-black">
                Per Day Cost
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="number"
                    name="perdaycost"
                    id="perdaycost"
                    autoComplete="perdaycost"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-black placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-10"
                    placeholder="Enter cost per day"
                    value={equipmentData.perdaycost}
            onChange={handleInputChange}
            required
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="relative w-[516px] h-[90px] sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium leading-10 text-black">
                Per Month Cost
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="number"
                    name="permonthcost"
                    id="permonthcost"
                    autoComplete="permonthcost"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-black placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-10"
                    placeholder="Enter cost per month"
                    value={equipmentData.permonthcost}
            onChange={handleInputChange}
            required
                  />
                </div>
              </div>
            </div>
          </div>
          
        </div>

        
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
       
        <button
          type="submit"
          className="relative -left-[170px] w-[226px] h-[50px] rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Add Equipment
        </button>
      </div>
    </form>
    </div>
      </div>
    </div>
  );
};

export default AddProduct;
