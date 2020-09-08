import { CampaignDetailsComponent } from './campaign-details/campaign-details.component';
import { CreateCampaignComponent } from './create-campaign/create-campaign.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampaignListComponent } from './campaign-list/campaign-list.component';
import { UpdateCampaignComponent } from './update-campaign/update-campaign.component';

const routes: Routes = [
  { path: '', redirectTo: 'campaign', pathMatch: 'full' },
  { path: 'campaigns', component: CampaignListComponent },
  { path: 'add', component: CreateCampaignComponent },
  { path: 'update/:id', component: UpdateCampaignComponent },
  { path: 'details/:id', component: CampaignDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
