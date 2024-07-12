import { DotIcon } from "lucide-react";
import { TextField } from "react-aria-components";
import { Button } from "../components/Button";
import { Description } from "../components/Description";
import { FieldError } from "../components/FieldError";
import { Form } from "../components/Form";
import { Heading } from "../components/Heading";
import { Input } from "../components/Input";
import { Label } from "../components/Label";
import { Link } from "../components/Link";
import { Select, SelectItem } from "../components/Select";
import { DomainInput } from "./components/DomainInput";
import logoMarkUrl from "./images/logo-mark.svg";
import poweredByUrl from "./images/powered-by.svg";

export function AccountRegistrationForm() {
  return (
    <Form className="flex w-full max-w-sm flex-col items-center gap-4 space-y-3 rounded-lg px-6 pt-8 pb-4">
      <img src={logoMarkUrl} className="h-12 w-12" alt="logo mark" />
      <Heading className="text-2xl">Create your account</Heading>
      <div className="text-center text-muted-foreground text-sm">
        Sign up in seconds to get started building on PlatformPlatform - just like thousands of others.
      </div>
      <TextField className="flex w-full flex-col">
        <Label>Email</Label>
        <Input
          type="email"
          name="email"
          autoFocus
          autoComplete="email webauthn"
          required
          placeholder="yourname@example.com"
        />
        <FieldError />
      </TextField>
      <TextField className="flex w-full flex-col">
        <Label>Subdomain</Label>
        <DomainInput name="subdomain" domain=".platformplatform.com" required placeholder="subdomain" />
        <FieldError />
      </TextField>
      <TextField className="flex w-full flex-col">
        <Label>Region</Label>
        <Select name="region" selectedKey="europe" key="europe">
          <SelectItem id="europe">Europe</SelectItem>
        </Select>
        <Description>This is where your data is stored</Description>
        <FieldError />
      </TextField>
      <Button type="submit" className="mt-4 w-full text-center">
        Create your account
      </Button>
      <p className="text-muted-foreground text-xs">
        Already have an account? <Link href="/templates/user-management/login-form.html">Sign in</Link>
      </p>
      <div className="text-muted-foreground text-sm">
        By continuing, you agree to our policies
        <div className="flex items-center justify-center">
          <Link href="/">Terms of use</Link>
          <DotIcon className="h-4 w-4" />
          <Link href="/">Privacy Policies</Link>
        </div>
      </div>
      <img src={poweredByUrl} alt="powered by" />
    </Form>
  );
}
