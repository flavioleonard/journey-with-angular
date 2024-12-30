import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  @Input() src: string = "" //isso vai dizer que os nossos valores de src vao ser passados como props
  @Input() alt: string = ""

}
