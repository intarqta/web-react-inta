import { useState } from 'react';
import Date_Range from './Data.Range'
import { Button } from 'react-bootstrap';


function SelectFecha({data}) {
  const [open, setOpen] = useState();

  const close = ()=> setOpen(false);
  const abrir = ()=> setOpen(true);

  return (
    <>
      <Date_Range data={data} show={open} onClose={close} />
      <Button className='btn btn-primary' style={{width:'100%', padding:'0px',fontWeight:'bold',color:'#69bef1', background:'#0000', borderColor:'#0000'}} onClick={()=>{
        setOpen(true)
      }}>Seleccione rando de fecha</Button>
    </>
    
  );
}

export default SelectFecha;