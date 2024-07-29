import { Injectable } from "@angular/core";
import { type NewTaskData } from "./task/task.model";
@Injectable({providedIn: 'root'})

export class TasksService{
    private tasks = [
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

      getUserTask(userid: string){
        return this.tasks.filter((task) => task.userid === userid)
      }

      addTask(taskData: NewTaskData, userid: string){
        this.tasks.push({
            id: new Date().getTime().toString(),
            userid: userid,
            title: taskData.title,
            summary: taskData.summary,
            duedate: taskData.date,
          })
      }

      removeTask(id: string){
        this.tasks = this.tasks.filter((task) => task.id !== id);
    
      }
}