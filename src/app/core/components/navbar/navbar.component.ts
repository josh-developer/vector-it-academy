import { Component, OnInit } from "@angular/core";
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge';

@Component({
  selector: "app-navbar",
  templateUrl: "navbar.component.html",
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatToolbarModule, MatBadgeModule]
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
