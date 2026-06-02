import { expect } from '@esm-bundle/chai';
import sinon from 'sinon';
import { BreakpointHandler } from './breakpoint-handler';

describe('BreakpointHandler', () => {
  afterEach(() => {
    sinon.restore();
  });

  function createMockMediaQuery(matches: boolean): {
    mediaQuery: MediaQueryList;
    addEventListener: sinon.SinonStub;
    removeEventListener: sinon.SinonStub;
  } {
    const addEventListener = sinon.stub();
    const removeEventListener = sinon.stub();

    const mediaQuery = {
      matches,
      addEventListener,
      removeEventListener,
      media: '',
      onchange: null,
      addListener: sinon.stub(),
      removeListener: sinon.stub(),
      dispatchEvent: sinon.stub()
    } as unknown as MediaQueryList;

    return { mediaQuery, addEventListener, removeEventListener };
  }

  it('should initialize with isLargeScreen as false', () => {
    const handler = new BreakpointHandler(
      () => 960,
      () => {}
    );

    expect(handler.isLargeScreen).to.be.false;
  });

  it('should call onChange callback on setup', () => {
    const { mediaQuery } = createMockMediaQuery(true);
    sinon.stub(window, 'matchMedia').returns(mediaQuery);

    const onChange = sinon.spy();
    const handler = new BreakpointHandler(() => 960, onChange);

    handler.setup();

    expect(onChange.calledOnce).to.be.true;
    expect(onChange.calledWith(true)).to.be.true;
  });

  it('should update isLargeScreen based on media query matches', () => {
    const { mediaQuery } = createMockMediaQuery(true);
    sinon.stub(window, 'matchMedia').returns(mediaQuery);

    const handler = new BreakpointHandler(
      () => 960,
      () => {}
    );

    handler.setup();

    expect(handler.isLargeScreen).to.be.true;
  });

  it('should add event listener on setup', () => {
    const { mediaQuery, addEventListener } = createMockMediaQuery(false);
    sinon.stub(window, 'matchMedia').returns(mediaQuery);

    const handler = new BreakpointHandler(
      () => 960,
      () => {}
    );

    handler.setup();

    expect(addEventListener.calledOnce).to.be.true;
    expect(addEventListener.calledWith('change', sinon.match.func)).to.be.true;
  });

  it('should remove event listener on cleanup', () => {
    const { mediaQuery, removeEventListener } = createMockMediaQuery(false);
    sinon.stub(window, 'matchMedia').returns(mediaQuery);

    const handler = new BreakpointHandler(
      () => 960,
      () => {}
    );

    handler.setup();
    handler.cleanup();

    expect(removeEventListener.calledOnce).to.be.true;
  });

  it('should call onChange when media query changes', () => {
    let changeCallback: ((event: MediaQueryListEvent) => void) | null = null;
    const addEventListener = sinon
      .stub()
      .callsFake((_event: string, callback: (event: MediaQueryListEvent) => void) => {
        changeCallback = callback;
      });

    const mediaQuery = {
      matches: false,
      addEventListener,
      removeEventListener: sinon.stub(),
      media: '',
      onchange: null,
      addListener: sinon.stub(),
      removeListener: sinon.stub(),
      dispatchEvent: sinon.stub()
    } as unknown as MediaQueryList;

    sinon.stub(window, 'matchMedia').returns(mediaQuery);

    const onChange = sinon.spy();
    const handler = new BreakpointHandler(() => 960, onChange);

    handler.setup();
    onChange.resetHistory();

    // Simulate media query change
    changeCallback?.({ matches: true } as MediaQueryListEvent);

    expect(onChange.calledOnce).to.be.true;
    expect(onChange.calledWith(true)).to.be.true;
    expect(handler.isLargeScreen).to.be.true;
  });

  it('should use provided breakpoint value', () => {
    const { mediaQuery } = createMockMediaQuery(false);
    const matchMediaStub = sinon.stub(window, 'matchMedia').returns(mediaQuery);

    const handler = new BreakpointHandler(
      () => 1200,
      () => {}
    );

    handler.setup();

    expect(matchMediaStub.calledWith('(min-width: 1200px)')).to.be.true;
  });

  it('should cleanup and re-setup on update', () => {
    const { mediaQuery, addEventListener, removeEventListener } = createMockMediaQuery(false);
    sinon.stub(window, 'matchMedia').returns(mediaQuery);

    const handler = new BreakpointHandler(
      () => 960,
      () => {}
    );

    handler.setup();
    handler.update();

    expect(removeEventListener.calledOnce).to.be.true;
    expect(addEventListener.calledTwice).to.be.true;
  });

  it('should sync state with external value', () => {
    const onChange = sinon.spy();
    const handler = new BreakpointHandler(() => 960, onChange);

    handler.syncState(true);

    expect(handler.isLargeScreen).to.be.true;
    expect(onChange.calledWith(true)).to.be.true;
  });

  it('should not throw when cleanup is called without setup', () => {
    const handler = new BreakpointHandler(
      () => 960,
      () => {}
    );

    expect(() => handler.cleanup()).to.not.throw();
  });
});
