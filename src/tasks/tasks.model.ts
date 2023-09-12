export class Task {
    desc: string;
    TaskId: Task;
    constructor(
        public id:string,
        public title:string,
        public descrition:string,
        public  priority:number,
        ){}
}