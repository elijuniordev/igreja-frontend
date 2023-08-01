import { Box } from '@mui/system';

interface LayoutBaseInicialProps {
    children: React.ReactNode;
}

export const LayoutBaseInicial: React.FC<LayoutBaseInicialProps> = ({ children } ) => {
  return (
    <Box>
      {children}
    </Box>
  );
};