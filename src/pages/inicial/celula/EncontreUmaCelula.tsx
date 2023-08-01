
import { Box, Typography } from '@mui/material';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import './EncontreUmaCelula.css';


const containerStyle = {
  width: '95%',
  height: '95%'
};



const position = {
  lat: -23.52745758564792,
  lng: -46.78025274634344
};

export const EncontreUmaCelula: React.FC = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyCyonq07X8FpKHjWrKcdPg0r1Thz2REwfQ'
  });

  return (
    <>
      <Box>
        <Typography variant='h1' sx={{ fontSize: '2.25rem', textAlign: 'center' }}>
            Encontre uma célula
        </Typography>
      </Box>
      <Box height='70vh' display='flex' justifyContent='center' alignItems='center'>
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={position}
            zoom={15}
          >
            <Marker 
              position={position}
              options={{
                label: {
                  text: 'Igreja Videira Osasco',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  className: 'map-marker',
                }
              }}
            />
            <Marker 
              position={{ 
                lat: -23.543868603032646,
                lng: -46.81086919136323
              }}
              options={{
                label: {
                  text: 'Célula Betel',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  className: 'map-marker',
                }
              }}
            />
          </GoogleMap>
        ) : (
          <></>   
        )}
      </Box>
    </>
  );
};
