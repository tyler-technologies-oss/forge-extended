import '../../lib/ai/ai-file-picker';
import { IconRegistry } from '@tylertech/forge';
import { tylIconUpload } from '@tylertech/tyler-icons';

// Register icons
IconRegistry.define([tylIconUpload]);

console.log('AI File Picker demo loaded');

document.addEventListener('DOMContentLoaded', () => {
  // Button variant demo
  const buttonPicker = document.getElementById('button-picker');
  const buttonInfo = document.getElementById('button-info');

  buttonPicker?.addEventListener('forge-ai-file-picker-change', (event: CustomEvent) => {
    const { file } = event.detail;
    if (buttonInfo) {
      buttonInfo.textContent = `File selected: ${file.name} (${(file.size / 1024).toFixed(2)} KB)`;
    }
    console.log('Button picker file selected:', file.name);
  });

  // Icon button variant demo
  const iconPicker = document.getElementById('icon-picker');
  const iconInfo = document.getElementById('icon-info');

  iconPicker?.addEventListener('forge-ai-file-picker-change', (event: CustomEvent) => {
    const { file } = event.detail;
    if (iconInfo) {
      iconInfo.textContent = `File selected: ${file.name} (${(file.size / 1024).toFixed(2)} KB)`;
    }
    console.log('Icon picker file selected:', file.name);
  });

  // Image only demo
  const imagePicker = document.getElementById('image-picker');
  const imageInfo = document.getElementById('image-info');

  imagePicker?.addEventListener('forge-ai-file-picker-change', (event: CustomEvent) => {
    const { file } = event.detail;
    if (imageInfo) {
      imageInfo.textContent = `Image selected: ${file.name} (${(file.size / 1024).toFixed(2)} KB, Type: ${file.type})`;
    }
    console.log('Image picker file selected:', file.name, file.type);
  });

  // Multiple files demo
  const multiplePicker = document.getElementById('multiple-picker');
  const multipleInfo = document.getElementById('multiple-info');

  multiplePicker?.addEventListener('forge-ai-file-picker-change', (event: CustomEvent) => {
    const { file } = event.detail;
    if (multipleInfo) {
      multipleInfo.textContent = `File selected: ${file.name} (${(file.size / 1024).toFixed(2)} KB)`;
    }
    console.log('Multiple picker file selected:', file.name);
  });

  // Drag & drop demo
  const dragPicker = document.getElementById('drag-picker');
  const dragInfo = document.getElementById('drag-info');

  dragPicker?.addEventListener('forge-ai-file-picker-change', (event: CustomEvent) => {
    const { file } = event.detail;
    if (dragInfo) {
      dragInfo.textContent = `File dropped/selected: ${file.name} (${(file.size / 1024).toFixed(2)} KB)`;
    }
    console.log('Drag picker file selected:', file.name);
  });
});