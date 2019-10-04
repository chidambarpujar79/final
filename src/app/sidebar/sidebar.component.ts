import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  visibleSidebar: boolean;
  visibleSidebar12;

  constructor() { }

  ngOnInit() {

   }
   mouseEnter(){
    console.log("mouse working");
    this.visibleSidebar = true;


  }


 }

