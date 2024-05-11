import { Routes } from "@angular/router";

export default [
  {
    path: "",
    pathMatch: "full",
    loadComponent: () =>
      import("./students.component").then((c) => c.StudentsComponent),
  },
] as Routes;
