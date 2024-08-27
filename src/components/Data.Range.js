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
import { format } from 'date-fns';

function Date_Range({data, show, onClose}){
    
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
    return (
        <>
        <AgCharts options={{data: Data.map(element =>{
                return {"Fecha": element[2], "Precipitacion":Number.parseInt                                (element[3])}
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