import { FieldValues, UseControllerProps } from "react-hook-form";
import { AutocompleteProps as _AutocompleteProps1, CheckboxProps as _CheckboxProps1, CheckboxGroupProps as _CheckboxGroupProps1, ChipProps as _ChipProps1, ChipGroupProps as _ChipGroupProps1, ColorInputProps as _ColorInputProps1, ColorPickerProps as _ColorPickerProps1, FileInputProps as _FileInputProps1, InputProps as _InputProps1, JsonInputProps as _JsonInputProps1, MultiSelectProps as _MultiSelectProps1, NativeSelectProps as _NativeSelectProps1, NumberInputProps as _NumberInputProps1, PasswordInputProps as _PasswordInputProps1, PinInputProps as _PinInputProps1, RadioGroupProps as _RadioGroupProps1, RadioProps as _RadioProps1, RatingProps as _RatingProps1, SegmentedControlProps as _SegmentedControlProps1, SelectProps as _SelectProps1, SliderProps as _SliderProps1, SwitchGroupProps as _SwitchGroupProps1, SwitchProps as _SwitchProps1, TextareaProps as _TextareaProps1, TextInputProps as _TextInputProps1, TransferListProps as _TransferListProps1 } from "@mantine/core";
export type AutocompleteProps<T extends FieldValues> = UseControllerProps<T> & Omit<_AutocompleteProps1, "value" | "defaultValue">;
export function Autocomplete<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: AutocompleteProps<T>): import("react/jsx-runtime").JSX.Element;
export type CheckboxProps<T extends FieldValues> = UseControllerProps<T> & Omit<_CheckboxProps1, "checked" | "defaultValue">;
export type CheckboxGroupProps<T extends FieldValues> = UseControllerProps<T> & Omit<_CheckboxGroupProps1, "checked" | "defaultValue">;
export function Checkbox<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: CheckboxProps<T>): import("react/jsx-runtime").JSX.Element;
export declare namespace Checkbox {
    var Group: <T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: CheckboxGroupProps<T>) => import("react/jsx-runtime").JSX.Element;
    var Item: ((props: $CheckboxProps) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>) & {
        Group: import("react").ForwardRefExoticComponent<$CheckboxGroupProps & import("react").RefAttributes<HTMLDivElement>>;
    } & {
        displayName: string;
    };
}
export type ChipProps<T extends FieldValues> = UseControllerProps<T> & Omit<_ChipProps1, "value" | "defaultValue">;
export type ChipGroupProps<T extends FieldValues, V extends boolean> = UseControllerProps<T> & Omit<_ChipGroupProps1<V>, "value" | "defaultValue">;
export function Chip<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: ChipProps<T>): import("react/jsx-runtime").JSX.Element;
export declare namespace Chip {
    var Group: <T extends FieldValues, V extends boolean>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: ChipGroupProps<T, V>) => import("react/jsx-runtime").JSX.Element;
    var Item: ((props: $ChipProps) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>) & {
        Group: typeof import("@mantine/core/lib/Chip/ChipGroup/ChipGroup").ChipGroup;
    } & {
        displayName: string;
    };
}
export type ColorInputProps<T extends FieldValues> = UseControllerProps<T> & Omit<_ColorInputProps1, "value" | "defaultValue">;
export function ColorInput<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: ColorInputProps<T>): import("react/jsx-runtime").JSX.Element;
export type ColorPickerProps<T extends FieldValues> = UseControllerProps<T> & Omit<_ColorPickerProps1, "value" | "defaultValue">;
export function ColorPicker<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: ColorPickerProps<T>): import("react/jsx-runtime").JSX.Element;
export type FileInputProps<T extends FieldValues> = UseControllerProps<T> & Omit<_FileInputProps1, "value" | "defaultValue">;
export function FileInput<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, multiple, ...props }: FileInputProps<T>): import("react/jsx-runtime").JSX.Element;
export type InputProps<T extends FieldValues> = UseControllerProps<T> & _InputProps1;
export function Input<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, ...props }: InputProps<T>): import("react/jsx-runtime").JSX.Element;
export type JsonInputProps<T extends FieldValues> = UseControllerProps<T> & Omit<_JsonInputProps1, "value" | "defaultValue">;
export function JsonInput<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: JsonInputProps<T>): import("react/jsx-runtime").JSX.Element;
export type MultiSelectProps<T extends FieldValues> = UseControllerProps<T> & Omit<_MultiSelectProps1, "value" | "defaultValue">;
export function MultiSelect<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: MultiSelectProps<T>): import("react/jsx-runtime").JSX.Element;
export type NativeSelectProps<T extends FieldValues> = UseControllerProps<T> & Omit<_NativeSelectProps1, "value" | "defaultValue">;
export function NativeSelect<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: NativeSelectProps<T>): import("react/jsx-runtime").JSX.Element;
export type NumberInputProps<T extends FieldValues> = UseControllerProps<T> & Omit<_NumberInputProps1, "value" | "defaultValue">;
export function NumberInput<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: NumberInputProps<T>): import("react/jsx-runtime").JSX.Element;
export type PasswordInputProps<T extends FieldValues> = UseControllerProps<T> & Omit<_PasswordInputProps1, "value" | "defaultValue">;
export function PasswordInput<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: PasswordInputProps<T>): import("react/jsx-runtime").JSX.Element;
export type PinInputProps<T extends FieldValues> = UseControllerProps<T> & Omit<_PinInputProps1, "value" | "defaultValue">;
export function PinInput<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: PinInputProps<T>): import("react/jsx-runtime").JSX.Element;
export type RadioProps<T extends FieldValues> = UseControllerProps<T> & Omit<_RadioProps1, "value" | "defaultValue">;
export type RadioGroupProps<T extends FieldValues> = UseControllerProps<T> & Omit<_RadioGroupProps1, "value" | "defaultValue">;
export function Radio<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: RadioProps<T>): import("react/jsx-runtime").JSX.Element;
export declare namespace Radio {
    var Group: <T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: RadioGroupProps<T>) => import("react/jsx-runtime").JSX.Element;
    var Item: ((props: $RadioProps) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>) & {
        Group: import("react").ForwardRefExoticComponent<$RadioGroupProps & import("react").RefAttributes<HTMLDivElement>>;
    } & {
        displayName: string;
    };
}
export type RatingProps<T extends FieldValues> = UseControllerProps<T> & Omit<_RatingProps1, "value" | "defaultValue">;
export function Rating<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: RatingProps<T>): import("react/jsx-runtime").JSX.Element;
export type SegmentedControlProps<T extends FieldValues> = UseControllerProps<T> & Omit<_SegmentedControlProps1, "values" | "defaultValues">;
export function SegmentedControl<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: SegmentedControlProps<T>): import("react/jsx-runtime").JSX.Element;
export type SelectProps<T extends FieldValues> = UseControllerProps<T> & Omit<_SelectProps1, "value" | "defaultValue">;
export function Select<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: SelectProps<T>): import("react/jsx-runtime").JSX.Element;
export type SliderProps<T extends FieldValues> = UseControllerProps<T> & Omit<_SliderProps1, "value" | "defaultValue">;
export function Slider<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: SliderProps<T>): import("react/jsx-runtime").JSX.Element;
export type SwitchProps<T extends FieldValues> = UseControllerProps<T> & Omit<_SwitchProps1, "value" | "checked" | "defaultValue">;
export type SwitchGroupProps<T extends FieldValues> = UseControllerProps<T> & Omit<_SwitchGroupProps1, "value" | "checked" | "defaultValue">;
export function Switch<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: SwitchProps<T>): import("react/jsx-runtime").JSX.Element;
export declare namespace Switch {
    var Group: <T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: SwitchGroupProps<T>) => import("react/jsx-runtime").JSX.Element;
    var Item: ((props: $SwitchProps) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>) & {
        Group: import("react").ForwardRefExoticComponent<$SwitchGroupProps & import("react").RefAttributes<HTMLDivElement>>;
    } & {
        displayName: string;
    };
}
export type TextareaProps<T extends FieldValues> = UseControllerProps<T> & Omit<_TextareaProps1, "value" | "defaultValue">;
export function Textarea<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: TextareaProps<T>): import("react/jsx-runtime").JSX.Element;
export type TextInputProps<T extends FieldValues> = UseControllerProps<T> & Omit<_TextInputProps1, "value" | "defaultValue">;
export function TextInput<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: TextInputProps<T>): import("react/jsx-runtime").JSX.Element;
export type TransferListProps<T extends FieldValues> = UseControllerProps<T> & Omit<_TransferListProps1, "value" | "onChange"> & {
    onChange?: _TransferListProps1["onChange"];
};
export function TransferList<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: TransferListProps<T>): import("react/jsx-runtime").JSX.Element;

//# sourceMappingURL=index.d.ts.map
