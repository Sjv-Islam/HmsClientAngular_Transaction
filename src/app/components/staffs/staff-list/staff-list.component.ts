import { Component, OnInit } from '@angular/core';
import { Staff } from '../../../models/staff';
import { StaffService } from '../../../services/staff.service';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrl: './staff-list.component.css'
})
export class StaffListComponent implements OnInit {
  staffList: Staff[] = [];

  constructor(private staffService: StaffService) { }

  ngOnInit(): void {
    this.getStaffList();
  }

  getStaffList(): void {
    this.staffService.getAllStaffs().subscribe(
      staffList => this.staffList = staffList,
      error => console.error('Error fetching staff list: ', error)
    );
  }

  deleteStaff(staffId: number): void {
    this.staffService.deleteStaff(staffId).subscribe(() => {
      // Remove the deleted staff from the staffList array
      this.staffList = this.staffList.filter(staff => staff.staffId !== staffId);
    },
      error => console.error('Error deleting staff: ', error));
  }

}
