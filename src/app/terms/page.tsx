import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/legal-page";
import { createPageMetadata, siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Terms of Service",
  description: "The terms that govern your use of UstadApp.",
  path: "/terms",
});

const EFFECTIVE_DATE = "August 18, 2026";

export default function TermsOfServicePage() {
  return (
    <LegalPage
      title="Terms of Service"
      effectiveDate={EFFECTIVE_DATE}
      intro={
        <p>
          These Terms of Service govern your use of the UstadApp mobile application and website. By creating
          an account, accessing, or using UstadApp, you agree to these Terms. If you do not agree with these
          Terms, please do not use UstadApp.
        </p>
      }
    >
      <LegalSection heading="1. The service">
        <p>
          UstadApp is a Quran learning and memorization application designed to help learners build
          consistent Quran memorization habits through guided lessons, gamified learning, recitation
          practice, revision, progress tracking, and AI-powered recitation feedback. UstadApp may include
          features such as XP, levels, streaks, achievements, interactive exercises, revision lessons, and
          AI-assisted recitation correction. We may add, modify, suspend, or remove features as the service
          develops.
        </p>
      </LegalSection>

      <LegalSection heading="2. Eligibility and younger users">
        <p>
          UstadApp is intended for users aged 10 and above. If you are under the age of legal majority in
          your country, you should use UstadApp with the knowledge and, where required by applicable law,
          consent of a parent or legal guardian.
        </p>
        <p>
          Parents and legal guardians are responsible for supervising a minor&rsquo;s use of UstadApp and for
          reviewing these Terms and our{" "}
          <a href="/privacy">Privacy Policy</a> with them. We do not knowingly require children to provide
          more personal information than is reasonably necessary to use the service.
        </p>
      </LegalSection>

      <LegalSection heading="3. Accounts">
        <p>
          UstadApp may allow you to use certain features as a guest or to create an account using an email
          address and password or through a supported third-party sign-in service such as Google. Guest
          progress may be stored temporarily and may not be permanently recoverable unless you create an
          account and link that progress to it.
        </p>
        <p>
          You&rsquo;re responsible for maintaining the security of your account credentials and for activity
          occurring through your account. If you believe your account has been accessed without
          authorization, please contact us promptly.
        </p>
      </LegalSection>

      <LegalSection heading="4. Acceptable use">
        <p>You agree not to:</p>
        <ul>
          <li>Use UstadApp for unlawful purposes or in violation of another person&rsquo;s rights.</li>
          <li>
            Attempt to interfere with, disrupt, damage, or gain unauthorized access to UstadApp or its
            systems.
          </li>
          <li>
            Reverse-engineer, decompile, scrape, copy, or attempt to extract the source code or underlying
            technology of the app, except where permitted by applicable law.
          </li>
          <li>
            Copy, distribute, reproduce, modify, or resell UstadApp or its proprietary content without our
            permission.
          </li>
          <li>
            Create multiple accounts for the purpose of abusing features such as XP, streaks, achievements,
            or leaderboards.
          </li>
          <li>Use automated systems, bots, or other methods to manipulate the service.</li>
          <li>Impersonate another person or provide misleading information when creating an account.</li>
          <li>Use the service in a manner that could harm UstadApp, its users, or our service providers.</li>
        </ul>
        <p>We may suspend or terminate accounts that violate these Terms or misuse the service.</p>
      </LegalSection>

      <LegalSection heading="5. Content and intellectual property">
        <p>
          UstadApp may contain Quranic text, recitations, translations, educational material, illustrations,
          software, interface designs, lesson structures, characters, animations, and other content from
          various sources. UstadApp does not claim ownership of the Quran itself. Certain third-party content
          may be subject to separate copyrights, licenses, or usage restrictions.
        </p>
        <p>
          The UstadApp application, including its software, design, user interface, original lesson
          structures, original educational content, characters, illustrations, animations, branding, and
          other original materials created by UstadApp, remains the property of UstadApp or its licensors
          and is protected by applicable intellectual property laws.
        </p>
        <p>
          We grant you a limited, personal, non-exclusive, non-transferable license to use UstadApp for your
          personal, non-commercial learning purposes. You may not reproduce, distribute, modify, create
          derivative works from, sell, or commercially exploit UstadApp or its proprietary content without
          our prior written permission.
        </p>
      </LegalSection>

      <LegalSection heading="6. Your recitation and user content">
        <p>
          You may submit voice recordings or other information to UstadApp when using features such as
          recitation practice and AI-powered feedback. You retain your rights in the content you submit. You
          grant UstadApp the limited rights necessary to process that content to provide, maintain, secure,
          and improve the relevant features of the service, as described in our{" "}
          <a href="/privacy">Privacy Policy</a>. We do not claim ownership of your personal voice recordings.
        </p>
      </LegalSection>

      <LegalSection heading="7. AI-powered recitation feedback">
        <p>
          UstadApp may use artificial intelligence and third-party AI services to analyze recitation and
          provide feedback. AI-generated feedback is intended as a learning aid and may occasionally be
          inaccurate, incomplete, or incorrect. It should not be treated as a definitive determination of
          tajweed, pronunciation, Quranic recitation, religious rulings, or other matters requiring qualified
          scholarly judgment. For detailed tajweed instruction or religious guidance, we recommend consulting
          a qualified teacher or ustadh.
        </p>
      </LegalSection>

      <LegalSection heading="8. Pricing and payments">
        <p>
          UstadApp is currently free to use. If we introduce subscriptions, paid features, or in-app
          purchases, we&rsquo;ll clearly disclose applicable pricing and what is included before you make a
          purchase. Any future paid services may be subject to additional subscription, billing,
          cancellation, and refund terms.
        </p>
      </LegalSection>

      <LegalSection heading="9. Third-party services">
        <p>
          UstadApp may rely on third-party services and infrastructure providers to operate certain features,
          including authentication, hosting, analytics, AI processing, email delivery, security, and
          application monitoring. These providers may change as UstadApp develops. Where applicable, your use
          of third-party services may also be subject to their own terms and policies. Our{" "}
          <a href="/privacy">Privacy Policy</a> explains how UstadApp uses third-party services and how
          information may be processed through them.
        </p>
      </LegalSection>

      <LegalSection heading="10. Availability and changes">
        <p>
          We work to keep UstadApp available and functioning properly, but we do not guarantee that the
          service will always be available, uninterrupted, secure, or error-free. Features may occasionally
          be unavailable because of maintenance, technical problems, updates, or issues involving third-party
          services. We may modify, suspend, or discontinue parts of UstadApp at any time.
        </p>
      </LegalSection>

      <LegalSection heading="11. Educational disclaimer">
        <p>
          UstadApp is an educational tool intended to support Quran memorization and practice. While we make
          reasonable efforts to provide accurate and useful learning content and feedback, we do not
          guarantee that every lesson, transcription, pronunciation assessment, or AI-generated response will
          be completely accurate. UstadApp is not a substitute for a qualified Quran teacher or ustadh,
          particularly for detailed tajweed instruction or religious rulings.
        </p>
      </LegalSection>

      <LegalSection heading="12. Limitation of liability">
        <p>
          To the fullest extent permitted by applicable law, UstadApp and its team will not be liable for
          indirect, incidental, special, consequential, or punitive damages arising from or related to your
          use of the service. To the extent permitted by law, our total liability for claims arising from or
          relating to UstadApp will be limited to the amount, if any, that you paid us for the service during
          the twelve months preceding the event giving rise to the claim. Nothing in these Terms excludes or
          limits liability that cannot legally be excluded or limited under applicable law.
        </p>
      </LegalSection>

      <LegalSection heading="13. Termination">
        <p>
          You may stop using UstadApp at any time. If you have an account, you may request deletion of your
          account through the account-deletion options described in our{" "}
          <a href="/privacy">Privacy Policy</a>.
        </p>
        <p>
          We may suspend or terminate your access if you materially violate these Terms, misuse the service,
          or engage in activity that could harm UstadApp or its users. We may also discontinue UstadApp
          entirely; where reasonably practical, we&rsquo;ll provide notice of a significant discontinuation.
        </p>
      </LegalSection>

      <LegalSection heading="14. Changes to these terms">
        <p>
          We may update these Terms from time to time as UstadApp develops. If we make material changes,
          we&rsquo;ll update the effective date and, where appropriate, provide notice through the app,
          website, or other reasonable means. Your continued use of UstadApp after updated Terms become
          effective means you accept the revised Terms.
        </p>
      </LegalSection>

      <LegalSection heading="15. Governing law">
        <p>
          These Terms are governed by the laws of Pakistan, without regard to conflict-of-law principles.
          Nothing in these Terms is intended to limit any rights or protections that cannot legally be
          excluded under applicable law.
        </p>
      </LegalSection>

      <LegalSection heading="16. Contact us">
        <p>
          Questions about these Terms or UstadApp? Email{" "}
          <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
