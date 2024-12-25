import {useEffect, useMemo, useState} from 'react';
import {useParams} from 'next/navigation';
import {Wrapper} from '../../../components/wrapper';
import {Container} from '../../../components/container';
import {HeadingLarge} from 'baseui/typography';
import {PDFSigner} from '../../../components/pdf-signer';
import {useStyletron} from 'styletron-react';

const DraftPDFSign = () => {
  const params = useParams();
  const [css, theme] = useStyletron();
  const drafts = useMemo(() => {
    if (typeof window === 'undefined') return [];
    return JSON.parse(localStorage.getItem('drafts') || '[]');
  }, []);

  const [draft, setDraft] = useState<any>(null);

  useEffect(() => {
    const foundDraft = drafts.find((d: any) => d.orderId === params?.orderId);
    setDraft(foundDraft);
  }, [drafts, params?.orderId]);

  return (
    <Wrapper>
      {draft && (
        <Container>
          <div className={css({textAlign: 'center'})}>
            <HeadingLarge>
              Tap on the areas of PDF where you want to sign
            </HeadingLarge>
          </div>
          <PDFSigner
            signatories={draft.signatories}
            url={draft.pdfUrl}
            onChange={(signatories) => {
              const newDraft = JSON.parse(JSON.stringify(draft));
              newDraft.signatories = signatories;
              setDraft(newDraft);
              const newDrafts = drafts.map((d: any) =>
                d.orderId === draft.orderId ? newDraft : d,
              );
              localStorage.setItem('drafts', JSON.stringify(newDrafts));
            }}
          />
        </Container>
      )}
    </Wrapper>
  );
};

export default DraftPDFSign;
