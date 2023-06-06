import React, { useState, useEffect } from 'react';


export const CrudApiRestForm = ({dataEdit,setDataEdit,createData,updateData}) => {
  
    let initialForm={id:null, name:'',constellation:''}
  
    const [form, setForm] = useState(initialForm)
   

 
    const handleChange=(e)=>{

        setForm({ ...form,[e.target.name]:e.target.value})
    }
    useEffect(() => {
   
        if(dataEdit){
           setForm(dataEdit)
        }else{
           setForm(initialForm)
        }
       
        }, [dataEdit])
   
        const handleSubmit=(e)=>{

       e.preventDefault()
       
        if(!dataEdit){
          createData(form)
        }else{
           updateData(form)
        }

    }

    const handleReset=()=>{
        setForm(initialForm)
        setDataEdit(null)
    }

    return (
    <form action=''>
        <input type="text" placeholder='Nombre' value={form.name} name='name' onChange={handleChange}  />
        <input type="text" placeholder='Constelacion'  value={form.constellation} name='constellation'  onChange={handleChange} />
        <input type="submit" onClick={handleSubmit} value={dataEdit ? "Editar" : "Crear"} />
        <input type="reset" onClick={handleReset} value="resetear" />
    </form>
  )
}
