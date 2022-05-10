import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../core/services/category.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  product: any = [];
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

    this.getProduct(productId)
  }

  getProduct(requestUrl: any){
    this.categoryService.getProduct(requestUrl).subscribe((response : any) => {
      if(response.status == 200){
        this.product =  response.body;
      }
    },
    (error: any) => {
      console.log(error);
    })
  }

}
