import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.css']
})
export class IndexPageComponent implements OnInit {
  array = [1, 56, 5, 47, 5, 47]
  constructor() { }

  ngOnInit() {
  }

}
