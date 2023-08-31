class VeiculoCRT {
    public latitude: number;
    public longitude: number;
  
    constructor(latitude: number, longitude: number) {
      this.latitude = latitude;
      this.longitude = longitude;
    }
  
    mover(latitude: number, longitude: number) {
      this.latitude = latitude;
      this.longitude = longitude;
    }
  }
  
  class VeiculoEletrico extends VeiculoCRT {
    private bateria: number;
  
    constructor(latitude: number, longitude: number, bateria: number) {
      super(latitude, longitude);
      this.bateria = bateria;
    }
  
    carregarBateria(novoNivel: number) {
      this.bateria = novoNivel;
    }
  }
  
  class VeiculoEletricoVoador extends VeiculoEletrico {
    private altitude: number;
  
    constructor(latitude: number, longitude: number, bateria: number, altitude: number) {
      super(latitude, longitude, bateria);
      this.altitude = altitude;
    }
  
    moverVerticalmente(altitude: number) {
      this.altitude = altitude;
    }
  }
  
  export { VeiculoCRT, VeiculoEletrico, VeiculoEletricoVoador };
  