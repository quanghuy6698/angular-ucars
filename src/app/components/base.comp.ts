import { Component, HostListener } from "@angular/core";

@Component({
  selector: "base-comp",
  template: `<label>BaseComp</label>`,
})
export class BaseComp {
  public isMobile: boolean = false;

  constructor() {
    if (window.innerWidth <= 600) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }

  /**
   * Listen on window resize for responsive
   * Breakpoint: 600px
   * Smaller or equal than 600px consider as mobile devices
   * Bigger than 600px consider as other devices
   */
  @HostListener("window:resize", ["$event"])
  onResize() {
    if (window.innerWidth <= 600) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }
}
