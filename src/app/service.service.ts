import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetservicesService {
  concat: string;

  constructor( private _http:HttpClient) { }
  currentuser;
  isAdmin: boolean;
  url="https://6c352f6a.ngrok.io/api/KB/GetArticles?getall=0&categ=";
  add_article="https://6c352f6a.ngrok.io/api/KB/InsertUpdateKBAricles";
  URLfetchDataById = 'https://6c352f6a.ngrok.io/api/KB/GetKBArticlesById?ArticleId=';
  getArticles="https://6c352f6a.ngrok.io/api/KB/GetCategories";
  URLInsertUpdate = 'https://6c352f6a.ngrok.io/api/KB/InsertUpdateKBAricles';

  readmore="https://6c352f6a.ngrok.io/api/KB/GetReadArticle?ArticleId=";
  pagination:string="https://6c352f6a.ngrok.io/api/KB/GetArticles?getall=0&categ=&";
  // search="https://b78498dc.ngrok.io/api/KB/GetArticles?getall=0&SearchString=";

  search="https://6c352f6a.ngrok.io/api/KB/GetArticles?getall=0&SearchString=";


  // search="https://b78498dc.ngrok.io/api/KB/GetArticles?getall=0&categ=1&Page=1&SearchString=";





  public getAllKbArticle() {
    return this._http.get(this.url);
}

// public getPageByNumber(number:number){
//   this.cat="&Page="+number;
//   console.log("pagination"+this.cat);
//   return this._http.get(this.url+this.cat);
//   }



  getAllData(){
     return this._http.get(this.url);
  }
  getCategories(){
    return this._http.get(this.getArticles);
  }
  addArticles(item){
    let body=JSON.stringify(item);
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.add_article,body,{headers:head});
  }





UpdateArticle(item){
    let body=JSON.stringify(item);
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.URLInsertUpdate,body,{headers:head});
  }
  // editarticle(data:any)
  // {
  //   let body=JSON.stringify(data);

  //  let head=new HttpHeaders().set('Content-Type','application/json');
  //   return this._http.post<Articles>(this.URLInsertUpdate,body);

  // }

  getArticleById(data){
    return this._http.get(this.readmore + data);
  }

    public getArticleBySearch(value) {
      return this._http.get(this.search + value);
  }

  getPageByNumber(num){
    this.concat="categ="+"&Page="+num;
    return this._http.get(this.pagination+this.concat);
}
}
