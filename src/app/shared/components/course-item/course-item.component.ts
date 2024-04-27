import { Component, Input, OnInit } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { ICourse } from "@models/shared/i-course";
import { MatTooltipModule } from "@angular/material/tooltip";
@Component({
  selector: "app-course-item",
  templateUrl: "course-item.component.html",
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatTooltipModule],
})
export class CourseItemComponent implements OnInit {
  @Input() item!: ICourse;
  @Input() purchased: boolean = false;

  ngOnInit() {}
}
