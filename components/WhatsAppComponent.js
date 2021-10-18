class WhatsAppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      appVersion: "",
    };
  }

  render() {
    return (
      <div class="floatwa">
        <a
          href="https://api.whatsapp.com/send?phone=+50230905070&text=Taller%20RPM%20deseo%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="img/whatsapp.png"
            class="icoRed rounded"
            alt="WhatsApp"
            id="wa"
          />
        </a>
      </div>
    );
  }
}
