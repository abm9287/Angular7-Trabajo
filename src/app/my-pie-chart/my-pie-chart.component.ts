import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-my-pie-chart",
  templateUrl: "./my-pie-chart.component.html",
  styleUrls: ["./my-pie-chart.component.css"]
})
export class MyPieChartComponent implements OnInit {
  public pieChartLabels = [
    "Desarrollo de Software",
    "Diseño de Modas",
    "Arte Culinario",
    "Marketing",
    "Guia de Turismo"
  ];
  public pieChartData = [65, 59, 80, 81, 56];
  public pieChartType = "pie";
  constructor() {}

  ngOnInit() {}
}
