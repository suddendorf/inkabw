import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

declare var ol: any;
declare var proj4: any;
@Component({
  selector: 'app-map',
  providers: [DataService],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  private ol: any;
  private errorMessage: string;
  constructor(private route: ActivatedRoute, private service: DataService) {

  }

  ngOnInit(): void {
    let lid: string = localStorage.getItem('liegenschaftId');
    console.log('init' + lid);
    this.readFeature(lid);
  }
  private readFeature(liegenschaftId: string) {
    console.log('read');
    this.service.readSDMGeom(liegenschaftId)
      .subscribe(
      geom => this.showMap(geom),
      error => this.errorMessage = <any>error);
  }
  showMap(res: any) {
    var geojsonObject = res;
    console.log('showMap:' + geojsonObject);

    var style = new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: 'red',
        width: 2
      }),
      fill: new ol.style.Fill({
        color: 'rgba(255, 255, 0, 0.5)'
      })
    });

    var vectorSource = new ol.source.Vector();

    //vectorSource.addFeature(new ol.Feature(new ol.geom.Circle([9.9254,54.4616], 0.01)));
    let f = new ol.format.GeoJSON().readFeature(geojsonObject);
    vectorSource.addFeature(f);
    var vectorLayer = new ol.layer.Vector({
      source: vectorSource,
      style: style
    });


    ///////////////////////////////////////////////////////////////////////////////////

    var map = new ol.Map({
      controls: ol.control.defaults({
        attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
          collapsible: false
        })
      }).extend([
        new ol.control.ZoomToExtent({
          extent: [
            841950.3449999997, 5775167.2634,
            842950.3449999997, 5776167.2634

          ]
        })
      ]),
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        }),
        vectorLayer
      ],
      target: 'map',
      view: new ol.View({
        projection: 'EPSG:4326',
        center: [0,0],
        zoom: 4
      })
    });
    var extent = vectorSource.getExtent();
    console.log(extent);
    map.getView().fit(extent, map.getSize());
  }

}

