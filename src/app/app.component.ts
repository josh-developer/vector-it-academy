import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NavbarComponent } from "./core/components/navbar/navbar.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <main class="p-3">
      <router-outlet />
    </main>
  `,
  styles: [],
})
export class AppComponent {}

/*
Core
  1. Landing page (Welcome + Course details)
  2. Sign in - Sign up
Students
  3. my.courses page
  4. Course details
  5. Join course page (form + payment)
  6. owned course page (history, roadmap, links)
*/
