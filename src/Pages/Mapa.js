import { useState, useEffect, Suspense } from "react";
import { MapContainer, Marker, Popup , TileLayer, WMSTileLayer, LayerGroup, FeatureGroup,} from "react-leaflet";
import pluviometros from '../Json/red.json'
import Modal from '../components/Modal'
import { Button, ModalHeader } from "react-bootstrap";
import { ModalTitle, ModalBody } from "react-bootstrap";
import L from 'leaflet';
import Cargando from "../components/Cargando";
import moment from "moment";
import marker from '../IMG/cloud_img.svg';
import fetchWeather from "../components/fetchWeather";
import ReactDOMServer from "react-dom/server";
import LayerControl, { GroupedLayer } from "../components/LayerControl";

const myIcon = new L.Icon({
    iconUrl: marker,
    color:'blue',
    iconRetinaUrl: marker,
    popupAnchor:  [-0, -0],
    iconSize: [30,30],     
});

const getWeatherIconUrl = (iconCode) => {
    return `https://openweathermap.org/img/wn/${iconCode}.png`;
  };

const icon = (iconCode) => {
    return L.divIcon({   
    className: "custom-icon",
    html: ReactDOMServer.renderToString(
    <div className="custom-icon-container">
    <div className="custom-icon-image">
        <img src={getWeatherIconUrl(iconCode)} alt="icon" />
    </div>
    </div>
    ),
    iconAnchor: [16, 32],
    iconSize: [40, 40],
    iconPosition: "bottom",
    popupAnchor: [0, -32],
    });
};

const MapComp = () => {
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
    const [loading, setLoading] = useState(true);
    const [dataWeather, setdataWeather] = useState([{Nombre:'', data:{}}]);

    // Función que llama mediante método GET los datos de kobotoolbox
    useEffect(()=>{
        const timeout = setTimeout(() =>{
            fetch(process.env.REACT_APP_URL_SHEETS_PLUV)
            .then(response => response.json())
            .then(result => setUserData(result));
            // Craer una variable con los datos de cada pluviometro
            pluviometros.map((feature)=>{
                fetchWeather({lon:feature.properties.coords[1] , lat:feature.properties.coords[0]}).then(result =>{
                    let listWeather = dataWeather;
                    listWeather.push({'Nombre':feature.properties.Nombre, 'data':result[0]});
                    setdataWeather(listWeather);                            
                })});
            setLoading(false);
            }, 3000);
            return () => clearTimeout(timeout) 
   },[])

   //  Este condicional permite mantener el component Loading mientras se esperan los datos  
   if(loading) return <Cargando />;
        
    const datos = userData.values
    // Está función evita que la página se carge hasta obtener los datos de kobo
    if(!datos) return;
  
    const handleClose = () => setShow(false);
    
    return (
        <MapContainer style={{ width: "100%", height: "100vh" ,zIndex:0}} center={[-31.5, -60.5]} zoom={7}>
          <LayerControl position="topright">
          <GroupedLayer name="Mapa topografico" group="Mapas de fondo">
            <TileLayer
             url="https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/mapabase_topo@EPSG%3A3857@png/{z}/{x}/{-y}.png"
            attribution='&copy; <a href="https://ign-argentina.github.io/argenmap-web/">ING argentina</a> contributors'
            />
          </GroupedLayer>
          <GroupedLayer name="Mapa gris" group="Mapas de fondo">
            <TileLayer
             url="https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/mapabase_gris@EPSG%3A3857@png/{z}/{x}/{-y}.png"
            attribution='&copy; <a href="https://ign-argentina.github.io/argenmap-web/">ING argentina</a> contributors'
            />
          </GroupedLayer>
          <GroupedLayer name="Mapa claro" group="Mapas de fondo">
            <TileLayer
             url="https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/capabaseargenmap@EPSG%3A3857@png/{z}/{x}/{-y}.png"
            attribution='&copy; <a href="https://ign-argentina.github.io/argenmap-web/">ING argentina</a> contributors'
            />
          </GroupedLayer>
          <GroupedLayer checked name="Mapa oscuro" group="Mapas de fondo">
            <TileLayer
             url="https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/argenmap_oscuro@EPSG%3A3857@png/{z}/{x}/{-y}.png"
            attribution='&copy; <a href="https://ign-argentina.github.io/argenmap-web/">ING argentina</a> contributors'
            />
          </GroupedLayer>
          <GroupedLayer checked name="Limite departamento" group="Capas">
            <LayerGroup>
                <WMSTileLayer
                transparent= 'true'
                format="image/png"
                layers='ign:departamento'
                url='https://wms.ign.gob.ar/geoserver/wms?'
                CQL_FILTER= "fdc='Servicio de Catastro e Información Territorial'"
                />
            </LayerGroup>
          </GroupedLayer>
          <GroupedLayer checked name="Pluviómetros" group="Capas">
            <LayerGroup>
            {pluviometros.map((feature)=>{
            const datosWeather = dataWeather.filter((tsla)  => tsla.Nombre === feature.properties.Nombre)

            return(
                <>
                    <Marker position={feature.properties.coords} icon={icon(datosWeather[0]?.data.weather[0].icon)}>

                        <Popup  className="request-popup" >

                        <ModalHeader style={{borderRadius:"7px", justifyContent:'center', width:'100%', fontSize:'28px', fontFamily:'serif', fontWeight:'bolder'}}>{feature.properties.Lugar}</ModalHeader>

                        {datos.filter((tsla)  => tsla[1] === feature.properties.Nombre).slice(-1).map((Element)=>{
                            return (
                                <ModalBody>
                                    <ModalTitle style={{textAlign:'center', width:'100%', fontSize:'14px', padding:'5px',fontFamily:'serif'}}>Ultimo Registro de lluvias</ModalTitle>
                                    <ModalTitle style={{fontFamily:'serif',textAlign:'center',fontWeight:'bold', width:'100%', fontSize:'16px', padding:'5px'}}>{Element[3]} mm</ModalTitle>
                                    <ModalTitle style={{textAlign:'center', width:'100%', fontSize:'14px', padding:'5px',fontFamily:'serif'}}>Fecha {moment(Element[2]).format('DD/MM/YYYY')}</ModalTitle>
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
            </LayerGroup>
          </GroupedLayer>
          </LayerControl>
        <Modal show={show} onClose={handleClose} datos={datos} weather={dataWeather} />
          
        </MapContainer>  
    );
  };

  export default MapComp;