import React from 'react';
import {Container} from './container';
import {useStyletron} from 'baseui';
import {links} from '../data/links';
import {
  HeadingXSmall,
  LabelMedium,
  ParagraphSmall,
  ParagraphXSmall,
} from 'baseui/typography';

const Footer: React.FC = () => {
  const [css, theme] = useStyletron();
  return (
    <footer
      style={{
        backgroundColor: theme.colors.backgroundInversePrimary,
        color: theme.colors.contentInversePrimary,
        marginTop: theme.sizing.scale1600,
      }}
    >
      <Container>
        <div
          className={css({
            display: 'flex',
            flexDirection: 'column',
            [theme.mediaQuery.large]: {
              flexDirection: 'row',
              justifyContent: 'space-between',
            },
          })}
        >
          <div className={css({padding: theme.sizing.scale800})}>
            <HeadingXSmall color={theme.colors.contentInversePrimary}>
              Company
            </HeadingXSmall>
            <ul className={css({listStyleType: 'none', padding: 0})}>
              {links.map((link, index) => (
                <li
                  key={index}
                  //  className={css({paddingBottom: theme.sizing.scale100})}
                >
                  <ParagraphSmall color={theme.colors.contentInversePrimary}>
                    <a
                      href={link.url}
                      className={css({
                        color: theme.colors.contentInversePrimary,
                        textDecoration: 'none',
                        ':hover': {
                          textDecoration: 'underline',
                        },
                      })}
                    >
                      {link.title}
                    </a>
                  </ParagraphSmall>
                </li>
              ))}
            </ul>
          </div>
          <div
            className={css({padding: theme.sizing.scale800, maxWidth: '300px'})}
          >
            <HeadingXSmall color={theme.colors.contentInversePrimary}>
              Office Address
            </HeadingXSmall>
            <LabelMedium color={theme.colors.contentInversePrimary}>
              Glyphix Signatures LLP
            </LabelMedium>
            <ParagraphXSmall color={theme.colors.contentInversePrimary}>
              3rd Floor, Orchid Centre
            </ParagraphXSmall>
            <ParagraphXSmall color={theme.colors.contentInversePrimary}>
              Rapid Metro Station, near IILM Institute
            </ParagraphXSmall>
            <ParagraphXSmall color={theme.colors.contentInversePrimary}>
              Next to Sector 54, Sector 53
            </ParagraphXSmall>
            <ParagraphXSmall color={theme.colors.contentInversePrimary}>
              Gurugram ,Haryana 122002
            </ParagraphXSmall>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
