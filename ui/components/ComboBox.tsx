/**
 * This WindCraft component is based off the React Aria Components Tailwind Starter Kit.
 * Most files are heavily modified adding more styles, variants and theming
 * to make it more versatile and closer to the Shadcn-ui theme and simple design tokens.
 *
 * Please include the RAC license when reusing this component, give due credit
 * and support the Open Source Community :)
 */
import { ChevronsUpDownIcon } from "lucide-react";
import type React from "react";
import {
  ComboBox as AriaComboBox,
  type ComboBoxProps as AriaComboBoxProps,
  ListBox,
  type ListBoxItemProps,
  type ValidationResult
} from "react-aria-components";
import { Button } from "./Button";
import { Description } from "./Description";
import { DropdownItem, DropdownSection, type DropdownSectionProps } from "./Dropdown";
import { FieldGroup } from "./Field";
import { FieldError } from "./FieldError";
import { Input } from "./Input";
import { Label } from "./Label";
import { Popover } from "./Popover";
import { composeTailwindRenderProps } from "./utils";

export interface ComboBoxProps<T extends object> extends Omit<AriaComboBoxProps<T>, "children"> {
  label?: string;
  description?: string | null;
  errorMessage?: string | ((validation: ValidationResult) => string);
  isOpen?: boolean;
  children: React.ReactNode | ((item: T) => React.ReactNode);
}

export function ComboBox<T extends object>({
  label,
  description,
  errorMessage,
  isOpen,
  children,
  items,
  ...props
}: Readonly<ComboBoxProps<T>>) {
  return (
    <AriaComboBox {...props} className={composeTailwindRenderProps(props.className, "group flex flex-col gap-1")}>
      <Label>{label}</Label>
      <FieldGroup>
        <Input isEmbedded />
        <Button variant="ghost" size="icon" className="mr-1 w-6 rounded outline-offset-0 ">
          <ChevronsUpDownIcon aria-hidden className="h-4 w-4" />
        </Button>
      </FieldGroup>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
      <Popover className="w-[--trigger-width]" isOpen={isOpen}>
        <ListBox
          items={items}
          className="max-h-[inherit] overflow-auto p-1 outline-0 [clip-path:inset(0_0_0_0_round_.75rem)]"
        >
          {children}
        </ListBox>
      </Popover>
    </AriaComboBox>
  );
}

export function ComboBoxItem(props: Readonly<ListBoxItemProps>) {
  return <DropdownItem {...props} />;
}

export function ComboBoxSection<T extends object>(props: Readonly<DropdownSectionProps<T>>) {
  return <DropdownSection {...props} />;
}