import {
  IAccordionComponent,
  IAppBarComponent,
  IAppBarHelpButtonComponent,
  IAppBarMenuButtonComponent,
  IAppBarNotificationButtonComponent,
  IAppBarProfileButtonComponent,
  IAppBarSearchComponent,
  IAutocompleteComponent,
  IAvatarComponent,
  IBackdropComponent,
  IBadgeComponent,
  IBannerComponent,
  IBottomSheetComponent,
  IButtonAreaComponent,
  IButtonComponent,
  IButtonToggleComponent,
  IButtonToggleGroupComponent,
  ICalendarComponent,
  ICardComponent,
  ICheckboxComponent,
  IChipComponent,
  IChipFieldComponent,
  IChipSetComponent,
  ICircularProgressComponent,
  IColorPickerComponent,
  IDatePickerComponent,
  IDateRangePickerComponent,
  IDeprecatedButtonComponent,
  IDeprecatedIconButtonComponent,
  IDialogComponent,
  IDividerComponent,
  IDrawerComponent,
  IExpansionPanelComponent,
  IFieldComponent,
  IFilePickerComponent,
  IFloatingActionButtonComponent,
  IFocusIndicatorComponent,
  IIconButtonComponent,
  IIconComponent,
  IInlineMessageComponent,
  IKeyboardShortcutComponent,
  ILabelValueComponent,
  ILinearProgressComponent,
  IListComponent,
  IListItemComponent,
  IMenuComponent,
  IMiniDrawerComponent,
  IModalDrawerComponent,
  IOpenIconComponent,
  IOptionComponent,
  IOptionGroupComponent,
  IOverlayComponent,
  IPageStateComponent,
  IPaginatorComponent,
  IPopoverComponent,
  IProfileCardComponent,
  IRadioComponent,
  IScaffoldComponent,
  ISelectComponent,
  ISelectDropdownComponent,
  ISkeletonComponent,
  ISliderComponent,
  ISplitViewComponent,
  ISplitViewPanelComponent,
  IStackComponent,
  IStateLayerComponent,
  IStepComponent,
  IStepperComponent,
  ISwitchComponent,
  ITabBarComponent,
  ITabComponent,
  ITableComponent,
  ITextFieldComponent,
  ITimePickerComponent,
  IToastComponent,
  IToolbarComponent,
  ITooltipComponent,
  IViewComponent,
  IViewSwitcherComponent
} from '@tylertech/forge';

export * from './components';
export * from './hooks';
export * from './utils';

