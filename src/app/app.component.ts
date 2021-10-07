import { Component, OnInit } from '@angular/core';
import { PhotosService } from './services/photos.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(public PhotosService: PhotosService){}
  title = 'angular-material';

  
  ngOnInit() {
    this.PhotosService.getPhotos().subscribe(
      photos => console.log(photos),
      err => console.log(err)
    )

  }
}
