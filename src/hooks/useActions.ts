import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'

import { cartSlice } from '../store/store'

const rootAction = {
  ...cartSlice.actions,
}

export const useActions = () => {
  const dispatch = useDispatch()

  return useMemo(() => bindActionCreators(rootAction, dispatch), [dispatch])
}
