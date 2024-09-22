import { useState } from 'react';
import { DateRange } from 'react-date-range'
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "../style/style.DateRange.css";
import { es } from 'date-fns/locale';
import { Modal } from 'react-bootstrap';
import { Button } from 'bootstrap';
import { AgCharts } from "ag-charts-react";
import moment from 'moment';
import ExcelExportDataperiodo from './ExportDataPeriodo';

function Date_Range({data, show, onClose, departamento, distrito, lugar}){
    
    const [allData, setAllData] = useState(data);
    const [Data, setData] = useState(data);
    const [startDate,setStartDate]= useState(Date(data[0][2]));
    const [endDate,setEndDate]= useState(Date(data.slice(-1)[0][2]));
    // // evita iniciar sin datos
    // while(!data) return;
  
    // Crear fechas de inicio y fin del calendario
    const minDate = new Date(data[0][2]);
    const maxDate = new Date(data.slice(-1)[0][2]);

    console.log('fecha',moment(minDate, 'DD/MM/YYYY'))

    const handleSelect = (date) =>{
        let filtered = allData.filter((data)=>{
          let dataDate = new Date(data[2]);
          return(dataDate>= date.selection.startDate &&
            dataDate<= date.selection.endDate);
        })
        setStartDate(date.selection.startDate);
        setEndDate(date.selection.endDate);
        setData(filtered);
      };

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
      }

    console.log('allData',allData)
    // Resumen de datos anterior al gráfico
    let totalPeriodo = 0;
    let lluviaPeriodo = Data.map(data =>{return Number(data[3])});
    lluviaPeriodo.forEach(function(a){totalPeriodo += a;});

    return (
        <>
        <h5 style={{textAlign:'center', fontFamily:'serif', fontWeight:'bold', color:'#686868', fontSize:'16px'}}>Resumen del periodo seleccionado</h5>
            <hr />
            <div style={{display:'flex', justifyContent:'space-between', fontFamily:'serif'}}>
                <div>
                    <h6>Distrito: <strong>{distrito}</strong></h6>
                    <h6>Departamento: <strong>{departamento}</strong></h6>
                </div>
                <div>
                    <h6>Acumulado: <strong>{totalPeriodo}</strong> mm</h6>
                    <ExcelExportDataperiodo fileName={lugar} data={Data} />
                </div>
        </div>
        <hr />
        <AgCharts options={{data: Data.map(element =>{
                return {"Fecha": moment(element[2]).format('DD/MM/YYYY'), "Precipitacion":Number.parseInt                                (element[3])}
                }),
                // Series: Defines which chart type and data to use
                series: [{ type: "bar", xKey: "Fecha", yKey: "Precipitacion" }],
                }} />
        <Modal show={show}
        dialogClassName="modal-date-range"
        onHide={onClose} size="xl"
        aria-labelledby="example-modal-sizes-title-sm"
        centered>
          <DateRange
              locale={es}
              ranges={[selectionRange]}
              onChange={handleSelect}
              minDate={minDate}
              maxDate={maxDate}
              rangeColors={'rgba(55, 176, 76, 1)'}
              showSelectionPreview={true}
              moveRangeOnFirstSelection={false}
              direction="horizontal"
              />
            <button className="btn btn-primary" onClick={onClose}>Cerrar</button>
        </Modal>
        </>
    )
}

export default Date_Range;