export type HTMLElementProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
export type CustomElementProps<T> = HTMLElementProps & Partial<T>;

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'forge-accordion': CustomElementProps<IAccordionComponent>;
      'forge-app-bar': CustomElementProps<IAppBarComponent>;
      'forge-app-bar-help-button': CustomElementProps<IAppBarHelpButtonComponent>;
      'forge-app-bar-menu-button': CustomElementProps<IAppBarMenuButtonComponent>;
      'forge-app-bar-notification-button': CustomElementProps<IAppBarNotificationButtonComponent>;
      'forge-app-bar-profile-button': CustomElementProps<IAppBarProfileButtonComponent>;
      'forge-app-bar-search': CustomElementProps<IAppBarSearchComponent>;
      'forge-autocomplete': CustomElementProps<IAutocompleteComponent>;
      'forge-avatar': CustomElementProps<IAvatarComponent>;
      'forge-backdrop': CustomElementProps<IBackdropComponent>;
      'forge-badge': CustomElementProps<IBadgeComponent>;
      'forge-banner': CustomElementProps<IBannerComponent>;
      'forge-bottom-sheet': CustomElementProps<IBottomSheetComponent>;
      'forge-button': CustomElementProps<IButtonComponent>;
      'forge-button-area': CustomElementProps<IButtonAreaComponent>;
      'forge-button-toggle': CustomElementProps<IButtonToggleComponent>;
      'forge-button-toggle-group': CustomElementProps<IButtonToggleGroupComponent>;
      'forge-calendar': CustomElementProps<ICalendarComponent>;
      'forge-card': CustomElementProps<ICardComponent>;
      'forge-checkbox': CustomElementProps<ICheckboxComponent>;
      'forge-chip-field': CustomElementProps<IChipFieldComponent>;
      'forge-chip-set': CustomElementProps<IChipSetComponent>;
      'forge-chip': CustomElementProps<IChipComponent>;
      'forge-circular-progress': CustomElementProps<ICircularProgressComponent>;
      'forge-color-picker': CustomElementProps<IColorPickerComponent>;
      'forge-date-range-picker': CustomElementProps<IDateRangePickerComponent>;
      'forge-datepicker': CustomElementProps<IDatePickerComponent>;
      'forge-deprecated-button': CustomElementProps<IDeprecatedButtonComponent>;
      'forge-deprecated-icon-button': CustomElementProps<IDeprecatedIconButtonComponent>;
      'forge-dialog': CustomElementProps<IDialogComponent>;
      'forge-divider': CustomElementProps<IDividerComponent>;
      'forge-drawer': CustomElementProps<IDrawerComponent>;
      'forge-mini-drawer': CustomElementProps<IMiniDrawerComponent>;
      'forge-modal-drawer': CustomElementProps<IModalDrawerComponent>;
      'forge-expansion-panel': CustomElementProps<IExpansionPanelComponent>;
      'forge-field': CustomElementProps<IFieldComponent>;
      'forge-file-picker': CustomElementProps<IFilePickerComponent>;
      'forge-fab': CustomElementProps<IFloatingActionButtonComponent>;
      'forge-focus-indicator': CustomElementProps<IFocusIndicatorComponent>;
      'forge-icon': CustomElementProps<IIconComponent>;
      'forge-icon-button': CustomElementProps<IIconButtonComponent>;
      'forge-inline-message': CustomElementProps<IInlineMessageComponent>;
      'forge-keyboard-shortcut': CustomElementProps<IKeyboardShortcutComponent>;
      'forge-label-value': CustomElementProps<ILabelValueComponent>;
      'forge-linear-progress': CustomElementProps<ILinearProgressComponent>;
      'forge-list': CustomElementProps<IListComponent>;
      'forge-list-item': CustomElementProps<IListItemComponent>;
      'forge-menu': CustomElementProps<IMenuComponent>;
      'forge-open-icon': CustomElementProps<IOpenIconComponent>;
      'forge-option': CustomElementProps<IOptionComponent>;
      'forge-option-group': CustomElementProps<IOptionGroupComponent>;
      'forge-overlay': CustomElementProps<IOverlayComponent>;
      'forge-page-state': CustomElementProps<IPageStateComponent>;
      'forge-paginator': CustomElementProps<IPaginatorComponent>;
      'forge-popover': CustomElementProps<IPopoverComponent>;
      'forge-profile-card': CustomElementProps<IProfileCardComponent>;
      'forge-radio': CustomElementProps<IRadioComponent>;
      'forge-scaffold': CustomElementProps<IScaffoldComponent>;
      'forge-select': CustomElementProps<ISelectComponent>;
      'forge-select-dropdown': CustomElementProps<ISelectDropdownComponent>;
      'forge-skeleton': CustomElementProps<ISkeletonComponent>;
      'forge-slider': CustomElementProps<ISliderComponent>;
      'forge-split-view': CustomElementProps<ISplitViewComponent>;
      'forge-split-view-panel': CustomElementProps<ISplitViewPanelComponent>;
      'forge-stack': CustomElementProps<IStackComponent>;
      'forge-state-layer': CustomElementProps<IStateLayerComponent>;
      'forge-stepper': CustomElementProps<IStepperComponent>;
      'forge-step': CustomElementProps<IStepComponent>;
      'forge-switch': CustomElementProps<ISwitchComponent>;
      'forge-table': CustomElementProps<ITableComponent>;
      'forge-tab': CustomElementProps<ITabComponent>;
      'forge-tab-bar': CustomElementProps<ITabBarComponent>;
      'forge-text-field': CustomElementProps<ITextFieldComponent>;
      'forge-time-picker': CustomElementProps<ITimePickerComponent>;
      'forge-toast': CustomElementProps<IToastComponent>;
      'forge-toolbar': CustomElementProps<IToolbarComponent>;
      'forge-tooltip': CustomElementProps<ITooltipComponent>;
      'forge-view': CustomElementProps<IViewComponent>;
      'forge-view-switcher': CustomElementProps<IViewSwitcherComponent>;
    }
  }
};
