import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.models';
import { FaceSnapService } from '../services/face-snap-service';
import { ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!:FaceSnap;
  myOtherSnap!:FaceSnap;

  buttonText! : string;

  constructor(private faceSnapService: FaceSnapService, 
              private route: ActivatedRoute){}

  ngOnInit(){
    this.buttonText = 'Oh Snap!';
    const snapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getFaceSnapById(snapId);
  }

   onAddSnap(){
    if(this.buttonText === 'Oh Snap'){
      this.faceSnapService.snapFaceById(this.faceSnap.id, 'snap');
      this.buttonText = 'oh la grosse fraude';
    }else{
      this.faceSnapService.snapFaceById(this.faceSnap.id, 'unsnap');
      this.buttonText = 'Oh Snap';
    }
   }
}