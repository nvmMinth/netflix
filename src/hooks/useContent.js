import { useEffect, useState, useContext } from "react";
import { FirebaseContext } from "../context/firebase";

export default function useContent(target) {
  const [content, setContent] = useState([]);
  const { firebaseApp } = useContext(FirebaseContext);

  useEffect(() => {
    firebaseApp
      .firestore()
      .collection(target)
      .get()
      .then((snapshot) => {
        const allContents = snapshot.docs.map((content) => ({
          ...content.data(),
          docId: content.id,
        }));
        setContent(allContents);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  return { [target]: content };
}
