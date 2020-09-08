import { Campaign } from '../campaign';
import { Component, OnInit, Input } from '@angular/core';
import { CampaignService } from '../campaign.service';
import { CampaignListComponent } from '../campaign-list/campaign-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-campaign-details',
  templateUrl: './campaign-details.component.html',
  styleUrls: ['./campaign-details.component.css']
})
export class CampaignDetailsComponent implements OnInit {

  id: number;
  campaign: Campaign;

  constructor(private route: ActivatedRoute, private router: Router,
              private campaignService: CampaignService) { }

  ngOnInit() {
    this.campaign = new Campaign();

    this.id = this.route.snapshot.params['id'];

    this.campaignService.getCampaign(this.id)
      .subscribe(data => {
        console.log(data)
        this.campaign = data;
      }, error => console.log(error));
  }

  list() {
    this.router.navigate(['campaigns']);
  }
}
