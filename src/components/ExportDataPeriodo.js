import React from 'react';
import { saveAs } from 'file-saver';
import * as XLSX from "xlsx";
import { Button } from 'react-bootstrap';
import moment from 'moment';

const ExcelExportDataperiodo = ({ data, fileName }) => {

  data = data.map(d => {return [d[1], moment(d[2]).format('DD/MM/YYYY'), d[3]]});
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(data, {origin:'A2', skipHeader: true });
    XLSX.utils.sheet_add_aoa(worksheet, [['Lugar', 'Fecha','Precipitación']], { origin: 'A1' });
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Datos');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], {type: 'application/octet-stream'});
    saveAs(blob, `${fileName}_${moment(new Date()).format('DD/MM/YYYY').toString()}.xlsx`);
  };

  return (
    <Button style={{width:'100%', padding:'0px',fontWeight:'bold',color:'#69bef1', background:'#0000', borderColor:'#0000'}} onClick={exportToExcel}>Descargar datos</Button>
  );
}

export default ExcelExportDataperiodo;