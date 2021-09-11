import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'wa-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressBarComponent {
  public readonly color = 'primary';
}
