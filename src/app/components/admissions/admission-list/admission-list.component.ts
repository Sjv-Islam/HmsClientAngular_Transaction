import { Component } from '@angular/core';
import { Admission } from '../../../models/admission';
import { AdmissionService } from '../../../services/admission.service';

@Component({
  selector: 'app-admission-list',
  templateUrl: './admission-list.component.html',
  styleUrl: './admission-list.component.css'
})
export class AdmissionListComponent {
  public admissions: Admission[] = [];

  constructor(private service: AdmissionService) { }

  ngOnInit(): void {
    this.LoadData();
  }

  LoadData() {
    this.service.GetAdmissions().subscribe((response: Admission[]) => {
      this.admissions = response;
      console.log(response);
    }, (error) => {
      console.log('Observable emitted an error: ' + error);
    });
  }

  DeleteAdmission(admissions: Admission) {
    let confirmDelete: boolean = confirm(`Delete ${admissions.admissionId}?`);
    if (confirmDelete) {
      this.service.DeleteAdmission(admissions.admissionId).subscribe(() => {
        this.LoadData();
      }, (error) => {
        console.log('Observable emitted an error: ' + error);
      });
    }
  }
}
