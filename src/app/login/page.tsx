import type { Metadata } from "next";

import { JoheiewiseproLoginPage } from "@/components/joheiewisepro-login-page";

export const metadata: Metadata = {
  title: "Sign in | Joheiewisepro",
  description: "Secure account access for Joheiewisepro customers.",
};

export default function LoginPage() {
  return <JoheiewiseproLoginPage />;
}
