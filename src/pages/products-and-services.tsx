import React from 'react';
import {Heading, HeadingLevel} from 'baseui/heading';
import {ParagraphMedium} from 'baseui/typography';
import {Wrapper} from '../components/wrapper';
import {Container} from '../components/container';

const ProductsAndServices: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <HeadingLevel>
          <Heading>Digital Signature Services</Heading>
          <ul>
            <li>
              <ParagraphMedium>
                Seamlessly sign documents online with legally recognized
                e-signatures in India.
              </ParagraphMedium>
            </li>
            <li>
              <ParagraphMedium>
                Features include audit trails for signed documents, ensuring
                transparency and traceability.
              </ParagraphMedium>
            </li>
            <li>
              <ParagraphMedium>
                Benefit from a streamlined process where documents can be
                rectified with addendums, requiring a full set of signatures
                from all parties involved.
              </ParagraphMedium>
            </li>
            <li>
              <ParagraphMedium>
                Ideal for individuals and businesses looking for efficient,
                paperless transaction solutions.
              </ParagraphMedium>
            </li>
          </ul>

          <Heading>Partner Services</Heading>
          <ul>
            <li>
              <ParagraphMedium>
                Offering physical in-store assistance for document signing.
              </ParagraphMedium>
            </li>
            <li>
              <ParagraphMedium>
                Partners are trained to verify customer data to ensure accuracy.
              </ParagraphMedium>
            </li>
            <li>
              <ParagraphMedium>
                Suitable for customers who prefer a guided manual process or
                require additional support for document preparation.
              </ParagraphMedium>
            </li>
            <li>
              <ParagraphMedium>
                For each of these signatures, we offer witness services. Please
                see our detailed terms and conditions for more on these.
              </ParagraphMedium>
            </li>
          </ul>
        </HeadingLevel>
      </Container>
    </Wrapper>
  );
};

export default ProductsAndServices;
