import { ILesson, ILink } from "./I-lesson";
import { ITariff } from "./i-tariff";

export interface ICourse {
  id: string;
  name: string;
  desc: string;
  mentorId: string;
  mentorName: string;
  imgSrc: string;
  links: ILink[];
  tariffs: ITariff[];
  lessons: ILesson[];
}
