import { Component, OnInit } from '@angular/core';
import { Discharge } from '../../../models/discharge';
import { DischargeService } from '../../../services/discharge.service';

@Component({
  selector: 'app-discharge-list',
  templateUrl: './discharge-list.component.html',
  styleUrl: './discharge-list.component.css'
})
export class DischargeListComponent implements OnInit {

  public discharge: Discharge[] = [];

  constructor(private service: DischargeService) { }

  ngOnInit(): void {
    this.LoadData();
  }

  LoadData() {
    this.service.getAllDischarges().subscribe((response: Discharge[]) => {
      this.discharge = response;
      console.log(response);
    }, (error) => {
      console.log('Observable emitted an error: ' + error);
    });
  }

  deleteDischage(discharge: Discharge) {
    let confirmDelete: boolean = confirm(`Delete?`);
    if (confirmDelete) {
      this.service.deleteDischarge(discharge.dischargeId).subscribe(() => {
        this.LoadData();
      }, (error) => {
        console.log('Observable emitted an error: ' + error);
      });
    }
  }

}
