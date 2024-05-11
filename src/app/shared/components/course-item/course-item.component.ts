import { Component, Input, OnInit, inject } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { ICourse } from "@models/shared/i-course";
import { MatTooltipModule } from "@angular/material/tooltip";
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: "app-course-item",
  templateUrl: "course-item.component.html",
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatTooltipModule],
})
export class CourseItemComponent implements OnInit {
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  @Input() item!: ICourse;
  @Input() purchased: boolean = false;

  ngOnInit() {}

  onButtonClick(itemId: string): void {
    this.router.navigate([itemId], {
      queryParams: { test: 40, test3: 50 },
      relativeTo: this.route,
    });
  }
}
