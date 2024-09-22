import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cargando from './Cargando';

function Publish(){
    // Devuelve los datos de kobotoolbox
    const [info, setInfo] = useState({
        values:[]
    });    
    const [loading, setLoading] = useState(true);


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
  .sort((a, b) => b.date - a.date)
  console.log(datosDate)


    return(
        <div className='container'>
            <div className='row g-3 mb-2 mt-2'>

                {datosDate.map(function(card){
                    return(
                        <div className='col-12 col-md-6 col-lg-4'>
                            <div className='card'>
                                <img id="card-img-top" className='card-img-top' src={card[6]} alt='img'></img>
                                <h5 style={{fontWeight:'bold', fontFamily:'serif'}} className='card-title m-1'>{card[0]  +" "} {card[1]} {new Date(card[4]).toLocaleString('default', { month: 'long' })} {new Date(card[4]).getFullYear()}</h5>
                                <p className='card-text m-1'>{card[2]}</p>
                                <a style={{backgroundColor:'#37bbed'}} className='btn btn-success' href={card[8]}>Más información</a>
                                </div>                       
                        </div>
                    )
                })}
                
            </div>
        </div>
    )
}

export default Publish;