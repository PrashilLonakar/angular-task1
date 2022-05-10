import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../core/services/category.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  productsByCategory: any = [];
  constructor(
    private categoryService : CategoryService,
    private router : Router,
    private route : ActivatedRoute,
    ) { }

  ngOnInit(): void {
    let productId: string = '';
    this.route.params.subscribe( params =>
      productId = params['id']
    );
    console.log('productId',productId);
    // setTimeout(() => {
      this.getProductByCategory(productId)
    // },5000);
  }

  getProductByCategory(requestUrl: any){
    this.categoryService.getProductByCategory(requestUrl).subscribe((response : any) => {
      if(response.status == 200){
        this.productsByCategory =  response.body;
      }
    },
    (error: any) => {
      console.log(error);
    })
  }

}
