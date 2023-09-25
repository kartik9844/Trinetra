import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Navbaradmin from "../components/Navbaradmin";
import { useParams } from 'react-router-dom';
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,query,where,
} from "firebase/firestore";import { db} from "../components/firebase";
import { useEffect, useState } from 'react';

const WhenClicked = () => {
  const navigate = useNavigate();
  // Get id from params
  const { id } = useParams();

  // State to store document data
  const [docData, setDocData] = useState([]);
  // Add state for loading 
  const [loading, setLoading] = useState(true);
  const userprofile = collection(db, "User profile");
  const q = query(userprofile, where("Uuid", "==", id));
  useEffect(() => {
    getUsers();
    console.log(docData);
  }, []);

  const getUsers = async () => {
    setLoading(true);
    const querySnapshot = await getDocs(q);
    const docs = [];
    querySnapshot.forEach((doc) => {
      docs.push({...doc.data(), id: doc.id})  
    });
    setDocData(docs);
    setLoading(false);
  }

  const onMaxresdefault3ImageClick = useCallback(() => {
    navigate("/admin-try");
  }, [navigate]);

  const onEquipmentsTextClick = useCallback(() => {
    navigate("/smart");
  }, [navigate]);

  const onSingoutClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onOrdersTextClick = useCallback(() => {
    navigate("/orders");
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

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const docRef = doc(db, 'User profile', id);
  //     const docSnap = await getDoc(docRef);
  //     console.log(docSnap);
  //     setDocData(docSnap.data());
  //   }

  //   fetchData();
  // }, [id])
  if(loading) {
    return <div>Loading...</div> 
  }

  return (
    <div>
        <Navbaradmin
          dimensionCode="/maxresdefault-32@2x.png"
          carDimensions="/-icon-user3.svg"
          divframer11lg61rPosition="unset"
          divframer11lg61rTop="unset"
          divframer11lg61rLeft="unset"
          divframer11lg61rWidth="90px"
          divframer11lg61rMarginBottom="10px"
          maxresdefault3IconLeft="calc(50% - 725px)"
          maxresdefault3IconCursor="unset"
          frameCursor="pointer"
          iconUserCursor="pointer"
          onMaxresdefault3ImageClick={onMaxresdefault3ImageClick}
          onEquipmentsTextClick={onEquipmentsTextClick}
          onOrdersTextClick={onOrdersTextClick}
          onAddTextClick={onAddTextClick}
          onIconUserClick={onIconUserClick}
          onUsersTextClick={onUsersTextClick}
          onSingoutClick={onSingoutClick}
        />
      
      <div>
      {/* Check if data exists before rendering */}
      {docData.map(doc => (
        <div className="relative top-[150px] left-9 "  key={doc.id} >
          
          
              <div className="absolute left-1 w-[1000px]">
      <div className="relative -right-10 px-4 sm:px-0">
        <h3 className="text-8xl font-semibold leading-7 text-black">User Information</h3>
      
      </div>
      <hr/>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          
          <div className="px-4 py-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className=" relative left-10 text-xl font-medium leading-6 text-black">Founder Name</dt>
            <dd className="relative -right-10 mt-1 text-4xl leading-6 text-black sm:col-span-2 sm:mt-0">{doc.FounderName}</dd>
          </div>
          <hr/>
          <div className="px-4 py-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="relative left-10 text-xl font-medium leading-6 text-black">Founder Email</dt>
            <dd className="relative -right-10 mt-1 text-4xl leading-6 text-black sm:col-span-2 sm:mt-0">{doc.FounderEmail}</dd>
          </div>
          <hr/>
          <div className="px-4 py-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="relative left-10 text-xl font-medium leading-6 text-black">Email</dt>
            <dd className="relative -right-10 mt-1 text-4xl leading-6 text-black sm:col-span-2 sm:mt-0">{doc.Email}</dd>
          </div>
          <hr/>
          <div className="px-4 py-0  sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="relative left-10 text-xl font-medium leading-6 text-black">Has Female CoFounder</dt>
            <dd className="relative -right-10 mt-1 text-4xl leading-6 text-black sm:col-span-2 sm:mt-0">{doc.HasFemaleCoFounder}</dd>
          </div>
          <hr/>
          <div className="px-4 py-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="relative left-10 text-xl font-medium leading-6 text-black">How Did You Know</dt>
            <dd className="relative -right-10 mt-1 text-4xl leading-6 text-black sm:col-span-2 sm:mt-0">{doc.HowDidYouKnow}</dd>
          </div>
          <hr/>
          <div className="px-4 py-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="relative left-10 text-xl font-medium leading-6 text-black">Is Registered</dt>
            <dd className="relative -right-10 mt-1 text-4xl leading-6 text-black sm:col-span-2 sm:mt-0">{doc.IsRegistered}</dd>
          </div>
          <hr/>
          <div className="px-4 py-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="relative left-10 text-xl font-medium leading-6 text-black">Lab Support</dt>
            <dd className="relative -right-10 mt-1 text-4xl leading-6 text-black sm:col-span-2 sm:mt-0">{doc.LabSupport}</dd>
          </div>
          <hr/>
          <div className="px-4 py-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="relative left-10 text-xl font-medium leading-6 text-black">Phone Number</dt>
            <dd className="relative -right-10 mt-1 text-4xl leading-6 text-black sm:col-span-2 sm:mt-0">{doc.PhoneNumber}</dd>
          </div>
          <hr/>
          <div className="px-4 py-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="relative left-10 text-xl font-medium leading-6 text-black">Problem Statement</dt>
            <dd className="relative -right-10 mt-1 text-4xl leading-6 text-black sm:col-span-2 sm:mt-0">{doc.ProblemStatement}</dd>
          </div>
          <hr/>
          <div className="px-4 py-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="relative left-10 text-xl font-medium leading-6 text-black">Project Budget</dt>
            <dd className="relative -right-10 mt-1 text-4xl leading-6 text-black sm:col-span-2 sm:mt-0">{doc.ProjectBudget}</dd>
          </div>
          <hr/>
          <div className="px-4 py-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="relative left-10 text-xl font-medium leading-6 text-black">Project Completion Time</dt>
            <dd className="relative -right-10 mt-1 text-4xl leading-6 text-black sm:col-span-2 sm:mt-0">{doc.ProjectCompletionTime}</dd>
          </div>
          <hr/>
          <div className="px-4 py-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="relative left-10 text-xl font-medium leading-6 text-black">Prototyping Support</dt>
            <dd className="relative -right-10 mt-1 text-4xl leading-6 text-black sm:col-span-2 sm:mt-0">{doc.PrototypingSupport}</dd>
          </div>
          <hr/>
          <div className="px-4 py-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="relative left-10 text-xl font-medium leading-6 text-black">Registration Year</dt>
            <dd className="relative -right-10 mt-1 text-4xl leading-6 text-black sm:col-span-2 sm:mt-0">{doc.RegistrationYear}</dd>
          </div>
          <hr/>
          <div className="px-4 py-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="relative left-10 text-xl font-medium leading-6 text-black">Startup Name</dt>
            <dd className="relative -right-10 mt-1 text-4xl leading-6 text-black sm:col-span-2 sm:mt-0">{doc.StartupName}</dd>
          </div>
          <hr/>
          <div className="px-4 py-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="relative left-10 text-xl font-medium leading-6 text-black">Startup Sector</dt>
            <dd className="relative -right-10 mt-1 text-4xl leading-6 text-black sm:col-span-2 sm:mt-0">{doc.StartupSector}</dd>
          </div>
          <hr/>
          <div className="px-4 py-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="relative left-10 text-xl font-medium leading-6 text-black">Startup Stage</dt>
            <dd className="relative -right-10 mt-1 text-4xl leading-6 text-black sm:col-span-2 sm:mt-0">{doc.StartupStage}</dd>
          </div>
          <hr/>
          <div className="px-4 py-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="relative left-10 text-xl font-medium leading-6 text-black">Startup Website</dt>
            <dd className="relative -right-10 mt-1 text-4xl leading-6 text-black sm:col-span-2 sm:mt-0">{doc.StartupWebsite}</dd>
          </div>
          <hr/>
          <div className="px-4 py-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="relative left-10 text-xl font-medium leading-6 text-black">Who Are You</dt>
            <dd className="relative -right-10 mt-1 text-4xl leading-6 text-black sm:col-span-2 sm:mt-0">{doc.WhoAreYou}</dd>
          </div>
          <hr/>
          <div className="px-4 py-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="relative left-10 text-xl font-medium leading-6 text-black">Aware Of Charges</dt>
            <dd className="relative -right-10 mt-1 text-4xl leading-6 text-black sm:col-span-2 sm:mt-0">{doc.AwareOfCharges}</dd>
          </div>
          <hr/>
        </dl>
      </div>
    </div>

      </div>
        ))}
    </div>
        
      
    </div>
  );
};

export default WhenClicked;