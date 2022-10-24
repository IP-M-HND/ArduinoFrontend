import { Component, OnInit, ViewChild } from "@angular/core";
import { DispositivosService } from "src/app/services/dispositivos.service";
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";
import { ActivatedRoute } from '@angular/router';

/*idDispositivo: 1
descripciondispositivos: "led"
estado: "d"
idEvento: 1
fecha: "2020-03-07T11:12:34"
descripcion: "encendido"*/

@Component({
  selector: "app-eventos",
  templateUrl: "./eventos.component.html",
  styleUrls: ["./eventos.component.css"]
})
export class EventosComponent implements OnInit {
  displayedColumns: string[] = [
    "idEvento",
    "descripciondispositivos",
    "fecha",
    "descripcion"
  ];
  public dataSource: MatTableDataSource<any>;
  public idDispositivo:string;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private dispositivosService: DispositivosService,
    private rutaActiva: ActivatedRoute
  ) {
    this.idDispositivo=this.rutaActiva.snapshot.params.id;
  }

  ngOnInit() {
    this.dispositivosService.getEventosDispositivos().subscribe(
      data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(this.idDispositivo);
        if(this.idDispositivo){
          this.applyFilter2(this.idDispositivo);
        }
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  applyFilter2(id) {
    const filterValue = id;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
