import { Component, OnInit } from '@angular/core';

import OlMap from 'ol/map';
import OlSource from 'ol/source/osm';
import OlLayer from 'ol/layer/tile';
import OlView from 'ol/view';
import OlProj from 'ol/proj';



@Component({
  selector: 'app-ol-map',
  templateUrl: './ol-map.component.html',
  styleUrls: ['./ol-map.component.css']
})
export class OlMapComponent implements OnInit {

	/** class variables - public by default **/
  map: OlMap;
  constructor() { }

  ngOnInit() {
    this.map = new OlMap({
      target: 'map',
      layers: [new OlLayer({

        preload: Infinity,
        source: new OlSource()
        })
      ],
      view: new OlView({
        center: OlProj.fromLonLat([0,0]),
        zoom: 3,
        /* extent takes the values in the order [minX, minY, maxX, maxY].
           This enables infinite horizontal scrolling while still not letting
           the user move the map out of the view port. For help finding good 
           numbers, or simply to play around, look at https://epsg.io/ */
        extent: [-Infinity,-10762333.65,Infinity,10777825.15],
        }),
      loadTilesWhileAnimating: true,
      loadTilesWhileInteracting: true,
    });
  }

}
