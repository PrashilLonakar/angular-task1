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
  productId: string = '';
  constructor(
    private categoryService : CategoryService,
    private router : Router,
    private route : ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe( params =>
      this.productId = params['id']
    );
    console.log('productId',this.productId);
    // setTimeout(() => {
      this.getProductByCategory(this.productId)
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

  deleteProduct(id : number){
    this.categoryService.deleteProduct(id).subscribe((response : any) => {
      if(response.status == 200){
        console.log(response); 
        this.getProductByCategory(this.productId) 
      }
    },
    (error: any) => {
      console.log(error);
    })
  }

}
