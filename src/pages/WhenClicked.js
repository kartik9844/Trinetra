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
        <div className="relative top-[150px]"  key={doc.id} >
              <div>
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-black">Applicant Information</h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-black">Personal details and application.</p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-black">FounderName</dt>
            <dd className="mt-1 text-sm leading-6 text-black sm:col-span-2 sm:mt-0">{doc.FounderName}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-black">FounderEmail</dt>
            <dd className="mt-1 text-sm leading-6 text-black sm:col-span-2 sm:mt-0">{doc.FounderEmail}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-black">Email</dt>
            <dd className="mt-1 text-sm leading-6 text-black sm:col-span-2 sm:mt-0">{doc.Email}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-black">HasFemaleCoFounder</dt>
            <dd className="mt-1 text-sm leading-6 text-black sm:col-span-2 sm:mt-0">{doc.HasFemaleCoFounder}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-black">HowDidYouKnow</dt>
            <dd className="mt-1 text-sm leading-6 text-black sm:col-span-2 sm:mt-0">{doc.HowDidYouKnow}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-black">IsRegistered</dt>
            <dd className="mt-1 text-sm leading-6 text-black sm:col-span-2 sm:mt-0">{doc.IsRegistered}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-black">LabSupport</dt>
            <dd className="mt-1 text-sm leading-6 text-black sm:col-span-2 sm:mt-0">{doc.LabSupport}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-black">PhoneNumber</dt>
            <dd className="mt-1 text-sm leading-6 text-black sm:col-span-2 sm:mt-0">{doc.PhoneNumber}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-black">ProblemStatement</dt>
            <dd className="mt-1 text-sm leading-6 text-black sm:col-span-2 sm:mt-0">{doc.ProblemStatement}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-black">ProjectBudget</dt>
            <dd className="mt-1 text-sm leading-6 text-black sm:col-span-2 sm:mt-0">{doc.ProjectBudget}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-black">ProjectCompletionTime</dt>
            <dd className="mt-1 text-sm leading-6 text-black sm:col-span-2 sm:mt-0">{doc.ProjectCompletionTime}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-black">PrototypingSupport</dt>
            <dd className="mt-1 text-sm leading-6 text-black sm:col-span-2 sm:mt-0">{doc.PrototypingSupport}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-black">RegistrationYear</dt>
            <dd className="mt-1 text-sm leading-6 text-black sm:col-span-2 sm:mt-0">{doc.RegistrationYear}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-black">StartupName</dt>
            <dd className="mt-1 text-sm leading-6 text-black sm:col-span-2 sm:mt-0">{doc.StartupName}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-black">StartupSector</dt>
            <dd className="mt-1 text-sm leading-6 text-black sm:col-span-2 sm:mt-0">{doc.StartupSector}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-black">StartupStage</dt>
            <dd className="mt-1 text-sm leading-6 text-black sm:col-span-2 sm:mt-0">{doc.StartupStage}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-black">StartupWebsite</dt>
            <dd className="mt-1 text-sm leading-6 text-black sm:col-span-2 sm:mt-0">{doc.StartupWebsite}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-black">WhoAreYou</dt>
            <dd className="mt-1 text-sm leading-6 text-black sm:col-span-2 sm:mt-0">{doc.WhoAreYou}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-black">AwareOfCharges</dt>
            <dd className="mt-1 text-sm leading-6 text-black sm:col-span-2 sm:mt-0">{doc.AwareOfCharges}</dd>
          </div>
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