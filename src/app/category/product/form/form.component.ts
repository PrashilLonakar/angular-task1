import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from "@angular/common";
import { CategoryService } from '../../../core/services/category.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  productForm : FormGroup;
  isSubmitted = false;
  isEdit = this.route.snapshot.data.type === "edit" ? true : false;
  button : string;
  loading: boolean;
  categories: any;
  product: any;
  productId: number;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private _location: Location,
    private categoryService : CategoryService
  ) { }

  ngOnInit(): void {
    let category: string = '';
    this.route.params.subscribe( params =>
      category = params['category']
    );
    this.route.params.subscribe( params =>
      this.productId = params['id']
    );

   this.button =  this.isEdit ? "Update Product" : "Create Product";
   this.productForm = this.fb.group({
    title: ["", Validators.required],
    price: ["", Validators.required],
    description : [""],
    image: [""],
    category: ["", Validators.required]
  });
    if(!this.isEdit){
      this.productForm.patchValue({
        category : category
      });
    }else{
      this.getProduct(this.productId);
    }
  this.getAllCategories();
  }

  
  getAllCategories(){
    this.categoryService.getCategories().subscribe((response : any) => {
      if(response.status == 200){
        this.categories =  response.body;
        console.log(response);
        console.log(response?.body);
      }
    },
    (error: any) => {
      console.log(error);
    })
  }

  getProduct(requestUrl: any){
    this.categoryService.getProduct(requestUrl).subscribe((response : any) => {
      if(response.status == 200){
        this.product =  response.body;
        this.productForm.patchValue({
          title: this.product?.title,
          price: this.product?.price,
          description : this.product?.description,
          image: this.product?.image,
          category: this.product?.category
        });
      }
    },
    (error: any) => {
      console.log(error);
    })
  }

  submitForm(){
    this.isSubmitted = true;
    const { value, valid } = this.productForm;
    if(!valid){
      return;
    }
    console.log(value);
    if(!this.isEdit){
      this.categoryService.addProduct(value).subscribe((response : any) => {
        if(response.status == 200){
          console.log(response);
          this._location.back();
        }
      },
      (error: any) => {
        console.log(error);
      })
    }else{
      this.categoryService.editProduct(this.productId,value).subscribe((response : any) => {
        if(response.status == 200){
          console.log(response);
          this._location.back();    
        }
      },
      (error: any) => {
        console.log(error);
      })
    }
  }

  backClicked() {
    this._location.back();
  }
}
