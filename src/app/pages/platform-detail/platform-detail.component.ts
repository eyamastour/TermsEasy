
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, TitleCasePipe } from '@angular/common';

interface PlatformDetail {
  name: string;
  logo: string;
  rating: number;
  transparency: number;
  risk: string;
  data: { collected: string; shared: string; risk: string; };
  payment: { auto: string; refund: string; };
  suspension: { warning: string; };
  content: { usage: string; };
}

@Component({
  selector: 'web-platform-detail',
  standalone: true,
  imports: [TitleCasePipe, CommonModule],
  templateUrl: './platform-detail.component.html',
  styleUrl: './platform-detail.component.css'
})
export class PlatformDetailComponent {
  platformName = '';
  detail: PlatformDetail | null = null;

  platforms: PlatformDetail[] = [
    {
      name: 'facebook',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg',
      rating: 3.5,
      transparency: 60,
      risk: 'High',
      data: {
        collected: 'Email, name, photos, contacts, location, browsing',
        shared: 'Yes (partners, advertisers)',
        risk: 'High'
      },
      payment: {
        auto: 'No (except Facebook Ads)',
        refund: 'Depends on the service (e.g. ads)'
      },
      suspension: {
        warning: 'Yes, without notice in case of rule violation'
      },
      content: {
        usage: 'Yes, for promotion and service operation'
      }
    },
    {
      name: 'instagram',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png',
      rating: 3.8,
      transparency: 65,
      risk: 'Medium',
      data: {
        collected: 'Photos, videos, contacts, location, browsing',
        shared: 'Yes (partners, advertisers)',
        risk: 'Medium'
      },
      payment: {
        auto: 'No',
        refund: 'Not applicable'
      },
      suspension: {
        warning: 'Yes, without notice in case of rule violation'
      },
      content: {
        usage: 'Yes, for promotion and service operation'
      }
    },
    {
      name: 'amazon',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
      rating: 4.0,
      transparency: 70,
      risk: 'Medium',
      data: {
        collected: 'Name, address, purchases, browsing, payment methods',
        shared: 'Yes (partners, third-party sellers)',
        risk: 'Medium'
      },
      payment: {
        auto: 'Yes (Prime subscriptions, etc.)',
        refund: 'Yes, according to return policy'
      },
      suspension: {
        warning: 'Yes, in case of fraud or terms violation'
      },
      content: {
        usage: 'No, except reviews or publicly shared content'
      }
    },
    {
      name: 'netflix',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
      rating: 3.7,
      transparency: 60,
      risk: 'Medium',
      data: {
        collected: 'Name, email, viewing history, browsing',
        shared: 'Yes (partners, advertisers)',
        risk: 'Medium'
      },
      payment: {
        auto: 'Yes (monthly subscription)',
        refund: 'No, except special cases'
      },
      suspension: {
        warning: 'Yes, in case of non-payment or fraud'
      },
      content: {
        usage: 'No, except public content (e.g. reviews)'
      }
    }
  ];

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.platformName = params.get('id') || '';
      this.detail = this.platforms.find(p => p.name === this.platformName) || null;
    });
  }
}
