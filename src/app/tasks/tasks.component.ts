import { Component, Input } from '@angular/core';
import { TaskComponent } from "../task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) userid!: string;
  @Input({ required: true }) name!: string;

  isAddingTask = false;
  tasks = [
    {
      id: 't1',
      userid: 'u1',
      title: "Complete learning",
      summary: "Learn all basic and advanced features of Angular",
      duedate: "2024-07-25",
    },
    {
      id: 't2',
      userid: 'u2',
      title: "Prepare Project Report",
      summary: "Compile the project report for Q3 and include all relevant data and statistics.",
      duedate: "2024-07-30",
    },
    {
      id: 't3',
      userid: 'u3',
      title: "Fix Login Bug",
      summary: "Resolve the issue where the login button is unresponsive.",
      duedate: "2024-07-28",
    },
  ];

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userid === this.userid);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
  
  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask(){
    this.isAddingTask=false;
  }
}
