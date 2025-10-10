import '$dev/shared';
import '$lib/ai/ai-chat-widget';
import './ai-chat-widget.scss';

// Simple demo functionality
document.addEventListener('DOMContentLoaded', () => {
  console.log('AI Chat Widget Hello World demo loaded successfully!');

  // Add some basic interactivity to demonstrate the component is working
  const widgets = document.querySelectorAll('forge-ai-chat-widget');

  widgets.forEach((widget, index) => {
    widget.addEventListener('click', () => {
      console.log(`Clicked on widget ${index + 1}`);
    });
  });
});