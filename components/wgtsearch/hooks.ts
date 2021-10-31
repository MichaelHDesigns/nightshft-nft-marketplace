import React from 'react'

export const useInteractionHandler = (
  event: MouseEvent,
  ref: React.MutableRefObject<any>,
  setDisplay: React.Dispatch<React.SetStateAction<boolean>>
) => {
  if (ref.current && !ref.current.contains(event.target)) setDisplay(false)
}