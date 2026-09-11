import{x as e}from"./iframe-uYmMtFXe.js";import{s as r}from"./decorators-CdDnjmZ2.js";import{I as t,m as a,D as s,b as l,E as i,F as d,G as c}from"./with-default-aria-Ajc3U0-g.js";import"./structured-card-AfuOk_JJ.js";import{d as n}from"./index-BAQeSDAv.js";import{d as p}from"./index-DY8pP0a5.js";import{d as f}from"./index-BPv42_UP.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-RnAbd9qQ.js";import"./constants-CpZXP-xH.js";import"./utils-tJtJfoaq.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-kcMyfuC-.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-C31Bz0lK.js";import"./when-3fO0zp9C.js";import"./lit-utils-CpuDE9B8.js";import"./async-directive-DqvxUZro.js";import"./index-D1VuADBN.js";import"./base-button-adapter-81PK7MPV.js";import"./focus-indicator-nFJ3EteD.js";import"./button-constants-BspY-3bl.js";import"./icon-D3Ok13p2.js";n();p();f();t.define([a,s,l,i,d,c]);const g="forge-structured-card",U={title:"Components/Structured Card",component:g,decorators:[r(`
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
    `},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const j=["MultipleCards"];export{o as MultipleCards,j as __namedExportsOrder,U as default};
