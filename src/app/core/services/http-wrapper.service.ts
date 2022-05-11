import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
const API_ENDPOINT = environment.api_endpoint;

@Injectable({
  providedIn: 'root'
})
export class HttpWrapperService {

  constructor(private http : HttpClient) { }

  get(requestUrl): Observable<any> {
    const url = API_ENDPOINT + requestUrl;
    return this.http.get(url,{observe : 'response'});
  }

  post(requestUrl,body): Observable<any> {
    const url = API_ENDPOINT + requestUrl;
    return this.http.post(url,body,{observe : 'response'});
  }

  update(requestUrl,body): Observable<any> {
    const url = API_ENDPOINT + requestUrl;
    return this.http.put(url,body,{observe : 'response'});
  }

  delete(requestUrl): Observable<any> {
    const url = API_ENDPOINT + requestUrl;
    return this.http.delete<void>(url,{observe : 'response'});
  }
}
