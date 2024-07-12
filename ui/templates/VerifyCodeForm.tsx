/**
 * ref: https://github.com/platformplatform/PlatformPlatform
 */
import { Button } from "../components/Button";
import { DigitPattern } from "../components/Digit";
import { Form } from "../components/Form";
import { Link } from "../components/Link";
import { OneTimeCodeInput } from "../components/OneTimeCodeInput";
import { useExpirationTimeout } from "../hooks/useExpiration";
import logoMarkUrl from "./images/logo-mark.png";
import poweredByUrl from "./images/powered-by.png";

export function VerifyCodeForm() {
  const { expiresInString } = useExpirationTimeout(new Date(Date.now() + 1000 * 60 * 5));

  return (
    <Form className="w-full max-w-sm space-y-3">
      <div className="flex w-full flex-col gap-4 rounded-lg px-6 pt-8 pb-4">
        <div className="flex justify-center">
          <img src={logoMarkUrl} className="h-12 w-12" alt="logo mark" />
        </div>
        <h1 className="mb-3 w-full text-center text-2xl">Enter your verification code</h1>
        <div className="text-center text-gray-500 text-sm">
          Please check your email for a verification code sent to{" "}
          <span className="font-semibold">olivia@companyx.com</span>
        </div>
        <div className="flex w-full flex-col gap-4">
          <OneTimeCodeInput name="oneTimePassword" digitPattern={DigitPattern.DigitsAndChars} length={6} autoFocus />
          <div className="text-center text-neutral-500 text-xs">
            <Link href="/">Did't receive the code? Resend</Link>{" "}
            <span className="font-normal tabular-nums leading-none">({expiresInString})</span>
          </div>
        </div>
        <Button type="submit" className="mt-4 w-full text-center">
          Verify
        </Button>
        <div className="flex flex-col items-center gap-6 text-neutral-500">
          <p className="text-xs ">Can't find your code? Check your spam folder</p>
          <img src={poweredByUrl} alt="powered by" />
        </div>
      </div>
    </Form>
  );
}
