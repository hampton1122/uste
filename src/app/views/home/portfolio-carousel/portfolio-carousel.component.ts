import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NguCarousel } from '@ngu/carousel';

import { ImageDialogComponent } from '../image-dialog/image-dialog.component';

@Component({
  selector: 'app-portfolio-carousel',
  templateUrl: './portfolio-carousel.component.html',
  styleUrls: ['./portfolio-carousel.component.scss']
})
export class PortfolioCarouselComponent implements OnInit {
  @Input('backgroundGray') public backgroundGray;

  public carouselOptions: NguCarousel;
  public portfolios = [
    {
      photo: 'assets/images/1.jpg',
      title: 'Sample Title'
    },
    {
      photo: 'assets/images/2.jpg',
      title: 'Sample Title'
    },
    {
      photo: 'assets/images/3.jpg',
      title: 'Sample Title'
    },
    {
      photo: 'assets/images/4.jpg',
      title: 'Sample Title'
    },
    {
      photo: 'assets/images/5.jpg',
      title: 'Sample Title'
    },
    {
      photo: 'assets/images/6.jpg',
      title: 'Sample Title'
    },
    {
      photo: 'assets/images/7.jpg',
      title: 'Sample Title'
    },
    {
      photo: 'assets/images/8.jpg',
      title: 'Sample Title'
    },
    {
      photo: 'assets/images/9.jpg',
      title: 'Sample Title'
    },
    {
      photo: 'assets/images/10.jpg',
      title: 'Sample Title'
    },
    {
      photo: 'assets/images/12.jpg',
      title: 'Sample Title'
    },
    {
      photo: 'assets/images/13.jpg',
      title: 'Sample Title'
    },
    {
      photo: 'assets/images/14.jpg',
      title: 'Sample Title'
    },
    {
      photo: 'assets/images/15.jpg',
      title: 'Sample Title'
    },
    {
      photo: 'assets/images/16.jpg',
      title: 'Sample Title'
    },
    {
      photo: 'assets/images/17.jpg',
      title: 'Sample Title'
    },
    {
      photo: 'assets/images/18.jpg',
      title: 'Sample Title'
    },
    {
      photo: 'assets/images/19.jpg',
      title: 'Sample Title'
    },
    {
      photo: 'assets/images/20.jpg',
      title: 'Sample Title'
    }
  ];
  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.carouselOptions = {
      grid: { xs: 1, sm: 2, md: 3, lg: 3, all: 0 },
      slide: 2,
      speed: 400,
      interval: 5000,
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      loop: false
    };
  }

  openDialog(photo: string) {
    let height = '600px';
    let width = '800px';

    if (window.innerWidth > 800 && window.innerHeight > 600) {
      const dialogRef = this.dialog.open(ImageDialogComponent, {
        height,
        width,
        data: photo,
        disableClose: false
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }
  }
}
