import React, {useEffect, useState} from "react";
import  DataTable  from 'react-data-table-component';
import logoPDF from '../IMG/logopdf.png'
import Cargando from '../components/Cargando'

const Publicaciones = () => {

        // Devuelve los datos de kobotoolbox
         const [info, setInfo] = useState({
             values:[]
        });
        const [loading, setLoading] = useState(true);

        // Variable de estado de filtro
        const [globalFilterText, setGlobalFilterText] = useState('');
        
        // Generar una función de filtro
        const handleGlobalFilter = (e) => {
            const value = e.target.value || '';
            setGlobalFilterText(value)
        }
        
        // Función que llama mediante método GET los datos de kobotoolbox
        useEffect(()=>{
            const timeout = setTimeout(() =>{
                fetch(process.env.REACT_APP_URL_SHEETS_PUBLIC)
                .then(response => response.json())
                .then(result => setInfo(result));
                setLoading(false);
                }, 2000);
        return () => clearTimeout(timeout)  
        },[])
        
        //  Este condicional permite mantener el component Loading mientras se esperan los datos  
        if(loading) return <Cargando />;
       
        const datos = info.values
       
        // Está función evita que la página se carge hasta obtener los datos de kobo
        if(!datos) return;
       
        const datosDate = datos.map(obj => { return { ...obj, date: new Date(obj[4]) } })
        .sort((a, b) => b.date - a.date);

        const columnas = [{
            name:'Fecha',
            selector: row => <p style={{color:'indigo', fontFamily:'serif', fontSize:'18px'}}>{new Date(row[4]).toLocaleString('es-AR', {day:"numeric", year: "numeric", month: "long" })}</p>,
            width:"25vh"
        },
        {
            name:'Título',
            selector: row => <p style={{color:'indigo', fontFamily:'serif', fontSize:'18px'}}>{row[2]}</p> ,
            width:"auto"
        },
        {
            name:'Imagen',
            selector: row => <img width={50} src={row[6]}></img>,
            width:"10vh"
        },
        {
            name:'PDF',
            selector: row => <a href={row[8]}><img width={30} src={logoPDF}></img></a> ,
            width:"10vh"
        }
        ]
            
        const filterData = datosDate.filter(row =>{
               return Object.values(row).some((value) => value.toString().toLowerCase().includes(globalFilterText));
         })

    
  return (
    
        <div>
            <div style={{display:'flex', justifyContent:'space-between', marginLeft:'1rem', marginRight:'1rem'}} className="text-end mt-3 mb-2">
            <h5>Publicaciones</h5>
            <input placeholder="Buscar" name="imputdata" title="Buscar" onChange={handleGlobalFilter} 
            value={globalFilterText} /></div>
            
            <DataTable 
            columns={columnas}
            data={filterData}
            // selectableRows
            fixedHeader
            pagination
            responsive
            >

            </DataTable>
            
        </div>
  );
};

export default Publicaciones;