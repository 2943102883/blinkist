import React, { useState, useRef, FC } from 'react'

export type CarouselProps = {
  items: any[]
}

const Carousel: FC<CarouselProps> = ({ items }) => {
  const [current, setCurrent] = useState(0)
  const carouselRef = useRef(null)

  const handlePrev = () => {
    setCurrent(current => Math.max(current - 1, 0))
  }

  const handleNext = () => {
    setCurrent(current => Math.min(current + 1, items.length - 1))
  }

  const scrollToItem = (index: number) => {
    const node: any = carouselRef.current
    if (node) {
      const childWidth = node.children[0].getBoundingClientRect().width
      node.scrollTo({ left: childWidth * index, behavior: 'smooth' })
    }
  }

  React.useEffect(() => {
    scrollToItem(current)
  }, [current])

  return (
    <div className="flex items-center">
      <div
        className="text-32px cursor-pointer"
        onClick={handlePrev}
        style={{
          color: current === 0 ? '#bdc8cd' : '#2b63e9'
        }}
      >
        {'<'}
      </div>
      <div
        ref={carouselRef}
        className="flex overflow-scroll"
        style={{
          scrollSnapType: 'x mandatory'
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className=' mr-10px'
            style={{
              flex: '0 0 auto',
              scrollSnapAlign: 'start',
            }}
          >
            {item}
          </div>
        ))}
      </div>
      <div
        className="text-32px cursor-pointer"
        onClick={handleNext}
        style={{
          color: current === items.length - 1 ? '#bdc8cd' : '#2b63e9'
        }}
      >
        {'>'}
      </div>
    </div>
  )
}

export default Carousel
