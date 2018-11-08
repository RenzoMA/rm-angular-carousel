import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RmCarouselContainerComponent } from './rm-carousel-container.component';

describe('RmCarouselContainerComponent', () => {
  let component: RmCarouselContainerComponent;
  let fixture: ComponentFixture<RmCarouselContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RmCarouselContainerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RmCarouselContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
