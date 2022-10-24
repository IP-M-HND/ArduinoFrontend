import { Component, OnInit, Input } from "@angular/core";
import { DispositivosService } from "src/app/services/dispositivos.service";

@Component({
  selector: "app-dispositivo",
  templateUrl: "./dispositivo.component.html",
  styleUrls: ["./dispositivo.component.css"]
})
export class DispositivoComponent implements OnInit {
  @Input() dispositivo: any;
  public chek: boolean = false;
  public temperatura = 0;
  interval;
  constructor(private dispositivosService: DispositivosService) {}

  ngOnInit() {
    if (this.dispositivo.estado == "d") {
      this.chek = false;
    } else {
      this.chek = true;
    }
    this.getEventos();
    if (this.dispositivo.descripciondispositivos == "temperatura") {
      this.getTemperatura();
      this.iniciarIntervalo();
    }
  }

  iniciarIntervalo() {
    this.interval = setInterval(() => {
      this.getTemperatura();
    }, 1500);
  }

  onChange() {
    if (this.chek) {
      this.chek = false;
      this.dispositivo.estado = "d";
    } else {
      this.chek = true;
      this.dispositivo.estado = "a";
    }
    this.dispositivosService.updateDispositivo(this.dispositivo).subscribe(
      data => {},
      error => {
        console.log(error);
      }
    );
  }

  getTemperatura() {
    this.dispositivosService.getTemperatura().subscribe(
      data => {
        this.temperatura = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  getEventos() {
    this.dispositivosService
      .getEventosDispositivo(this.dispositivo.idDispositivo)
      .subscribe(
        data => {
          this.multi = [
            {
              name: this.dispositivo.descripciondispositivos,
              series: data
            }
          ];
          console.log(this.multi);
        },
        error => {
          console.log(error);
        }
      );
  }

  public multi = [];
  view: any[] = [500, 400];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = false;
  xAxisLabel = "Number";
  showYAxisLabel = false;
  yAxisLabel = "data";
  timeline = true;
  colorScheme = {
    domain: ["#E91E63", "#CDDC39", "#3F51B5", "#AAAAAA"]
  };
}
