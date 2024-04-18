import { Component, OnInit } from '@angular/core';
import { Department } from '../../../models/department';
import { DepartmentsService } from '../../../services/departments.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrl: './department-list.component.css'
})
export class DepartmentListComponent implements OnInit {
  public department: Department[] = [];
  constructor(private service: DepartmentsService) {

  }
  ngOnInit(): void {
    this.LoadData();
  }

  LoadData() {
    this.service.GetDepartments().subscribe((response: Department[]) => {
      this.department = response;
      console.log(response);
    },
      (error) => {
        console.log('Observable emitted an error:' + error);

      });
  }

  DeleteDepartment(department: Department) {
    let confirmDelete: boolean = confirm(`Delete: ${department.name}?`);

    if (confirmDelete) {

      this.service.DeleteDepartment(department.departmentId).subscribe(() => {
        alert('test');
        this.LoadData();
      },
        (error) => {
          console.log('Observable emitted an error:' + error);
        });
    }
  }


}
