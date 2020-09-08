import { CampaignDetailsComponent } from './../campaign-details/campaign-details.component';
import { Observable } from "rxjs";
import { CampaignService } from "../campaign.service";
import { Campaign } from "../campaign";
import { EmeraldAccount } from "../emeraldAccount";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';


@Component({
  selector: "app-campaign-list",
  templateUrl: "./campaign-list.component.html",
  styleUrls: ["./campaign-list.component.css"]
})
export class CampaignListComponent implements OnInit {
  campaigns: Observable<Campaign[]>;
  emeraldAccount: EmeraldAccount;

  constructor(private campaignService: CampaignService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.campaigns = this.campaignService.getCampaignsList();
    this.campaignService.getEmeraldAccount(1)
      .subscribe(data => {
        console.log(data)
        this.emeraldAccount = data;
      }, error => console.log(error));
  }

  deleteCampaign(id: number) {
    this.campaignService.deleteCampaign(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  campaignDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateCampaign(id: number){
    this.router.navigate(['update', id]);
  }
}
