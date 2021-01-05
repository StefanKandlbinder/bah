import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

/**
 *  Colibri Button
 */
@Component({
  selector: 'colibri-button',
  templateUrl: './colibri-button.component.html',
  styleUrls: ['./colibri-button.component.tokens.scss', './colibri-button.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ColibriButtonComponent {
  @Input()
  label = '';

  /**
   * What type of button do we want?
   */
  @Input()
  type: 'primary' | 'secondary' = 'primary';

  /**
   * How large should the button be?
   */
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Is it disabled?
   */
  @Input()
  disabled = false;

  /**
   * Is it loading?
   */
  @Input()
  loading = false;

  /**
   * Take the full width of the parent container
   */
  @Input()
  full = false;

  /**
   * Optional click handler
   */
  @Output()
  onHandleClick = new EventEmitter<Event>();

  public get classes(): string[] {
    return [
      'colibri-button',
      `colibri-button--${this.size}`,
      `colibri-button--${this.type}`,
      this.loading ? 'colibri-button--loading' : '',
      this.full ? 'colibri-button--full' : ''
    ];
  }
}
