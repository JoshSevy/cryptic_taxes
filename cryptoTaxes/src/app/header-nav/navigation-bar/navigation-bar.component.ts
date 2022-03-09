import { Component, OnInit } from '@angular/core';

export interface NavItem {
  displayName: string;
  route: string;
}

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent implements OnInit {
  public tabs: NavItem[] = [
    {
      displayName: 'Placeholder1',
      route: '',
    },
    {
      displayName: 'Placeholder2',
      route: '',
    },
    {
      displayName: 'Placeholder3',
      route: '',
    },
    {
      displayName: 'Placeholder4',
      route: '',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
