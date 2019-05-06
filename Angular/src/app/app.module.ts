import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { ChartsModule } from "ng2-charts";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MyBarChartComponent } from "./my-bar-chart/my-bar-chart.component";
import { MyDoughnutChartComponent } from "./my-doughnut-chart/my-doughnut-chart.component";
import { MyRadarChartComponent } from "./my-radar-chart/my-radar-chart.component";
import { MyPieChartComponent } from "./my-pie-chart/my-pie-chart.component";
import { FormularioComponent } from "./formulario/formulario.component";
import { AnulacionComponent } from "./anulacion/anulacion.component";
import { HomeComponent } from "./home/home.component";
import { NotFoundPageComponent } from "./not-found-page/not-found-page.component";

@NgModule({
  declarations: [
    AppComponent,
    MyBarChartComponent,
    MyDoughnutChartComponent,
    MyRadarChartComponent,
    MyPieChartComponent,
    FormularioComponent,
    AnulacionComponent,
    HomeComponent,
    NotFoundPageComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ChartsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
