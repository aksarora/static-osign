import {styled} from 'baseui';

export const Container = styled<'div', {$verticalPadding?: string}>(
  'div',
  ({$theme, $verticalPadding}) => ({
    maxWidth: `${$theme.grid.maxWidth}px`,
    boxSizing: 'border-box',
    width: '100%',
    padding: `${$verticalPadding || $theme.sizing.scale800} ${
      $theme.sizing.scale800
    }`,
    margin: '0 auto',
    [$theme.mediaQuery.large]: {
      padding: `${$verticalPadding || $theme.sizing.scale800} ${
        $theme.sizing.scale800
      }`,
    },
  }),
);

const getPadding = (paddingType: string, $theme: any) => {
  switch (paddingType) {
    case 'small':
      return $theme.sizing.scale400;
    case 'default':
    default:
      return $theme.sizing.scale800;
  }
};
