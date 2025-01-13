import { Location } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { IExpansionPanelComponent, IconRegistry } from '@tylertech/forge';
import { tylIconHome, tylIconSettings, tylIconSettingsInputComponent } from '@tylertech/tyler-icons/standard';

IconRegistry.define([tylIconHome, tylIconSettingsInputComponent, tylIconSettings]);

export interface IMenuItem {
  label: string;
  value: string;
}

@Component({
  selector: 'app-sidenav',
  styleUrls: ['./sidenav.component.scss'],
  templateUrl: './sidenav.component.html'
})
export class SidenavComponent implements OnInit {
  public selectedPath: string;

  @ViewChild('componentExpansionPanel', { static: false, read: ElementRef })
  public componentExpansionPanel: ElementRef<IExpansionPanelComponent>;

  @ViewChild('exampleExpansionPanel', { static: false, read: ElementRef })
  public exampleExpansionPanel: ElementRef<IExpansionPanelComponent>;

  @Input()
  public open: boolean;
  public drawerType: string;
  public isSmallViewPort: boolean;

  @Output() public onClose = new EventEmitter();
  @Output() public onModalChange = new EventEmitter<boolean>();

  @HostListener('window:resize')
  public onResize(): void {
    this.updateViewportSize();
  }

  public componentMenuItems: IMenuItem[] = [
    { label: 'Busy Indicator', value: '/component/busy-indicator' },
    { label: 'Quantity Field', value: '/component/quantity-field' }
  ];

  constructor(
    router: Router,
    private _location: Location,
    private _cd: ChangeDetectorRef
  ) {
    router.events.pipe(takeUntilDestroyed()).subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (this.open) {
          this.closeSidenav();
        }
      }
    });
  }

  public updateViewportSize(): void {
    if (window.innerWidth < 750) {
      this.isSmallViewPort = true;
      this.open = false;
    } else {
      this.isSmallViewPort = false;
    }
    this.onModalChange.emit(this.isSmallViewPort);
  }

  public openSidenav(): void {
    this.open = true;
  }

  public closeSidenav(): void {
    this.open = false;
    this.onClose.emit();
  }

  public ngOnInit(): void {
    window.requestAnimationFrame(() => {
      this.updateViewportSize();
      if (!this.open) {
        this.onClose.emit();
      }
    });
  }

  public ngAfterViewInit(): void {
    const path = this._location.path() || '/';
    this.selectedPath = path;
    this._cd.detectChanges();

    // Automatically expand a menu item if the active menu item exists within it
    if (path.match(/^\/component\//)) {
      this.componentExpansionPanel.nativeElement.open = true;
    }
  }
}
