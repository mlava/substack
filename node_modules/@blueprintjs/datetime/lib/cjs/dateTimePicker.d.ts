/// <reference types="react" />
import { AbstractPureComponent2, Props } from "@blueprintjs/core";
import { DatePickerProps } from "./datePicker";
import { TimePickerProps } from "./timePicker";
export interface IDateTimePickerProps extends Props {
    /**
     * The initial date and time value that will be set.
     * This will be ignored if `value` is set.
     *
     * @default Date.now()
     */
    defaultValue?: Date;
    /**
     * Any props to be passed on to the `DatePicker` other than the `value` and `onChange` props as they come directly
     * from the `DateTimePicker` props.
     */
    datePickerProps?: DatePickerProps;
    /**
     * Callback invoked when the user changes the date or time.
     */
    onChange?: (selectedDate: Date, isUserChange: boolean) => void;
    /**
     * Any props to be passed on to the `TimePicker` other than the `value` and `onChange` props as they come directly
     * from the `DateTimePicker` props.
     */
    timePickerProps?: TimePickerProps;
    /**
     * The currently set date and time. If this prop is provided, the component acts in a controlled manner.
     */
    value?: Date | null;
    /**
     * Allows the user to clear the selection by clicking the currently selected day.
     *
     * @default true
     */
    canClearSelection?: boolean;
}
export interface IDateTimePickerState {
    dateValue?: Date;
    timeValue?: Date;
}
/** @deprecated since 3.4.0. Prefer `<DatePicker>` with `timePrecision` and `timePickerProps`. */
export declare class DateTimePicker extends AbstractPureComponent2<IDateTimePickerProps, IDateTimePickerState> {
    static defaultProps: IDateTimePickerProps;
    static displayName: string;
    constructor(props?: IDateTimePickerProps, context?: any);
    render(): JSX.Element;
    componentDidUpdate(prevProps: DatePickerProps): void;
    handleDateChange: (dateValue: Date, isUserChange: boolean) => void;
    handleTimeChange: (timeValue: Date) => void;
}
