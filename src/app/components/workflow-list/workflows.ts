// export class Workflow {
//   constructor(sno: number, title: string, desc: string) {}
// }

export interface Workflow {
    title: string;
    desc: string;
    id: number;
    completed: boolean;
  }