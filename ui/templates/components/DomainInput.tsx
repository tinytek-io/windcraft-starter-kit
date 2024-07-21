import { Group } from "@/ui/components/Group";
import { Input, type InputProps } from "@/ui/components/Input";

type DomainInputProps = {
  domain: string;
} & InputProps;

export function DomainInput({ domain, ...props }: DomainInputProps) {
  return (
    <Group className="overflow-hidden">
      <Input {...props} isEmbedded />
      <Input isEmbedded value={domain} isDisabled className="min-w-fit max-w-fit shrink-0 text-xs" />
    </Group>
  );
}
