import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'otis-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  sideNavMode = 'side';
  sideNavOpen = true;
  @HostListener('window:resize', ['$event'])
  onResize(event) {
      if (event.target.innerWidth <= 992) {
          this.sideNavMode = 'over';
          this.sideNavOpen = false;
      } else if (event.target.innerWidth > 992) {
        this.sideNavMode = 'side';
        this.sideNavOpen = true;
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
