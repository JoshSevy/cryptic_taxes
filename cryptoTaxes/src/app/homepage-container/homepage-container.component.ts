import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage-container',
  templateUrl: './homepage-container.component.html',
  styleUrls: ['./homepage-container.component.scss'],
})
export class HomepageContainerComponent implements OnInit {
  isLoaded!: boolean;
  constructor() {}

  ngOnInit(): void {
    this.isLoaded = true;
  }
}
