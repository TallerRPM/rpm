class FooterComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      appVersion: "",
    };
  }

  render() {
    return (
      <footer class="text-muted py-4 bg-light">
        <div class="container letraBlack">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <p class="my-3 text-center">
                <b>CONTACTENOS</b>
              </p>
              <ul class="list-group list-group-flush">
                <a
                  href="https://api.whatsapp.com/send?phone=+50230905070&text=Taller%20RPM%20deseo%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios"
                  target="_blank"
                  class="list-group-item letraBlack"
                >
                  <img
                    src="img/whatsapp.png"
                    class="align-middle arrowColor"
                    alt="WhatsApp"
                    width="35px"
                  />
                  +502 3090-5070
                </a>
                <a target="_blank" class="list-group-item letraBlack">
                  <img
                    src="img/gmail.png"
                    class="align-middle arrowColor"
                    alt="Gmail"
                    width="35px"
                  />
                  rpmtallergt@gmail.com
                </a>
                <a class="list-group-item letraBlack">
                  <img
                    src="img/location.svg"
                    class="align-middle arrowColor"
                    alt="Ubicación"
                    width="35px"
                  />
                  10 Calle 2-52 Zona 1, Ciudad de Guatemala
                </a>
              </ul>
            </div>
            <div class="col-sm-12 col-md-6">
              <p class="my-3 text-center">
                <b>SIGUENOS</b>
              </p>
              <ul class="list-group list-group-flush">
                <a
                  href="https://www.tiktok.com/@tallerrpmgt?"
                  target="_blank"
                  class="list-group-item letraBlack"
                >
                  <img
                    src="img/tiktok.png"
                    class="align-middle arrowColor"
                    alt="TikTok"
                    width="35px"
                  />
                  @tallerrpmgt
                </a>
                <a
                  href="https://www.facebook.com/rpmtallergt"
                  target="_blank"
                  class="list-group-item letraBlack"
                >
                  <img
                    src="img/facebook.png"
                    class="align-middle arrowColor"
                    alt="Gmail"
                    width="35px"
                  />
                  Taller RPM
                </a>
                <a
                  href="https://instagram.com/tallerrpmgt?utm_medium=copy_link"
                  target="_blank"
                  class="list-group-item letraBlack"
                >
                  <img
                    src="img/instagram.png"
                    class="align-middle arrowColor"
                    alt="Gmail"
                    width="35px"
                  />
                  @tallerrpmgt
                </a>
              </ul>
            </div>
          </div>
          <br />
          <p class="mb-0 text-center">
            © 2021 Todos los Derechos Resevados | Taller RPM
          </p>
        </div>
      </footer>
    );
  }
}
