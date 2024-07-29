import React from 'react'
import cx from 'clsx';
import { MantineProvider, Container, createTheme } from '@mantine/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    Container: Container.extend({
      classNames: (_, { size }) => ({
        root: cx({ [classes.responsiveContainer]: size === 'responsive' }),
      }),
    }),
  },
});
function Container() {
    return (
        <MantineProvider theme={theme}>
          <Container size="responsive" bg="var(--mantine-color-blue-light)">
            Container with responsive size
          </Container>
        </MantineProvider>
      );
}

export default Container