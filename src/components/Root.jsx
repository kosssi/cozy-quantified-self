import React from 'react'
import { I18n } from 'cozy-ui/react/I18n'

import App from './App'

const root = document.querySelector('[role=application]')
const data = root.dataset
const lang = data.cozyLocale || document.documentElement.getAttribute('lang') || 'en'

const Root = () => (
  <I18n lang={lang} dictRequire={(lang) => require(`../locales/${lang}`)}>
    <App />
  </I18n>
)

export default Root
