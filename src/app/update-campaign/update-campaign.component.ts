import { Component, OnInit } from '@angular/core';
import { Campaign } from '../campaign';
import { ActivatedRoute, Router } from '@angular/router';
import { CampaignService } from '../campaign.service';
import {EmeraldAccount} from '../emeraldAccount';

@Component({
  selector: 'app-update-campaign',
  templateUrl: './update-campaign.component.html',
  styleUrls: ['./update-campaign.component.css']
})
export class UpdateCampaignComponent implements OnInit {

  id: number;
  campaign: Campaign;
  emeraldAccount: EmeraldAccount;



  constructor(private route: ActivatedRoute,private router: Router,
    private campaignService: CampaignService) { }

  ngOnInit() {
    this.campaign = new Campaign();

    this.id = this.route.snapshot.params['id'];

    this.campaignService.getCampaign(this.id)
      .subscribe(data => {
        console.log(data)
        this.campaign = data;
      }, error => console.log(error));

    this.campaignService.getEmeraldAccount(1)
      .subscribe(data => {
        console.log(data)
        this.emeraldAccount = data;
      }, error => console.log(error));


  }

  updateCampaign() {
    this.campaignService.updateCampaign(this.id, this.campaign)
      .subscribe(data => {
        console.log(data);
        this.campaign = new Campaign();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateCampaign();
    this.emeraldAccount.emeraldAccount -= this.campaign.campaignFund;
    this.campaignService.updateEmeraldAccount(1, this.emeraldAccount)
      .subscribe(data => {
        console.log(data);
        this.emeraldAccount = new EmeraldAccount();
        this.gotoList();
      }, error => console.log(error));
  }

  gotoList() {
    this.router.navigate(['/campaigns']);
  }
}
