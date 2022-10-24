import { Component, OnInit, ViewChild } from "@angular/core";
import { DispositivosService } from "src/app/services/dispositivos.service";
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: "app-parametros",
  templateUrl: "./parametros.component.html",
  styleUrls: ["./parametros.component.css"]
})
export class ParametrosComponent implements OnInit {
  public dispositivos: any[];
  public parametros: any[];
  public idParametro = 0;
  public descripcion = "";
  public valor = "";
  public idDispositivo = 0;

  displayedColumns: string[] = [
    "idParametro",
    "descripcion",
    "descripciondispositivos",
    "valor",
    "accion"
  ];

  public dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private dispositivosService: DispositivosService) {}

  ngOnInit() {
    this.getDispositivos();
    this.getParametros();
  }

  getDispositivos() {
    this.dispositivosService.getDispositivos().subscribe(
      data => {
        this.dispositivos = data;
        console.log(this.dispositivos);
      },
      error => {
        console.log(error);
      }
    );
  }

  getParametros() {
    this.dispositivosService.getParametros().subscribe(
      data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(this.dataSource);
      },
      error => {
        console.log(error);
      }
    );
  }

  editParametro(element:any){
    this.idDispositivo=element.idDispositivo;
    this.idParametro=element.idParametro;
    this.descripcion=element.descripcion;
    this.valor=element.valor;
  }

  saveParametro() {
    if(this.idParametro>0){
      this.dispositivosService
      .updateParametro({
        idParametro: this.idParametro,
        descripcion: this.descripcion,
        valor: this.valor,
        idDispositivo: this.idDispositivo
      })
      .subscribe(
        data => {
          console.log(data);
          this.idParametro = 0;
          this.descripcion = "";
          this.valor = "";
          this.idDispositivo = 0;
          this.getParametros();
        },
        error => {
          console.log(error);
        }
      );
    }else{
      this.dispositivosService
      .crearParametros({
        idParametro: this.idParametro,
        descripcion: this.descripcion,
        valor: this.valor,
        idDispositivo: this.idDispositivo
      })
      .subscribe(
        data => {
          console.log(data);
          this.idParametro = 0;
          this.descripcion = "";
          this.valor = "";
          this.idDispositivo = 0;
          this.getParametros();
        },
        error => {
          console.log(error);
        }
      );
    }
    
  }
}
