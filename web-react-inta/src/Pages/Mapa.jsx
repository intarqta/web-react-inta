// Extraer las funciones necesarias de React
import { useState, useEffect } from "react";
import { Tabs, Tab, Table} from "react-bootstrap";
import { AgCharts } from "ag-charts-react";

import { Button , Modal, ModalHeader, ModalFooter, ModalBody} from "reactstrap";
import { MapContainer, Popup, FeatureGroup, TileLayer, Marker, WMSTileLayer } from "react-leaflet";

import pluviometros from '../Json/red.json'

// Definir el componente PopupExample
const PopupExample = () => {
    const [pulsado, setPulsado] = useState(false);
    const [userData, setUserData] = useState({});

    useEffect(()=>{
        fetch('https://sheets.googleapis.com/v4/spreadsheets/1awrrt2lEPwK-Y16boJWzRtW1INCDPqBpax6DsUAR26A/values/Hoja 1!C:F?key=AIzaSyBqSKs7DT9oDteBtU5-tgs5t3nxfciLFz0')
               .then(response => response.json())
               .then(result => setUserData(result));
   },[])
   const datos = userData.values
  
  // Retornar la estructura JSX del componente
  return (
    <>
     <MapContainer id="MapContainer"  center={[-31, -60.5]} zoom={7} style={{height:"80vh", width:"100vw"}}>
        <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
        <WMSTileLayer
             transparent= 'true'
            format="image/png"
            layers='ign:departamento'
            url='https://wms.ign.gob.ar/geoserver/wms?'
            CQL_FILTER= "fdc='Servicio de Catastro e Información Territorial'"
            />
        {pluviometros.map((feature)=>{
            return(
                <FeatureGroup>
                    <Popup>
                        <ModalHeader>{feature.properties.Lugar}</ModalHeader>
                        <Button onClick={() =>{
                            setPulsado(!pulsado)
                        }}>Más Datos
                        </Button>
                        {/* Agrega el Modal al hacer click en el boton del popup*/}
                        {pulsado ? (
                             <Modal isOpen={pulsado}
                             size="xl"
                             aria-labelledby="example-modal-sizes-title-sm"
                             centered>
                                <Tabs  defaultActiveKey={"profile"} className="mb-3" fill>
                                    <Tab eventKey={"modal-pluviometro"} title="Pluviómetro">
                                        <div className="container">
                                        <h5 style={{fontWeight:"bold"}}>{feature.properties.Lugar}</h5>
                                        <h5 style={{fontWeight:"bold"}}>{feature.properties.nam}</h5>
                                        <h5 style={{fontWeight:"bold"}}>{feature.properties.Dep_nam}</h5>
                                        <Table striped bordered hover>
                                            <thead>
                                                <tr>
                                                    <th style={{textAlign:'center'}}>
                                                        Fecha
                                                    </th>
                                                    <th style={{textAlign:'center'}}>
                                                        Precipitación
                                                    </th>
                                                </tr>
                                            </thead> 
                                            <tbody>
                                                { datos.filter((tsla)  => tsla[1] === feature.properties.Nombre).slice(-5).map(Element =>{
                                                    // {console.log(Element.slice(Element-5))}
                                                    return( 
                                                         <tr>
                                                            <td style={{textAlign:'center'}}>{Element[2]}</td>
                                                            <td style={{textAlign:'center'}}>{Element[3]}</td>
                                                         </tr>
                                                         
                                                        )
                                                })}
                                                                                            
                                            </tbody>
                                        </Table> 
                                        </div>
                                    </Tab>
                                    <Tab eventKey={"modal-grafica"} title={"Gráficos"}>

                                        <AgCharts options={{data: datos.filter((tsla)  => tsla[1] === feature.properties.Nombre).map(element =>{
                                                return {"Fecha": element[2], "Precipitacion":Number.parseInt(element[3])}
                                            }),
                                            // Series: Defines which chart type and data to use
                                            series: [{ type: "bar", xKey: "Fecha", yKey: "Precipitacion" }],
                                        }} />
                                    </Tab>
                                </Tabs>
                                <Button onClick={()=>{setPulsado(!pulsado)}}>Cerrar Panel de información</Button>
                            </Modal>
                        ):null}
                    </Popup>
                    <Marker position={feature.properties.coords} size={[40,40]} />

                </FeatureGroup>
                
            )
        })}
      </MapContainer>
    </>
  );
};

// Renderizar el componente en el elemento con el id "root"
export default PopupExample;