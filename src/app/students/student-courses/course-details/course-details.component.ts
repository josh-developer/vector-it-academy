import { Component, OnInit, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ICourse } from "@models/shared/i-course";

@Component({
  selector: "course-details",
  template: "Course details",
  standalone: true,
})
export default class CourseDetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);

  courseDetails?: ICourse;

  ngOnInit() {
    this.route.queryParams.subscribe((queryParams) => {
      console.log(queryParams);
    });

    this.courseDetails = this.route.snapshot.data["courseDetails"];
    console.log(this.courseDetails);
  }
}
