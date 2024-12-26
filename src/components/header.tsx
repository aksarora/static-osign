import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationList,
  StyledNavigationItem,
} from 'baseui/header-navigation';
import {StyledLink} from 'baseui/link';
import {useStyletron} from 'baseui';
import {Drawer, ANCHOR} from 'baseui/drawer';
import {Menu} from 'baseui/icon';
import {useState} from 'react';
import {ListItem, ListItemLabel} from 'baseui/list';
import {Container} from './container';
import {links} from '../data/links';
import Link from 'next/link';
import {useLogin} from '../context/login';

export const Header = () => {
  const [css, theme] = useStyletron();
  const [isOpen, setIsOpen] = useState(false);
  const {initiateLogin, isLoggedIn, logoutUser} = useLogin();

  return (
    <HeaderNavigation
      overrides={{
        Root: {
          style: {
            backgroundColor: theme.colors.backgroundSecondary,
          },
        },
      }}
    >
      <Container $verticalPadding={theme.sizing.scale300}>
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          })}
        >
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            })}
          >
            <Menu
              onClick={() => setIsOpen((open) => !open)}
              size={24}
              className={css({cursor: 'pointer'})}
            />
            <StyledNavigationList $align={ALIGN.left}>
              <StyledNavigationItem>
                <Link href="/" className={css({textDecoration: 'none'})}>
                  <div
                    className={css({
                      ...theme.typography.LabelMedium,
                      textDecoration: 'none',
                      color: theme.colors.contentPrimary,
                      fontWeight: 'bold',
                      cursor: 'pointer',
                    })}
                  >
                    OTP Sign
                  </div>
                </Link>
              </StyledNavigationItem>
            </StyledNavigationList>
          </div>

          <Drawer
            isOpen={isOpen}
            autoFocus
            anchor={ANCHOR.left}
            onClose={() => setIsOpen(false)}
          >
            <div>
              <ul
                className={css({
                  listStyleType: 'none',
                  padding: 0,
                })}
              >
                {links.map((link, index) => (
                  <ListItem key={index}>
                    <ListItemLabel>
                      <Link
                        href={link.url}
                        className={css({color: theme.colors.contentPrimary})}
                      >
                        {link.title}
                      </Link>
                    </ListItemLabel>
                  </ListItem>
                ))}
              </ul>
            </div>
          </Drawer>

          <StyledNavigationList $align={ALIGN.center} />
          <StyledNavigationList $align={ALIGN.right}>
            {isLoggedIn ? (
              <>
                <StyledNavigationItem>
                  <b>Welcome!</b>
                </StyledNavigationItem>
                <StyledNavigationItem>
                  <StyledLink
                    onClick={() => {
                      logoutUser();
                    }}
                    className={css({cursor: 'pointer'})}
                  >
                    Logout
                  </StyledLink>
                </StyledNavigationItem>
              </>
            ) : (
              <>
                <StyledNavigationItem>
                  <StyledLink
                    onClick={() => initiateLogin(() => {})}
                    className={css({cursor: 'pointer'})}
                  >
                    Login
                  </StyledLink>
                </StyledNavigationItem>
                <StyledNavigationItem>
                  <StyledLink
                    onClick={() => initiateLogin(() => {})}
                    className={css({cursor: 'pointer'})}
                  >
                    Register
                  </StyledLink>
                </StyledNavigationItem>
              </>
            )}
          </StyledNavigationList>
        </div>
      </Container>
    </HeaderNavigation>
  );
};
