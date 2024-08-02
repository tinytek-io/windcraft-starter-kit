import { MailIcon, XIcon } from "lucide-react";
import React from "react";
import { FileTrigger } from "react-aria-components";
import { AlertDialog } from "../../../components/AlertDialog";
import { Avatar } from "../../../components/Avatar";
import { Button } from "../../../components/Button";
import { FieldGroup } from "../../../components/Field";
import { Input } from "../../../components/Input";
import { Label } from "../../../components/Label";
import { Modal } from "../../../components/Modal";
import { TextField } from "../../../components/TextField";
import { useUserInfo } from "../hooks/useUserInfo";

type ProfileModalProps = {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
};

export function UserProfileModal({ isOpen, onOpenChange }: Readonly<ProfileModalProps>) {
  const [file, setFile] = React.useState<string[] | null>(null);
  const userInfo = useUserInfo();

  if (!userInfo) return null;

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable>
      <AlertDialog actionLabel="Save changes" title="" onAction={() => onOpenChange(false)}>
        <Button onPress={() => onOpenChange(false)} className="absolute top-0 right-0 m-3" variant="ghost" size="sm">
          <XIcon className="h-4 w-4" />
        </Button>
        <div className="flex flex-col font-semibold text-foreground text-xl">
          <div className="pb-4">
            <h1>Edit profile</h1>
            <h2 className="font-normal text-muted-foreground text-sm">Manage your profile here</h2>
          </div>
          <div className="flex w-full flex-col gap-3 font-medium text-muted-foreground text-sm">
            <Label>Photo</Label>
            <div className="flex flex-row gap-4">
              <FileTrigger
                onSelect={(e) => {
                  if (e) {
                    const files = Array.from(e);
                    const filenames = files.map((file) => file.name);
                    setFile(filenames);
                  }
                }}
              >
                <Button variant="icon" className="rounded-full">
                  <Avatar avatarUrl={userInfo.avatarUrl} initials={userInfo.initials} isRound size="md" />
                </Button>
              </FileTrigger>
              {file}
            </div>
            <div className="flex flex-row gap-4">
              <TextField label="First name" placeholder="E.g. Olivia" value={userInfo.firstName} />
              <TextField label="Last name" placeholder="E.g. Rhye" value={userInfo.lastName} />
            </div>
            <TextField>
              <Label>Email</Label>
              <FieldGroup>
                <MailIcon className="h-4 w-4" />
                <Input value={userInfo.email} isDisabled isEmbedded />
              </FieldGroup>
            </TextField>
            <TextField label="Title" placeholder="E.g. Marketing Manager" value={userInfo.title} />
          </div>
        </div>
      </AlertDialog>
    </Modal>
  );
}

export default UserProfileModal;
