import '$dev/shared';
import '$lib/app-layout';
import {
  defineAppBarComponent,
  defineButtonComponent,
  defineCardComponent,
  defineDividerComponent,
  defineIconComponent,
  defineIconButtonComponent,
  defineLinearProgressComponent,
  defineListComponent,
  IconRegistry
} from '@tylertech/forge';
import {
  tylIconMenu,
  tylIconDashboard,
  tylIconPeople,
  tylIconAnalytics,
  tylIconSettings,
  tylIconAssessment,
  tylIconHistory,
  tylIconFirstPage,
  tylIconPhoneAndroid,
  tylIconPersonAdd,
  tylIconUpdate,
  tylIconBackup,
  tylIconAdd,
  tylIconUpload,
  tylIconShare
} from '@tylertech/tyler-icons';

// Define Forge components
defineAppBarComponent();
defineButtonComponent();
defineCardComponent();
defineDividerComponent();
defineIconComponent();
defineIconButtonComponent();
defineLinearProgressComponent();
defineListComponent();

// Register icons
IconRegistry.define([
  tylIconMenu,
  tylIconDashboard,
  tylIconPeople,
  tylIconAnalytics,
  tylIconSettings,
  tylIconAssessment,
  tylIconHistory,
  tylIconFirstPage,
  tylIconPhoneAndroid,
  tylIconPersonAdd,
  tylIconUpdate,
  tylIconBackup,
  tylIconAdd,
  tylIconUpload,
  tylIconShare
]);

// Get elements
const scaffold = document.getElementById('app-layout') as any;

// Navigation link functionality
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    // Remove active class from all links
    navLinks.forEach(l => l.classList.remove('active'));

    // Add active class to clicked link
    link.classList.add('active');

    // Update page title
    const href = link.getAttribute('href');
    const title = link.textContent?.trim() || 'Dashboard';
    const contentHeader = document.querySelector('.content-header h1');
    if (contentHeader) {
      contentHeader.textContent = title;
    }

    // Close mobile sidebar after selection
    if (window.innerWidth <= 768) {
      scaffold.sidebarMobileVisible = false;
    }
  });
});

// Handle window resize
window.addEventListener('resize', () => {
  // Close mobile sidebar when switching to desktop
  if (window.innerWidth > 768) {
    scaffold.sidebarMobileVisible = false;
  }
});

// Add styles
const style = document.createElement('style');
style.textContent = `
  .demo-nav {
    padding: 16px;
    min-width: 280px;
  }

  .demo-nav h3, .demo-nav h4 {
    margin: 16px 0 8px 0;
    color: var(--forge-theme-text-high);
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .demo-nav h3 {
    margin-top: 0;
  }

  .nav-list {
    list-style: none;
    padding: 0;
    margin: 0 0 16px 0;
  }

  .nav-link {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    margin: 2px 0;
    border-radius: var(--forge-shape-medium);
    text-decoration: none;
    color: var(--forge-theme-text-medium);
    transition: all 0.2s ease;
    font-size: 14px;
  }

  .nav-link:hover {
    background-color: var(--forge-theme-surface-container);
    color: var(--forge-theme-text-high);
  }

  .nav-link.active {
    background-color: var(--forge-theme-primary-container-low);
    color: var(--forge-theme-primary);
    font-weight: 500;
  }

  .nav-link forge-icon {
    --forge-icon-size: 20px;
  }

  .demo-content {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .content-header h1 {
    margin: 0 0 8px 0;
    color: var(--forge-theme-text-high);
  }

  .content-header p {
    margin: 0;
    color: var(--forge-theme-text-medium);
  }

  .card-content {
    padding: 20px;
  }

  .card-content h2, .card-content h3 {
    margin-top: 0;
    margin-bottom: 16px;
    color: var(--forge-theme-text-high);
  }

  .control-group {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }

  .demo-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
  }

  .stat-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }

  .stat-item {
    text-align: center;
  }

  .stat-number {
    font-size: 24px;
    font-weight: 600;
    color: var(--forge-theme-primary);
    margin-bottom: 4px;
  }

  .stat-label {
    font-size: 12px;
    color: var(--forge-theme-text-medium);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .activity-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .activity-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
  }

  .activity-item forge-icon {
    --forge-icon-size: 20px;
    margin-top: 2px;
    color: var(--forge-theme-text-medium);
  }

  .activity-time {
    font-size: 12px;
    color: var(--forge-theme-text-medium);
    margin-top: 2px;
  }

  .action-buttons {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .action-btn {
    justify-content: flex-start;
  }

  .performance-metrics {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .metric {
    display: grid;
    grid-template-columns: 80px 1fr 40px;
    gap: 12px;
    align-items: center;
  }

  .metric-label {
    font-size: 12px;
    color: var(--forge-theme-text-medium);
  }

  .metric-value {
    font-size: 12px;
    color: var(--forge-theme-text-high);
    text-align: right;
  }

  .demo-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 24px;
    font-size: 14px;
    color: var(--forge-theme-text-medium);
  }

  .footer-links {
    display: flex;
    gap: 16px;
  }

  .footer-links a {
    color: var(--forge-theme-primary);
    text-decoration: none;
  }

  .footer-links a:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    .demo-grid {
      grid-template-columns: 1fr;
    }

    .stat-grid {
      grid-template-columns: 1fr;
      gap: 12px;
    }

    .demo-footer {
      flex-direction: column;
      gap: 8px;
      text-align: center;
    }

    .control-group {
      justify-content: center;
    }
  }
`;

document.head.appendChild(style);