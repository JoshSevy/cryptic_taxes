import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage-container',
  templateUrl: './homepage-container.component.html',
  styleUrls: ['./homepage-container.component.scss'],
})
export class HomepageContainerComponent implements OnInit {
  public loaded: boolean = false;
  public log!: string;
  constructor() {}

  ngOnInit(): void {
    this.loaded = false;
    console.log("%cFun Stuff", "color: red; font-size: 20px; text-decoration: underline;");
  }
}
