import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AddListingService {
  private myDB = 'https://real-state-fakeapi.onrender.com/added';
  private listingsDB = 'https://real-state-fakeapi.onrender.com/listings';
  private searchDB = 'https://real-state-fakeapi.onrender.com/search';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(this.myDB);
  }

  getById(id: any) {
    return this.http.get(`${this.myDB}/${id}`);
  }

  addListing(listing: any) {
    return this.http.post(this.myDB, listing);
  }

  updateListing(id: any, body: any) {
    return this.http.patch(`${this.myDB}/${id}`, body);
  }

  deleteListing(id: any) {
    return this.http.delete(`${this.myDB}/${id}`);
  }

  GellAllareas() {
    return this.http.get(this.listingsDB);
  }
  GellAllareasbyid(state: any) {
    return this.http.get(this.listingsDB + '?state=' + state);
  }
  getAreaById(id: any) {
    return this.http.get(this.listingsDB + '?id=' + id);
  }
  updateAllListing(id: any, body: any) {
    return this.http.patch(`${this.listingsDB}/${id}`, body);
  }
  postSearchedData(sharedDataArr: any) {
    return this.http.post(this.searchDB, sharedDataArr);
  }
  getSearchedData(state: any, bedrooms: any, category: any) {
    return this.http.get(
      this.listingsDB +
        '?state=' +
        state +
        '&bedrooms=' +
        bedrooms +
        '&category=' +
        category
    );
  }
}
