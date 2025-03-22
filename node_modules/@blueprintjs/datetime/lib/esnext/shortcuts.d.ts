import * as React from "react";
import { DateRange } from "./common/dateRange";
import { TimePrecision } from "./timePicker";
export interface IDateShortcutBase {
    /** Shortcut label that appears in the list. */
    label: string;
    /**
     * Set this prop to `true` to allow this shortcut to change the selected
     * times as well as the dates. By default, time components of a shortcut are
     * ignored; clicking a shortcut takes the date components of the `dateRange`
     * and combines them with the currently selected time.
     *
     * @default false
     */
    includeTime?: boolean;
}
export declare type DateRangeShortcut = IDateRangeShortcut;
/** @deprecated use DateRangeShortcut */
export interface IDateRangeShortcut extends IDateShortcutBase {
    /**
     * Date range represented by this shortcut. Note that time components of a
     * shortcut are ignored by default; set `includeTime: true` to respect them.
     */
    dateRange: DateRange;
}
export declare type DatePickerShortcut = IDatePickerShortcut;
/** @deprecated use DatePickerShortcut */
export interface IDatePickerShortcut extends IDateShortcutBase {
    /**
     * Date represented by this shortcut. Note that time components of a
     * shortcut are ignored by default; set `includeTime: true` to respect them.
     */
    date: Date;
}
export interface IShortcutsProps {
    allowSingleDayRange: boolean;
    minDate: Date;
    maxDate: Date;
    shortcuts: DateRangeShortcut[] | true;
    timePrecision: TimePrecision;
    selectedShortcutIndex?: number;
    onShortcutClick: (shortcut: DateRangeShortcut, index: number) => void;
    /**
     * The DatePicker component reuses this component for a single date.
     * This changes the default shortcut labels and affects which shortcuts are used.
     *
     * @default false
     */
    useSingleDateShortcuts?: boolean;
}
export declare class Shortcuts extends React.PureComponent<IShortcutsProps> {
    static defaultProps: Partial<IShortcutsProps>;
    render(): JSX.Element;
    private getShorcutClickHandler;
    private isShortcutInRange;
}
