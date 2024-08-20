import { MapContainer, WMSTileLayer, TileLayer} from "react-leaflet";




function Coberturas(){
    return(
        <div className="container" >
            <MapContainer center={[-31, -60.5]} zoom={7} style={{height:"80vh", width:"100vw"}}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
            </MapContainer>            
        </div>
    )
}

export default Coberturas;