import { useContext } from 'react'
import { AppInsightsContext } from './context-provider'

const useAppInsights = () => useContext(AppInsightsContext)

export { useAppInsights }