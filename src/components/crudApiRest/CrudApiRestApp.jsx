import React, { useState, useEffect } from "react";
import { CrudApiRestForm } from "./CrudApiRestForm";
import { CrudApiRestTable } from "./CrudApiRestTable";
import axios from "axios";
import { Loading } from "./Loading";
import { Error } from "./Error";

const CrudApiRestApp = () => {
  const [db, setdb] = useState(null);
  const [dataEdit, setDataEdit] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const getData = async (url) => {
      
        try {
        let data = await fetch(url);
      
        if (data.status !== 404) {
          let json = await data.json();
          setdb(json);
          setError(false);
          setLoading(false);
        } else {
          setdb(null);
          setLoading(false);
          console.log(data)
          throw data.status
        
        }
      } catch (err) {
        if(err==404){
          alert("eror 404 no se encontro el archivo de la peticion")
        }else{
          console.log("Error al realizar la petion")
        }
      }
    };
  
    getData("http://localhost:5000/santos");
    
   
  }, []);

  let createData =(data) => {
    data.id = Date.now();

    axios.post("http://localhost:5000/santos", data).then((res) => {
 setdb([...db,data])
      
    });
  };
  let updateData = (data) => {
    let url=`http://localhost:5000/santos/${data.id}`
    axios.put(url,data).then(res=>{console.log(res)})
   let newDate=db.map(el=>el.id===data.id ? data : el)
   
   setdb(newDate)
  };
  let deleteData = (id) => {
    let url=`http://localhost:5000/santos/${id}`
    axios.delete(url,id).then(res=>{console.log(res)})
    let newDate=db.filter(el=>el.id !== id)
    setdb(newDate)

  };

  return (
    <div>
     
      <CrudApiRestForm
        dataEdit={dataEdit}
        setDataEdit={setDataEdit}
        createData={createData}
        updateData={updateData}
      />
      {error && <Error msj={error} />}
     
      {loading && <Loading />}
      {db && (
        <CrudApiRestTable
          data={db}
          setDataEdit={setDataEdit}
          deleteData={deleteData}
        />
      )}
    </div>
  );
};

export default CrudApiRestApp;
