import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import {Router} from '@angular/router';
import { DataService } from '../services/data/data.service';
@Component({
  selector: 'app-crete',
  templateUrl: './crete.component.html',
  styleUrls: ['./crete.component.css']
})
export class CreteComponent implements OnInit {
  userModel={};
  constructor(private userServiceService:UserServiceService,private router:Router,private data:DataService) { 
    this.data.changeMessage({default:'',header:'Create New Profile'});
  }

  saveUserDetails(user){
    console.log("user",user);
    let addressObj={
      address1:user.Address1,
      address2:user.Address2,
      city:user.City,
      state:user.State,
      pinCode:user.Pincode
    };
    this.userServiceService.saveUserDetails(addressObj).subscribe(address=>{
      console.log("address",address);
      let userObj={
        profileName:user.FullName,
        profileType:user.ProfileType,
        address:{
          addressId:address['addressId']
        }
      };
      this.createNewProfile(userObj);
    });
  }

  createNewProfile(userObj){
    this.userServiceService.createNewProfile(userObj).subscribe(profile=>{
      console.log("profile",profile);
      alert("profile created Successfull");
      this.userServiceService.saveUer(profile);
      this.router.navigate(['update',profile['profileId']]);
    });
  }
  clear(){
    this.userModel={};
  }
  ngOnInit() {
  }

}
