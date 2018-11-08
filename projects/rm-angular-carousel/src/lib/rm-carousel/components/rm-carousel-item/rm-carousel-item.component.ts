import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'rm-carousel-item',
  templateUrl: './rm-carousel-item.component.html',
  styleUrls: ['./rm-carousel-item.component.scss']
})
export class RmCarouselItemComponent implements OnInit {
  @HostBinding('style.flex')
  itemFlexStyle: string = '0 0 100%';

  constructor() {}

  ngOnInit() {}
}
