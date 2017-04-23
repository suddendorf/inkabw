import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  public errorMessage: string;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.get(params['errorMessage']);
    });
  }

  get(s: string) {
    console.log('errorComponent' + s);
    this.errorMessage = s;
  }
  ngOnInit() {
  }

}
