import { Component, OnInit } from "@angular/core";
import { DispositivosService } from "src/app/services/dispositivos.service";
import { error } from "util";

@Component({
  selector: "app-dispositivos",
  templateUrl: "./dispositivos.component.html",
  styleUrls: ["./dispositivos.component.css"]
})
export class DispositivosComponent implements OnInit {
  public listaDispositivos:any[];
  public cargando:boolean=false;

  constructor(private dispositivosService: DispositivosService) {}

  ngOnInit() {
    this.cargando=true;
    this.dispositivosService.getDispositivos().subscribe(
      data => {
        this.cargando=false;
        this.listaDispositivos=data;
        console.log(this.listaDispositivos)
      },
      error => {
        this.cargando=false;
        console.log(error);
      }
    );
  }
}
