import { Button, Section, Tailwind, Text } from '@react-email/components';

import * as config from '@documenso/tailwind-config';

import { TemplateDocumentImage } from './template-document-image';

export type TemplateForgotPasswordProps = {
  resetPasswordLink: string;
  assetBaseUrl: string;
};

export const TemplateForgotPassword = ({
  resetPasswordLink,
  assetBaseUrl,
}: TemplateForgotPasswordProps) => {
  return (
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: config.theme.extend.colors,
          },
        },
      }}
    >
      <TemplateDocumentImage className="mt-6" assetBaseUrl={assetBaseUrl} />

      <Section className="flex-row items-center justify-center">
        <Text className="text-primary mx-auto mb-0 max-w-[80%] text-center text-lg font-semibold">
          Passwort vergessen?
        </Text>

        <Text className="my-1 text-center text-base text-slate-400">
          Klicken Sie auf den Button um Ihr Passwort zurückzusetzen.
        </Text>

        <Section className="mb-6 mt-8 text-center">
          <Button
            className="bg-documenso-500 inline-flex items-center justify-center rounded-lg px-6 py-3 text-center text-sm font-medium text-black no-underline"
            href={resetPasswordLink}
          >
            Passwort zurücksetzen
          </Button>
        </Section>
      </Section>
    </Tailwind>
  );
};

export default TemplateForgotPassword;
