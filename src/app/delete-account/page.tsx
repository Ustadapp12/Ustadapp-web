import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/legal-page";
import { createPageMetadata, siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Delete Your Account",
  description: "How to delete your UstadApp account and associated data.",
  path: "/delete-account",
});

const EFFECTIVE_DATE = "August 19, 2026";

export default function DeleteAccountPage() {
  return (
    <LegalPage
      title="Delete Your Account"
      effectiveDate={EFFECTIVE_DATE}
      intro={
        <p>
          You can permanently delete your UstadApp account and the personal data associated with it at any
          time. This page explains how, and exactly what gets removed.
        </p>
      }
    >
      <LegalSection heading="1. Delete from within the app">
        <p>The fastest way to delete your account:</p>
        <ul>
          <li>Open UstadApp on your device and sign in.</li>
          <li>Go to the <strong>Profile</strong> tab.</li>
          <li>Scroll down and tap <strong>Delete Account</strong>.</li>
          <li>
            If your account has a password, enter it to confirm. Accounts signed in with Google do not
            require a password.
          </li>
          <li>Tap <strong>Delete</strong>. Your account is deleted immediately, with no waiting period.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="2. Delete without the app">
        <p>
          If you no longer have the app installed or cannot sign in, email us at{" "}
          <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a> from the address on
          your account and ask us to delete it. We will verify the request and delete the account.
        </p>
      </LegalSection>

      <LegalSection heading="3. What gets deleted">
        <p>Deleting your account permanently removes, from our active systems:</p>
        <ul>
          <li>Your email address, display name, age, and gender.</li>
          <li>Your learning progress: lessons, levels, XP, streaks, hearts, and revision history.</li>
          <li>Recitation audio you submitted and its associated scores or feedback.</li>
          <li>Device, usage, and diagnostic data tied to your account.</li>
        </ul>
        <p>
          Some information may be retained beyond deletion where required for legal, security, or
          fraud-prevention purposes, or where it exists only in backups until those are overwritten. Full
          detail is in our <a href="/privacy">Privacy Policy</a>.
        </p>
      </LegalSection>

      <LegalSection heading="4. Questions">
        <p>
          Contact <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a> with any
          questions about account deletion or your data.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
