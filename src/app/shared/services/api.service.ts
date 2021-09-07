import { environment } from 'src/environments/environment';
import { HttpClient, HttpContext, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

interface RequestOptions {
  responseType?: "json";
  observe?: "body";
  headers?: HttpHeaders | { [header: string]: string | string[]; };
  context?: HttpContext;
  params?: HttpParams | {
    [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
  };
  reportProgress?: boolean;
  withCredentials?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public pathUrl = environment.appApiUrl;

  constructor(private _httpClient: HttpClient) { }

  public get<T>(endpoint: string, options?: RequestOptions): Observable<T> {
    return this._httpClient.get<T>(this.pathUrl + endpoint, options);
  }
}
