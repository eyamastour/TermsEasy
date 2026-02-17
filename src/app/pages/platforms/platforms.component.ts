import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Platform {
  name: string;
  logo: string;
  rating: number;
  category: 'Social Media' | 'E-commerce' | 'Streaming';
}

@Component({
  selector: 'web-platforms',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './platforms.component.html',
  styleUrl: './platforms.component.css'
})
export class PlatformsComponent {
  categories = ['All', 'Social Media', 'E-commerce', 'Streaming'];
  selectedCategory = 'All';

  platforms: Platform[] = [
    {
      name: 'Facebook',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg',
      rating: 3.5,
      category: 'Social Media'
    },
    {
      name: 'Instagram',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png',
      rating: 3.8,
      category: 'Social Media'
    },
    {
      name: 'Amazon',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
      rating: 4.0,
      category: 'E-commerce'
    },
    {
      name: 'Netflix',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
      rating: 3.7,
      category: 'Streaming'
    }
  ];

  get filteredPlatforms() {
    if (this.selectedCategory === 'All') return this.platforms;
    return this.platforms.filter(p => p.category === this.selectedCategory);
  }

  selectCategory(cat: string) {
    this.selectedCategory = cat;
  }
}
