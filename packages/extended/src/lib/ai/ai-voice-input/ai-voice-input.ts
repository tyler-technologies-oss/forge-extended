import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { defineIconButtonComponent, IconRegistry } from '@tylertech/forge';
import { tylIconMic } from '@tylertech/tyler-icons';

import styles from './ai-voice-input.scss?inline';

defineIconButtonComponent();
IconRegistry.define([tylIconMic]);

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-voice-input': AiVoiceInputComponent;
  }

  interface Window {
    SpeechRecognition: typeof SpeechRecognition;
    webkitSpeechRecognition: typeof SpeechRecognition;
  }
}

interface SpeechRecognitionAlternative {
  readonly transcript: string;
  readonly confidence: number;
}

interface SpeechRecognitionResult {
  readonly length: number;
  item(index: number): SpeechRecognitionAlternative;
  [index: number]: SpeechRecognitionAlternative;
}

interface SpeechRecognitionResultList {
  readonly length: number;
  item(index: number): SpeechRecognitionResult;
  [index: number]: SpeechRecognitionResult;
}

interface SpeechRecognitionEvent extends Event {
  readonly results: SpeechRecognitionResultList;
}

interface SpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start(): void;
  stop(): void;
  onstart: ((this: SpeechRecognition, ev: Event) => void) | null;
  onend: ((this: SpeechRecognition, ev: Event) => void) | null;
  onerror: ((this: SpeechRecognition, ev: Event) => void) | null;
  onresult: ((this: SpeechRecognition, ev: SpeechRecognitionEvent) => void) | null;
}

declare const SpeechRecognition: {
  prototype: SpeechRecognition;
  new (): SpeechRecognition;
};

export const AiVoiceInputComponentTagName: keyof HTMLElementTagNameMap = 'forge-ai-voice-input';

/**
 * Event detail interface for the speech recognition result event.
 */
export interface AiVoiceInputResultEvent {
  /** The recognized speech text */
  transcript: string;
  /** Confidence score of the recognition result (0-1) */
  confidence: number;
}

/**
 * @tag forge-ai-voice-input
 *
 * @event {CustomEvent<AiVoiceInputResultEvent>} forge-ai-voice-input-result - Fired when speech recognition produces a result.
 * The event detail contains the transcript and confidence score of the recognized speech.
 */
@customElement(AiVoiceInputComponentTagName)
export class AiVoiceInputComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  @state()
  private _isRecording = false;

  private _recognition: SpeechRecognition | null = null;

  public override connectedCallback(): void {
    super.connectedCallback();
    this._initializeSpeechRecognition();
  }

  private _initializeSpeechRecognition(): void {
    const SpeechRecognitionClass = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognitionClass) {
      console.warn('Speech Recognition is not supported in this browser');
      return;
    }

    this._recognition = new SpeechRecognitionClass();
    this._recognition.continuous = false;
    this._recognition.interimResults = false;
    this._recognition.lang = 'en-US';

    this._recognition.onstart = () => {
      this._isRecording = true;
    };

    this._recognition.onend = () => {
      this._isRecording = false;
    };

    this._recognition.onerror = () => {
      this._isRecording = false;
    };

    this._recognition.onresult = (event: SpeechRecognitionEvent) => {
      if (event.results.length > 0) {
        const result = event.results[0];
        if (result.length > 0) {
          const alternative = result[0];
          const eventDetail: AiVoiceInputResultEvent = {
            transcript: alternative.transcript,
            confidence: alternative.confidence
          };

          this.dispatchEvent(
            new CustomEvent('forge-ai-voice-input-result', {
              detail: eventDetail,
              bubbles: true
            })
          );
        }
      }
    };
  }

  private _toggleRecording(): void {
    if (!this._recognition) {
      return;
    }

    if (this._isRecording) {
      this._recognition.stop();
    } else {
      this._recognition.start();
    }
  }

  public override render(): TemplateResult {
    return html`
      <div class="ai-voice-input">
        <forge-icon-button
          theme=${this._isRecording ? 'error' : ''}
          class=${this._isRecording ? 'recording' : ''}
          @click=${this._toggleRecording}
          aria-label=${this._isRecording ? 'Stop recording' : 'Start recording'}
          ?disabled=${!this._recognition}>
          <forge-icon name="mic"></forge-icon>
        </forge-icon-button>
      </div>
    `;
  }
}
