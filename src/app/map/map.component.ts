import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  private karte = true;
  private bing: any;
  private osm: any;
  private title;


  constructor(private route: ActivatedRoute, private service: DataService, private router: Router) {

  }

  ngOnInit(): void {
    let lid: string = sessionStorage.getItem('liegenschaftId');
    console.log('init Map' + lid);
    if (this.liegenschaftId != lid) {
      this.liegenschaftId = lid;
      this.readFeature(lid);
    }
    this.title = sessionStorage.getItem('title');

  }
  private toggleBing() {
    this.karte = !this.karte;
    this.bing.setVisible(!this.karte);
    this.osm.setVisible(this.karte);
  }
  private readFeature(liegenschaftId: string) {
    this.service.readSDMGeom(liegenschaftId)
      .subscribe(
      geom => this.showMap(geom),
      error => this.errorMessage = <any>error);
  }

  getStyle(f: any, resolution: any) {
    console.log("style:" + f);
    console.log("res:" + resolution);
    let size: number = 20;
    if (resolution > 4) {
      size = 10;
    }
    var style = new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: 'green',
        width: 2
      }),
      fill: new ol.style.Fill({
        color: 'rgba(255, 100, 100, 0.0)' //praktisch kein fill
      }),
      text: new ol.style.Text({
        text: f.get('bezeichnung'),
        font: size + 'px sans serif',
        stroke: new ol.style.Stroke({
          color: 'green'
        })
      })
    });
    return style;
  }
  showMap(res: any) {
    var r=this.router;
    var geojsonObject = res;
    console.log('showMap:' + geojsonObject);



    var vectorSource = new ol.source.Vector();

    //vectorSource.addFeature(new ol.Feature(new ol.geom.Circle([9.9254,54.4616], 0.01)));
    let f = new ol.format.GeoJSON().readFeatures(geojsonObject);

    vectorSource.addFeatures(f);
    var vectorLayer = new ol.layer.Vector({
      source: vectorSource,
      style: this.getStyle
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
        //this.bing,
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
    // select interaction working on "singleclick"
    var select = new ol.interaction.Select();

    map.addInteraction(select);
    select.on('select', function (e) {
      let s: string = '';
      if (e.target.getFeatures().getLength() > 0) {
        let sel = e.selected[0];
        s = sel.get('bezeichnung');
        let id = sel.get('liegenschaft_id');

        sessionStorage.setItem('title', s);
        sessionStorage.setItem('liegenschaftId', id);
        console.log(id);
        r.navigate(['/inka-we', id]);
      }
      document.getElementById('status').innerHTML = '&nbsp;' + s;

    });

    /*
    var hover = new ol.interaction.Select({
      condition: ol.events.condition.pointerMove
    });

    hover.on('select', function (e) {
      let s: string = '';
      if (e.target.getFeatures().getLength() > 0) {
        let sel = e.selected[0];
        s = sel.get('bezeichnung');
        let id = sel.get('liegenschaft_id');

        sessionStorage.setItem('title', s);
        sessionStorage.setItem('liegenschaftId', id);

        this.router.navigate(['/inka-we', id]);

      } document.getElementById('status').innerHTML = '&nbsp;' + s;
    });
    map.addInteraction(hover);
    */
  }

}

