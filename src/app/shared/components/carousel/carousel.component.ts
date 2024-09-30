import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  images: string[] = [
    '/assets/images/Tesla-model.jpg',
    '/assets/images/Tesla-Roadster.avif',
    '/assets/images/tesla-voiture.jpg',
    '/assets/images/model-s.avif',
    '/assets/images/model-x.jpg',
  ]

  selectedImage = 0;

  // Reference to the thumbnails container
  @ViewChild('thumbnailContainer') thumbnailContainer!: ElementRef<HTMLDivElement>;

  // Handle clicking on a thumbnail
  selectImage(index: number) {
    this.selectedImage = index;
    this.scrollToSelectedImage(index);
  }

  // Scroll to the previous image
  prevImage() {
    if (this.selectedImage > 0) {
      this.selectedImage--;
    } else {
      this.selectedImage = this.images.length - 1; // Loop to last image
    }
    this.scrollToSelectedImage(this.selectedImage);
  }

  // Scroll to the next image
  nextImage() {
    if (this.selectedImage < this.images.length - 1) {
      this.selectedImage++;
    } else {
      this.selectedImage = 0; // Loop to first image
    }
    this.scrollToSelectedImage(this.selectedImage);
  }

  // Function to scroll the thumbnails container to the selected image
  scrollToSelectedImage(index: number) {
    const container = this.thumbnailContainer.nativeElement;
    const imageWidth = container.querySelector('img')?.clientWidth || 0; // Get the width of a single thumbnail
    const scrollPosition = index * (imageWidth + 16); // 16 is for the gap/space-x-4

    container.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
  }
}
