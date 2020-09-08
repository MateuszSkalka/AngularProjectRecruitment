import { CampaignService } from '../campaign.service';
import { Campaign } from '../campaign';
import { EmeraldAccount } from '../emeraldAccount';
import {Component, Directive, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';
import {AbstractControl, NG_VALIDATORS} from '@angular/forms';

function passwordMatcher(c: AbstractControl) {
  if (isNaN(Number(c.value)) || Number(c.value) < 0 ) {
    return { validUrl: true };
  }
  return null;
}

@Directive({
  selector: '[validate-positive-num]',
  providers: [
    {provide: NG_VALIDATORS, multi: true, useValue: passwordMatcher}
  ]
})
export class ValidatePositiveNum {

}




@Component({
  selector: 'app-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.css']
})
export class CreateCampaignComponent implements OnInit {

  emeraldAccount: EmeraldAccount;
  campaign: Campaign = new Campaign();
  submitted = false;







  constructor(private campaignService: CampaignService,
    private router: Router) { }

  ngOnInit() {
    this.campaign.status = 'Off';
    this.campaign.town = 'Cracow';

    this.campaignService.getEmeraldAccount(1)
      .subscribe(data => {
        console.log(data)
        this.emeraldAccount = data;
      }, error => console.log(error));
  }

  newCampaign(): void {
    this.submitted = false;
    this.campaign = new Campaign();

  }

  save() {
    this.campaignService
    .createCampaign(this.campaign).subscribe(data => {
      console.log(data)
      this.campaign = new Campaign();
      this.gotoList();
    },
    error => console.log(error));

    this.emeraldAccount.emeraldAccount -= this.campaign.campaignFund;
    this.campaignService.updateEmeraldAccount(1, this.emeraldAccount)
      .subscribe(data => {
        console.log(data);
        this.emeraldAccount = new EmeraldAccount();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/campaigns']);
  }
}
