import {
  Component,
  OnInit,
  Input,
  QueryList,
  AfterViewInit,
  ContentChildren,
  ElementRef,
  ViewChild,
  OnChanges,
  SimpleChanges,
  TemplateRef,
  HostListener
} from "@angular/core";
import { RmCarouselItemComponent } from "../rm-carousel-item/rm-carousel-item.component";
import {
  animate,
  AnimationBuilder,
  AnimationFactory,
  AnimationPlayer,
  style
} from "@angular/animations";
import { CarouselControlPositionEnum } from "../../enum/carousel-control-position.enum";

@Component({
  selector: "rm-carousel-container",
  templateUrl: "./rm-carousel-container.component.html",
  styleUrls: ["./rm-carousel-container.component.scss"]
})
export class RmCarouselContainerComponent
  implements OnInit, AfterViewInit, OnChanges {
  @ViewChild("carousel")
  carousel: ElementRef;
  @ContentChildren(RmCarouselItemComponent)
  carouselItems: QueryList<RmCarouselItemComponent>;

  @Input() pageSize: number = 5;
  @Input() timing = "250ms ease-in";
  @Input() showControls = true;
  @Input() nextButtonTemplate: TemplateRef<any>;
  @Input() previousButtonTemplate: TemplateRef<any>;
  @Input() position: string = "sides";
  @Input() showBullets = true;

  private player: AnimationPlayer;
  private itemWidth: number;
  public carouselControlPositionEnum = CarouselControlPositionEnum;
  public currentPage = 0;
  public bullets: number[] = [];

  constructor(private builder: AnimationBuilder) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.setItemWidth();
    this.setItemsStyle();
    this.setBullets();
    this.subscribeToChanges();
  }
  subscribeToChanges() {
    this.carouselItems.changes.subscribe(items => {
      this.setItemWidth();
      this.setItemsStyle();
      this.setBullets();
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.carouselItems && this.pageSize > 0) {
      if (changes.pageSize.currentValue !== changes.pageSize.previousValue) {
        while (this.prev()) {}
      }
      this.setBullets();
      this.setItemsStyle();
      this.setItemWidth();
    }
  }
  updateCurrentPage(isAdding: boolean) {
    const modifier = isAdding ? 1 : -1;
    this.currentPage =
      (this.currentPage + modifier) % this.carouselItems.length;
  }
  next = () => {
    if (!this.isLastPage()) {
      this.updateCurrentPage(true);
      this.slideItem();
      return true;
    }
    return false;
  };

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    while (this.prev()) {}
    this.setItemsStyle();
    this.setItemWidth();
  }
  prev = () => {
    if (!this.isFirstPage()) {
      this.updateCurrentPage(false);
      this.slideItem();
      return true;
    }
    return false;
  };

  slideItem() {
    const offset = this.currentPage * this.itemWidth;
    const myAnimation: AnimationFactory = this.builder.build([
      animate(this.timing, style({ transform: `translateX(-${offset}px)` }))
    ]);

    this.player = myAnimation.create(this.carousel.nativeElement);
    this.player.play();
  }
  isLastPage() {
    return (this.currentPage + 1) * this.pageSize >= this.carouselItems.length;
  }
  isFirstPage() {
    return this.currentPage === 0;
  }

  setItemWidth() {
    this.itemWidth = this.carousel.nativeElement.getBoundingClientRect().width;
  }
  setItemsStyle() {
    setTimeout(() => {
      this.carouselItems.map(
        item => (item.itemFlexStyle = `0 0 ${100 / this.pageSize}%`)
      );
    });
  }
  setBullets() {
    setTimeout(() => {
      this.bullets = [];
      const totalPages = this.getTotalPages(this.pageSize);
      for (let i = 0; i < totalPages; i++) {
        this.bullets.push(i);
      }
    });
  }
  getTotalPages(pageSize: number) {
    return Math.ceil(this.carouselItems.length / pageSize);
  }
}
