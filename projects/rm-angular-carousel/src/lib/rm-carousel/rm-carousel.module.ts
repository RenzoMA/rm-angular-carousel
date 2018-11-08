import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RmCarouselContainerComponent } from './components/rm-carousel-container/rm-carousel-container.component';
import { RmCarouselItemComponent } from './components/rm-carousel-item/rm-carousel-item.component';

@NgModule({
  declarations: [RmCarouselContainerComponent, RmCarouselItemComponent],
  imports: [CommonModule],
  exports: [RmCarouselContainerComponent, RmCarouselItemComponent]
})
export class RmCarouselModule {}
