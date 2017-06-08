import { Component } from '@angular/core';
import { SecurityService } from './security.service';

declare var ol: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SecurityService]

})
export class AppComponent {
  ol: any;

  constructor(private securityService: SecurityService) { }
  ngOnInit(): void {
    this.securityService.checkLogin();
    var map = new ol.Map({
      controls: ol.control.defaults({
        attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
          collapsible: false
        })
      }).extend([
        new ol.control.ZoomToExtent({
          extent: [
            813079.7791264898, 5929220.284081122,
            848966.9639063801, 7036863.986909639
          ]
        })
      ]),
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      target: 'map',
      view: new ol.View({
        projection: 'EPSG:900913',
        center: [1075000.0, 6843000.0],
        zoom: 14
      })
    });

  }
}
