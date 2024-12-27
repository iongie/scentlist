import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CallApiService {

  constructor(
    private http: HttpClient,
  ) { }

  create(bin_name?:string){
    let headers = new HttpHeaders();
    headers = headers.append('X-Bin-Private', "true");

    if (!environment.xMasterKey) {
      headers = headers.append('X-Master-Key', environment.xMasterKey);
    }

    if (!environment.xAccessKey) {
      headers = headers.append('X-Access-Key', environment.xAccessKey);
    }

    if (!environment.collectionId) {
      headers = headers.append('X-Collection-Id', environment.collectionId);
    }

    if (!bin_name) {
      headers = headers.append('X-Bin-Name', bin_name!);
    }
    
    return this.http.get(
      environment.jsonBinAPi + '/b',
      {
        headers: headers
      }
    ).pipe(
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }

  read(bin_name?:string){
    let headers = new HttpHeaders();
    headers = headers.append('X-Bin-Meta', "false");

    if (!environment.xMasterKey) {
      headers = headers.append('X-Master-Key', environment.xMasterKey);
    }

    if (!environment.xAccessKey) {
      headers = headers.append('X-Access-Key', environment.xAccessKey);
    }
    return this.http.put(
      environment.jsonBinAPi + '/b/'+bin_name!,
      {
        headers: headers
      }
    ).pipe(
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }
}
