import { Delete, Injectable, NotFoundException } from '@nestjs/common';
import { Task } from 'src/tasks/tasks.model';

@Injectable()
export class TasksService {
 
 private   tasks:Task[]=[]
//create an array call tasks in which anything inside that array must follow the type description
    insertTask(title:string,desc:string,priority:number){
        const TaskId=(Math.floor(Math.random()*10
        ) ).toString()
        //the TaskId is a randomize  number in int that uniquely is use to get a object of the response

        const newTask =new Task (TaskId,title, desc,priority) 
            this.tasks.push(newTask);
            //newTask make sure that it follows the DtO or the file transfer and push it to the tasks array which is private
        return TaskId
    }
    fetchTasks()
    { 
        // the fetchTasks return all Tasks usually associated with the get requwst by destructuring the array into many array
        return[ ...this.tasks]
    }
    fetchSingleTasks(TaskId:string)  {
        //the fetchSingleTasks uses the private function call findTask with an associated id of the tasks and must start first
        const task = this.findTask(TaskId)[0];
        //if it the task is not found throw and error else return that unique task
        if (!task) {
          throw new NotFoundException("Could not find a matching task");
        }
        return task;

}
updateTask(TaskId: string, title: string, desc: string, priority: number) {
    //upadeTask destructure the array and find that unique id corresponding to the tasks then update it specifically 
    const [task, index] = this.findTask(TaskId);
    if (!task) {
        throw new NotFoundException("Could not find a matching task");
    }
    
    // Update the task properties
    task.title = title;
    task.desc = desc;
    task.priority = priority;
    
    // Return the updated task
    return task;
}

DeleteTask(TaskId: string) {
    const task = this.findTask(TaskId)[1];
    //if it the task istrue remove the element 
    if (task) {
    this.tasks.splice(task,1)
    }
   
 
}
private findTask(id: string): [Task, number] {
    //this is  helper function that find the unique task by getting the id index i.e the TaskId  and output the task 
    const taskIndex = this.tasks.findIndex(overwriTask => overwriTask.id === id);
    const foundTask = this.tasks[taskIndex];

    if (!foundTask) {
      throw new NotFoundException("Could not find a matching task");
    }
   
    return [foundTask, taskIndex];
  }
  }