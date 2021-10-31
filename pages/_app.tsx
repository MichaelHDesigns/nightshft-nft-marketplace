import React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

// styles
import 'public/styles/globals.css'

// config
import { pageTransition } from 'config/animations'
import { AppName, AppDesc, LogoPath } from 'config'

// components
import MdCreate from 'components/mdcreate'
import Navbar from 'components/navigation'
import Footer from 'components/footer'

// misc
import store from 'redux/store';

const queryClient = new QueryClient()


function MyApp({ Component, pageProps, router }) {
  return (
      <Provider store={ store }>
        <QueryClientProvider client={queryClient}>
          <Head>
            <title>{AppName}</title>
            <meta charSet="utf-8" />
            <meta name="description" content={AppDesc} />
            <link rel="icon" href={LogoPath} />
          </Head>
          {/* using page transitions */}
          <motion.div
           key={router.route}
           initial="from"
           animate="to"
           variants={pageTransition}
          >
            <MdCreate />
            <Navbar />
            <Component {...pageProps} />
            <Footer />
          </motion.div>
        </QueryClientProvider>
      </Provider>
  )
}

// for using redux with nextjs
const wrapper = createWrapper(() => store)
export default wrapper.withRedux(MyApp)
