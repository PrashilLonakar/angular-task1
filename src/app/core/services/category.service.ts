import { Injectable } from '@angular/core';
import { HttpWrapperService } from './http-wrapper.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http : HttpWrapperService) { }

  getCategories(){
    return this.http.get('/products/categories');
  }

  getProductByCategory(requestUrl : any){
    let url = '/products/category/' + requestUrl;
    return this.http.get(url);
  }

  getProduct(id : number){
    let url = '/products/' + id;
    return this.http.get(url);
  }
}
