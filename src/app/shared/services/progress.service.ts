import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

// TODO implement this service using HTTP Interceptor
@Injectable({ providedIn: "root" })
export class ProgressBarService {
  progressBar$ = new BehaviorSubject(true);
}
