import { Routes } from "@angular/router";
import { MentorComponent } from "./mentor/mentor.component";
import { NotFoundComponent } from "./shared/components/not-found/not-found.component";

export const routes: Routes = [
  { path: "admin", loadComponent: () => import("./admin/admin.component") },
  {
    path: "students",
    loadChildren: () => import("./students/students.routes"),
  },
  { path: "mentor", component: MentorComponent },
  { path: "not-found", component: NotFoundComponent },
  { path: "**", redirectTo: "not-found" },
];
