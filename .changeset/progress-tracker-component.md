---
'@tylertech/forge-extended': minor
---

Add new `<forge-progress-tracker>` component for displaying progress through a sequence of steps or milestones.

- Renders the steps it is given in the order provided, distinguishing completed from incomplete steps, and partially fills the connector after the most recently completed step
- Supports horizontal and vertical orientations
- Supports optional per-step theme colors (`primary`, `secondary`, `tertiary`, `success`, `error`, `warning`, `info`) applied to the step indicator and trailing connector
- Steps with a description are interactive and dispatch a `forge-progress-tracker-step-info` event so the consuming application can present the information in a dialog it owns
- Includes `title` and `actions` slots for an optional header row
- Steps reserve a minimum width and scroll horizontally when space is constrained
