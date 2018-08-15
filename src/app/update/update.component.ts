import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';
import { DataService } from '../services/data/data.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  userModel:any;
  user;
  userProfileById;
  updatedProfile;
  constructor(private userServiceService: UserServiceService,
    private router: Router,
    private _route: ActivatedRoute,
    private data: DataService) {
    this.data.changeMessage({default:'',header:'Update Existing Profile'});
    this.userModel={};
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      console.log("params", params);//From search page edit link
      if (params && params.profileId) {
        this.getByProfileID(params.profileId);
        console.log("user", this.userModel);
      }
    });
  }
  getByProfileID(id) {
    this.userServiceService.getByProfileID(id).subscribe(user => {
      this.userProfileById = user;
      console.log("this.userProfileById", this.userProfileById);
      this.userModel = {
        FullName: this.userProfileById.profileName,
        ProfileType: this.userProfileById.profileType,
        Address1: this.userProfileById.address['address1'],
        Address2: this.userProfileById.address['address2'],
        City: this.userProfileById.address['city'],
        State: this.userProfileById.address['state'],
        PinCode: this.userProfileById.address['pinCode'],
        ProfileID: this.userProfileById.profileId
      };
    });
  }
  updateAddress(obj) {
    let addObj = {
      addressId: this.userProfileById.address['addressId'],
      address1: obj.Address1,
      address2: obj.Address2,
      city: obj.City,
      state: obj.State,
      pinCode: obj.PinCode,
    }
    this.userServiceService.updateAddress(addObj).subscribe(data => {
      console.log("Updated Address",data);
      this.updateDetails();
    });
  }
  updateDetails() {
    let userObj = {
      profileId: this.userModel.ProfileID,
      profileName: this.userModel.FullName,
      profileType: this.userModel.ProfileType,
      address: {
        addressId: this.userProfileById.address['addressId']
      }
    }
    this.userServiceService.updateProfile(userObj).subscribe(updated => {
      this.updatedProfile = updated;
      console.log("updated result", updated);
      this.userModel = {
        FullName: this.updatedProfile.profileName,
        ProfileType: this.updatedProfile.profileType,
        Address1: this.updatedProfile.address['address1'],
        Address2: this.updatedProfile.address['address2'],
        City: this.updatedProfile.address['city'],
        State: this.updatedProfile.address['state'],
        PinCode: this.updatedProfile.address['pinCode'],
        ProfileID: this.updatedProfile.profileId
      };
    });
  }
}

