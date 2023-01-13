import { Component } from '@angular/core';

@Component({
  selector: 'app-info-master',
  templateUrl: './info-master.component.html',
  styleUrls: ['./info-master.component.scss']
})
export class InfoMasterComponent {
  title_1: string = "Personal info";
  para_1: string = "Please provide your name, email address, and phone number."

  isValid: boolean = false;
}
