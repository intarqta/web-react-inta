import '../style/style.body.css'

function Footer(){
    return(
        <>
        <footer id="footer"
                class="text-center text-lg-start text-dark"
                style="background-color: #ECEFF1; transition: all 5s ease;"
                >
          {/* <!-- Section: Social media --> */}
          <section 
                   class="d-flex justify-content-between p-2 text-white"
                   style="background-color: #f7f8f8"
                   >
            {/* <!-- Left --> */}
            <div class="me-5" style="height: 3rem;padding-top: 0.5rem;padding-left: 3rem;margin: 0px;">
              <span style="color: black;font-size: 18px;vertical-align: middle;margin-top: 10px;"><strong>Siguenos en nuestras redes sociales...</strong></span>
            </div>
      
            {/* <!-- Right --> */}
            <div style="padding-right: 3rem;">
                {/* <!-- Facebook --> */}
                <a
                class="btn btn-primary btn-floating m-1"
                style="background-color: #3b5998;"
                href="#!"
                role="button"
                ><i class="fab fa-facebook-f" style="padding: 0px 0.15rem;"></i></a>
                {/* <!-- Twitter --> */}
                <a class="btn btn-primary btn-floating m-1"
                style="background-color: #55acee;"
                href="#!"
                role="button"
                ><i class="fab fa-twitter"></i></a>

              {/* <!-- Instagram --> */}
                <a
                class="btn btn-primary btn-floating m-1"
                style="background-color: #ac2bac;"
                href="https://www.instagram.com/inta.argentina/?hl=es"
                role="button"><i class="fab fa-instagram"></i></a>
               {/* <!-- Linkedin --> */}
                <a
                 class="btn btn-primary btn-floating m-1"
                style="background-color: #0082ca;"
                href="#!"
                role="button"
                ><i class="fab fa-linkedin-in"></i></a>
                <a
                class="btn btn-primary btn-floating m-1"
                style="background-color: #333333;"
                href="#!"
                role="button"
                ><i class="fab fa-github"></i></a>
                      {/* <!-- Google --> */}
                <a
                 class="btn btn-primary btn-floating m-1"
                style="background-color: #dd4b39;"
                href="#!"
                role="button"
                ><i class="fab fa-google"></i></a>
            </div>
            {/* <!-- Right --> */}
          </section>
          {/* <!-- Section: Social media --> */}
      
          {/* <!-- Section: Links  --> */}
          <section class="links" id="links">
            <div class="container text-center text-md-start mt-5">
              {/* <!-- Grid row --> */}
              <div class="row mt-3">
                {/* <!-- Grid column --> */}
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* <!-- Content --> */}
                  <h6 class="text-uppercase fw-bold">Encontra más información aquí!</h6>
                  <hr
                      class="mb-4 mt-0 d-inline-block mx-auto"
                      style="width: 60px; background-color: #7c4dff; height: 2px"
                      />
                  <p>
                    Las publicaciones, informes, mapas, 
                  </p>
                </div>
                {/* <!-- Grid column --> */}
      
                {/* <!-- Grid column --> */}
                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* <!-- Links --> */}
                  <h6 class="text-uppercase fw-bold">Productos</h6>
                  <hr
                      class="mb-4 mt-0 d-inline-block mx-auto"
                      style="width: 60px; background-color: #7c4dff; height: 2px"
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
                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* <!-- Links --> */}
                  <h6 class="text-uppercase fw-bold">Te puede interesar!</h6>
                  <hr
                      class="mb-4 mt-0 d-inline-block mx-auto"
                      style="width: 60px; background-color: #7c4dff; height: 2px"
                      />
                  <p>
                    <a href="https://geo.inta.gob.ar/" class="text-dark">INTA | GEO</a>
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
      
                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  {/* <!-- Links --> */}
                  <h6 class="text-uppercase fw-bold">Contacto</h6>
                  <hr
                      class="mb-4 mt-0 d-inline-block mx-auto"
                      style="width: 60px; background-color: #7c4dff; height: 2px"
                      />
                  <p><i class="fas fa-home mr-3"></i> Reconquista, R11 773, Santa Fe</p>
                  <p><i class="fas fa-envelope mr-3"></i> navarro.carlossaul@inta.gob.ar</p>
                  <p><i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                  <p><i class="fas fa-print mr-3"></i> + 01 234 567 89</p>
                </div>
                {/* <!-- Grid column --> */}
              </div>
              {/* <!-- Grid row --> */}
            </div>
          </section>
          {/* <!-- Copyright --> */}
        </footer>
        </>
    )
}

export default Footer;