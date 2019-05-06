import { Component, OnInit } from "@angular/core";
import * as jsPDF from "jspdf";

@Component({
  selector: "app-my-bar-chart",
  templateUrl: "./my-bar-chart.component.html",
  styleUrls: ["./my-bar-chart.component.css"]
})
export class MyBarChartComponent implements OnInit {
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels = [
    "Desarrollo de Software",
    "Diseño de Modas",
    "Arte Culinario",
    "Marketing",
    "Guia de Turismo"
  ];
  public barChartType = "bar";
  public barChartLegend = true;

  public barChartData = [
    { data: [65, 59, 40, 41, 56, 55, 40], label: "Series A" },
    { data: [48, 16, 26, 24, 43, 14, 20], label: "Series B" }
  ];

  constructor() {}

  ngOnInit() {}
  // Formulario

  verPdf() {
    const doc = new jsPDF({
      orientation: "p",
      unit: "mm",
      format: "a4"
    });

    /*Titulo*/
    doc.setFont("times");
    doc.setFontType("arial");
    doc.setFontSize(25);

    /*Datos datos generales estudiante*/
    doc.setTextColor(8, 0, 80);
    doc.text(95, 13, "Formulario");
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(18);
    doc.text(10, 18, "Datos generales:");
    doc.setFontSize(14);
    doc.text(10, 25, "Nombres:", doc.rect(35, 21, 50, 5));
    doc.text(90, 25, "Apellidos:", doc.rect(110, 21, 35, 5));
    doc.text(150, 25, "C.I:", doc.rect(175, 21, 25, 5));
    doc.text(10, 32, "Ciudad:", doc.rect(35, 27, 40, 5));
    doc.text(90, 32, "Canton:", doc.rect(110, 27, 35, 5));
    doc.text(150, 32, "Parroquia:", doc.rect(175, 27, 25, 5));
    doc.text(10, 38, "Dirección:", doc.rect(35, 33, 40, 5));
    doc.text(88, 38, "Celular:", doc.rect(110, 33, 35, 5));
    doc.text(10, 44, "Correo:", doc.rect(35, 40, 110, 5));
    /* Línea de separación */
    doc.line(5, 47, 205, 47);
    /* Datos de las etnia*/
    doc.setFontSize(18);
    doc.text(10, 54, "Etnia:");

    doc.setFontSize(8);
    doc.text(10, 60, "Tipo:", doc.rect(35, 56, 140, 6));
    doc.text(40, 60, "Indìgena", doc.circle(65, 59, 2, "S"));
    doc.text(75, 60, "Mestizo", doc.circle(105, 59, 2, "S"));
    doc.text(115, 60, "Montuvio", doc.circle(140, 59, 2, "S"));
    doc.text(150, 60, "Afro", doc.circle(165, 59, 2, "S"));

    /* Línea de separación */
    doc.line(5, 71, 205, 71);

    /* tabla */
    doc.setFontSize(18);
    doc.text(10, 77, "Formación Académica:");

    /* cuadro */
    doc.setFontSize(14);
    doc.text(20, 88, "Colegio");
    doc.text(55, 88, "Especialidad");
    doc.text(95, 88, "Año de Culminaciòn");
    doc.rect(10, 82, 190, 10);
    doc.rect(10, 82, 190, 20);
    doc.rect(10, 82, 190, 30);
    doc.line(45, 82, 45, 112);
    doc.line(90, 82, 90, 112);

    doc.setFontSize(14);
    /* Tabla de jornada */
    doc.text(10, 140, "Jornada:", doc.rect(56, 135, 145, 15));
    doc.text(61, 140, "Matutino", doc.circle(90, 138, 2));
    doc.text(100, 140, "Vepertino", doc.circle(125, 138, 2));
    doc.text(145, 140, "Nocturno", doc.circle(180, 138, 2));

    doc.setFontSize(11);
    doc.text(10, 155, " Comentarios:", doc.line(56, 155, 200, 155));
    doc.line(56, 160, 200, 160);
    doc.line(56, 165, 200, 165);

    doc.save("Solicitud de ingreso.pdf");
  }
  descargar() {
    const doc = new jsPDF({
      orientation: "p",
      unit: "mm",
      format: "a4"
    });

    /*Titulo*/
    doc.setFont("times");
    doc.setFontType("arial");
    doc.setFontSize(25);
    doc.setTextColor(8, 0, 80);
    doc.text(55, 50, "SOLICITUD DE ANULACIÓN"), doc.setTextColor(0, 0, 0);
    doc.setFontSize(12);
    doc.text(10, 70, "Quito, ____de______del________."),
      doc.text(
        10,
        80,
        "Yo________________________________________del número de cédula______________________________,"
      ),
      doc.text(
        10,
        90,
        "solicito se anule mi anterior solicitud de ingreso para el periodo año lectivo____________________________,"
      ),
      doc.text(
        10,
        100,
        "para la carrera de ___________de este prestigioso instituto."
      ),
      doc.text(
        10,
        120,
        "Por las siguientes razones: __________________________________________________________________"
      ),
      doc.text(
        10,
        130,
        "________________________________________________________________________________________"
      ),
      doc.text(
        10,
        140,
        "________________________________________________________________________________________."
      ),
      doc.text(10, 170, "Atentamente"),
      doc.text(10, 180, "Firma: _________________"),
      doc.save("Solicitud de ingreso.pdf");
  }

  aceptar() {
    const doc = new jsPDF({
      orientation: "p",
      unit: "mm",
      format: "a4"
    });

    /*Titulo*/
    doc.setFont("times");
    doc.setFontType("arial");
    doc.setFontSize(25);
    doc.setTextColor(8, 0, 80);
    doc.text(55, 50, "COMPROBANTE DE ACEPTACIÓN"), doc.setTextColor(0, 0, 0);
    doc.setFontSize(12);

    doc.text(10, 70, "Quito, ____de______del________."),
      doc.text(
        10,
        100,
        "Nos complace informarle que usted,______________________ con número de cédula de identidad "
      ),
      doc.text(
        10,
        110,
        "________________, que ha sido aceptado por el prestigioso Instituto Tecnológico Superior Yavirac."
      ),
      doc.text(
        10,
        120,
        "Acercarse al Instituto en la fecha_____________________, para que proceda con la respectiva matrícula."
      );
    doc.text(
      10,
      130,
      " que corresponde al presente año lectivo_______________"
    ),
      doc.text(10, 185, "Atentamente"),
      doc.text(10, 195, "Firma: _________________"),
      doc.save("Comprobante de aceptación.pdf");
  }
}
