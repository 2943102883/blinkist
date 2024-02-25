import { FC } from 'react'

export type SButtonProps = {
  children: any
  color?: string
  width?: string
  height?: string
  backgroundColor?: string
  onClick?: () => void
}

const SButton: FC<SButtonProps> = ({
  children,
  color = '#03314b',
  backgroundColor = '#2ce080',
  width = '100%',
  height='100%',
  onClick = () => {}
}) => {
  return (
    <div
      className="px-16px py-11px flex items-center justify-center rounded-3px cursor-pointer hover:bg-#33925f"
      style={{
        backgroundColor,
        color,
        width,
        height
      }}
      onClick={() => onClick()}
    >
      {children}
    </div>
  )
}

export default SButton
