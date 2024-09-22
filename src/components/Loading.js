import logo from '../IMG/Logo_INTA.png'
import '../style/publish.css'

function Loading() {
    return (
        <div style={{width:'100%', height:'100vh', backgroundColor:'rgba(0,0,0,.9)', position:'fixed', display:'flex', margin:'auto',alignItems:'center',justifyContent:'center'}}>
          <div><img style={{marginLeft: 'auto', marginRight: 'auto',display: 'block'}} src={logo} width={100}></img>
          <h1 style={{fontFamily:'serif', color:'lightgray', fontSize:'24px'}}><br/>Cargando...Aguarde por favor....</h1></div>
        </div>
    )
}

export default Loading;