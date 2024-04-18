import { Component, OnInit } from '@angular/core';
import { Appointment } from '../../../models/appointment';
import { AppointmentService } from '../../../services/appointment.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent implements OnInit {

  public appointments: Appointment[] = [];

  constructor(private service: AppointmentService) { }

  ngOnInit(): void {
    this.LoadData();
  }

  LoadData() {
    this.service.GetAppointments().subscribe((response: Appointment[]) => {
      this.appointments = response;
      console.log(response);
    }, (error) => {
      console.log('Observable emitted an error: ' + error);
    });
  }

  DeleteAppointment(appointments: Appointment) {
    let confirmDelete: boolean = confirm(`Delete ${appointments.appointmentId}?`);
    if (confirmDelete) {
      this.service.DeleteAppointment(appointments.appointmentId).subscribe(() => {
        this.LoadData();
      }, (error) => {
        console.log('Observable emitted an error: ' + error);
      });
    }
  }
}
