import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { AddListingService } from '../../Service/AddListing/add-listing.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-your-listing',
  standalone: true,
  providers: [AddListingService],
  imports: [CardComponent, HttpClientModule, RouterModule],
  templateUrl: './your-listing.component.html',
  styleUrl: './your-listing.component.css',
})
export class YourListingComponent implements OnInit {
  constructor(private service: AddListingService) {}

  products: any = [];

  ngOnInit(): void {
    this.getData();
  }



  getData() {
    this.service.getAll().subscribe({
      next: (data) => {
        return (this.products = data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
