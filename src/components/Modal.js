import { Modal, ModalBody, Button, ModalHeader, ModalTitle, ModalFooter, Tabs, Tab, Table} from "react-bootstrap";
import logo from '../IMG/Logo_INTA.png'
import ExcelExport from '../components/ExportData'
import SelectFecha from './SelectDate'
import TotalAnual from "./TotalAnual";
import moment from "moment";

const getWeatherIconUrl = (iconCode) => {
  return `https://openweathermap.org/img/wn/${iconCode}.png`;
};

function CustomModal({ show, onClose, weather}) {

    // Evita error al cambiar de estado la variable show
    if(!show.data) return;
    const datosWeather = weather?.filter((tsla)  => tsla.Nombre === show.Nombre)
    return (
      <Modal show={show.show} onHide={onClose}
      size="xl"
      aria-labelledby="example-modal-sizes-title-sm"
      centered>
        <ModalHeader style={{background:'#37bbed'}} closeButton>
          <img src={getWeatherIconUrl(datosWeather[0]?.data.weather[0].icon)} alt="icon" />
          <ModalTitle style={{borderRadius:"7px", textAlign:'center', width:'100%', fontSize:'28px', fontFamily:'serif', fontWeight:'bolder'}}>{show.Lugar}</ModalTitle>
        </ModalHeader>
        <ModalBody>
                <Tabs  defaultActiveKey={"modal-pluviometro"} className="mb-3" fill>
                                    <Tab eventKey={"modal-pluviometro"} title="Pluviómetro">
                                        <div className="container">
                                        <TotalAnual datos={show.data} departamento={show.Departamento} distrito={show.Distrito} weather={datosWeather} />
                                        
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
                                                {
                                                
                                                show.data.slice(-5).map(Element =>{
                                                    return( 
                                                         <tr>
                                                            <td style={{textAlign:'center'}}>{moment(Element[2]).format('DD/MM/YYYY')}</td>
                                                            <td style={{textAlign:'center'}}>{Element[3]}</td>
                                                         </tr>
                                                         
                                                        )
                                                })}
                                                                                            
                                            </tbody>
                                        </Table> 
                                        </div>
                                        <ExcelExport fileName={show.Lugar} data={show.data} />
                                    </Tab>
                                    <Tab eventKey={"modal-grafica"} title={"Gráficos"}>
                                        <SelectFecha data={show.data} departamento={show.Departamento} distrito={show.Distrito} lugar={show.Lugar} />
                                    </Tab>
                                </Tabs>
        </ModalBody>
        <ModalFooter style={{display:'flex'}}> 
        <ModalBody><img width={50} style={{marginLeft:'-20px'}} src={logo}></img></ModalBody>
          <Button variant="secondary" onClick={onClose}>
            Cerrar
          </Button>
        </ModalFooter>
      </Modal>
    );
  }

  export default CustomModal;