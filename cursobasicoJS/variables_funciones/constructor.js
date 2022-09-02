var autoNuevo = new auto("ford","scandinavia",2021);
document.write(autoNuevo);
	function auto(marca, modelo, annio)
		{
			this.marca = marca;
			this.modelo = modelo;
			this.annio = annio;
		}