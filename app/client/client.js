import React from 'react'
import { render } from 'react-dom'
import App from '../components/App'
import 'font-awesome-sass-loader'

render(
  <App url="/app/data/portfolio.json" />,
  document.getElementById('app')
)
