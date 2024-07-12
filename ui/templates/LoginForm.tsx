import { TextField } from "react-aria-components";
import { Button } from "../components/Button";
import { FieldError } from "../components/FieldError";
import { Form } from "../components/Form";
import { Heading } from "../components/Heading";
import { Input } from "../components/Input";
import { Label } from "../components/Label";
import { Link } from "../components/Link";
import logoMarkUrl from "./images/logo-mark.svg";
import poweredByUrl from "./images/powered-by.svg";

export function LoginForm() {
  return (
    <Form className="flex w-full max-w-sm flex-col items-center gap-4 space-y-3 px-6 pt-8 pb-4">
      <img src={logoMarkUrl} className="h-12 w-12" alt="logo mark" />
      <Heading className="text-2xl">Hi! Welcome back</Heading>
      <div className="text-center text-gray-500 text-sm">Enter your email below to sign in</div>
      <TextField className="flex w-full flex-col">
        <Label>Email</Label>
        <Input
          type="email"
          name="email"
          autoComplete="email webauthn"
          autoFocus
          required
          placeholder="yourname@example.com"
        />
        <FieldError />
      </TextField>
      <Button type="submit" className="mt-4 w-full text-center">
        Continue
      </Button>
      <p className="text-muted-foreground text-xs">
        Don't have an account? <Link href="/register">Create one</Link>
      </p>
      <img src={poweredByUrl} alt="powered by" />
    </Form>
  );
}
