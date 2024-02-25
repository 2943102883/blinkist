import { FC } from 'react'
import './messageCard.css'
import { useViewport } from '@/hooks/viewPort'

export type MessageCardProps = {
  icon: string
  title: string
  message: string
  width: string
}

const MessageCard: FC<MessageCardProps> = ({ width, title, message }) => {
  const viewPort = useViewport()
  return (
    <div
      className="flex items-center gap-20px flex-wrap card-media"
      style={{
        maxWidth: viewPort.width < 960 ? '100%' : width,
      }}
    >
      <img
        src="https://www.blinkist.com/packs/static/main-features-section/images/main-features/headphones-28aa1d78a527f060d122.svg"
        className="w-60px h-60px"
        alt=""
      />
      <div className="flex flex-col items-center">
        <div className="text-#042330 text-24px font-700">{title}</div>
        <div className="text-#3a4649 text-16px font-400">{message}</div>
      </div>
    </div>
  )
}

export default MessageCard
