class NavbarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      appVersion: "",
    };
  }

  render() {
    return (
      <nav
        class="
          navbar navbar-expand-lg navbar-light
          bg-light
          site-header
          sticky-top
        "
      >
        <a class="navbar-brand" href="index.html">
          <img src="img/logo.jpeg" width="90px" alt="Taller RPM" /> Taller RPM
        </a>
        <button
          class="navbar-toggler navcolor"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="text-center collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="index.html">
                Inicio <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="taller.html">
                Taller <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="repuestos.html">
                Repuestos <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contactenos.html">
                Contáctenos <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item active">
              <a
                class="nav-link"
                target="_blank"
                href="https://api.whatsapp.com/send?phone=+50230905070&text=Taller%20RPM%20deseo%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios"
              >
                <img src="img/whatsapp.png" width="25px" alt="WhatsApp" />
                +502 3090-5070
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
