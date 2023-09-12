import { Controller,Post ,Body, Get,Param,Patch, Delete,UseInterceptors} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { StatusCodeInterceptor } from 'src/interceptor/status-code/status-code.interceptor';

@Controller('tasks')
@UseInterceptors(StatusCodeInterceptor)
export class TasksController {
    constructor(private  readonly Taskservice:TasksService){

    }
    @Post()
    
    addTasks(@Body('title') title:string,@Body('desc') description:string,
    @Body('priority') Priority:number) :any{
    const grnId=    this.Taskservice.insertTask(title, description,Priority)
    return {id:grnId};  }
   
    @Get()
    getAllTasks(){
        return this.Taskservice.fetchTasks();
    }
    @Get(':id') 
    getSpecifyTasks(@Param('id') TaskId: string) {
        return this.Taskservice.fetchSingleTasks(TaskId);
    }
    
    @Patch(':id')
    updateTASKS(@Param('id') TaskId:string,@Body('title') title:string,@Body('desc') description:string,
    @Body('priority') Priority:number){
this.Taskservice.updateTask(TaskId,title,description,Priority)
{
    return null;
}
    }
    @Delete(':id')
    DeleteTask(@Param('id') TaskId: string){
     return   this.Taskservice.DeleteTassk(TaskId)
      

}
}
