import { Button, Column, Img, Section, Tailwind, Text } from '@react-email/components';

import * as config from '@documenso/tailwind-config';

import { TemplateDocumentImage } from './template-document-image';

export interface TemplateDocumentCompletedProps {
  downloadLink: string;
  documentName: string;
  assetBaseUrl: string;
}

export const TemplateDocumentCompleted = ({
  downloadLink,
  documentName,
  assetBaseUrl,
}: TemplateDocumentCompletedProps) => {
  const getAssetUrl = (path: string) => {
    return new URL(path, assetBaseUrl).toString();
  };

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

      <Section>
        <Section className="mb-4">
          <Column align="center">
            <Text className="text-base font-semibold text-[#7AC455]">
              <Img
                src={getAssetUrl('/static/completed.png')}
                className="-mt-0.5 mr-2 inline h-7 w-7 align-middle"
              />
              Abgeschlossen
            </Text>
          </Column>
        </Section>

        <Text className="text-primary mb-0 text-center text-lg font-semibold">
          “{documentName}” wurde von allen Parteien signiert
        </Text>

        <Text className="my-1 text-center text-base text-slate-400">
          Jetzt Dokument herunterladen.
        </Text>

        <Section className="mb-6 mt-8 text-center">
          {/* <Button
            className="mr-4 inline-flex items-center justify-center rounded-lg border border-solid border-slate-200 px-4 py-2 text-center text-sm font-medium text-black no-underline"
            href={reviewLink}
          >
            <Img src={getAssetUrl('/static/review.png')} className="-mb-1 mr-2 inline h-5 w-5" />
            Review
          </Button> */}
          <Button
            className="rounded-lg border border-solid border-slate-200 px-4 py-2 text-center text-sm font-medium text-black no-underline"
            href={downloadLink}
          >
            <Img
              src={getAssetUrl('/static/download.png')}
              className="mb-0.5 mr-2 inline h-5 w-5 align-middle"
            />
            Herunterladen
          </Button>
        </Section>
      </Section>
    </Tailwind>
  );
};

export default TemplateDocumentCompleted;
