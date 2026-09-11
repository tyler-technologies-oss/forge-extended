import{j as e,M as s,T as i,C as a}from"./blocks-B6dpfGno.js";import{useMDXComponents as o}from"./index-De36GQbW.js";import"./index-BFVZ7Xg9.js";import{T as h,D as d}from"./ThemeEditor.stories-CoKsUvRc.js";import"./iframe-SHp831uv.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-B6C_dIc3.js";import"./utils-BQMvIrLC.js";import"./state-CuQqgled.js";import"./when-3fO0zp9C.js";import"./directive-CJw_OlP2.js";import"./style-map-DTIaQhkS.js";import"./with-default-aria-8o2urQtC.js";import"./constants-DRnO8cEF.js";import"./checkbox-C17RAfSa.js";import"./with-form-associated-CrAn_-fE.js";import"./base-button-adapter-BVuIt3Kj.js";import"./focus-indicator-B9vvCHqs.js";import"./field-7mXRGzaS.js";import"./button-constants-BjrjrMWP.js";import"./button-toggle-group-constants-BJfObX6l.js";import"./icon-button-q71bmWIK.js";import"./icon-rFRese_m.js";import"./index-BKf0lMQ0.js";import"./index-Dqas8LBv.js";import"./circular-progress-LqVQE4DK.js";import"./index-BvX6YG-j.js";import"./index-QCVF5AdA.js";import"./index-mkpL2-Zq.js";import"./index-w9bmsUew.js";import"./linear-progress-constants-DYYvrefD.js";import"./index-Bjm368ns.js";import"./select-DL8z86Bp.js";import"./list-dropdown-aware-core-VqYDPu-u.js";import"./list-CwHjiN9d.js";import"./popover-C195UbFv.js";import"./with-longpress-listener-BbaSALIF.js";import"./dismissible-stack-DesdIcOG.js";import"./skeleton-constants-_FgaUUgn.js";import"./divider-C6ejeDne.js";import"./scaffold-dEdRzjMI.js";import"./toolbar-92yZYbx_.js";import"./index-BMo0Mogn.js";import"./tooltip-BjVCG211.js";import"./index-KZ9udkuJ.js";import"./index-CpfWDvCn.js";import"./index-D9hqbZqQ.js";import"./index-C-HRxh8T.js";import"./index-DcKUdkzw.js";import"./index-Cx5EkvF8.js";import"./index-DLWqkgo1.js";function r(n){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:h}),`
`,e.jsx(i,{}),`
`,e.jsxs(t.p,{children:["A complete authoring surface for a Tyler Forge™ theme. It edits all 101 ",e.jsx(t.code,{children:"--forge-theme-*"}),` design tokens,
derives a full palette from a handful of seed colors, reports the worst `,e.jsx(t.code,{children:"on-*"}),` contrast ratios, imports and
exports the theme, and can apply the theme to the live page so a customer can see it on the real product.`]}),`
`,e.jsx(t.p,{children:`The component owns no persistence. It edits a theme object and emits it; the host application decides where
that theme is stored and how it is delivered.`}),`
`,e.jsx(a,{of:d}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<forge-theme-editor>
  <span slot="title">Brand theme</span>
</forge-theme-editor>
`})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-ts",children:`const editor = document.querySelector('forge-theme-editor');

editor.loadTheme(await fetchSavedTheme());
editor.addEventListener('forge-theme-editor-change', ({ detail }) => save(detail.theme));
`})}),`
`,e.jsx(t.h3,{id:"views",children:"Views"}),`
`,e.jsxs(t.p,{children:["The views are in authoring order, and the editor opens on ",e.jsx(t.strong,{children:"Palette"}),` — seed a palette
first, then fine-tune individual tokens, then check contrast, then take the theme away
with you.`]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Palette"})," — pick the nine seed colors and the editor derives the container ramps, the readable ",e.jsx(t.code,{children:"on-"}),`
inks, and the surface, text and outline scales. `,e.jsx(t.code,{children:"Surface"}),` chooses light or dark, and it is the palette
that owns that choice (see `,e.jsx(t.a,{href:"#light-and-dark",children:"Light and dark"}),"). ",e.jsx(t.code,{children:"Target contrast"}),` is the WCAG ratio
derived inks aim for; turning off `,e.jsx(t.code,{children:"Pure black/white accent inks"}),` derives tinted inks instead of the pure
black and white that Forge's own tokens use. `,e.jsx(t.code,{children:"Target contrast"}),` offers the three ratios WCAG 2 actually
defines (3:1, 4.5:1, 7:1) rather than a free-form number.`]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Tokens"}),` — every token, grouped into cards (brand, primary, secondary, tertiary, surface, text,
success, error, warning, info, outline). Each group header carries a swatch of the color it is about, and
each row a color swatch and a text field. The filter narrows to matching token
names or group labels, and matched groups expand automatically. Each row has its own revert button, and
`,e.jsx(t.code,{children:"Revert all"})," clears every override at once. A ",e.jsx(t.code,{children:"Global knobs"})," panel exposes ",e.jsx(t.code,{children:"--forge-shape-factor"}),`,
a spacing multiplier, and the typography font family and size.`]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Contrast"})," — Forge pairs every surface token with an ",e.jsx(t.code,{children:"on-"}),` token, and that is the color it draws text
and icons in on top of that surface. Each row `,e.jsx(t.strong,{children:"renders the pair for real"}),` next to its ratio, so an
illegible combination is visible rather than inferred from a number. Body text needs 4.5:1 and large text
3:1 for WCAG 2 AA. Some targets are physically unreachable — nothing contrasts 7:1 with a mid-lightness
orange — so the report shows the shortfall rather than pretending it passed.`]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Import & export"})," — export as JSON, as Sass built on Forge's own ",e.jsx(t.code,{children:"theme.provide()"}),` mixin, or as a plain
`,e.jsx(t.code,{children:":root"})," CSS block. Import accepts pasted JSON or a dropped file. Unknown token names are ",e.jsx(t.strong,{children:`rejected and
reported`})," rather than imported, because an invalid name emits a ",e.jsx(t.code,{children:"--forge-theme-*"}),` property that nothing
reads.`]}),`
`]}),`
`,e.jsx(t.h3,{id:"light-and-dark",children:"Light and dark"}),`
`,e.jsxs(t.p,{children:["A theme is ",e.jsx(t.strong,{children:"two independent designs"}),`, not one design with a switch. An accent that
reads well on white is usually wrong on near-black, so the editor keeps a separate
variant per polarity — its own token overrides and its own seed colors:`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-ts",children:`theme.polarity; // 'light' | 'dark' — which variant is being authored
theme.variants.light; // { tokens, seeds }
theme.variants.dark; // { tokens, seeds }
`})}),`
`,e.jsxs(t.p,{children:["Editing ",e.jsx(t.code,{children:"primary"}),` in light does not touch dark, and switching back finds your light
work exactly as you left it. `,e.jsx(t.code,{children:"Surface"})," on the ",e.jsx(t.strong,{children:"Palette"}),` view switches variants; it
derives nothing on its own. A variant you have never touched is seeded from that
polarity's stock Forge colors, so starting a dark theme starts from Forge's dark
palette rather than from light accents on a dark surface.`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"mode"})," is a separate question — what to ",e.jsx(t.em,{children:"emit"}),", not what to design:"]}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:e.jsx(t.code,{children:"mode"})}),e.jsx(t.th,{children:"Emits"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"patch"})}),e.jsx(t.td,{children:"only the tokens you changed, so the host app's theme shows through"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"replace"})}),e.jsx(t.td,{children:"the stock set for the active polarity, then your changes on top"})]})]})]}),`
`,e.jsxs(t.p,{children:["Generating a palette sets ",e.jsx(t.code,{children:"mode"})," to ",e.jsx(t.code,{children:"replace"}),`, because 101 tokens is a whole theme
rather than a patch. Exported JSON always carries `,e.jsx(t.strong,{children:"both"}),` variants, so one file is
the complete light-and-dark design.`]}),`
`,e.jsx(t.h3,{id:"staying-readable-while-previewing",children:"Staying readable while previewing"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"immuneToPreview"}),` (on by default) keeps the editor's own chrome on the host
application's theme while a page-wide preview is applied.`]}),`
`,e.jsxs(t.p,{children:[`Without it the tool inherits the theme being authored — fine until you author
something low-contrast, at which point you cannot see well enough to fix it. The
component samples the page's own tokens before injecting the override and re-declares
them on itself; an inline `,e.jsx(t.code,{children:"!important"})," declaration outranks the preview's ",e.jsx(t.code,{children:"!important"}),`
rule on `,e.jsx(t.code,{children:":root"}),"/",e.jsx(t.code,{children:"body"}),` for this element and its subtree. Set
`,e.jsx(t.code,{children:'immune-to-preview="false"'})," to have the editor restyle along with the page."]}),`
`,e.jsx(t.h3,{id:"sizing",children:"Sizing"}),`
`,e.jsx(t.p,{children:`The token list tiles into as many columns as the container allows, because a token value is
a hex code rather than prose. Three custom properties tune it:`}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Custom property"}),e.jsx(t.th,{children:"Default"}),e.jsx(t.th,{children:"Purpose"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"--_forge-theme-editor-cell-min"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"232px"})}),e.jsx(t.td,{children:"Minimum width of a token cell before it wraps."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"--_forge-theme-editor-max-height"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"80dvh"})}),e.jsx(t.td,{children:"Height the editor scrolls within."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"--_forge-theme-editor-swatch-size"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"28px"})}),e.jsx(t.td,{children:"Size of the color swatch button."})]})]})]}),`
`,e.jsx(t.p,{children:"The header and the tab bar stay put while the active view scrolls."}),`
`,e.jsx(t.h3,{id:"two-ways-to-see-a-theme",children:"Two ways to see a theme"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Preview theme"})," opens a dialog holding ",e.jsx(t.code,{children:"forge-theme-showcase"}),` — a panel of real
Forge components in real states: buttons including disabled, a field that is actually
invalid, checked and indeterminate checkboxes, chips, the four status ramps, five
nested surface levels and the three text emphasis levels. The theme is declared on a
wrapper inside the dialog, so it reaches the showcase and stops there. `,e.jsx(t.strong,{children:`Nothing
outside the dialog changes.`})," This is the one to reach for."]}),`
`,e.jsx(t.p,{children:`The showcase is deliberately dumb: no properties, no theming logic. It renders
components and inherits whatever custom properties its ancestor declares, which is
what makes it reusable as a specimen anywhere.`}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Apply to page"}),` is the other option, and it is a different thing: it declares the
theme on the document and restyles the whole application until you turn it off.
Useful for seeing a theme in situ; it is also why `,e.jsx(t.code,{children:"immuneToPreview"})," exists."]}),`
`,e.jsx(t.p,{children:`The dialog's own chrome keeps the editor's theme rather than the authored one, for the
same reason the editor does — it has to stay readable no matter what you author.`}),`
`,e.jsx(t.h3,{id:"the-cascade-the-page-wide-preview-needs",children:"The cascade the page-wide preview needs"}),`
`,e.jsxs(t.p,{children:[`The preview has to be written as real CSS, because there is no Forge machinery that
turns a theme object into custom properties. `,e.jsx(t.code,{children:"forge-theme-toggle"}),` only sets
`,e.jsx(t.code,{children:"data-forge-theme"})," on ",e.jsx(t.code,{children:"<html>"}),` and relies on the host application having written a
rule for it; that attribute appears nowhere in Forge core.`]}),`
`,e.jsxs(t.p,{children:["It also declares its tokens on a list of selectors with ",e.jsx(t.code,{children:"!important"}),`. Forge ships the
light set as `,e.jsx(t.code,{children:":root { ... }"})," in ",e.jsx(t.code,{children:"forge.css"}),`, but the dark set only as a mixin that
host applications attach to a class on `,e.jsx(t.code,{children:"<body>"}),":"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-scss",children:`.dark-theme {
  @include theme-dark.theme-properties;
}
`})}),`
`,e.jsxs(t.p,{children:["A custom property declared on ",e.jsx(t.code,{children:"<body>"})," beats one inherited from ",e.jsx(t.code,{children:":root"}),`, so declaring
only on `,e.jsx(t.code,{children:":root"}),` loses on any page already in dark mode. The default selector list
covers `,e.jsx(t.code,{children:":root"}),", ",e.jsx(t.code,{children:"body"}),", the ",e.jsx(t.code,{children:".dark-theme"})," / ",e.jsx(t.code,{children:".app-theme-dark"}),` conventions, and
`,e.jsx(t.code,{children:"forge-theme-toggle"}),"'s ",e.jsx(t.code,{children:"data-forge-theme"})," attribute. Set ",e.jsx(t.code,{children:"previewSelectors"}),` to target
a different carrier.`]}),`
`,e.jsxs(t.p,{children:["Custom properties inherit across shadow boundaries, so declaring them on ",e.jsx(t.code,{children:"<body>"}),`
reaches inside every Forge component's shadow root.`]})]})}function ae(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{ae as default};
