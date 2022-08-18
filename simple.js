console.log("simple.js has loaded")

const template = document.createElement('template');

template.innerHTML = `
  <div>
    Hello Weather App
  </div>
`

class WeatherCard extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ 'mode': 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {



    this.$card = this._shadowRoot.querySelector('div');

 
    let $townName = document.createElement('p');
    $townName.innerHTML = `latitude: ${ this.latitude}`;
    this._shadowRoot.appendChild($townName);
    let $temperature =  document.createElement('p');
    $temperature.innerHTML = `Longitude: ${this.longitude}`


    this._shadowRoot.appendChild($temperature);
  }

  get longitude() {
    return this.getAttribute('longitude');
  }

  get latitude() {
    return this.getAttribute('latitude');
  }
}

window.customElements.define('weather-card', WeatherCard);