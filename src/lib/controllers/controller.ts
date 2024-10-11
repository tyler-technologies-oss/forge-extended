import { ReactiveControllerHost } from 'lit';

export class MouseController {
  private host: ReactiveControllerHost;
  public pos = { x: 0, y: 0 };

  public _onMouseMove = ({ clientX, clientY }: MouseEvent): void => {
    this.pos = { x: clientX, y: clientY };
    this.host.requestUpdate();
  };

  constructor(host: ReactiveControllerHost) {
    this.host = host;
    host.addController(this);
  }

  public hostConnected(): void {
    window.addEventListener('mousemove', this._onMouseMove);
  }

  public hostDisconnected(): void {
    window.removeEventListener('mousemove', this._onMouseMove);
  }
}
