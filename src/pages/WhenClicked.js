import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Navbaradmin from "../components/Navbaradmin";
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db} from "../components/firebase";
import { useEffect, useState } from 'react';

const WhenClicked = () => {
  const navigate = useNavigate();
  // Get id from params
  const { id } = useParams();

  // State to store document data
  const [docData, setDocData] = useState(null);

  const onMaxresdefault3ImageClick = useCallback(() => {
    navigate("/admin-try");
  }, [navigate]);

  const onEquipmentsTextClick = useCallback(() => {
    navigate("/smart");
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

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, 'User profile', id);
      const docSnap = await getDoc(docRef);
      console.log(docSnap);
      setDocData(docSnap.data());
    }

    fetchData();
  }, [id])

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
        />
      
      <div>
      {/* Check if data exists before rendering */}
      
        <div className="relative top-[150px]">
          <p>Name:{docData['FounderName']} </p>
          <p>Age:</p> 
      </div>
      
    </div>
        
      
    </div>
  );
};

export default WhenClicked;