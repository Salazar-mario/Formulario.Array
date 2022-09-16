import { Component } from '@angular/core';
import { Employee } from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employeeArray: Employee[] = [
    
  ];

  selectedEmployee: Employee = new Employee ();

  openForEdit(employee: Employee) {
    this.selectedEmployee = employee;
  }

  addOrEdit(){

    if(this.selectedEmployee.id ===0){
      this.selectedEmployee.id = this.employeeArray.length + 1;
    this.employeeArray.push(this.selectedEmployee);
    }

    

    this.selectedEmployee = new Employee();
  }

  delete(){
    if(confirm('Estas seguro de eliminar')){
    this.employeeArray = this.employeeArray.filter(x => x != this.selectedEmployee);
    this.selectedEmployee = new Employee();
  }
}
}