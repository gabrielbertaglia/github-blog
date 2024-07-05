import { useState, useEffect, Dispatch, SetStateAction } from 'react'

export function useIsDisabled(
  debounceValue: string,
): [boolean, Dispatch<SetStateAction<boolean>>] {
  const [isDisabled, setIsDisabled] = useState<boolean>(false)

  useEffect(() => {
    if (debounceValue) {
      setIsDisabled(true)
    } else {
      setIsDisabled(false)
    }
  }, [debounceValue])

  return [isDisabled, setIsDisabled]
}
