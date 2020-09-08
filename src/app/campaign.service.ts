import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  private baseUrl = 'http://localhost:8080/api/v1/campaigns';
  private emeraldAccountUrl = 'http://localhost:8080/api/v2//emeraldaccounts';

  constructor(private http: HttpClient) { }

  getCampaign(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCampaign(campaign: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, campaign);
  }

  updateCampaign(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteCampaign(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getCampaignsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getEmeraldAccount(id: number): Observable<any> {
    return this.http.get(`${this.emeraldAccountUrl}/${id}`);
  }

  updateEmeraldAccount(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.emeraldAccountUrl}/${id}`, value);
  }
}
