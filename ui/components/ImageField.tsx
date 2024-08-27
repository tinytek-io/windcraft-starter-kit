import { useMemo, useState } from "react";
import { FileTrigger, type FileTriggerProps, InputContext } from "react-aria-components";
import { Button } from "./Button";

type ImageFieldProps = {
  name: string;
  label?: string;
  placeholder: string;
  imageUrl: string;
  height?: number;
  width?: number;
} & Omit<FileTriggerProps, "onSelect">;

export function ImageField({
  name,
  label,
  placeholder = "Upload an image",
  imageUrl,
  acceptedFileTypes = ["image/png"],
  height,
  width,
  ...props
}: Readonly<ImageFieldProps>) {
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
            <Button variant="icon" className="h-fit w-fit rounded-md p-1">
              <img src={previewUrl ?? imageUrl} alt={name} height={height} width={width} />
            </Button>
          </FileTrigger>
          {filename ?? placeholder ?? ""}
        </div>
      </InputContext.Provider>
    </div>
  );
}
