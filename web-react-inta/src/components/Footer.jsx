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

        
        </footer>  
        </>
    )
}

export default Footer;