import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WE } from '../we';
import { DataService } from '../data.service';

@Component({
  selector: 'app-inka-admin',
  providers: [DataService],
  templateUrl: './inka-admin.component.html',
  styleUrls: ['./inka-admin.component.css']
})
export class InkaAdminComponent implements OnInit {
  public we: WE = new WE();
  public errorMessage: String;

  constructor(private route: ActivatedRoute, private service: DataService) {
    this.route.params.subscribe(params => {
      this.getWE(params['id']);
    });
  }
  ngOnInit() {
  }
  private getWE(id: string) {
    console.log('WE:' + id);
    this.readWE(id);
  }
  private readWE(id: string) {
    this.service.readWE(id)
      .subscribe(
      we => this.we = we,
      error => this.errorMessage = <any>error);

  }
}
