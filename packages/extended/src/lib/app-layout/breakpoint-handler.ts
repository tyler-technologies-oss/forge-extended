/**
 * A reusable utility class for managing responsive breakpoint behavior via media queries.
 * Encapsulates the lifecycle of setting up, handling changes, and cleaning up media queries.
 */
export class BreakpointHandler {
  private _mediaQuery: MediaQueryList | null = null;
  private _isLargeScreen = false;
  private readonly _onChange: (isLargeScreen: boolean) => void;
  private readonly _getBreakpoint: () => number;

  /**
   * Creates a new BreakpointHandler instance.
   * @param getBreakpoint - A function that returns the current breakpoint value in pixels
   * @param onChange - Callback fired when the screen size crosses the breakpoint threshold
   */
  constructor(getBreakpoint: () => number, onChange: (isLargeScreen: boolean) => void) {
    this._getBreakpoint = getBreakpoint;
    this._onChange = onChange;
  }

  /**
   * Whether the current screen width is at or above the breakpoint.
   */
  public get isLargeScreen(): boolean {
    return this._isLargeScreen;
  }

  /**
   * Sets up the media query listener. Call this in connectedCallback or when breakpoint changes.
   */
  public setup(): void {
    const breakpoint = this._getBreakpoint();
    this._mediaQuery = window.matchMedia(`(min-width: ${breakpoint}px)`);
    this._isLargeScreen = this._mediaQuery.matches;
    this._mediaQuery.addEventListener('change', this._handleMediaQueryChange);
    this._onChange(this._isLargeScreen);
  }

  /**
   * Cleans up the media query listener. Call this in disconnectedCallback or before re-setup.
   */
  public cleanup(): void {
    if (this._mediaQuery) {
      this._mediaQuery.removeEventListener('change', this._handleMediaQueryChange);
      this._mediaQuery = null;
    }
  }

  /**
   * Updates the breakpoint by cleaning up and re-setting up the media query.
   */
  public update(): void {
    this.cleanup();
    this.setup();
  }

  /**
   * Synchronizes the isLargeScreen state with an external value.
   * Useful when falling back to a parent breakpoint handler's state.
   */
  public syncState(isLargeScreen: boolean): void {
    this._isLargeScreen = isLargeScreen;
    this._onChange(this._isLargeScreen);
  }

  private _handleMediaQueryChange = (event: MediaQueryListEvent): void => {
    this._isLargeScreen = event.matches;
    this._onChange(this._isLargeScreen);
  };
}
