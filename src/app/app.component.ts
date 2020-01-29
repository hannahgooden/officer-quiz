import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'officer-quiz';
  
  public getResume() {
    window.open('../assets/resume.pdf');
  }
  
  public goToGithub() {
    window.open("https://github.com/hannahgooden/officer-quiz")
  }

}
