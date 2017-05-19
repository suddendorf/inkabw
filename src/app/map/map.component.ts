import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

declare var ol: any;

@Component({
  selector: 'app-map',
  providers: [DataService],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  private ol: any;
  private geom: string;
  private errorMessage: string;
  constructor(private route: ActivatedRoute, private service: DataService) {

  }

  ngOnInit(): void {
    console.log('init');
    this.route.params.subscribe(params => {
      this.readFeature(params['id']);
    });
  }
  private readFeature(weNr: string) {
    console.log('read');
    this.service.readSDMGeom(weNr)
      .subscribe(
      geom => this.showMap(geom),
      error => this.errorMessage = <any>error);
  }
  showMap(res: String) {
    this.geom=res.toString();
    console.log('showMap:' + this.geom);
    var geojsonObject = {
      'type': 'FeatureCollection',
      'crs': {
        'type': 'name',
        'properties': {
          'name': 'EPSG:32632'
        }
      },
      'features': [{
        'type': 'Feature',
        'geometry': {
          'type': 'MultiPolygon',
          'coordinates': this.geom
        }
      }
      ]
    }


    var style = new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: 'yellow',
        width: 1
      }),
      fill: new ol.style.Fill({
        color: 'rgba(255, 255, 0, 0.1)'
      })
    });

    var vectorSource = new ol.source.Vector({
      features: (new ol.format.GeoJSON()).readFeatures(geojsonObject)
    });

    vectorSource.addFeature(new ol.Feature(new ol.geom.Circle([5e6, 7e6], 1e6)));

    var vectorLayer = new ol.layer.Vector({
      source: vectorSource,
      style: style
    });

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
        projection: 'EPSG:32632',
        center: [-2e6, 8e6],
        zoom: 4
      })
    });

  }

}

