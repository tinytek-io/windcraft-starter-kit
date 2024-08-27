import { useMemo, useState } from "react";
import { FileTrigger, type FileTriggerProps, InputContext } from "react-aria-components";
import { Avatar } from "./Avatar";
import { Button } from "./Button";

type AvatarImageFieldProps = {
  name: string;
  label?: string;
  placeholder: string;
  avatarUrl?: string;
  initials: string;
  isRound?: boolean;
} & Omit<FileTriggerProps, "onSelect">;

export function AvatarImageField({
  name,
  label,
  placeholder = "Upload an image",
  avatarUrl,
  initials,
  isRound = true,
  acceptedFileTypes = ["image/png"],
  ...props
}: Readonly<AvatarImageFieldProps>) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [filename, setFilename] = useState<string | null>(null);
  const inputContext = useMemo(() => ({ name: filename ? name : undefined }), [filename, name]);

  return (
    <div className="flex flex-col gap-3">
      {label && <label>{label}</label>}
      <InputContext.Provider value={inputContext}>
        <div className="flex flex-row items-center gap-4">
          <FileTrigger
            {...props}
            acceptedFileTypes={acceptedFileTypes}
            onSelect={(e) => {
              if (e) {
                const files = Array.from(e);
                const file = files[0];
                setFilename(file.name);
                setPreviewUrl(URL.createObjectURL(file));
              }
            }}
          >
            <Button variant="icon" className={isRound ? "rounded-full" : "rounded-md"}>
              <Avatar avatarUrl={previewUrl ?? avatarUrl} initials={initials} isRound={isRound} size="md" />
            </Button>
          </FileTrigger>
          {filename ?? placeholder ?? ""}
        </div>
      </InputContext.Provider>
    </div>
  );
}
