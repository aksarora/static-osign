import React from 'react';
import {Block} from 'baseui/block';
import {Heading, HeadingLevel} from 'baseui/heading';
import {ParagraphMedium} from 'baseui/typography';
import {Wrapper} from '../components/wrapper';
import {Container} from '../components/container';

const PrivacyPolicy: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <HeadingLevel>
          <Heading styleLevel={1}>Privacy Policy</Heading>
          <Block marginBottom="scale600">
            <Heading styleLevel={3}>Data Collection and Use</Heading>
            <ParagraphMedium>
              We do not store Aadhaar numbers as part of our commitment to
              privacy and data protection. Personal data is used strictly for
              document processing and service fulfillment.
            </ParagraphMedium>
            <ParagraphMedium>
              We employ third-party data processors who are selected through
              rigorous security assessments to ensure data protection.
            </ParagraphMedium>
          </Block>
          <Block marginBottom="scale600">
            <Heading styleLevel={3}>Data Security</Heading>
            <ParagraphMedium>
              Comprehensive encryption is implemented for document storage. All
              customer documents, including signed documents, are securely
              stored on encrypted servers located in Delhi.
            </ParagraphMedium>
            <ParagraphMedium>
              We engage service providers that adhere to stringent data
              protection standards, ensuring user data is safeguarded against
              vulnerabilities.
            </ParagraphMedium>
          </Block>
          <Block marginBottom="scale600">
            <Heading styleLevel={3}>Data Storage</Heading>
            <ParagraphMedium>
              We may store any submitted data and associated metadata, such as
              IP address, MAC address, and location information, exclusively for
              verification purposes.
            </ParagraphMedium>
            <ParagraphMedium>
              Data is retained for as long as necessary to meet verification
              requirements and maintain the integrity of our services, with
              variations in duration based on legal, regulatory, or operational
              needs.
            </ParagraphMedium>
          </Block>
          <Block marginBottom="scale600">
            <Heading styleLevel={3}>Usage and Deletion</Heading>
            <ParagraphMedium>
              Stored data may be used to improve service offerings, conduct
              audits, or fulfill legal obligations.
            </ParagraphMedium>
            <ParagraphMedium>
              We reserve the right to delete any stored data at our discretion
              once it is deemed no longer necessary for verification or service
              purposes.
            </ParagraphMedium>
          </Block>
          <Block marginBottom="scale600">
            <Heading styleLevel={3}>Security and Compliance</Heading>
            <ParagraphMedium>
              We implement strict security measures to protect stored data
              against unauthorized access, use, or disclosure.
            </ParagraphMedium>
            <ParagraphMedium>
              Our data handling practices are in full compliance with applicable
              data protection and privacy regulations.
            </ParagraphMedium>
          </Block>
          <Block marginBottom="scale600">
            <Heading styleLevel={3}>User Rights</Heading>
            <ParagraphMedium>
              Logged-in users will be able to view their order and transaction
              history.
            </ParagraphMedium>
          </Block>
          <Block marginBottom="scale600">
            <Heading styleLevel={3}>Amendment Rights</Heading>
            <ParagraphMedium>
              We reserve the right to amend this policy at any time without
              prior notification. Please check this page for updated privacy
              policy.
            </ParagraphMedium>
          </Block>
        </HeadingLevel>
      </Container>
    </Wrapper>
  );
};

export default PrivacyPolicy;
