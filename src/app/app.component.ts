import { Component } from '@angular/core';
import { ToTitlecasePipe } from './common/pipes/to-titlecase.pipe';

@Component({
  selector: 'app-root',
  template: `<p>Hi there I am {{ yourName }}.</p>
              <app-post></app-post>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  yourName = 'luis marcos fortes';

  changeMe(change: string) {
    switch (change) {
      case 'uppcase':
        this.yourName = this.yourName.toUpperCase();
        break;
        case 'lowcase':
          this.yourName = this.yourName.toLowerCase();
          break;
        default:
          this.yourName = new ToTitlecasePipe().transform(this.yourName);
    }
  }
}
