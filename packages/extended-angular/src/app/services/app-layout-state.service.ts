import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppLayoutStateService {
  readonly appTitle = signal('Tyler Forge\u2122 Extended - Angular Adapter');
  readonly breakpoint = signal(960);

  setAppTitle(title: string): void {
    this.appTitle.set(title);
  }

  setBreakpoint(breakpoint: number): void {
    this.breakpoint.set(breakpoint);
  }

  reset(): void {
    this.appTitle.set('Tyler Forge\u2122 Extended - Angular Adapter');
    this.breakpoint.set(960);
  }
}
