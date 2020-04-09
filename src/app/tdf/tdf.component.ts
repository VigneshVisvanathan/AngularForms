import { Component, OnInit } from '@angular/core';
import { User } from '../user';

import { EnrollmentService } from '../enrollment.service';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent implements OnInit {
  topics=['Angular','React','Vue']
  topicHasError= true;
  userModel= new User('','rob@test.com',1234567890,'default','morning',true);
  validateTopic(value){
    if (value==='default'){
      this.topicHasError=true;

    }else{
      this.topicHasError = false;
    }
  }

  onSubmit(){
    this._enrollmentService.enroll(this.userModel)
    .subscribe(
      data=>console.log("Success!",data),
      error=>console.error("Error!",error)
      
      
    )
  }

  

  constructor(private _enrollmentService:EnrollmentService) { 

  
  }

  ngOnInit() {

  
  

}
}
