import { Component } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent {
  videos = [
    { src: '/assets/videos/video1.jpg', title: 'Video 1', duration: '00:22' },
    { src: '/assets/videos/video2.jpg', title: 'Video 2', duration: '00:11' },
    { src: '/assets/videos/video3.jpg', title: 'Video 3', duration: '00:15' }
  ];
}
