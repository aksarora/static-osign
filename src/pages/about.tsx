import React from 'react';
import {Wrapper} from '../components/wrapper';
import {Container} from '../components/container';
import {HeadingLarge, HeadingSmall, ParagraphMedium} from 'baseui/typography';

const About: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <HeadingLarge>About Us</HeadingLarge>
        <section>
          <HeadingSmall>Our Mission</HeadingSmall>
          <ParagraphMedium>
            At OTPSign.com, our mission is to simplify the e-signing process for
            Indian citizens by providing a seamless, secure, and legally
            compliant platform for all document signing needs. We aim to empower
            users with a hassle-free digital experience, ensuring that their
            document signing is both efficient and trustworthy.
          </ParagraphMedium>
        </section>
        <section>
          <HeadingSmall>Our Values</HeadingSmall>
          {/* <ParagraphMedium> */}
          <ul>
            <li>
              <ParagraphMedium>
                <strong>Innovation:</strong> We are committed to continuously
                improving our technology to deliver a superior user experience.
              </ParagraphMedium>
            </li>
            <li>
              <ParagraphMedium>
                <strong>Security:</strong> We adhere to the highest standards of
                data protection to ensure that our users' information is always
                secure.
              </ParagraphMedium>
            </li>
            <li>
              <ParagraphMedium>
                <strong>Transparency:</strong> We believe in keeping our
                customers informed and ensuring that our processes are
                straightforward and easy to understand.
              </ParagraphMedium>
            </li>
          </ul>
          {/* </ParagraphMedium> */}
        </section>
        <section>
          <HeadingSmall>Why Choose Us?</HeadingSmall>

          <ul>
            <li>
              <ParagraphMedium>
                Government-compliant e-signatures.
              </ParagraphMedium>
            </li>
            <li>
              <ParagraphMedium>
                Secure and encrypted document storage.
              </ParagraphMedium>
            </li>
            <li>
              <ParagraphMedium>
                Reliable third-party processors for smooth transactions.
              </ParagraphMedium>
            </li>
          </ul>
        </section>
        <section>
          <HeadingSmall>Our Network</HeadingSmall>
          <ParagraphMedium>
            We have partner stores across India that offer in-person e-signing
            assistance, providing an additional layer of support for those who
            prefer a more guided process.
          </ParagraphMedium>
        </section>
      </Container>
    </Wrapper>
  );
};

export default About;
