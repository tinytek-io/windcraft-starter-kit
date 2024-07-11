import { Dialog } from "@/ui/components/Dialog";
import { AlertCircleIcon, InfoIcon } from "lucide-react";
import type { ReactNode } from "react";
import { chain } from "react-aria";
import type { DialogProps } from "react-aria-components";
import { tv } from "tailwind-variants";
import { Button } from "./Button";
import { Heading } from "./Heading";

interface AlertDialogProps extends Omit<DialogProps, "children"> {
  title: string;
  children: ReactNode;
  variant?: "info" | "destructive";
  actionLabel: string;
  cancelLabel?: string;
  onAction?: () => void;
}

const alertDialogContents = tv({
  base: "w-6 h-6 absolute right-6 top-6 stroke-2",
  variants: {
    variant: {
      destructive: "text-destructive",
      info: "text-primary"
    }
  }
});

export function AlertDialog({
  title,
  variant,
  cancelLabel,
  actionLabel,
  onAction,
  children,
  ...props
}: Readonly<AlertDialogProps>) {
  return (
    <Dialog role="alertdialog" {...props}>
      {({ close }) => (
        <>
          <Heading slot="title">{title}</Heading>
          <div className={alertDialogContents({ variant })}>
            {variant === "destructive" ? <AlertCircleIcon aria-hidden /> : <InfoIcon aria-hidden />}
          </div>
          <p className="mt-3 text-muted-foreground">{children}</p>
          <div className="mt-6 flex justify-end gap-2">
            <Button variant="secondary" onPress={close}>
              {cancelLabel ?? "Cancel"}
            </Button>
            <Button
              variant={variant === "destructive" ? "destructive" : "primary"}
              autoFocus
              onPress={chain(onAction, close)}
            >
              {actionLabel}
            </Button>
          </div>
        </>
      )}
    </Dialog>
  );
}
