import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MyBarChartComponent } from "./my-bar-chart/my-bar-chart.component";
import { MyDoughnutChartComponent } from "./my-doughnut-chart/my-doughnut-chart.component";
import { MyRadarChartComponent } from "./my-radar-chart/my-radar-chart.component";
import { MyPieChartComponent } from "./my-pie-chart/my-pie-chart.component";
import { FormularioComponent } from "./formulario/formulario.component";
import { AnulacionComponent } from "./anulacion/anulacion.component";
import { HomeComponent } from "./home/home.component";
import { NotFoundPageComponent } from "./not-found-page/not-found-page.component";

const routes: Routes = [
  { path: "bar-chart", component: MyBarChartComponent },
  { path: "doughnut-chart", component: MyDoughnutChartComponent },
  { path: "radar-chart", component: MyRadarChartComponent },
  { path: "pie-chart", component: MyPieChartComponent },
  { path: "formulario", component: FormularioComponent },
  { path: "anulacion", component: AnulacionComponent },
  { path: "home", component: HomeComponent },
  { path: "not-found-page", component: NotFoundPageComponent },
  { path: "**", component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
