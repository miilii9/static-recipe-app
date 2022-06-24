import React from "react";
import Menu from "../../components/Menu";
import { projectFirestore } from "../../firebase/config";
import { useEffect, useState } from "react";
import useTheme from "../../hooks/useTheme";
// style
import "./Home.css";

export default function Home() {
  const [datas, setDatas] = useState(null);
  const [isPending, setIspending] = useState(false);
  const [error, setError] = useState(false);

  let results = [];

  useEffect(() => {
    setIspending(true);
    projectFirestore
      .collection("recipes")
      .get()
      .then((snapShots) => {
        if (snapShots.empty) {
          setError("collection is empty");
        } else {
          snapShots.docs.forEach((doc) =>
            results.push({ id: doc.id, ...doc.data() })
          );
          setDatas(results);
          setIspending(false);
        }
      });
    }, []);
    
  return (
    <div className='home'>
      {error && <h1 className='error'>error fetching data . 404</h1>}
      {isPending && <h2 className='loading'>pending response</h2>}
      {datas && <Menu response={datas} />}
    </div>
  );
}
