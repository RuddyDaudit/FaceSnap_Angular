import { Component, OnInit,Input} from '@angular/core';
import { FaceSnap } from '../models/face-snap.models';
import { FaceSnapService } from '../services/face-snap-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!:FaceSnap;
  @Input() myOtherSnap!:FaceSnap;

  buttonText! : string;

  constructor(private faceSnapService: FaceSnapService, 
              private router: Router){}

  ngOnInit(){
    this.buttonText = 'Oh Snap!';
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

   onViewFaceSnap(){
    this.router.navigateByUrl('facesnaps/${this.faceSnap.id}');
   }
}
