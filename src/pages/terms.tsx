import {Heading, HeadingLevel} from 'baseui/heading';
import {ParagraphMedium} from 'baseui/typography';
import {Wrapper} from '../components/wrapper';
import {Container} from '../components/container';

const Terms = () => {
  return (
    <Wrapper>
      <Container>
        <HeadingLevel>
          <Heading>Service Usage</Heading>
          <ParagraphMedium>
            Users must ensure accurate document uploads and signature
            applications. Aadhar OTPs must be entered exclusively on our
            official partners' platforms: Capricorn.com or C-DAC.in.
          </ParagraphMedium>
        </HeadingLevel>

        <HeadingLevel>
          <Heading>Limitations and Liabilities</Heading>
          <ParagraphMedium>
            We are not liable for errors introduced by customers or partners. No
            liability if unauthorized third-party access occurs due to user
            negligence.
          </ParagraphMedium>
        </HeadingLevel>

        <HeadingLevel>
          <Heading>Court Statement Assistance</Heading>
          <ParagraphMedium>
            We offer facilitation services for court statements at an additional
            fee. Our employees can act as legal witnesses, with their digital
            signatures witnessing the process, subject to an additional fee. For
            in-person court appearances, a fee of Rs. 10,000/- per hearing is
            applicable. In addition to this fee, the requesting party is
            responsible for covering all travel, accommodation, and subsistence
            expenses as incurred.
          </ParagraphMedium>
        </HeadingLevel>

        <HeadingLevel>
          <Heading>Virtual Witness Services</Heading>
          <ParagraphMedium>
            For virtual court appearances via video call, a fee of Rs. 2,000/-
            will be charged for each 30-minute session.
          </ParagraphMedium>
        </HeadingLevel>

        <HeadingLevel>
          <Heading>Rectification of Signed Documents</Heading>
          <ParagraphMedium>
            If a document is already signed, any corrections must be addressed
            through additional addendums. These addendums will require a full
            set of signatures from all parties involved. An audit trail for the
            rectified document will be generated and sent to the relevant
            parties.
          </ParagraphMedium>
        </HeadingLevel>

        <HeadingLevel>
          <Heading>Signing of Unsigned Documents</Heading>
          <ParagraphMedium>
            Unsigned documents can have data entered either by the customer
            directly or, if facilitated by our partners, the partner will ensure
            to verify the data with the customer. Once data is submitted and
            verified, it cannot be altered.
          </ParagraphMedium>
        </HeadingLevel>

        <HeadingLevel>
          <Heading>Refusal and Resubmission</Heading>
          <ParagraphMedium>
            If discrepancies are noted in the verified data, customers have the
            option to refuse signing the document. A request for new document
            signing can be initiated, subject to fresh charges.
          </ParagraphMedium>
        </HeadingLevel>

        <HeadingLevel>
          <Heading>Liveness Check via Video Recording</Heading>
          <ParagraphMedium>
            Camera Position: Ensure you look straight into the camera for a
            clear and unobstructed view. Appearance: Do not wear glasses, hats,
            caps, or any headgear that may obscure your face unless required for
            religious or medical reasons. Environment: Conduct the recording in
            a well-lit and noise-free environment to avoid distractions and
            ensure clear audio. Equipment: Use a clean camera lens and ensure
            the microphone is functioning properly. Connection: Maintain a
            stable internet connection to avoid interruptions during the
            recording process.
          </ParagraphMedium>
        </HeadingLevel>

        <HeadingLevel>
          <Heading>Uploading Aadhaar/ID Information</Heading>
          <ParagraphMedium>
            Correctness: Ensure that the Aadhaar/ID uploaded belongs to the
            individual involved in the signing process and contains accurate
            address and personal details. These details will be used as provided
            for the preparation of documents. Clarity: Uploaded copies of the
            Aadhaar/ID must be clear and legible; blurry or cropped images may
            result in incorrect data in your documents. Please review each piece
            of information meticulously and verify its accuracy before
            confirming.
          </ParagraphMedium>
        </HeadingLevel>

        <HeadingLevel>
          <Heading>Signature Options Terms and Conditions</Heading>
          <ParagraphMedium>
            Current Methods: Our service supports only Aadhaar-based OTP and
            Digital Signature Certificates (DSC) for document signing. Future
            Options: While we are exploring additional signature methods, there
            is no assured timeline or commitment for their implementation. Usage
            Guidelines: Users should utilize the current supported methods until
            any updates are announced.
          </ParagraphMedium>
        </HeadingLevel>

        <HeadingLevel>
          <Heading>Amendments</Heading>
          <ParagraphMedium>
            We reserve the right to amend these terms at any time without prior
            notification. Please check this page for updated terms and
            conditions.
          </ParagraphMedium>
        </HeadingLevel>
      </Container>
    </Wrapper>
  );
};

export default Terms;
