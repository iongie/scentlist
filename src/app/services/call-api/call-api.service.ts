import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { catchError, throwError } from 'rxjs';
import { Formulas } from '../../interfaces/formula.interface';

@Injectable({
  providedIn: 'root'
})
export class CallApiService {

  constructor(
    private http: HttpClient,
  ) { }

  read(){
    let headers = new HttpHeaders();
    headers = headers.append('X-Bin-Meta', "false");

    if (environment.xMasterKey) {
      headers = headers.append('X-Master-Key', environment.xMasterKey);
    }

    if (environment.xAccessKey) {
      headers = headers.append('X-Access-Key', environment.xAccessKey);
    }
    return this.http.get(
      environment.jsonBinAPi + 'b/'+environment.binId,
      {
        headers: headers
      }
    ).pipe(
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }

  update(data: Formulas[]){
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');

    if (environment.xMasterKey) {
      headers = headers.append('X-Master-Key', environment.xMasterKey);
    }

    if (environment.xAccessKey) {
      headers = headers.append('X-Access-Key', environment.xAccessKey);
    }
    return this.http.put(
      environment.jsonBinAPi + 'b/'+environment.binId,
      {
        "formula": data
      },
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
