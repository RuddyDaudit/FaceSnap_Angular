import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.models';

@Injectable({
	providedIn: 'root'
})

export class FaceSnapService {
	 tabOfSnap: FaceSnap[] = [
	 		{
        id:1,
        title:'Son Goku',
        description:'Le Meilleur des Meilleurs',
        img:'https://cdn.store-factory.com/www.patoutatis.com/content/product_10472217b.jpg?v=1522849682',
        createDate:new Date(),
        snaps:124,
        localisation:'Paris'
        },
       
       {
        id:2,
        title:'Vegeta',
        description:'Le Prince des sayans',
        img:'https://cdn.store-factory.com/www.patoutatis.com/content/product_10472217b.jpg?v=1522849682',
        createDate:new Date(),
        snaps:0
      },
      {
        id:3,
        title:'Son Gohan',
        description:'Le Meilleur des Meilleurs',
        img:'https://cdn.store-factory.com/www.patoutatis.com/content/product_10472217b.jpg?v=1522849682',
        createDate:new Date(),
        snaps:0,
        localisation:'Paris'
        },
       
       {
        id:4,
        title:'Son Goten',
        description:'Le Prince des sayans',
        img:'https://cdn.store-factory.com/www.patoutatis.com/content/product_10472217b.jpg?v=1522849682',
        createDate:new Date(),
        snaps:0
      }
	 	];

   getAllFaceSnaps(): FaceSnap[]{
    return this.tabOfSnap;
   }

   getFaceSnapById(faceSnapId:number): FaceSnap{
    const faceSnap = this.tabOfSnap.find(faceSnap => faceSnap.id === faceSnapId);
      if(!faceSnap){
        throw new Error('FaceSnap not found');
      }else{
        return faceSnap;
      }
   }

   snapFaceById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
      snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;  

   }
}