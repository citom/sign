import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';

import config from '@documenso/tailwind-config';

import { TemplateFooter } from '../template-components/template-footer';
import {
  TemplateResetPassword,
  TemplateResetPasswordProps,
} from '../template-components/template-reset-password';

export type ResetPasswordTemplateProps = Partial<TemplateResetPasswordProps>;

export const ResetPasswordTemplate = ({
  userName = 'Lucas Smith',
  userEmail = 'lucas@documenso.com',
  assetBaseUrl = 'http://localhost:3002',
}: ResetPasswordTemplateProps) => {
  const previewText = `Password Reset Successful`;

  const getAssetUrl = (path: string) => {
    return new URL(path, assetBaseUrl).toString();
  };

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: config.theme.extend.colors,
            },
          },
        }}
      >
        <Body className="mx-auto my-auto bg-white font-sans">
          <Section>
            <Container className="mx-auto mb-2 mt-8 max-w-xl rounded-lg border border-solid border-slate-200 p-4 backdrop-blur-sm">
              <Section>
                <Img
                  src={getAssetUrl('/static/logo.png')}
                  alt="Interflare Logo"
                  className="mb-4 h-6"
                />

                <TemplateResetPassword
                  userName={userName}
                  userEmail={userEmail}
                  assetBaseUrl={assetBaseUrl}
                />
              </Section>
            </Container>

            <Container className="mx-auto mt-12 max-w-xl">
              <Section>
                <Text className="my-4 text-base font-semibold">
                  Hallo, {userName}{' '}
                  <Link className="font-normal text-slate-400" href={`mailto:${userEmail}`}>
                    ({userEmail})
                  </Link>
                </Text>

                <Text className="mt-2 text-base text-slate-400">
                  Auf Ihre Anfrage hin haben wir Ihr Passwort geändert. Sie können sich nun mit
                  Ihrem neuen Passwort anmelden.
                </Text>
                <Text className="mt-2 text-base text-slate-400">
                  Keine Passwortänderung angefordert? Bitte kontaktieren Sie uns unter{' '}
                  <Link
                    className="text-documenso-700 font-normal"
                    href="mailto:support@interflare.de"
                  >
                    support@interflare.de
                  </Link>
                  , damit wir uns umgehend darum kümmern können.
                </Text>
              </Section>
            </Container>

            <Hr className="mx-auto mt-12 max-w-xl" />

            <Container className="mx-auto max-w-xl">
              <TemplateFooter isDocument={false} />
            </Container>
          </Section>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ResetPasswordTemplate;
