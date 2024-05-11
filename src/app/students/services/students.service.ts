import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { ICourse } from "@models/shared/i-course";
import { Observable, delay, of } from "rxjs";

export interface ICoursesResponse {
  purchased: ICourse[];
  others: ICourse[];
  all?: ICourse[];
}

const res: ICoursesResponse = {
  purchased: [
    {
      id: "asdfvffdsasda",
      name: "Angular Advanced",
      desc: "Lorem adas dsflskald goapsdjasod lkjsdflkjsdledjaslkd asld asdfasdas",
      mentorId: "asdasd1e12",
      mentorName: "Umar Sadullayev",
      imgSrc: "assets/images/angular.svg",
      // Details
      tariffs: [],
      links: [],
      lessons: [],
    },
  ],
  others: [
    {
      id: "dfsdfdsfsd",
      name: "React Advanced",
      desc: "Lorem adas dsflskald goapsdjasod lkjsdflkjsdledjaslkd asld asdfasdas",
      mentorId: "asdasd1e12",
      mentorName: "John London",
      imgSrc: "assets/images/angular.svg",
      // Details
      tariffs: [],
      links: [],
      lessons: [],
    },
    {
      id: "asdavgsdfdsfsdda",
      name: "Nodejs Advanced",
      desc: "Lorem adas dsflskald goapsdjasod lkjsdflkjsdledjaslkd asld asdfasdas",
      mentorId: "asdasd1e12",
      mentorName: "Husniddin Qurbonboyev",
      imgSrc: "assets/images/angular.svg",
      // Details
      tariffs: [],
      links: [],
      lessons: [],
    },
  ],
};
res.all = [...res.others, ...res.purchased];
@Injectable({ providedIn: "root" })
export class StudentsService {
  private httpClient$ = inject(HttpClient);

  getAllCourses(): Observable<ICoursesResponse> {
    return of(res);
    // this.httpClient$.get<ICoursesResponse>(
    //   "api"
    // );
  }

  getCourse(id: string): Observable<ICourse | undefined> {
    return of(res.all?.find((course) => course.id === id));
    // this.httpClient$.get<ICourse>(
    //   "api"
    // );
  }
}
