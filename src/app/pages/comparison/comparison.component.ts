
import { Component } from '@angular/core';
import { CommonModule, TitleCasePipe,  } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ComparisonCriterion {
  label: string;
  instagram: string;
  tiktok: string;
}

@Component({
  selector: 'web-comparison',
  standalone: true,
  imports: [CommonModule, TitleCasePipe, FormsModule],
  templateUrl: './comparison.component.html',
  styleUrl: './comparison.component.css'
})
export class ComparisonComponent {
  platforms = [
    { key: 'facebook', label: 'Facebook' },
    { key: 'instagram', label: 'Instagram' },
    { key: 'tiktok', label: 'TikTok' },
    { key: 'amazon', label: 'Amazon' },
    { key: 'netflix', label: 'Netflix' }
  ];

  platformA = 'instagram';
  platformB = 'tiktok';

  allCriteria: { [key: string]: { [key: string]: string } } = {
    'Data collection': {
      facebook: 'High',
      instagram: 'High',
      tiktok: 'High',
      amazon: 'Medium',
      netflix: 'Medium'
    },
    'Account deletion': {
      facebook: 'Possible',
      instagram: 'Possible',
      tiktok: 'Possible',
      amazon: 'Possible',
      netflix: 'Possible'
    },
    'Data sharing': {
      facebook: 'Yes',
      instagram: 'Yes',
      tiktok: 'Yes',
      amazon: 'Yes',
      netflix: 'Yes'
    },
    'Targeted advertising': {
      facebook: 'Yes',
      instagram: 'Yes',
      tiktok: 'Yes',
      amazon: 'Yes',
      netflix: 'No'
    },
    'Algorithm transparency': {
      facebook: 'Low',
      instagram: 'Low',
      tiktok: 'Low',
      amazon: 'Medium',
      netflix: 'Low'
    },
    'Ease of account deletion': {
      facebook: 'Medium',
      instagram: 'Good',
      tiktok: 'Medium',
      amazon: 'Good',
      netflix: 'Good'
    },
    'Data export': {
      facebook: 'Yes',
      instagram: 'Yes',
      tiktok: 'No',
      amazon: 'Yes',
      netflix: 'Yes'
    }
  };

  get criteria() {
    return Object.keys(this.allCriteria).map(label => ({
      label,
      a: this.allCriteria[label][this.platformA],
      b: this.allCriteria[label][this.platformB]
    }));
  }

    get platformALabel() {
    return this.platforms.find(p => p.key === this.platformA)?.label || '';
  }
  get platformBLabel() {
    return this.platforms.find(p => p.key === this.platformB)?.label || '';
  }
}
