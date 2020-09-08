import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCampaignComponent } from './create-campaign/create-campaign.component';
import { CampaignDetailsComponent } from './campaign-details/campaign-details.component';
import { CampaignListComponent } from './campaign-list/campaign-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateCampaignComponent } from './update-campaign/update-campaign.component';
import {ValidatePositiveNum} from './create-campaign/create-campaign.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCampaignComponent,
    CampaignDetailsComponent,
    CampaignListComponent,
    UpdateCampaignComponent,
    ValidatePositiveNum
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
