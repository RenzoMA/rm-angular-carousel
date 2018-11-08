import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RmCarouselItemComponent } from './rm-carousel-item.component';

describe('RmCarouselItemComponent', () => {
  let component: RmCarouselItemComponent;
  let fixture: ComponentFixture<RmCarouselItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RmCarouselItemComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RmCarouselItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
