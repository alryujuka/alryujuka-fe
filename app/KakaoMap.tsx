'use client'

import { useEffect, useState } from 'react'
import { Map } from 'react-kakao-maps-sdk'

export default function KakaoMap() {
  const [scriptLoad, setScriptLoad] = useState<boolean>(false)

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_KAKAO_KEY
    const script: HTMLScriptElement = document.createElement('script')

    script.async = true
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false`
    document.head.appendChild(script)

    script.addEventListener('load', () => {
      setScriptLoad(true)
    })
  }, [])

  if (!scriptLoad) {
    return <span>loading...</span>
  }

  return (
    <Map
      center={{
        lat: 33.450701,
        lng: 126.570667,
      }}
      style={{
        width: '100%',
        height: '450px',
      }}
      level={3}
    />
  )
}
