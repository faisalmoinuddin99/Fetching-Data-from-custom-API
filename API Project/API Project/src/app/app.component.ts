import { Component } from '@angular/core';
import { Pincodes } from './classes/pincodes';
import { MetaDataApiService } from './services/meta-data-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  observeData : Pincodes[]
  modifiedText: any;
  PinSelected: any = {}

  constructor(private _metaDataAPI : MetaDataApiService) {
    var Observable = this._metaDataAPI.getData()
    Observable.subscribe((res : any) => {
      this.observeData = res.data
     
      
    })
  }
  ngOnInit() {
    this._metaDataAPI.getData().subscribe(data => {
      this.observeData = data;
    });
  }

  onPincodeSelected(val : Pincodes){
    console.log("value" + val);
    this.customFunction(val)
    
  }
  customFunction(val : Pincodes){
    this.modifiedText = "The Selected Pin was " + val.pincode + " and selected District is " + val.village
  }
}
