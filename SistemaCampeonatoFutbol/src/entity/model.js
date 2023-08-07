class campeonato {
  constructor(nombre) {
    this.nombre = nombre;
  }
}
class EquipoFutbol {
  constructor(
    sede,
    nombre,
    fechaCreacion,
    categoría,
    escudo,
    coloresedelEquipo,
    alineacion,
    estretegia
  ) {
    this.sede = sede;
    this.nombre = nombre;
    this.fechaCreacion = new Date(fechaCreacion);
    this.categoría = categoría;
    this.escudo = escudo;
    this.coloresedelEquipo = coloresedelEquipo;
    this.alineacion = alineacion;
    this.estretegia = estretegia;
  }
}

class Jugador {
  constructor(nombres, apellidos, fechaNacimiento, posicion, numeroCamiseta) {
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.fechaNacimiento = fechaNacimiento;
    this.posicion = posicion;
    this.numeroCamiseta = numeroCamiseta;
  }
}
class Arbitro {}
