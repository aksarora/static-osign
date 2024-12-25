import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider} from 'baseui';
import {styletron} from '../styletron';
import {pdfjs} from 'react-pdf';
import workerSrc from 'pdfjs-dist/build/pdf.worker.min.mjs';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  workerSrc,
  import.meta.url,
).toString();

function MyApp({Component, pageProps}) {
  return (
    <StyletronProvider value={styletron}>
      <BaseProvider
        theme={{
          ...LightTheme,
          colors: {
            ...LightTheme.colors,
            // backgroundPrimary: '#FAF9F6', // Override the backgroundPrimary color
          },
        }}
      >
        <Component {...pageProps} />
      </BaseProvider>
    </StyletronProvider>
  );
}

export default MyApp;
