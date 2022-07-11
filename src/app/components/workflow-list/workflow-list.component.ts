import { Component, OnInit } from '@angular/core';
import { Workflow } from './workflows';
@Component({
  selector: 'app-workflow-list',
  templateUrl: './workflow-list.component.html',
  styleUrls: ['./workflow-list.component.css'],
})
export class WorkflowListComponent implements OnInit {
  workflowList : Workflow[];
  constructor() {
    this.workflowList = [
      {
        title: 'Heading1',
        desc: 'This is desc',
        id: 1,
        completed: true,
      },
      {
        title: 'Heading2',
        desc: 'This is desc2',
        id: 1,
        completed: false,
      }
    ]
  }

  ngOnInit(): void {}

  addWorkflow(workflow:Workflow){
    workflow = {
      title: 'Heading 3',
      id: 3,
      desc: 'Desc 3',
      completed: false,
    }
    console.log(workflow); 
    this.workflowList.push(workflow); 
  }
}
