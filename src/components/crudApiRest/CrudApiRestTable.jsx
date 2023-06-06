import React from "react";
import { CrudApiRestRow } from "./CrudApiRestRow";

export const CrudApiRestTable = ({ data,updateData,deleteData,setDataEdit }) => {

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Constelacion</th>
            <th>Accion</th>
          </tr>
        </thead>

        <tbody>
           { data.map((element) => (
           <CrudApiRestRow key={element.id} element={element}  deleteData={deleteData} setDataEdit={setDataEdit} />
          )) }
        </tbody>
      </table>
    </div>
  );
};
