import '../style/style.body.css'
import '../style/style.footer.css'

function Footer(){
    return(
        <>
        <footer id="footer"
                className="text-center text-lg-start text-dark"
                >
        <section   id='section-redes-sociales'
                   className="d-flex justify-content-between p-2 text-white"
                   >
            {/* <!-- Left --> */}
            <div className="me-5">
              <span id='md-5-spam'><strong>Siguenos en nuestras redes sociales...</strong></span>
            </div>
      
            {/* <!-- Right --> */}
            <div id='div-redes-right'>
                {/* <!-- Facebook --> */}
                <a
                id='icon-redes'
                className="btn btn-primary btn-floating m-1"
                role="button"
                ><i className="fab fa-facebook-f" style={{padding: '0px 0.15rem'}}></i></a>
                                {/* <!-- Twitter --> */}
                                <a className="btn btn-primary btn-floating m-1"
                style={{backgroundColor: '#55acee'}}
                href="#!"
                role="button"
                ><i className="fab fa-twitter"></i></a>

              {/* <!-- Instagram --> */}
                <a
                className="btn btn-primary btn-floating m-1"
                // style="background-color: #ac2bac;"
                href="https://www.instagram.com/inta.argentina/?hl=es"
                role="button"><i className="fab fa-instagram"></i></a>
               {/* <!-- Linkedin --> */}
                <a
                 className="btn btn-primary btn-floating m-1"
                style={{backgroundColor: '#0082ca'}}
                href="#!"
                role="button"
                ><i className="fab fa-linkedin-in"></i></a>
                <a
                className="btn btn-primary btn-floating m-1"
                style={{backgroundColor: '#333333'}}
                href="#!"
                role="button"
                ><i className="fab fa-github"></i></a>
                      {/* <!-- Google --> */}
                <a
                 className="btn btn-primary btn-floating m-1"
                style={{backgroundColor: '#dd4b39'}}
                href="#!"
                role="button"
                ><i className="fab fa-google"></i></a>

            </div>
            {/* <!-- Right --> */}
          </section>
          {/* <!-- Section: Links  --> */}
          <section className="links" id="links">
            <div className="container text-center text-md-start mt-5">
              {/* <!-- Grid row --> */}
              <div className="row mt-3">
                {/* <!-- Grid column --> */}
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* <!-- Content --> */}
                  <h6 class="text-uppercase fw-bold">Encontra más información aquí!</h6>
                  <hr
                      className="mb-4 mt-0 d-inline-block mx-auto"
                      style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}}
                      />
                  <p>
                    Las publicaciones, informes, mapas, 
                  </p>
                </div>
                {/* <!-- Grid column --> */}
      
                {/* <!-- Grid column --> */}
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* <!-- Links --> */}
                  <h6 className="text-uppercase fw-bold">Productos</h6>
                  <hr
                      className="mb-4 mt-0 d-inline-block mx-auto"
                      style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}}
                      />
                  <p>
                    <a href="#!" class="text-dark">Cartografía</a>
                  </p>
                  <p>
                    <a href="#!" class="text-dark">Informes</a>
                  </p>
                  <p>
                    <a href="#!" class="text-dark">BrandFlow</a>
                  </p>
                  <p>
                    <a href="#!" class="text-dark">Bootstrap Angular</a>
                  </p>
                </div>
                {/* <!-- Grid column --> */}
      
                {/* <!-- Grid column --> */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* <!-- Links --> */}
                  <h6 className="text-uppercase fw-bold">Te puede interesar!</h6>
                  <hr
                      className="mb-4 mt-0 d-inline-block mx-auto"
                      style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}}
                      />
                  <p>
                    <a href="https://geo.inta.gob.ar/" className="text-dark">INTA | GEO</a>
                  </p>
                  <p>
                    <a href="#!" class="text-dark">Become an Affiliate</a>
                  </p>
                  <p>
                    <a href="#!" class="text-dark">Shipping Rates</a>
                  </p>
                  <p>
                    <a href="#!" class="text-dark">Ayuda</a>
                  </p>
                </div>
                {/* <!-- Grid column --> */}
      
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  {/* <!-- Links --> */}
                  <h6 className="text-uppercase fw-bold">Contacto</h6>
                  <hr
                      className="mb-4 mt-0 d-inline-block mx-auto"
                      style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}}
                      />
                  <p><i className="fas fa-home mr-3"></i> Reconquista, R11 773, Santa Fe</p>
                  <p><i className="fas fa-envelope mr-3"></i> navarro.carlossaul@inta.gob.ar</p>
                  <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                  <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
                </div>
                {/* <!-- Grid column --> */}
              </div>
              {/* <!-- Grid row --> */}
            </div>
          </section>

        
        </footer>  
        </>
    )
}

export default Footer;