
import { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore'; 
import { db } from "../components/firebase";
import { dividerClasses } from '@mui/material';

const StartupName = ({uuid}) => {

  const [Rows, setRows] = useState('');
  const empCollectionRef = collection(db, "User profile");
  const q = query(empCollectionRef, where("Uuid", "==", uuid));

  useEffect(() => {
    getUsers();
  }, [uuid]);
  const getUsers = async () => {
    const data = await getDocs(q);
    setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    console.log(Rows)
  };
 
  return Rows[0]?.StartupName;
  

}

export default StartupName;


