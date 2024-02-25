import { FC, useEffect, useState } from 'react'

export type FlowLightProps = {
  list: string[]
  color?: string
  selectColor?: string
  fontSize?: string
}

const FlowLight: FC<FlowLightProps> = ({
  list,
  color = '#6d787e',
  selectColor = '#03314b',
  fontSize = '32px'
}) => {
  const [selected, setSelected] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setSelected(prev => (prev + 1) % list.length)
    }, 1000)
    return () => clearInterval(interval)
  }, [])
  return (
    <div className="w-full flex flex-col gap-10px">
      {list.map((item, index) => {
        return (
          <div
            key={`${item}_${index}`}
            className='font-700'
            style={{
              color: selected === index ? selectColor : color,
              fontSize
            }}
          >
            {item}
          </div>
        )
      })}
    </div>
  )
}

export default FlowLight
