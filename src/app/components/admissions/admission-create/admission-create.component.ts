import { Component } from '@angular/core';
import { Admission } from '../../../models/admission';
import { Appointment } from '../../../models/appointment';
import { Emergency } from '../../../models/emergency';
import { Ward } from '../../../models/ward';
import { AdmissionService } from '../../../services/admission.service';
import { CommonApiService } from '../../../services/common.api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admission-create',
  templateUrl: './admission-create.component.html',
  styleUrl: './admission-create.component.css'
})
export class AdmissionCreateComponent {
  public model!: Admission;
  public appointments!: Appointment[];
  public emergencys!: Emergency[];
  public ward!: Ward[];


  constructor(private service: AdmissionService, private CommonApi: CommonApiService, private router: Router) {

  }
  ngOnInit(): void {
    this.model = new Admission();

    this.CommonApi.GetAppointment().subscribe((data) => {
      this.appointments = data;
    });
    this.CommonApi.GetEmergency().subscribe((data) => {
      this.emergencys = data;
    });
    this.CommonApi.GetWard().subscribe((data) => {
      this.ward = data;
    });



  }

  OnSubmit() {
    //console.log(this.model);
    //alert(JSON.stringify(this.model));
    this.service.SaveAdmission(this.model).subscribe({
      next: () => {
        this.router.navigate(["AdmissionList"]);
      },
      error: (err) => {
        console.log(err);
      }
    });

  }
}
