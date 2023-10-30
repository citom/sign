import { Link, Section, Text } from '@react-email/components';

export type TemplateFooterProps = {
  isDocument?: boolean;
};

export const TemplateFooter = ({ isDocument = true }: TemplateFooterProps) => {
  return (
    <Section>
      {isDocument && (
        <Text className="my-4 text-base text-slate-400">
          Dieses Dokument wurde mit{' '}
          <Link className="text-[#7AC455]" href="https://sign.interflare.de">
            Interflare Sign
          </Link>{' '}
          gesendet.
        </Text>
      )}

      <Text className="my-8 text-sm text-slate-400">
        Interflare Consulting GmbH / Mühlgasse 15 / 71723 Großbottwar / Deutschland
        <br />
        <br />
        Geschäftsführer: Selim Cumart, Daniel Baric
        <br />
        Sitz der Gesellschaft: Großbottwar / Registergericht: AG Stuttgart, HRB 790477
        <br />
        USt.-IdNr. DE 363 204 863
        <br />
        <br />
        Sie erhalten diese E-Mail, weil jemand Ihnen möglicherweise ein Dokument zur Signierung
        gesendet hat. Wir verwenden Ihre personenbezogenen Daten ausschließlich zum Zweck der
        Signierung.
        <br />
        <br />
        Wie Ihre persönlichen Daten verwendet werden und wie Sie Ihre Rechte ausüben können, finden
        Sie in unseren{' '}
        <a href="https://interflare.de/datenschutzerklaerung/" target="_blank noopener noreferrer">
          Datenschutzhinweisen
        </a>
        .
      </Text>
    </Section>
  );
};

export default TemplateFooter;
