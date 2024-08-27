import { Modal, ModalBody, Button, ModalHeader, ModalTitle, ModalFooter, Tabs, Tab, Table } from "react-bootstrap";
import logo from '../IMG/Logo_INTA.png'
import ExcelExport from '../components/ExportData'
import SelectFecha from './SelectDate'

function CustomModal({ show, onClose}) {
    // Evita error al cambiar de estado la variable show
    if(!show.data) return;
    return (
      <Modal show={show.show} onHide={onClose}
      size="xl"
      aria-labelledby="example-modal-sizes-title-sm"
      centered>
        <ModalHeader style={{background:'#37bbed'}} closeButton>
          <ModalTitle style={{borderRadius:"7px", textAlign:'center', width:'100%', fontSize:'28px', fontFamily:'serif', fontWeight:'bolder'}}>{show.Lugar}</ModalTitle>
        </ModalHeader>
        
        <ModalBody>
                <Tabs  defaultActiveKey={"modal-pluviometro"} className="mb-3" fill>
                                    <Tab eventKey={"modal-pluviometro"} title="Pluviómetro">
                                        <div className="container">
                                        <ModalTitle style={{fontSize:'14px', paddingLeft:'5px'}}>Distrito: {show.Distrito}</ModalTitle>
                                        <ModalTitle style={{fontSize:'14px', paddingLeft:'5px'}}>Departamento: {show.Departamento}</ModalTitle>
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
                                                            <td style={{textAlign:'center'}}>{Element[2]}</td>
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
                                        <SelectFecha data={show.data} />
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