import { Component } from '@angular/core';
import { Admission } from '../../../models/admission';
import { Appointment } from '../../../models/appointment';
import { Emergency } from '../../../models/emergency';
import { Ward } from '../../../models/ward';
import { AdmissionService } from '../../../services/admission.service';
import { CommonApiService } from '../../../services/common.api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admission-edit',
  templateUrl: './admission-edit.component.html',
  styleUrl: './admission-edit.component.css'
})
export class AdmissionEditComponent {
  public model!: Admission;
  public appointments!: Appointment[];
  public emergencys!: Emergency[];
  public ward!: Ward[];
  id!: number;

  constructor(private service: AdmissionService, private CommonApi: CommonApiService, private router: Router, private route: ActivatedRoute) {

  }
  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.LoadData();
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


    this.service.UpdateAdmission(this.model).subscribe({
      next: () => {
        this.router.navigate(["AdmissionList"]);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  LoadData() {
    this.service.GetAdmission(this.id).subscribe((data: Admission) => {
      this.model = data;
      console.log(data);
    }, (error: string) => {
      console.log('Observable emitted an error: ' + error);
    });
  }
}
