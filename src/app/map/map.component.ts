import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare var ol: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  private ol: any;
  private geom: string;

  constructor(private route: ActivatedRoute) {
  /*  this.route.params.subscribe(params => {
      this.geom = params['geom'];
    });
*/    console.log('constructor:' + this.geom);
    if (this.geom == null) {
      this.geom = "{          'type': 'Feature',          'geometry': {            'type': 'MultiPolygon',            'coordinates': [              [[[-5e6, 6e6], [-5e6, 8e6], [-3e6, 8e6], [-3e6, 6e6]]],              [[[-2e6, 6e6], [-2e6, 8e6], [0, 8e6], [0, 6e6]]],              [[[1e6, 6e6], [1e6, e6], [3e6, 8e6], [3e6, 6e6]]]            ]          }    }";
    }
  }

  ngOnInit(): void {
    console.log('init:' + this.geom);

    /*var vectorSource = new ol.source.Vector({
      features: (new ol.format.GeoJSON()).readFeatures(this.geom)
    });

    var vectorLayer = new ol.layer.Vector({
      source: vectorSource,
      style: styleFunction
    });
*/
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

    var styles = {
      'MultiPolygon': new ol.style.Style({
        stroke: new ol.style.Stroke({
          color: 'yellow',
          width: 1
        }),
        fill: new ol.style.Fill({
          color: 'rgba(255, 255, 0, 0.1)'
        })
      }),
    };

    var styleFunction = function (feature) {
      return styles[feature.getGeometry().getType()];
    };
  }
}
