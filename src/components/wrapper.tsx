import React from 'react';
import {Header} from './header';
import Footer from './footer';

import {Breadcrumbs} from 'baseui/breadcrumbs';
import {Container} from './container';
import {useStyletron} from 'baseui';
import {StyledLink} from 'baseui/link';
import {usePathname} from 'next/navigation';
import {links} from '../data/links';
import Head from 'next/head';

interface WrapperProps {
  children: React.ReactNode;
}

export const Wrapper: React.FC<WrapperProps> = ({children}) => {
  const [css, theme] = useStyletron();
  const pathname = usePathname();
  const paths = pathname
    .split('/')
    .filter(Boolean)
    .map((path) => links.find((link) => link.url === `/${path}`));
  paths.unshift({title: 'Home', url: '/'});
  const lastPath = paths.splice(-1, 1)[0];
  return (
    <div>
      <Head>
        <title>{`${lastPath?.title} | OTP Sign`}</title>
      </Head>
      <Header />
      <Container $verticalPadding={`${theme.sizing.scale800}`}>
        <Breadcrumbs>
          {paths.map((path, index) => (
            <StyledLink href={path?.url} key={path?.url}>
              {path?.title}
            </StyledLink>
          ))}
          <span>{lastPath?.title}</span>
        </Breadcrumbs>
      </Container>
      <main>{children}</main>

      <Footer />
    </div>
  );
};
