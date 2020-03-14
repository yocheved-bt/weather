import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'qk-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  routeData: any;
  
  public constructor(private route:ActivatedRoute, private router:Router) {}

  getNavTitle(){
    this.router.events.pipe(
     filter(e => e instanceof NavigationEnd))
    .forEach(e => {
      this.routeData = this.route.root.firstChild.snapshot.data;
  });   
}

  ngOnInit(): void {
    this.getNavTitle();
  }


}
