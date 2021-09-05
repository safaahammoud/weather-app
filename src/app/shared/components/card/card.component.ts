import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent {

  private _title:string | null = '';
  @Input() public set title(title) {
      this._title = title;
  }
  public get title(): string | null {
      return this._title;
  }

  private _subTitle:string | null = '';
  @Input() public set subTitle(subTitle) {
      this._subTitle = subTitle;
  }
  public get subTitle(): string | null {
      return this._subTitle;
  }

  private _mainDescription:string | null = null;
  @Input() public set mainDescription(mainDescription) {
      this._mainDescription = mainDescription;
  }
  public get mainDescription(): string | null {
      return this._mainDescription;
  }

  private _contentImage:string | null = null;
  @Input() public set contentImage(contentImage) {
      this._contentImage = contentImage;
  }
  public get contentImage(): string | null {
      return this._contentImage;
  }

  private _bottomSubtitle:string | null = null;
  @Input() public set bottomSubtitle(bottomSubtitle) {
      this._bottomSubtitle = bottomSubtitle;
  }
  public get bottomSubtitle(): string | null {
      return this._bottomSubtitle;
  }

  private _icons:{[key:string]: string} = {};
  @Input() public set icons(icons) {
      this._icons = icons;
  }
  public get icons(): {[key:string]: string} {
      return this._icons;
  }

  constructor() { }
}
