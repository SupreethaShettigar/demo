import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from './model/Category';
import { User } from './model/User';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'someToken'
  }),
  withCredentials: true
};
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categoryStatus: boolean
  adminStatus: boolean
  currentUser: User
  public categorys: Category[]
  
  constructor(public http: HttpClient) {
    this.categoryStatus = false
    this.categorys = []
  }
  addCategory(category: Category) {
    return this.http.post('http://172.18.218.134:8444/grocery/category/save', category, httpOptions)
  }
  
 
}
