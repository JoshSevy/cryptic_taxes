import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
})
export class LoadingSpinnerComponent implements OnInit {
  @Input() loading: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
