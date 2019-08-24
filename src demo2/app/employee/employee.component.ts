import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee';
import { DataService } from '../data-service.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public empObject: Employee;
  public empArray: Employee[] = [];
  public empArray1 = new Array<Employee>();
  constructor(private serviceObj: DataService) {
    this.empObject = new Employee();
   }

  ngOnInit() {
    this.serviceObj.counter();
  }
  counter() {
    this.serviceObj.counter();
  }
  getCount() {
    return this.serviceObj.getCounter();
  }
  saveEmployee() {
    this.empArray.push(this.empObject);
    this.empObject = new Employee();
    console.log(this.empObject, 'Employee Data saved!');
  }

  deleteEmp(index) {

    if (index + 1) {
      // remove that object from array;
      this.empArray.splice(index, 1);
      console.log('deleteEmp');
    }
  }
  updateEmp(index) {
    this.empObject = this.empArray[index];
    this.empArray.splice(index, 1);

  }
}
