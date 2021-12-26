import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'userAuth';

  constructor(private router:Router)
  {}
  loginClicked()
  {
  this.router.navigate(['Login/']);
  }

  regClicked()
  {
    this.router.navigate(['Registration/'])
  }
}
