import { Component } from '@angular/core';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent {
  title: string = "Select your plan";
  para: string = "You have the option of monthly or yearly biling.";
  priceArcade: number = 9;
  priceAdvanced: number = 12;
  pricePro: number = 15;
}
