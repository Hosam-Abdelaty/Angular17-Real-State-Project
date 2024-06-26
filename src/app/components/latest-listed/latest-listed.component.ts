import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-latest-listed',
  standalone: true,
  imports: [CarouselModule, CommonModule],
  templateUrl: './latest-listed.component.html',
  styleUrl: './latest-listed.component.css',
})
export class LatestListedComponent {
  myArray = [
    {
      id: '22',
      title: 'Modern Loft in Downtown Dallas',
      description:
        'Sleek loft with industrial accents in the heart of downtown Dallas. Walking distance to dining and entertainment.',
      price: '$4000',
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1800,
      location: '789 Elm Street Dallas, TX 75201',
      state: 'TX',
      image: 'https://source.unsplash.com/featured/?loft',
      category: 'Popular',
    },
    {
      id: '21',
      title: 'Suburban Ranch House',
      description:
        'Spacious ranch house with large backyard. Perfect for enjoying the Texas sunshine.',
      price: '$3500',
      bedrooms: 4,
      bathrooms: 3,
      sqft: 2200,
      location: '456 Oak Street Austin, TX 78701',
      state: 'TX',
      image: 'https://source.unsplash.com/featured/?ranch',
      category: 'New Listing',
    },
    {
      id: '12',
      title: 'Hollywood Hills Mansion',
      description:
        'Magnificent mansion nestled in the exclusive Hollywood Hills neighborhood. Offers breathtaking views of the city.',
      price: '$10000',
      bedrooms: 6,
      bathrooms: 5,
      sqft: 5000,
      location: '1234 Sunset Boulevard Hollywood, CA 90046',
      state: 'CA',
      image: 'https://source.unsplash.com/featured/?mansion',
      category: 'Discounted Price',
    },
    {
      id: '17',
      title: 'Ski-In/Ski-Out Chalet',
      description:
        'Luxury chalet with direct access to the ski slopes. Perfect for winter sports enthusiasts.',
      price: '$6000',
      bedrooms: 3,
      bathrooms: 3,
      sqft: 3000,
      location: '987 Mountain Avenue Aspen, CO 81611',
      state: 'CO',
      image: 'https://source.unsplash.com/featured/?chalet',
      category: 'Popular',
    },
    {
      id: '11',
      title: 'Spacious Loft in Downtown LA',
      description:
        'Stylish loft with open floor plan and high ceilings. Located in the vibrant downtown area.',
      price: '$3500',
      bedrooms: 1,
      bathrooms: 1,
      sqft: 1200,
      location: '4567 Hollywood Boulevard Los Angeles, CA 90027',
      state: 'CA',
      image: 'https://source.unsplash.com/featured/?loft',
      category: 'New Listing',
    },
    {
      id: '7',
      title: 'Beachfront Villa',
      description:
        'Exquisite villa steps away from the sandy beaches. Perfect for a luxurious getaway.',
      price: '$8000',
      bedrooms: 5,
      bathrooms: 4,
      sqft: 3500,
      location: '123 Ocean Boulevard West Palm Beach, FL 33401',
      state: 'FL',
      image: 'https://source.unsplash.com/featured/?villa',
      category: 'Popular',
    },
    {
      id: '6',
      title: 'Luxury Condo with Ocean View',
      description:
        'Luxurious condo with stunning ocean views. Amenities include pool, gym, and concierge service.',
      price: '$5000',
      bedrooms: 2,
      bathrooms: 2,
      sqft: 2000,
      location: '456 Palm Street Miami, FL 33101',
      state: 'FL',
      image: 'https://source.unsplash.com/featured/?condo',
      category: 'Discounted Price',
    },
    {
      id: '2',
      title: 'Cozy Suburban House',
      description:
        'Charming suburban house with a spacious backyard. Perfect for families.',
      price: '$3000',
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1500,
      location: '789 Oak Drive Staten Island, NY 10301',
      state: 'NY',
      image: 'https://source.unsplash.com/featured/?house',
      category: 'New Listing',
    },
    {
      id: '1',
      title: 'Modern Apartment in Downtown',
      description:
        'Beautiful modern apartment located in the heart of downtown. Close to restaurants, shops, and public transportation.',
      price: '$2000',
      bedrooms: 2,
      bathrooms: 1,
      sqft: 1000,
      location: '103 Wright Court Burien, WA 98168',
      state: 'NY',
      image: 'https://source.unsplash.com/featured/?apartment',
      category: 'Popular',
    },
  ];
}
