import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-my-radar-chart",
  templateUrl: "./my-radar-chart.component.html",
  styleUrls: ["./my-radar-chart.component.css"]
})
export class MyRadarChartComponent implements OnInit {
  public radarChartLabels = [
    "Desarrollo de Software",
    "Diseño de Modas",
    "Arte Culinario",
    "Marketing",
    "Guia de Turismo"
  ];
  public radarChartData = [
    { data: [65, 59, 80, 81, 56], label: "2018" },
    { data: [48, 16, 26, 24, 43], label: "2019" }
  ];
  public radarChartType = "radar";

  constructor() {}

  ngOnInit() {}
}
