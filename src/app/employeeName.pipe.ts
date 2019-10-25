import { PipeTransform, Pipe } from '@angular/core';   

@Pipe({
    name: 'emName'
})
export  class EmployeeNamePipe implements PipeTransform{
    transform(value: string, gender:string): string{
        if(gender == "Female"){
            return "Mrs. " + value
        }else{
            return "Mr. " + value
        }
    }
}