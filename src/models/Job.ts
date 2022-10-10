import { Requirements } from "./Requirements";


export class Job {
    constructor(
        public id: number,
        public company: string,
        public description: string,
        public position: string,
        public time: string,
        public place: string,
        public requirements: Requirements[]
    ) {
    }
}