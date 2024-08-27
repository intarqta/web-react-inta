import { useState, useEffect } from "react";
import { MapContainer, Marker, Popup , TileLayer, WMSTileLayer} from "react-leaflet";
import pluviometros from '../Json/red.json'
import Modal from '../components/Modal'
import { Button, ModalHeader } from "react-bootstrap";
import { ModalTitle, ModalBody } from "react-bootstrap";
import ReactLeafletGoogleLayer from 'react-leaflet-google-layer'
import L from 'leaflet';

import marker from '../IMG/cloud_img.svg';

const myIcon = new L.Icon({
    iconUrl: marker,
    color:'blue',
    iconRetinaUrl: marker,
    popupAnchor:  [-0, -0],
    iconSize: [30,30],     
});

const MapComp = () => {
    // Nos permite cargar la previsualización de la APP
    const [ spinner, setSpinner ] = useState(true);

    useEffect(() => {
        setTimeout(() => setSpinner(false), 1000)
      }, []);

    const [show, setShow] = useState({
        "Lugar":null,
        "Nombre":null,
        "Distrito":null,
        "Departamento":null,
        "data": [],
        "show":false
    });
   
    
      // Devuelve los datos de kobotoolbox
    const [userData, setUserData] = useState({});

    // Función que llama mediante método GET los datos de kobotoolbox
    useEffect(()=>{
        fetch('https://sheets.googleapis.com/v4/spreadsheets/1awrrt2lEPwK-Y16boJWzRtW1INCDPqBpax6DsUAR26A/values/Hoja 1!C:F?key=AIzaSyBqSKs7DT9oDteBtU5-tgs5t3nxfciLFz0')
               .then(response => response.json())
               .then(result => setUserData(result));
   },[])
        
    const datos = userData.values
    // Está función evita que la página se carge hasta obtener los datos de kobo
    while(!datos) return;

  
    const handleClose = () => setShow(false);
    
    return ( 
        <MapContainer style={{ width: "100%", height: "100vh" ,zIndex:0}} center={[-31.5, -60.5]} zoom={7}>
          {/* <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          /> */}
          <ReactLeafletGoogleLayer apiKey='AIzaSyBqSKs7DT9oDteBtU5-tgs5t3nxfciLFz0' type={'hybrid'} />
          <WMSTileLayer
             transparent= 'true'
            format="image/png"
            layers='ign:departamento'
            url='https://wms.ign.gob.ar/geoserver/wms?'
            CQL_FILTER= "fdc='Servicio de Catastro e Información Territorial'"
            />
          {pluviometros.map((feature)=>{
            return(
                <>
                    <Marker position={feature.properties.coords} icon={myIcon}>

                        <Popup  className="request-popup" >

                        <ModalHeader style={{borderRadius:"7px", justifyContent:'center', width:'100%', fontSize:'28px', fontFamily:'serif', fontWeight:'bolder'}}>{feature.properties.Lugar}</ModalHeader>

                        {datos.filter((tsla)  => tsla[1] === feature.properties.Nombre).slice(-1).map((Element)=>{
                            return (
                                <ModalBody>
                                    <ModalTitle style={{textAlign:'center', width:'100%', fontSize:'14px', padding:'5px',fontFamily:'serif'}}>Ultimo Registro de lluvias</ModalTitle>
                                    <ModalTitle style={{fontFamily:'serif',textAlign:'center',fontWeight:'bold', width:'100%', fontSize:'16px', padding:'5px'}}>{Element[3]} mm</ModalTitle>
                                    <ModalTitle style={{textAlign:'center', width:'100%', fontSize:'14px', padding:'5px',fontFamily:'serif'}}>Fecha {Element[2]}</ModalTitle>
                                </ModalBody>
                            )
                        })}

                        <Button onClick={() =>{ setShow({"Lugar":feature.properties.Lugar,
                          "Nombre": feature.properties.Nombre,
                          "Distrito":feature.properties.nam,
                          "Departamento":feature.properties.Dep_nam,
                          "data":datos.filter((tsla)  => tsla[1] === feature.properties.Nombre),
                          "show":true
                        })}
                        } style={{width:'100%', padding:'0px',fontWeight:'bold',color:'#69bef1', background:'#d0d0d0', borderColor:'#d0d0d0'}}>Más datos</Button>
                        </Popup>
                    </Marker>
                    
                </>
                
            )
            
            })} 
            <Modal show={show} onClose={handleClose} datos={datos} />
          
        </MapContainer>  
    );
  };

  export default MapComp;