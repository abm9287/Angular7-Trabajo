import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-my-doughnut-chart",
  templateUrl: "./my-doughnut-chart.component.html",
  styleUrls: ["./my-doughnut-chart.component.css"]
})
export class MyDoughnutChartComponent implements OnInit {
  public doughnutChartLabels = [
    "Desarrollo de Software",
    "Diseño de Modas",
    "Arte Culinario",
    "Marketing",
    "Guia de Turismo"
  ];
  public doughnutChartData = [43, 42, 25, 33, 23];
  public doughnutChartType = "doughnut";
  constructor() {}

  ngOnInit() {}
}
