import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { StudentsComponent } from './students/students.component';
import { MentorComponent } from './mentor/mentor.component';

export const routes: Routes = [
    { path: 'admin', component: AdminComponent },
    { path: 'students', component: StudentsComponent },
    { path: 'mentor', component: MentorComponent },
];
