import '$dev/shared';
import '$lib/landing-page-layout';
import './landing-page-layout.scss';

const layout = document.getElementById('layout') as HTMLElement & {
  mode: 'two-third' | 'equal' | 'three' | 'single';
  alignment: 'left' | 'center';
  size: 'normal' | 'wide';
};
const modeButton = document.getElementById('layout-mode-button') as HTMLSpanElement;
const toggleModeBtn = document.getElementById('toggle-mode') as HTMLButtonElement;
const alignButton = document.getElementById('layout-align-button') as HTMLSpanElement;
const toggleAlignBtn = document.getElementById('toggle-align') as HTMLButtonElement;
const toggleSizeBtn = document.getElementById('toggle-size') as HTMLElement;
const toggleTopBtn = document.getElementById('toggle-top') as HTMLElement;
const topElement = document.getElementById('top') as HTMLElement;

const modes: Array<'two-third' | 'equal' | 'three' | 'single'> = ['two-third', 'equal', 'three', 'single'];
const alignments: Array<'left' | 'center'> = ['center', 'left'];
const sizes: Array<'normal' | 'wide'> = ['normal', 'wide'];
let currentModeIndex = 0;
let currentAlignIndex = 0;
let currentSizeIndex = 0;

function updateModeDisplay(): void {
  modeButton.textContent = layout.mode;
}

function updateAlignDisplay(): void {
  alignButton.textContent = layout.alignment;
}

toggleModeBtn.addEventListener('click', () => {
  currentModeIndex = (currentModeIndex + 1) % modes.length;
  layout.mode = modes[currentModeIndex];
  updateModeDisplay();
});

toggleAlignBtn.addEventListener('click', () => {
  currentAlignIndex = (currentAlignIndex + 1) % alignments.length;
  layout.alignment = alignments[currentAlignIndex];
  updateAlignDisplay();
});

toggleSizeBtn.addEventListener('click', () => {
  currentSizeIndex = (currentSizeIndex + 1) % sizes.length;
  layout.size = sizes[currentSizeIndex];
});

toggleTopBtn.addEventListener('click', () => {
  if (topElement.slot === 'top') {
    topElement.slot = '';
  } else {
    topElement.slot = 'top';
  }
});
