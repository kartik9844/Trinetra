import { useCallback } from "react";
import { Await, useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getFirestore,doc,getDocs,collection,query,where, } from "firebase/firestore";
import Navbaradmin from "../components/Navbaradmin";
import React, { useEffect, useState } from 'react';


const firebaseConfig = {
  apiKey: "AIzaSyDgsAqy58Q2pjFSMzmxie2EFAgcFDTj_E4",
  authDomain: "infinity-3f957.firebaseapp.com",
  projectId: "infinity-3f957",
  storageBucket: "infinity-3f957.appspot.com",
  messagingSenderId: "946283908649",
  appId: "1:946283908649:web:0ecd03ced12ca859591638",
  measurementId: "G-4WSY0K0YQG"
}; 

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const UserprofileAdmin = () => {
  const [startupData, setStartupData] = useState(null);
  
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

  useEffect(() => {
    const fetchStartupData = async () => {
      const querySnapshot = await getDocs(collection(db, "User profile"));
       querySnapshot.forEach((doc) => {
        try {
          // const docRef = doc(db,"User profile","example");
          // const docSnap = await getDoc(docRef);
          if (doc.exists) {
            setStartupData(doc.data());
          } else {
            console.log('No startup data found.');
          }
        } catch (error) {
          console.error('Error fetching startup data:', error);
        }
         });
      
      
    };
    fetchStartupData();
  }, []);

  return (
    <div className="relative w-full flex flex-col items-center justify-center text-left text-21xl text-black font-poppins">
      <div className="bg-dwhite w-[1440px] h-[1024px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[42px]">
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
        
          <div className="relative top-20 capitalize font-extrabold">User profile</div>
        
          <div>
      {startupData ? (
        <div className="relative top-5">
          <h1>Startup Details</h1>
          <p>Startup Name: {startupData['Startupname']}</p>
          <p>Founder Name: {startupData['Founder name']}</p>
          <p>Email: {startupData['email']}</p>
        </div>
      ) : (
        <p>Loading startup data...</p>
      )}
    </div>
      </div>
    </div>
  );
};

export default UserprofileAdmin;

