import { Component, OnInit, inject } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "not-found",
  template: `<h1>404 Error</h1>
    <p class="zoom-area"><b>Kechirasiz.</b> Siz adashgan ko'rinasiz :(</p>
    <section class="error-container">
      <span class="four"><span class="screen-reader-text">4</span></span>
      <span class="zero"><span class="screen-reader-text">0</span></span>
      <span class="four"><span class="screen-reader-text">4</span></span>
    </section>
    <div class="link-container">
      <a [routerLink]="['/students']" class="more-link">Ortga qaytish</a>
    </div>`,
  standalone: true,
  imports: [RouterLink],
  styleUrl: "not-found.component.scss",
})
export class NotFoundComponent {}
