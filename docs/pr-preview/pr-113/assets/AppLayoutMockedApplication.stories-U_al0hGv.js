import{x as o}from"./iframe-D2O19Nz9.js";import{I as l,d as r,t as s,b as n,e as i,f as c,g,h as p,i as d,j as f,k as b,l as m,m as u}from"./with-default-aria-CGi1gEF_.js";import{d as y}from"./app-layout-RE8y0F56.js";import"./responsive-toolbar-DnAuYQTG.js";import{d as v}from"./index-DckcjJoy.js";import{d as h}from"./index-Dlg3-BQQ.js";import{d as k}from"./index-BwPhML2Y.js";import{d as $}from"./index-DCU1msnm.js";import{d as x}from"./index-CTC-Gb1B.js";import{d as A}from"./index-DiUzLYeW.js";import{d as I}from"./index-CFWa17Ds.js";import{d as C}from"./index-q-MrScl9.js";import{d as w}from"./index-BnfSE_z3.js";import{d as S}from"./index-CuoWLIGq.js";import{d as D}from"./index-DMYLpL3q.js";import{d as M}from"./index-BwveMx6T.js";import"./constants-Bx1vnTPb.js";import"./when-DfnyT8j1.js";import"./base-CShCMygk.js";import"./state-B1cpujkC.js";import"./index-ByEYeP-N.js";import"./dismissible-stack-DCafBf4t.js";import"./list-B3CXHcgE.js";import"./base-button-adapter-CXZ2tuaD.js";import"./icon-button-C8o1sauA.js";import"./tooltip-CwyByca6.js";import"./with-longpress-listener-BZ8ZeyAG.js";import"./ref-DxCVbckc.js";import"./async-directive-BEFCRJIm.js";import"./directive-CJw_OlP2.js";import"./list-dropdown-aware-core-Dr_EHbEs.js";import"./linear-progress-constants-B800k5ud.js";import"./popover-CBMXBUvz.js";import"./skeleton-constants-CdjIK7IT.js";import"./scaffold-83Gs5zPv.js";import"./toolbar-C0y4hgkv.js";import"./divider-CsbgAzeg.js";k();$();x();y();A();I();C();w();S();v();D();M();h();l.define([r,s,n,i,c,g,p,d,f,b,m,u]);const T="forge-app-layout",be={title:"Components/App Layout",component:T,render:a=>{const e={heading3:"forge-typography--heading1",heading4:"forge-typography--heading2",heading5:"forge-typography--heading3",body1:"forge-typography--body1",label1:"forge-typography--label1"};return o`
      <style>
        * {
          box-sizing: border-box !important;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          padding: 0;
          margin: 0;
        }

        forge-app-layout:state(small) {
          .main-content-container {
            grid-template-columns: 1fr;
          }

          .column-2 {
            grid-column: 1;
          }
        }

        body,
        #storybook-root,
        #root-inner {
          margin: 0 !important;
          padding: 0 !important;
          overflow: hidden;
          height: 100%;
        }

        body {
          height: 100dvh;
        }

        .secondary-header {
          --forge-toolbar-background: transparent;
        }

        .section-header {
          margin: var(--forge-spacing-xsmall);
        }

        [slot='body'] {
          background-color: var(--forge-theme-surface-dim);
          padding-inline: var(--forge-spacing-medium);
        }

        .tab-container {
          grid-column: 1 / -1;
        }

        .main-content-container {
          display: grid;
          grid-template-columns: 9fr 3fr;
          gap: var(--forge-spacing-medium);
          grid-auto-rows: min-content;
          margin-block-start: var(--forge-spacing-medium);
        }

        .details-card {
          grid-column: 1;
        }

        .column-2 {
          grid-column: 2;
          display: flex;
          flex-direction: column;
          gap: var(--forge-spacing-medium);
        }

        .label-value-grid {
          display: grid;
          grid-template-columns: 180px 1fr;
          column-gap: var(--forge-spacing-medium);
          row-gap: var(--forge-spacing-xsmall);
          align-items: center;
        }

        forge-button[variant='tonal'] {
          --forge-button-tonal-background: #e5e8f7;
        }
      </style>
      <forge-app-layout app-title=${a.appTitle} breakpoint=${a.breakpoint}>
        <forge-list navlist slot="navigation" data-forge-app-layout-close>
          <!-- Dashboard Section -->
          <div class="forge-typography--body1 section-header">Dashboard</div>
          <forge-list-item class="section-item">
            <forge-icon slot="start" name="visibility" external></forge-icon>
            <button type="button">Overview</button>
          </forge-list-item>
          <forge-list-item class="section-item">
            <forge-icon slot="start" name="analytics" external></forge-icon>
            <button type="button">Analytics</button>
          </forge-list-item>
          <forge-list-item class="section-item">
            <forge-icon slot="start" name="assessment" external></forge-icon>
            <button type="button">Reports</button>
          </forge-list-item>

          <forge-divider></forge-divider>

          <!-- Users Section -->
          <div class="forge-typography--body1 section-header">Users</div>
          <forge-list-item class="section-item">
            <forge-icon slot="start" name="people" external></forge-icon>
            <button type="button">All Users</button>
          </forge-list-item>
          <forge-list-item class="section-item">
            <forge-icon slot="start" name="admin_panel_settings" external></forge-icon>
            <button type="button">Roles & Permissions</button>
          </forge-list-item>
          <forge-list-item class="section-item">
            <forge-icon slot="start" name="groups" external></forge-icon>
            <button type="button">User Groups</button>
          </forge-list-item>

          <forge-divider></forge-divider>

          <!-- Documents Section -->
          <div class="forge-typography--body1 section-header">Documents</div>
          <forge-list-item class="section-item">
            <forge-icon slot="start" name="history" external></forge-icon>
            <button type="button">Recent Files</button>
          </forge-list-item>
          <forge-list-item class="section-item">
            <forge-icon slot="start" name="share" external></forge-icon>
            <button type="button">Shared</button>
          </forge-list-item>
          <forge-list-item class="section-item">
            <forge-icon slot="start" name="archive" external></forge-icon>
            <button type="button">Archive</button>
          </forge-list-item>

          <forge-divider></forge-divider>

          <!-- Standalone Items -->
          <forge-list-item>
            <forge-icon slot="start" name="settings" external></forge-icon>
            <button type="button">Settings</button>
          </forge-list-item>
          <forge-list-item>
            <forge-icon slot="start" name="help" external></forge-icon>
            <button type="button">Help & Support</button>
          </forge-list-item>
        </forge-list>

        <main slot="body">
          <forge-toolbar class="secondary-header" no-border>
            <!-- Back button - always visible -->
            <forge-stack inline alignment="center" gap="32" slot="before-start">
              <forge-stack alignment="center" inline gap="8">
                <forge-icon-button aria-label="Go back" density="small">
                  <forge-icon name="arrow_back" external></forge-icon>
                </forge-icon-button>
                <h2 class="${e.heading5}">Cory Ander</h2>
              </forge-stack>
              <forge-stack inline alignment="center" gap="8">
                <forge-badge theme="secondary">Interview pending</forge-badge>
                <forge-badge theme="info">Internal</forge-badge>
              </forge-stack>
            </forge-stack>
          </forge-toolbar>
          <div class="tab-container">
            <forge-tab-bar data-aria-label="Demo tabs" active-tab="0" clustered slot="start">
              <forge-tab>Applicant information</forge-tab>
              <forge-tab>Documents</forge-tab>
              <forge-tab>Interviews</forge-tab>
              <forge-tab>Messages</forge-tab>
            </forge-tab-bar>
          </div>

          <div class="main-content-container">
            <forge-card class="details-card">
              <forge-stack gap="24">
                <h3 class="${e.heading4}">Details</h3>
                <div class="label-value-grid">
                  <label slot="label" class="${e.label1}">Applied for</label>
                  <span slot="value" class="${e.body1}">Senior software engineer</span>
                  <label slot="label" class="${e.label1}">Application date</label>
                  <span slot="value" class="${e.body1}">January 1, 2024</span>
                </div>
                <div class="tab-container">
                  <forge-tab-bar data-aria-label="Demo tabs" active-tab="0" clustered slot="start">
                    <forge-tab>Personal information</forge-tab>
                    <forge-tab>Qualifications</forge-tab>
                    <forge-tab>Work history</forge-tab>
                    <forge-tab>References</forge-tab>
                  </forge-tab-bar>
                </div>
                <forge-stack gap="24">
                  <h4 class="${e.heading3}">Education</h4>
                  <forge-stack gap="24">
                    <div class="label-value-grid">
                      <label slot="label" class="${e.label1}">Institution</label>
                      <span slot="value" class="${e.body1}">Massachusetts Institute of Technology</span>
                      <label slot="label" class="${e.label1}">Degree</label>
                      <span slot="value" class="${e.body1}">Masters of Science</span>
                      <label slot="label" class="${e.label1}">Area 1</label>
                      <span slot="value" class="${e.body1}">Computer Science</span>
                      <label slot="label" class="${e.label1}">Area 2</label>
                      <span slot="value" class="${e.body1}">Mathematics</span>
                    </div>
                    <div class="label-value-grid">
                      <label slot="label" class="${e.label1}">Institution</label>
                      <span slot="value" class="${e.body1}">University of California, Berkeley</span>
                      <label slot="label" class="${e.label1}">Degree</label>
                      <span slot="value" class="${e.body1}">Bachelors of Science</span>
                      <label slot="label" class="${e.label1}">Area 1</label>
                      <span slot="value" class="${e.body1}">Computer Engineering</span>
                      <label slot="label" class="${e.label1}">Area 2</label>
                      <span slot="value" class="${e.body1}">Mathematics</span>
                    </div>
                  </forge-stack>
                </forge-stack>
                <forge-divider></forge-divider>

                <forge-stack gap="24">
                  <h4 class="${e.heading3}">Certifications</h4>
                  <forge-stack gap="24">
                    <div class="label-value-grid">
                      <label slot="label" class="${e.label1}">Type</label>
                      <span slot="value" class="${e.body1}">AWS Certified Solutions Architect</span>
                      <label slot="label" class="${e.label1}">Area</label>
                      <span slot="value" class="${e.body1}">Cloud Computing</span>
                      <label slot="label" class="${e.label1}">Level</label>
                      <span slot="value" class="${e.body1}">Professional</span>
                      <label slot="label" class="${e.label1}">Effective date</label>
                      <span slot="value" class="${e.body1}">01/01/2026</span>
                      <label slot="label" class="${e.label1}">Expiration date</label>
                      <span slot="value" class="${e.body1}">01/01/2028</span>
                    </div>
                    <div class="label-value-grid">
                      <label slot="label" class="${e.label1}">Type</label>
                      <span slot="value" class="${e.body1}">Certified Scrum Master</span>
                      <label slot="label" class="${e.label1}">Area</label>
                      <span slot="value" class="${e.body1}">Agile Methodology</span>
                      <label slot="label" class="${e.label1}">Effective date</label>
                      <span slot="value" class="${e.body1}">01/01/2026</span>
                      <label slot="label" class="${e.label1}">Expiration date</label>
                      <span slot="value" class="${e.body1}">01/01/2028</span>
                    </div>
                  </forge-stack>
                </forge-stack>
              </forge-stack>
            </forge-card>

            <div class="column-2">
              <forge-card>
                <forge-stack gap="16">
                  <h3 class="${e.heading4}">Workflow Status</h3>
                  <forge-select
                    label="Applicant status"
                    aria-label="Label"
                    label-position="block-start"
                    label-alignment="default"
                    variant="outlined"
                    theme="default"
                    shape="default"
                    density="default"
                    value="1"
                    support-text-inset
                    select-all-label="Select all">
                    <forge-option value="1">Interview</forge-option>
                    <forge-option value="2">Option 2</forge-option>
                    <forge-option value="3">Option 3</forge-option>
                  </forge-select>
                  <forge-stack gap="8">
                    <forge-button variant="filled">
                      <forge-icon name="calendar_today" slot="start" external></forge-icon>
                      <span>Schedule interview</span>
                    </forge-button>
                    <forge-button variant="tonal">
                      <forge-icon name="send_variant_outline" slot="start" external></forge-icon>
                      <span>Send reference request</span>
                    </forge-button>
                  </forge-stack>
                </forge-stack>
              </forge-card>

              <forge-card class="workflow-status-card">
                <forge-stack gap="16">
                  <h3 class="${e.heading4}">Interview details</h3>
                  <forge-date-picker>
                    <forge-text-field label-position="block-start">
                      <label for="date-picker">Date</label>
                      <input
                        aria-label="Pick a date"
                        type="text"
                        id="date-picker"
                        autocomplete="off"
                        placeholder="mm/dd/yyyy" />
                    </forge-text-field>
                  </forge-date-picker>
                  <forge-stack gap="8">
                    <forge-button variant="tonal">
                      <forge-icon name="question_answer" slot="start" external></forge-icon>
                      <span>Generate questions</span>
                    </forge-button>
                    <forge-button variant="tonal">
                      <forge-icon name="star_border" slot="start" external></forge-icon>
                      <span>Add evaluation</span>
                    </forge-button>
                    <forge-button variant="tonal">
                      <forge-icon name="notes" slot="start" external></forge-icon>
                      <span>View notes</span>
                    </forge-button>
                  </forge-stack>
                </forge-stack>
              </forge-card>

              <forge-card class="workflow-status-card">
                <forge-stack gap="16">
                  <h3 class="${e.heading4}">Verification status</h3>
                  <forge-stack gap="8">
                    <div class="label-value-grid">
                      <span class="${e.label1}">Background check</span>
                      <forge-badge theme="info-secondary">Initiated</forge-badge>

                      <span class="${e.label1}">Reference check</span>
                      <forge-badge theme="tertiary">Sent</forge-badge>
                    </div>
                  </forge-stack>
                </forge-stack>
              </forge-card>
            </div>
          </div>
        </main>

        <div slot="footer">
          <div
            style="padding: 16px; background: var(--forge-theme-surface-container); border-top: 1px solid var(--forge-theme-outline-low); text-align: center;">
            Footer Content
          </div>
        </div>
      </forge-app-layout>
    `},argTypes:{appTitle:{control:"text",description:"The title text to display in the app bar",table:{category:"Properties"}},breakpoint:{control:"number",description:"The screen width breakpoint in pixels for responsive behavior",table:{category:"Properties"}}},args:{appTitle:"App Layout Demo",breakpoint:960}},t={};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};const me=["MockedApplication"];export{t as MockedApplication,me as __namedExportsOrder,be as default};
