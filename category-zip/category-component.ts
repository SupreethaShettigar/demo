import { Category } from './../model/Category';
import { Component, OnInit } from '@angular/core';

import { Router, Event, NavigationEnd } from '@angular/router';
import { CategoryService } from './../category.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  category:Category
  successFlag: boolean
  errorFlag: boolean
  constructor(public authService: CategoryService, public router: Router) {
    this.initCategory()
  }

  ngOnInit() {
  }

  categorySubmit(categoryForm) {

    this.successFlag = false
    this.errorFlag = false

    this.authService.addCategory(this.category)
      .subscribe((res: Category) => {
        
        if (res !== null) {
          this.successFlag = true
          this.authService.categoryStatus = true
          this.router.navigateByUrl('/category')
        }
        else {
          this.errorFlag = true
          this.authService.categoryStatus = false
        }
      }, err => {
        console.log(err)
        this.errorFlag = true
        this.authService.categoryStatus = false
      })
      
  }
  
  
  initCategory() {
    this.category = {
      cid: 0,
      categoryName: '',
      
    }
  }
}
