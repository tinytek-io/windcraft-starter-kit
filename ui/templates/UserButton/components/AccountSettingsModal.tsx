import { DomainInputField } from "@/ui/components/DomainInputField";
import { Label } from "@/ui/components/Label";
import { TextField } from "@/ui/components/TextField";
import { Trash2, XIcon } from "lucide-react";
import { AlertDialog } from "../../../components/AlertDialog";
import { Button } from "../../../components/Button";
import { Modal } from "../../../components/Modal";

const logoWrap = "/windcraft-logo.webp";

type AccountSettingsModal = {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onDeleteAccount: () => void;
};

export function AccountSettingsModal({ isOpen, onOpenChange, onDeleteAccount }: Readonly<AccountSettingsModal>) {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable>
      <AlertDialog actionLabel="Save changes" title="" onAction={() => onOpenChange(false)}>
        <Button onPress={() => onOpenChange(false)} className="absolute top-0 right-0 m-3" variant="ghost" size="sm">
          <XIcon className="h-4 w-4" />
        </Button>
        <div className="flex flex-col pb-8 font-semibold text-foreground text-xl">
          <div className="pb-4">
            <h1>Account Settings</h1>
            <h2 className="font-normal text-muted-foreground text-sm">Manage your account here</h2>
          </div>
          <div className="flex w-full flex-col gap-3 pb-8 font-medium text-foreground text-sm">
            <div>
              <Label>Logo</Label>
              <img src={logoWrap} alt="Logo" className="my-4 w-16" />
            </div>
            <TextField label="Name" placeholder="Name" value="Windcraft" />
            <DomainInputField label="Subdomain" domain="windcraft.dev" placeholder="Subdomain" isDisabled={true} />
          </div>
          <h3 className="pb-2 text-base">Danger zone</h3>
          <div className="w-full border-border border-b" aria-hidden />
          <div className="flex flex-wrap items-end gap-4 border-border border-b-2 pb-12">
            <div className="flex-1 text-foreground">
              <h4 className="pt-2 text-sm">Delete Account</h4>
              <p className="font-normal text-xs">
                Deleting the account and all associated data.
                <br />
                This action is not reversible, so please continue with caution.
              </p>
            </div>
            <Button variant="destructive" onPress={onDeleteAccount}>
              <Trash2 />
              Delete Account
            </Button>
          </div>
        </div>
      </AlertDialog>
    </Modal>
  );
}

export default AccountSettingsModal;
