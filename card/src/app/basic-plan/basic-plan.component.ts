import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BasicPlanService } from './basic-plan.service';
import { Plan } from '../model/plan.model';

@Component({
  selector: 'app-basic-plan',
  templateUrl: './basic-plan.component.html',
  styleUrls: ['./basic-plan.component.css']
})
export class BasicPlanComponent implements OnInit {
  planDetails: any[] = []; // Initialize planDetails as null or with default values

  constructor(private basicPlanService: BasicPlanService) {}

  ngOnInit(): void {
    this.loadPlanDetails();
  }

  loadPlanDetails() {
    this.basicPlanService.getPlans().subscribe(
      (data: any[]) => {
        this.planDetails = data ;
        console.log(data); // Use null if plans[0] is undefined
      },
      
    );
  }
}
