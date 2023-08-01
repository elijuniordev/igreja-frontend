import { Header } from '../../shared/components/Inicial/header/Header';
import { LayoutBaseInicial } from '../../shared/layouts/LayoutBaseInicial';

import { Box } from '@mui/material';
import { EncontreUmaCelula } from './celula/EncontreUmaCelula';
import { Visao } from './visao/Visao';
import { Cultos } from './cultos/Cultos';

export const PaginaInicial: React.FC = () => {
  return (
    <LayoutBaseInicial>
      <Box>
        <Header />
        <EncontreUmaCelula />
        <Visao />
        <Cultos />
      </Box>
    </LayoutBaseInicial>
  );
};