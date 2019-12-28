import { useContext } from 'react'
import { ToastContext } from '@context'

export default function useToast() {
  const context = useContext(ToastContext)
  return { add: context.add, remove: context.remove }
}
