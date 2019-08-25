import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController
} from "ionic-angular";
import { Diagnostic } from "@ionic-native/diagnostic";
import { HelperToolsProvider } from "../../providers/helper-tools/helper-tools";
import { Geolocation } from "@ionic-native/geolocation";
import { OpenNativeSettings } from "@ionic-native/open-native-settings";

/**
 * Generated class for the MapModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;

@IonicPage()
@Component({
  selector: "page-map-modal",
  templateUrl: "map-modal.html"
})
export class MapModalPage {
  public map: any;
  public geocoder = new google.maps.Geocoder();

  GoogleAutocomplete;
  autocomplete;
  autocompleteItems;
  markers = [];
  nearbyItems = [];
  marker;
  tabs = [];
  // SegmantType = "'map'";
  selected_pos = {};
  public GooglePlaces;
  constructor(
    public navCtrl: NavController,
    private geolocation: Geolocation,
    private openNativeSettings: OpenNativeSettings,
    private helperTools: HelperToolsProvider,
    private diagnostic: Diagnostic,
    public viewCtrl: ViewController,
    public navParams: NavParams
  ) {
    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    this.autocomplete = { input: "" };
    this.autocompleteItems = [];
  }

  ionViewDidLoad() {
    // this.checkIfLocationEnablenOrNot();
     this.InitMap();
  }

  ionViewDidEnter() {
    // //Set latitude and longitude of some place
    // this.map = new google.maps.Map(document.getElementById("map"), {
    //   center: { lat: 30.0444, lng: 31.2357 },
    //   zoom: 15
    // });
  }

  // tryGeolocation() {
  //   this.geolocation
  //     .getCurrentPosition()
  //     .then(resp => {
  //       let pos = {
  //         lat: resp.coords.latitude,
  //         lng: resp.coords.longitude
  //       };
  //       console.log(pos);
  //       this.marker = new google.maps.Marker({
  //         position: pos,
  //         map: this.map,
  //         title: "I am here!",
  //         draggable: true,
  //         animation: google.maps.Animation.DROP
  //       });
  //       this.marker.setDraggable(true), this.map.setCenter(pos);
  //     })
  //     .catch(error => {
  //       this.helperTools.ShowAlertWithTranslation(
  //         "Error",
  //         "PleaseTurnOnLocation"
  //       );
  //       console.log(error);
  //     });
  // }

  // addMarker() {
  //   if (this.marker) {
  //     this.marker.setPosition(this.map.getCenter());
  //     this.marker.setDraggable(true);
  //     return;
  //   }
  //   this.marker = new google.maps.Marker({
  //     map: this.map,
  //     draggable: true,
  //     animation: google.maps.Animation.DROP,
  //     //icon: 'https://maps.google.com/mapfiles/kml/shapes/parking_lot_maps.png',
  //     position: this.map.getCenter()
  //   });

  //   let content = "<h4>User Current Location!</h4>";

  //   this.addInfoWindow(this.marker, content);
  // }

  /////////////////////////////////DETERMINE MARK DRAGE POS////////////////////////////////

  addInfoWindow(marker, content) {
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, "click", () => {
      infoWindow.open(this.map, marker);
    });

    google.maps.event.addListener(marker, "dragend", () => {
      console.log(marker.getPosition());
      this.selected_pos["lat"] = marker.getPosition().lat();
      this.selected_pos["lng"] = marker.getPosition().lng();
      console.log(this.selected_pos);
      console.log("lat    " + marker.getPosition().lat());
      console.log("long   " + marker.getPosition().lng());
    });
  }
  /////////////////////////////////CLOSE MODAL////////////////////////////////////////////
  done() {
    this.viewCtrl.dismiss(this.selected_pos);
  }
  //////////////////////////////////////////////////CHECK LOCATION SERV///////////////////
  checkIfLocationEnablenOrNot() {
    return new Promise((resolve, reject) => {
      this.diagnostic
        .isLocationEnabled()
        .then(enabled => {
          if (enabled) {
            this.InitMap();
            resolve("done");
          } else {
            this.navToLocationService();
            reject("not enabled");
          }
        })
        .catch(err => {
          this.navToLocationService();
          reject("not enabled");
        });
    });
  }
  ///////////////////////////////////////INTITALIZE MAP////////////////////////////////
  InitMap() {
    // if (this.geolocation) {
    // this.geolocation.getCurrentPosition().then(
    // position => {
    //   let latLng = new google.maps.LatLng(
    //     position.coords.latitude,
    //     position.coords.longitude
    //   );
    // this.selected_pos["lat"] = position.coords.latitude;
    // this.selected_pos["lng"] = position.coords.longitude;
    //   console.log(position);
    //   console.log(latLng);
    let mapOptions = {
      center: { lat: 30.0444, lng: 31.2357 },
      enableHighAccuracy: true,
      zoom: 15
      // mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(
      document.getElementById("map"),
      mapOptions
    );
    this.getTheUserCurrentPosAndPutMarker()
    // },
    err => {
      console.log(err);
      this.navToLocationService();
      this.viewCtrl.dismiss();
    }
    // );
    // }
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }
  getTheUserCurrentPosAndPutMarker() {
    if (this.geolocation) {
      this.helperTools.ShowLoadingSpinnerOnly();
      this.geolocation.getCurrentPosition().then(
        position => {
          let latLng = new google.maps.LatLng(
            position.coords.latitude,
            position.coords.longitude
          );
          this.selected_pos["lat"] = position.coords.latitude;
          this.selected_pos["lng"] = position.coords.longitude;
          console.log(position);
          console.log(latLng);

          var marker = new google.maps.Marker({
            map: this.map,
            draggable: true,
            animation: google.maps.Animation.DROP,
            //icon: 'https://maps.google.com/mapfiles/kml/shapes/parking_lot_maps.png',
            position: latLng
          });
          google.maps.event.trigger(this.map, "resize");
          this.map.panTo(latLng);
          this.map.setZoom(14);
          this.helperTools.DismissLoading()

          // geocodePosition(marker.getPosition());
          // this.markers.push(marker);
          marker.setDraggable(true);
          let content = "<h4>Your current location!</h4>";
          this.addInfoWindow(marker, content);
        }

      ),err=>{
        this.helperTools.DismissLoading();
        alert(err)
      };
    }
  }

  navToLocationService() {
    this.viewCtrl.dismiss();
    this.helperTools.ShowAlertWithTranslation(
      "Error",
      "Please turn on location service or give app permission to your location service."
    );
    this.openNativeSettings.open("location").then(val => {
      // alert('location')
    }).catch(err => {
      console.log(err);
    })
  }
}
