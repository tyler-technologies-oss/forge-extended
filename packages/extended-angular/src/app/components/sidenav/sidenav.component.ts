import { Location } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  inject,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { IExpansionPanelComponent, IconRegistry } from '@tylertech/forge';
import { tylIconHome, tylIconSettings, tylIconSettingsInputComponent } from '@tylertech/tyler-icons';

IconRegistry.define([tylIconHome, tylIconSettingsInputComponent, tylIconSettings]);

export interface IMenuItem {
  label: string;
  value: string;
}

@Component({
  selector: 'app-sidenav',
  styleUrls: ['./sidenav.component.scss'],
  templateUrl: './sidenav.component.html',
  standalone: false
})
export class SidenavComponent implements OnInit, AfterViewInit {
  private _router = inject(Router);
  private _location = inject(Location);
  private _cd = inject(ChangeDetectorRef);

  public selectedPath: string;

  @ViewChild('componentExpansionPanel', { static: false, read: ElementRef })
  public componentExpansionPanel: ElementRef<IExpansionPanelComponent>;

  @ViewChild('exampleExpansionPanel', { static: false, read: ElementRef })
  public exampleExpansionPanel: ElementRef<IExpansionPanelComponent>;

  @Input()
  public open: boolean;
  public drawerType: string;
  public isSmallViewPort: boolean;

  @Output() public modalClose = new EventEmitter();
  @Output() public modalChange = new EventEmitter<boolean>();

  @HostListener('window:resize')
  public onResize(): void {
    this.updateViewportSize();
  }

  public componentMenuItems: IMenuItem[] = [
    { label: 'Busy Indicator', value: '/component/busy-indicator' },
    { label: 'Confirmation Dialog', value: '/component/confirmation-dialog' },
    { label: 'Multi Select Header', value: '/component/multi-select-header' },
    { label: 'Quantity Field', value: '/component/quantity-field' },
    { label: 'Responsive Toolbar', value: '/component/responsive-toolbar' },
    { label: 'User Profile', value: '/component/user-profile' }
  ];

  constructor() {
    this._router.events.pipe(takeUntilDestroyed()).subscribe(event => {
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
    this.modalChange.emit(this.isSmallViewPort);
  }

  public openSidenav(): void {
    this.open = true;
  }

  public closeSidenav(): void {
    this.open = false;
    this.modalClose.emit();
  }

  public ngOnInit(): void {
    window.requestAnimationFrame(() => {
      this.updateViewportSize();
      if (!this.open) {
        this.modalClose.emit();
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
