import{x as e}from"./iframe-BgG1mILm.js";import{s as r}from"./decorators-CGtwCCji.js";import{I as t,l as a,Q as s,b as l,R as i,S as d,T as c}from"./with-default-aria-DhKreie1.js";import"./structured-card-DqTFIYN0.js";import{d as n}from"./index-DH-EBj3W.js";import{d as p}from"./index-IpHzfxDW.js";import{d as f}from"./index-DkaSey4m.js";import"./_commonjsHelpers-CqkleIqs.js";import"./feature-detection-4yZjZMA_.js";import"./constants-D4w8ERcy.js";import"./a11y-utils-Bqf6nmLH.js";import"./custom-element-C028faeO.js";import"./utils-BrQSBAEO.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-nSt2BsDm.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-CZmYL34l.js";import"./when-3fO0zp9C.js";import"./lit-utils-CbFCRKzL.js";import"./async-directive-C8qPSgQz.js";import"./index-Brr_ru3-.js";import"./base-button-adapter-DJylsVrC.js";import"./focus-indicator-CvBVFsiv.js";import"./icon-DUW7oXzz.js";n();p();f();t.define([a,s,l,i,d,c]);const g="forge-structured-card",j={title:"Components/Structured Card",component:g,decorators:[r(`
      .cards-container {
        display: flex;
        flex-wrap: wrap;
        gap: var(--forge-spacing-large);
      }

      .cards-container forge-structured-card {
        flex: 1 1 300px;
        max-width: 400px;
      }

      .body-content {
        display: flex;
        flex-direction: column;
        gap: var(--forge-spacing-small);
      }

      .placeholder-box {
        background-color: var(--forge-theme-surface-dim);
        border-radius: var(--forge-shape-small);
      }

      .placeholder-box--tall {
        height: 48px;
      }

      .placeholder-box--short {
        height: 24px;
      }

      .placeholder-box--half {
        width: 60%;
      }
    `)],render:()=>e`
      <div class="cards-container">
        <forge-structured-card heading-level="2">
          <div slot="title" style="display: flex; align-items: center; gap: var(--forge-spacing-medium);">
            <forge-icon name="person"></forge-icon>
            <span>User Profile</span>
          </div>
          <forge-badge theme="success" slot="header-actions">
            <forge-icon name="check_circle" slot="start"></forge-icon>
            <span>Active</span>
          </forge-badge>
          <div slot="body" class="body-content">
            <div class="placeholder-box placeholder-box--tall"></div>
            <div class="placeholder-box placeholder-box--short"></div>
            <div class="placeholder-box placeholder-box--short placeholder-box--half"></div>
          </div>
          <forge-button variant="text" slot="footer-secondary-action">Cancel</forge-button>
          <forge-button variant="tonal" slot="footer-primary-action">Save</forge-button>
        </forge-structured-card>

        <forge-structured-card heading-level="2">
          <div slot="title" style="display: flex; align-items: center; gap: var(--forge-spacing-medium);">
            <forge-icon name="settings"></forge-icon>
            <span>Preferences</span>
          </div>
          <forge-badge theme="warning" slot="header-actions">
            <forge-icon name="construction" slot="start"></forge-icon>
            <span>Modified</span>
          </forge-badge>
          <div slot="body" class="body-content">
            <div class="placeholder-box placeholder-box--short"></div>
            <div class="placeholder-box placeholder-box--short"></div>
            <div class="placeholder-box placeholder-box--tall"></div>
          </div>
          <forge-button variant="text" slot="footer-secondary-action">Reset</forge-button>
          <forge-button variant="tonal" slot="footer-primary-action">Apply</forge-button>
        </forge-structured-card>

        <forge-structured-card heading-level="2">
          <div slot="title" style="display: flex; align-items: center; gap: var(--forge-spacing-medium);">
            <forge-icon name="edit"></forge-icon>
            <span>Notes</span>
          </div>
          <forge-badge theme="info-secondary" slot="header-actions">
            <forge-icon name="description" slot="start"></forge-icon>
            <span>Draft</span>
          </forge-badge>
          <div slot="body" class="body-content">
            <div class="placeholder-box placeholder-box--short placeholder-box--half"></div>
            <div class="placeholder-box placeholder-box--tall"></div>
            <div class="placeholder-box placeholder-box--short"></div>
            <div class="placeholder-box placeholder-box--short placeholder-box--half"></div>
          </div>
          <forge-button variant="text" slot="footer-secondary-action">Discard</forge-button>
          <forge-button variant="tonal" slot="footer-primary-action">Save</forge-button>
        </forge-structured-card>
      </div>
    `},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const q=["MultipleCards"];export{o as MultipleCards,q as __namedExportsOrder,j as default};
