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
  private liegenschaftId: string;
  private bingVisible=false;
  private bing :any;
  private osm:any;

  constructor(private route: ActivatedRoute, private service: DataService) {

  }

  ngOnInit(): void {
    let lid: string = sessionStorage.getItem('liegenschaftId');
    console.log('init Map' + lid);
    if (this.liegenschaftId != lid) {
      this.liegenschaftId = lid;
      this.readFeature(lid);
    }
  }
  private toggleBing(){
    this.bingVisible= !this.bingVisible;
    this.bing.setVisible(this.bingVisible);
    this.osm.setVisible(!this.bingVisible);
  }
  private readFeature(liegenschaftId: string) {
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
        color: 'green',
        width: 2
      }),
      fill: new ol.style.Fill({
        color: 'rgba(0, 255, 0, 0.0)' //praktisch kein fill
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
    /////////////////////////////////////////////////////////////////////////
    /*let wmsLayer=new ol.layer.Image({
             extent: [-13884991, 2870341, -7455066, 6338219],
             source: new ol.source.ImageWMS({
               url: 'https://www.lisa-geobasisdatenportal.de/gbd/wms_dop',
               params: {'LAYERS': 'rgb'},
               ratio: 1
              
             })
           })
   */
    this.bing = new ol.layer.Tile({
      visible: true,
      preload: Infinity,
      source: new ol.source.BingMaps({
        key: 'An_EETE4FaBQqKg82luTnuju1sAU6HpSitEvBfy9GTSksYgStw9Oei5KsGDV0Hok',
        imagerySet: 'AerialWithLabels'
        // use maxZoom 19 to see stretched tiles instead of the BingMaps
        // "no photos at this zoom level" tiles
        // maxZoom: 19
      })
    });

    ///////////////////////////////////////////////////////////////////////////////////
    var extent = vectorSource.getExtent();
    this.osm =
      new ol.layer.Tile({
        source: new ol.source.OSM()
      });

    var map = new ol.Map({
      controls: ol.control.defaults({
        attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
          collapsible: false
        })
      }).extend([
        new ol.control.ZoomToExtent({
          extent: extent
        })
      ]),
      layers: [
        this.bing,
        this.osm,
        vectorLayer
      ],
      target: 'map',
      view: new ol.View({
        projection: 'EPSG:3857',
        center: [0, 0],
        zoom: 4
      })
    });
    console.log(extent);
    //map.getView().fit(extent, map.getSize());
    map.getView().fit(extent, map.getSize());
    //map.getView().setZoom(10);
  }

}

