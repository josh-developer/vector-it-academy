import { Component, OnInit } from '@angular/core';
import { StudentCoursesComponent } from './my-courses/student-courses.component';

@Component({
    selector: 'app-students',
    template: `
        <student-courses />
    `,
    standalone: true,
    imports: [StudentCoursesComponent]
})

export class StudentsComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}