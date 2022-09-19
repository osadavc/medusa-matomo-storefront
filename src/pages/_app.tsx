import { MEDUSA_BACKEND_URL, queryClient } from "@lib/config"
import { AccountProvider } from "@lib/context/account-context"
import { CartDropdownProvider } from "@lib/context/cart-dropdown-context"
import { MobileMenuProvider } from "@lib/context/mobile-menu-context"
import { StoreProvider } from "@lib/context/store-context"
import { CartProvider, MedusaProvider } from "medusa-react"
import { Hydrate } from "react-query"
import "styles/globals.css"
import { AppPropsWithLayout } from "types/global"
import Script from "next/script"
import { MatomoProvider, createInstance } from "@datapunt/matomo-tracker-react"

const instance = createInstance({
  urlBase: "https://osadathecoder.matomo.cloud/",
  siteId: 2,
})

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <MatomoProvider value={instance}>
      <MedusaProvider
        baseUrl={MEDUSA_BACKEND_URL}
        queryClientProviderProps={{
          client: queryClient,
        }}
      >
        <Hydrate state={pageProps.dehydratedState}>
          <Script id="matomo_analytics" strategy="beforeInteractive">
            {`
               var _paq = window._paq = window._paq || [];
  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="https://osadathecoder.matomo.cloud/";
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', '2']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.async=true; g.src='//cdn.matomo.cloud/osadathecoder.matomo.cloud/matomo.js'; s.parentNode.insertBefore(g,s);
  })();
             `}
          </Script>
          <CartDropdownProvider>
            <MobileMenuProvider>
              <CartProvider>
                <StoreProvider>
                  <AccountProvider>
                    {getLayout(<Component {...pageProps} />)}
                  </AccountProvider>
                </StoreProvider>
              </CartProvider>
            </MobileMenuProvider>
          </CartDropdownProvider>
        </Hydrate>
      </MedusaProvider>
    </MatomoProvider>
  )
}

export default App
