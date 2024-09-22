
import '../style/contacto.css'

function Contacto(){
    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (function() {
        'use strict';
        window.addEventListener('load', function() {
          // Fetch all the forms we want to apply custom Bootstrap validation styles to
          var forms = document.getElementsByclassNameName('needs-validation');
          // Loop over them and prevent submission
          var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
              if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
              }
              form.classNameList.add('was-validated');
            }, false);
          });
        }, false);
      })();
    return(
        <div id="content-form">
        <form id="form-contact" action="" className="needs-validation" method="post">
           <div className="form-row">
             <div className="col-md-4 mb-3">
               <label for="validationCustom01">Nombre</label>
               <input type="text" className="form-control" id="validationCustom" placeholder="Carlos" value="Carlos" required></input>               
               <div className="valid-feedback">
                   Correcto!
               </div>
             </div>
             <div className="col-md-4 mb-3">
               <label id="margin" for="validationCustom02">Apellido</label>
               <input type="text" className="form-control" id="validationCustom02" placeholder="Navarro" value="Navarro" required></input>
               <div id="margin" className="valid-feedback">
                   Correcto!
               </div>
             </div>
             <div id="margin" className="col-md-4 mb-3">
               <label id="margin" for="validationCustomUsername">E-mail</label>
               <div id="margin" className="input-group">
                 <div className="input-group-prepend">
                   <span className="input-group-text" id="inputGroupPrepend">@</span>
                 </div>
                 <input type="text" className="form-control" id="validationCustomUsername" placeholder="E-mail" aria-describedby="inputGroupPrepend" required></input>
                 <div className="invalid-feedback">
                   Por favor ingrese un E-mail valido!.
                 </div>
               </div>
             </div>
           </div>
           <div className="form-row">
             <div className="col-md-6 mb-3">
               <label  for="validationCustom03">Ciudad</label>
             <input type="text" className="form-control" id="validationCustom03" placeholder="Ciudad" required></input>
               <div className="invalid-feedback">
                   Por favor ingrese una Ciudad valida.
               </div>
             </div>
             <div id="margin" className="col-md-3 mb-3">
               <label  for="validationCustom04">Provincia</label>

              <input type="text" className="form-control" id="validationCustom04" placeholder="Provincia" required></input>
               <div id="margin" className="invalid-feedback">
                   Por favor ingrese una Provincia valida.
               </div>
             </div>
             <div  id="margin" className="col-md-3 mb-3">
               <label for="validationCustom05">Fecha</label>
               <input type="date" className="form-control" id="validationCustom05" placeholder="CP" required></input>
               <div id="margin" className="invalid-feedback">
                   Por favor ingrese una Fecha valida.
               </div>
             </div>
           </div>
           <div className="form-row">
            
            <div style={{width:'100%', height:'5rem'}} className="col-md-4 mb-4">
                <label style={{marginLeft:'0rem', width:'100%'}} >Comentario</label>
                <input style={{marginLeft:'0rem', width:'100%', height:'100%'}}  type="textarea" className="form-control" id="validationCustom20" ></input>               
                <div className="valid-feedback">
                Por favor ingrese una Fecha!
                </div>
                
            </div>
           </div>
            
           <div className="form-group">
             <div className="form-check">
               <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required></input>
               <label className="form-check-label" for="invalidCheck">
                 Aceptar los terminos y condiciones
               </label>
               <div className="invalid-feedback">
                 Debe aceptar los terminos y condiciones antes de enviar.
               </div>
             </div>
           </div>
           <button className="btn btn-primary" type="submit">Enviar formulario</button>
         </form>
       </div>
    )
}

export default Contacto;