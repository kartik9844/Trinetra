import { useCallback } from "react";
import { Await, useNavigate } from "react-router-dom";
import { getFirestore,doc,getDocs,collection,query,where, } from "firebase/firestore";
import Navbaradmin from "../components/Navbaradmin";
import React, { useEffect, useState } from 'react';
import { db} from "../components/firebase";
import FirestoreDataList from '../components/adminuser';
import UsersList from '../components/UsersList';



const UserprofileAdmin = () => {
  // const [startupData, setStartupData] = useState([]);
  
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

  const onFrameContainer2Click = useCallback(() => {
    navigate("/when-clicked");
  }, [navigate]);

  // useEffect(() => {
  //   const fetchStartupData = async () => {
  //     const querySnapshot = await getDocs(collection(db, "User profile"));
  //     const startupDocs = [];
  //     querySnapshot.forEach((doc) => {
  //       startupDocs.push({...doc.data(), id: doc.id});
  //     });
  //     const dataArray = querySnapshot.docs.map(doc => doc.data());
  //     // console.log(dataArray); // Access the data array here
  //     setStartupData(dataArray);
  //     console.log(startupData);
  //   };
  //   fetchStartupData();
  // }, []);

  return (
    <div className="relative w-full flex flex-col items-center justify-center text-left text-21xl  ">
      <div className="bg-dwhite w-[1440px] h-[150px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[42px]">
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
        
          <div className="relative top-20 capitalize font-bold">User profile</div>   
      </div>
      <UsersList/>
      {/* <ul role="list" className="divide-y divide-gray-100">
      {startupData.map((person) => (
        <li key={person.email} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">{person.StartupName}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.Email}</p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-gray-900">{person.FounderName}</p>
            {person.lastSeen ? (
              <p className="mt-1 text-xs leading-5 text-gray-500">
                Last seen <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
              </p>
            ) : (
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </div>
                <p className="text-xs leading-5 text-gray-500">Online</p>
              </div>
            )} 
          </div>
        </li>
      ))}
    </ul> */}
    </div>
  );
};

export default UserprofileAdmin;

