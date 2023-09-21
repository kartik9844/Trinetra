import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db} from "../components/firebase"; // Assuming you have set up the Firebase configuration and initialized Firestore

const FirestoreDataList = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const querySnapshot = await getDocs(collection(db, 'User profile'));
        const dataArray = querySnapshot.docs.map((doc) => doc.data());
        setData(dataArray);
        console.log(data);
      };
  
      fetchData();
    }, []);
  
    return (
        <ul>
        {data.map(person => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    );
  };
  
  export default FirestoreDataList;