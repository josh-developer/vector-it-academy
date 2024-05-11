import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn } from "@angular/router";
import { ICourse } from "@models/shared/i-course";
import { StudentsService } from "@students/services/students.service";
import { Observable } from "rxjs";

export const courseResolver: ResolveFn<ICourse | undefined> = (
  route: ActivatedRouteSnapshot
): Observable<ICourse | undefined> => {
  const studentsService = inject(StudentsService);
  const courseId = route.params["id"];

  return studentsService.getCourse(courseId);
};
