import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/legal-page";
import { createPageMetadata, siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy",
  description: "How UstadApp collects, uses, and protects your information.",
  path: "/privacy",
});

const EFFECTIVE_DATE = "August 18, 2026";

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      effectiveDate={EFFECTIVE_DATE}
      intro={
        <p>
          UstadApp (&ldquo;UstadApp,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
          provides a mobile application designed to help learners memorize and practice the Quran. This
          Privacy Policy explains what information we collect, how we use it, when we share it, how long we
          retain it, and the choices available to you. It applies to the UstadApp mobile application and the
          UstadApp website.
        </p>
      }
    >
      <LegalSection heading="1. Information we collect">
        <p>
          <strong>Account information.</strong> When you create an account, we may collect information such
          as your email address, display name, age, and gender, depending on what you choose to provide. If
          you sign in using Google, we may receive information provided by Google, such as your name and
          email address, as permitted by your Google account settings and the Google authentication process.
          We do not store your Google account password. If you create an account using an email and
          password instead, that authentication information is handled through our authentication
          infrastructure and protected using appropriate security measures.
        </p>
        <p>
          <strong>Guest accounts.</strong> You may be able to begin using UstadApp without creating a full
          account. When you use UstadApp as a guest, we may create a temporary account or identifier on our
          servers so the app can maintain your current session and learning experience. Guest progress may
          not be permanently recoverable unless you create or connect a full account.
        </p>
        <p>
          <strong>Learning activity.</strong> We collect information about your learning activity so we can
          provide the core functionality of UstadApp. This may include:
        </p>
        <ul>
          <li>Lessons completed</li>
          <li>Ayahs or Surahs being learned</li>
          <li>Scores and accuracy</li>
          <li>XP</li>
          <li>Streaks</li>
          <li>Hearts or lives</li>
          <li>Revision activity</li>
          <li>Recitation results</li>
          <li>Other progress within the application</li>
        </ul>
        <p>
          <strong>Voice and recitation data.</strong> Some UstadApp exercises let you recite Quranic verses
          aloud so we can provide recitation feedback. When you use these features, your device records the
          audio you choose to submit. That audio is transmitted to our systems and may be processed by our
          speech-recognition provider, Deepgram, to analyze the recitation and generate feedback. We use
          recitation audio only to provide the relevant recitation and learning features, and we do not use
          it for advertising or sell it to third parties. We retain recitation audio only for as long as
          necessary to provide and improve recitation feedback; when you delete your account, any recitation
          audio associated with it is deleted or anonymized along with your other account data, subject to
          the retention exceptions described in Data Retention below.
        </p>
        <p>
          <strong>Device and usage information.</strong> We may collect technical and usage information such
          as:
        </p>
        <ul>
          <li>Device type and model</li>
          <li>Operating system and version</li>
          <li>App version</li>
          <li>IP address</li>
          <li>Approximate technical location information, where available</li>
          <li>Application usage events</li>
          <li>Screens or features accessed</li>
          <li>Lesson start and completion events</li>
          <li>Technical identifiers</li>
        </ul>
        <p>
          We use this information to operate, secure, maintain, and improve UstadApp, and to understand how
          our features are being used.
        </p>
        <p>
          <strong>Crash and error information.</strong> When UstadApp crashes or encounters a technical
          error, we may collect diagnostic information such as the screen or feature involved, device
          information, application version, and technical error details. This helps us identify and fix bugs
          and improve application stability.
        </p>
      </LegalSection>

      <LegalSection heading="2. How we use your information">
        <p>We use the information we collect to:</p>
        <ul>
          <li>Create and manage your account.</li>
          <li>Save and display your Quran memorization progress.</li>
          <li>Provide lessons, revision, XP, streaks, and other learning features.</li>
          <li>Analyze recitation and provide AI-powered feedback.</li>
          <li>Send account-related emails and notifications where applicable.</li>
          <li>Maintain application security.</li>
          <li>Detect and fix crashes and technical problems.</li>
          <li>Understand how users interact with UstadApp.</li>
          <li>Improve our lessons, features, and overall learning experience.</li>
          <li>Comply with applicable legal obligations.</li>
        </ul>
        <p>We do not sell your personal information.</p>
      </LegalSection>

      <LegalSection heading="3. Who we share information with">
        <p>
          We share information with service providers that help us operate UstadApp. These providers process
          information on our behalf for specific purposes. Depending on the features you use and our current
          technical infrastructure, they may include:
        </p>
        <ul>
          <li>
            <strong>Google Firebase</strong>, which provides authentication, analytics, application
            infrastructure, and related services.
          </li>
          <li>
            <strong>Deepgram</strong>, which performs speech recognition and processes recitation audio to
            generate recitation feedback.
          </li>
          <li>
            <strong>Google Gemini</strong>, which provides AI-assisted generation or processing of certain
            educational content and exercises.
          </li>
          <li><strong>Supabase</strong>, which provides our database and backend infrastructure.</li>
          <li><strong>Vercel</strong>, which hosts and deploys our application infrastructure.</li>
          <li><strong>Resend</strong>, which delivers account-related and verification emails.</li>
          <li>
            <strong>Sentry and GlitchTip</strong>, which provide application monitoring, crash reporting, and
            error diagnostics.
          </li>
        </ul>
        <p>
          We may update or replace service providers as UstadApp develops. Where required, this Privacy
          Policy will be updated to reflect material changes.
        </p>
        <p>
          We may also disclose information where required by law, legal process, or governmental request, or
          where reasonably necessary to protect the rights, safety, security, or property of UstadApp, our
          users, or others.
        </p>
      </LegalSection>

      <LegalSection heading="4. Children and younger users">
        <p>
          UstadApp is intended for learners aged 10 and above. If you are under the age of legal majority in
          your country, you should use UstadApp with the knowledge and, where required by applicable law,
          consent of a parent or legal guardian.
        </p>
        <p>
          We aim to collect only the information reasonably necessary to provide the application&rsquo;s
          learning features. UstadApp does not sell personal information and does not display third-party
          advertising, and we do not provide an open social network or allow strangers to directly contact
          children through the application.
        </p>
        <p>
          Parents or legal guardians who have questions about information associated with their child may
          contact us at <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>.
        </p>
      </LegalSection>

      <LegalSection heading="5. Your choices and rights">
        <p>Depending on where you live and applicable law, you may have rights relating to your personal information. Within UstadApp, you may be able to:</p>
        <ul>
          <li>Update your profile information.</li>
          <li>Change your account credentials.</li>
          <li>Review your learning progress.</li>
          <li>Delete your account.</li>
        </ul>
        <p>
          When you delete your account, we delete or anonymize personal information associated with it from
          our active systems, subject to the retention exceptions described below.
        </p>
        <p>
          You may also contact us to request access to, correction of, or deletion of your personal
          information. Residents of certain jurisdictions, including the European Economic Area, the United
          Kingdom, and California, may have additional rights under applicable privacy laws. To exercise your
          rights, contact us at{" "}
          <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>.
        </p>
      </LegalSection>

      <LegalSection heading="6. Account deletion">
        <p>
          If you have created a UstadApp account, you can delete your account and its associated personal
          information at any time from within the app. You may also request account deletion by emailing us
          at <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>.
        </p>
        <p>
          Account deletion removes information associated with your account from our active systems, subject
          to information we are legally required or legitimately permitted to retain, as described in Data
          Retention below.
        </p>
      </LegalSection>

      <LegalSection heading="7. Data retention">
        <p>
          We retain account information and learning activity for as long as reasonably necessary to provide
          the service and maintain your learning history. When you delete your account, we delete or
          anonymize personal information associated with it from our active systems, subject to:
        </p>
        <ul>
          <li>Legal or regulatory retention requirements.</li>
          <li>Security and fraud-prevention requirements.</li>
          <li>Backup systems that may retain information temporarily until overwritten or securely deleted.</li>
          <li>Information that has been aggregated or anonymized so that it can no longer reasonably identify you.</li>
        </ul>
        <p>Recitation audio is handled according to the practices described in Voice and recitation data above.</p>
      </LegalSection>

      <LegalSection heading="8. Security">
        <p>
          We use reasonable technical and organizational measures designed to protect information against
          unauthorized access, alteration, disclosure, or destruction. These measures may include encryption
          of information in transit, access controls, authentication protections, and secure infrastructure
          provided by our service providers. No method of transmitting or storing information can be
          guaranteed to be completely secure.
        </p>
      </LegalSection>

      <LegalSection heading="9. International data transfers">
        <p>
          UstadApp is operated from Pakistan, while some of our technology and service providers may operate
          or process information in other countries, including the United States. As a result, your
          information may be processed outside the country in which you live and may be subject to the laws
          of those jurisdictions. Where required by applicable law, we take appropriate measures for
          international transfers of personal information.
        </p>
      </LegalSection>

      <LegalSection heading="10. Third-party services">
        <p>
          UstadApp integrates with third-party services to provide authentication, hosting, analytics, AI
          processing, email delivery, monitoring, and other functionality. These third parties may have
          their own privacy policies governing their processing of information, and we encourage you to
          review them where appropriate. See our{" "}
          <a href="/terms">Terms of Service</a> for more on how UstadApp&rsquo;s features work together.
        </p>
      </LegalSection>

      <LegalSection heading="11. Changes to this Privacy Policy">
        <p>
          We may update this Privacy Policy as UstadApp develops or as our legal and technical requirements
          change. If we make a material change, we&rsquo;ll update the effective date above and, where
          appropriate, notify you through the app, website, or another reasonable method.
        </p>
      </LegalSection>

      <LegalSection heading="12. Contact us">
        <p>
          Questions about this Privacy Policy, your personal information, or your privacy rights? Email{" "}
          <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a> or visit{" "}
          <a href={siteConfig.url}>{siteConfig.url.replace(/^https?:\/\//, "")}</a>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
