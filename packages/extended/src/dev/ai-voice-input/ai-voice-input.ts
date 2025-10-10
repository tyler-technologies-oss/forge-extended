import '../../lib/ai/ai-voice-input';
import type { AiVoiceInputResultEvent } from '../../lib/ai/ai-voice-input';

console.log('AI Voice Input demo loaded');

document.addEventListener('DOMContentLoaded', () => {
  const voiceInput = document.querySelector('forge-ai-voice-input');

  if (voiceInput) {
    voiceInput.addEventListener('forge-ai-voice-input-result', (event: CustomEvent<AiVoiceInputResultEvent>) => {
      console.log('Speech recognized:', event.detail.transcript);
      console.log('Confidence:', event.detail.confidence);
    });
  }
});