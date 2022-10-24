import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DispositivosService {

  private url: string;
  private httpHeaders: HttpHeaders;

  constructor(private httpClient: HttpClient) {
    this.url = environment.API_URL;
    this.httpHeaders = new HttpHeaders();
    this.httpHeaders.append('Access-Control-Allow-Origin', '*');
    this.httpHeaders.append('Access-Control-Allow-Methods', '*');
  }

  getDispositivos(): Observable<any> {
    return this.httpClient.get(this.url + 'dispositivos', { headers: this.httpHeaders });
  }

  getEventosDispositivos(): Observable<any> {
    return this.httpClient.get(this.url + 'eventosDispositivos', { headers: this.httpHeaders });
  }

  updateDispositivo(dispositivo:any):Observable<any>{
    return this.httpClient.put(this.url+'dispositivos/'+dispositivo.idDispositivo,dispositivo,{ headers: this.httpHeaders });
  }

  crearParametros(parametros: any): Observable<any> {
    return this.httpClient.post(this.url + 'parametros/', parametros, { headers: this.httpHeaders });
  }

  getParametros(): Observable<any> {
    return this.httpClient.get(this.url + 'parametros', { headers: this.httpHeaders });
  }

  updateParametro(parametro:any):Observable<any>{
    return this.httpClient.put(this.url+'parametros/'+parametro.idParametro,parametro,{ headers: this.httpHeaders });
  }

  getTemperatura(): Observable<any> {
    return this.httpClient.get(this.url + 'temperatura', { headers: this.httpHeaders });
  }

  getEventosDispositivo(idDispositivo): Observable<any> {
    return this.httpClient.get(this.url + 'temperatura/'+idDispositivo, { headers: this.httpHeaders });
  }
  /*destroyContact(codContact): Observable<any> {
    return this.httpClient.delete(this.url + 'contacts/destroyContact/' + codContact, { headers: this.httpHeaders });
  }

  updateContact(contact: Contact): Observable<any> {
    return this.httpClient.put(this.url + 'contacts/updateContact/' + contact.codContact, contact, { headers: this.httpHeaders });
  }

  createContact(contact: Contact): Observable<any> {
    return this.httpClient.post(this.url + 'contacts/createContact', contact, { headers: this.httpHeaders });
  }

  getContactByCod(codContact: number): Observable<any> {
    return this.httpClient.get(this.url + 'contacts/getContactByCod/' + codContact, { headers: this.httpHeaders });
  }*/
}
