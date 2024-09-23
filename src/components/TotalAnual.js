


function TotalAnual({datos, distrito, departamento, weather}){
     //Acumulado del último año
     var añoActual = new Date().getFullYear().toString();

     var datosAnual = datos.filter(date =>{
       return date[2].substring(0,4) === añoActual; 
     });
     
     let totalAño=0
     let numeros = datosAnual.map(data =>{return Number(data[3])});
     numeros.forEach(function(a){totalAño += a;});
     // Acumulado mensual
     let totalMes = 0
     var mesActual = new Date().getMonth() + 1;
     let mesActualString = mesActual.toString();
     let ultimoMes = datosAnual.filter(date =>{
       return Number(date[2].substring(5,7)).toString() === mesActualString;
     });

     let numerosMes = ultimoMes.map(data =>{return Number(data[3])});
     numerosMes.forEach(function(a){totalMes += a;});

     return(
        <>  <h6 style={{textAlign:'center', fontFamily:'serif', fontWeight:'bold', color:'#686868'}}>Resumen del pliviómetro</h6>
            <hr />
            <div style={{display:'flex', justifyContent:'space-between', fontFamily:'serif', }}>
                <div>
                    <h6>Distrito: <strong>{distrito}</strong></h6>
                    <h6>Departamento: <strong>{departamento}</strong></h6>
                    <h6>Temperatura: <strong>{weather[0]?.data.main['temp']}</strong> °C</h6>
                </div>
                <div>
                    <h6>Total mes: <strong>{totalMes}</strong> mm</h6>
                    <h6>Total año: <strong>{totalAño}</strong> mm</h6>
                    <h6>Viento: <strong>{weather[0]?.data.wind['speed']}</strong> k/h</h6>
                </div>
            </div>
            <hr />
            
        </>
     )
}
export default TotalAnual;