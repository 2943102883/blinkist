import { FC, useState } from 'react'
import './tabs.css'

export type STabsItems = {
  title: string
  content: any
  icon: string
}

export type STabsProps = {
  list: STabsItems[]
}

const STabs: FC<STabsProps> = ({ list }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  return (
    <div className="w-full">
      <div className="w-full flex flex-wrap gap-12px">
        {list.map((item, index) => {
          return (
            <div
              key={`${item.title}_${index}`}
              style={{
                border: currentIndex === index ? '2px solid #6ddd89' : '2px solid #fff'
              }}
              className="px-16px py-10px bg-white text-#03314b text-16px cursor-pointer rounded-3px tabs-item"
              onClick={() => setCurrentIndex(index)}
            >
              {item.title}
            </div>
          )
        })}
      </div>
      <div className='mt-20px'>{ list[currentIndex].content }</div>
    </div>
  )
}

export default STabs
