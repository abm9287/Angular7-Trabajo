import { Component, OnInit } from "@angular/core";
import * as jsPDF from "jspdf";

@Component({
  selector: "app-anulacion",
  templateUrl: "./anulacion.component.html",
  styleUrls: ["./anulacion.component.css"]
})
export class AnulacionComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  verPdf() {
    const doc = new jsPDF({
      orientation: "p",
      unit: "mm",
      format: "a4"
    });
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
}
