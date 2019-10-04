import { Component, OnInit } from '@angular/core';
import { kbArticles } from '../../app/kbarticle';
import { GetservicesService } from '../service.service';
import { HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { DDLCategoryName } from '../category';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
// import { Observable } from 'rxjs/observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  AddForm: FormGroup;
  arrReadMore: any;
  updatedid: any;
  Page: number;
  ngVariable:boolean=false;
  closeResult: string;
  Readmore: kbArticles[];
  arr: kbArticles[] = [];
  cat: DDLCategoryName[] = [];
  arr1: kbArticles[] = [];
  fetchData: kbArticles[] = [];
  arrReadMor: kbArticles[] = [];

  arr3:any;
  all_arr: any;
  data: any;
  page:any;
  totalItem:number;
  totalPages:number;
  allarticles:number;
error=true;
  all_article:kbArticles[]=[];
  config: any;
  collection = [];
  constructor(private _data: GetservicesService, private modalService: NgbModal, private fb: FormBuilder,private route: ActivatedRoute, private router: Router) {
    this.config = {
      currentPage: 1,
      itemsPerPage: 10

};

this.route.queryParamMap
        .map(params => params.get('page'))
        .subscribe(page => this.config.currentPage = page);

for (let i = 1; i <= 100; i++) {
  this.collection.push(`item ${i}`);
}
   }

  ngOnInit() {

    this.AddForm = this.fb.group({
      articleName: new FormControl(null, Validators.required),
      content: new FormControl(null),
      createdBy: new FormControl(null),
      previewContent: new FormControl(null),
      articleId: new FormControl(null),
      categoryName: new FormControl(null),
      createdByName: new FormControl(null),
      createdDate: new FormControl(null),
      modifiedBy: new FormControl(null),
      modifiedByName: new FormControl(null),
      modifiedDate: new FormControl(null),
      categoryId: new FormControl(null),

    })
    //
    this.getArticles();
    this.getAllCategories();
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }



  getArticles() {
    this._data.getAllData().subscribe(
      (data: kbArticles[]) => {
        this.arr = data;
        this.error=false;
        console.log(this.arr);
        this.all_arr = this.arr['kbArticles'];
      },
    );
  }
  onDelete() {
    //this._data.deletItem()
  }

  getAllCategories() {
    this._data.getCategories().subscribe(
      (x: DDLCategoryName[]) => {
        this.cat = x;
        console.log(this.cat);

      })
  }



  OnAddArticleSave(item) {
    console.log(item);
    this._data.addArticles(item
      // new kbArticles(item
        // this.AddForm.value.articleId,
        // this.AddForm.value.articleName,
        // this.AddForm.value.content,
        // this.AddForm.value.previewContent,
        // this.AddForm.value.categoryId,
        // this.AddForm.value.categoryName,
        // this.AddForm.value.createdBy,
        // this.AddForm.value.createdByName,
        // this.AddForm.value.createdDate,
        // this.AddForm.value.modifiedBy,
        // this.AddForm.value.modifiedByName,
        // this.AddForm.value.modifiedDate
      // )
    ).subscribe(
      (data: kbArticles[]) => {
        this.arr1 = data;
        console.log(this.arr1);
        // this.all_arr=this.arr1['kbArticles'];
        alert("Added successfully");
        //this.getArticles();
        this.modalService.dismissAll();
      }

    );

  }

  openEditPopup(Editpopup, item) {
    this.AddForm.patchValue({
      articleId: this.all_arr[item].articleId,
      articleName: this.all_arr[item].articleName,
      content: this.all_arr[item].content,
      previewContent: this.all_arr[item].previewContent,
      categoryId: this.all_arr[item].categoryId,
      categoryName: this.all_arr[item].categoryName,
      createdBy: this.all_arr[item].createdBy,
      createdByName: this.all_arr[item].createdByName,
      createdDate: this.all_arr[item].createdDate,
      modifiedBy: this.all_arr[item].modifiedBy,
      modifiedByName: this.all_arr[item].modifiedByName,
      modifiedDate: this.all_arr[item].modifiedDate
    });
    this.modalService.open(Editpopup, {
      size: "lg"
    });
  }

  UpdateArticles(AddForm) {
    console.log(AddForm);
    this._data.UpdateArticle(AddForm).subscribe(
      (x: any) => {
        alert('updated successfully');
        this.modalService.dismissAll();
        this._data.getAllData().subscribe(
          (data: kbArticles[]) => {
            this.arr = data;
            console.log(this.arr);
            this.all_arr = this.arr['kbArticles'];

          },
        );
      }
    );
    this.AddForm.reset();
    size: "lg"
  }


  openReadMore(readmore, item) {

    this.modalService.open(readmore,
      {
        size: "xl"
      });

    this._data.getArticleById(item.articleId).subscribe(
      (x: any) => {
        this.Readmore = x;
        console.log(this.Readmore);
      }
    )
  }
//   pageChange(newPage: number) {
// 		this.router.navigate(['/display'], { queryParams: { page: newPage } });
// 	}
// }



// search(value) {
//   if (value != "") {
//     // Search the corresponding registration entry from the list.
//     this.registrations = this.registrations.filter(x => x.name.indexOf(value) != -1);
//   }
//   }

onSearch(value) {
  if (value != "") {
    this._data.getArticleBySearch(value).subscribe(
      (data: kbArticles[]) => {
        console.log(data);
        this.arr = data;
        this.all_arr = this.arr['kbArticles'];
        console.log(this.all_arr);
      });
  }
  else
   {
    this._data.getAllData().subscribe(

      (data: kbArticles[]) => {
        this.arr = data;
        console.log(this.arr);
        // var arr = _.values(arr);
        this.all_arr = this.arr['kbArticles'];
        // console.log(this.article[1]);
        // this.article=this.artcle;
        // console.log(this.article[1]);
      });
  }
}









getPageInformation() {
  this._data.getAllData().subscribe(
    (data: kbArticles[]) => {
      this.ngVariable=true;
      this.arr = data;
      this.page = this.arr['pagerInfo'];
      console.log(this.page);
      this.totalItem = this.page.totalItems;
      this.totalPages = this.page.totalPages;
      this.all_arr = this.arr['kbArticles'];
    }
  );
}
showPage(number: number) {
  number = this.Page;
  console.log(number);
  if (number != 0) {
    this._data.getPageByNumber(number).subscribe(
      (x: any) => {
        this.arr = x;
        console.log(this.arr);
        this.all_arr = this.arr['kbArticles'];

        console.log(this.all_arr);
      }
    );
  }
}





}
