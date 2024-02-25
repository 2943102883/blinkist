import { FC } from 'react'
import '@/css/homepage.css'
import SButton from '@/components/sButton'
import MessageCard from '@/components/messageCard'
import FlowLight from '@/components/flowLight'
import STabs from '@/components/tabs'
import Carousel from '@/components/carousel'
import StepBar from '@/components/step'

const HomePage: FC = () => {
  return (
    <div className="w-full h-full">
      <section>
        <div className="flex items-center justify-between main_image relative gap-10px">
          <div className="w-442px bg-transparent pl-5vw z-9">
            <div className="mt-64px mb-24px font-700 text-40px text-#03314b">
              More knowledge in less time
            </div>
            <div className="text-#3a4649 text-20px font-400 mb-32px">
              Perfect for curious people who love to learn, busy people who don’t have time to read,
              and even people who aren’t into reading.
            </div>
            <SButton width="296px" height="44px">
              Start your free trial
            </SButton>
          </div>
          <div className="w-442px h-509px relative">
            <div className="h-full absolute top-0 right-0 flex">
              <img
                src="https://www.blinkist.com/packs/static/audio-hero/images/background_wave-26d0b572705a4ff36afa.svg"
                alt=""
                className="h-full"
              />
              {/* <div className="line-blue"></div> */}
            </div>
            <img
              src="https://www.blinkist.com/packs/static/audio-hero/images/phones@2x-912b282ed855ff9bb98f.png"
              className="w-324px h-360px relative top-200px"
              alt=""
            />
          </div>
        </div>
      </section>

      <section>
        <div className="w-full flex items-center flex-col py-32px px-5vw mt-50px">
          <div className="text-#042330 text-32px font-700">
            Understand books & podcasts in 15 minutes
          </div>
          <div className="flex gap-20px flex-wrap">
            <MessageCard
              icon="123"
              title="Read or listen"
              message="Get the key ideas from nonfiction bestsellers in minutes, not hours."
              width="265px"
            />
            <MessageCard
              icon="123"
              title="Read or listen"
              message="Get the key ideas from nonfiction bestsellers in minutes, not hours."
              width="265px"
            />
            <MessageCard
              icon="123"
              title="Read or listen"
              message="Get the key ideas from nonfiction bestsellers in minutes, not hours."
              width="265px"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="w-full px-5vw mt-50px flex gap-10px items-center flex-wrap justify-between">
          <div>
            <FlowLight
              list={[
                'Feed your brain while',
                'Driving',
                'Commuting',
                'Doing housework',
                'Walking',
                'Relaxing'
              ]}
            />
            <div className="h-32px"></div>
            <SButton width="296px" height="44px">
              Start your free trial
            </SButton>
          </div>
          <img
            className="w-409px"
            src="https://www.blinkist.com/packs/static/use-cases/images/image_en@2x-31f2ab90ccaaf56e5713.png"
            alt=""
          />
        </div>
      </section>

      <section>
        <div className="w-full bg-#f1f6f4 py-40px px-20px">
          <STabs
            list={[
              {
                title: 'Career & Success',
                content: (
                  <Carousel
                    items={[
                      <div className="bg-red-600 h-200px w-300px">Card 1</div>,
                      <div className="bg-blue-600 h-200px w-300px">Card 2</div>,
                      <div className="bg-green-600 h-200px w-300px">Card 3</div>,
                      <div className="bg-red-600 h-200px w-300px">Card 1</div>,
                      <div className="bg-blue-600 h-200px w-300px">Card 2</div>,
                      <div className="bg-green-600 h-200px w-300px">Card 3</div>,
                      <div className="bg-red-600 h-200px w-300px">Card 1</div>,
                      <div className="bg-blue-600 h-200px w-300px">Card 2</div>,
                      <div className="bg-green-600 h-200px w-300px">Card 3</div>
                    ]}
                  />
                ),
                icon: '123'
              },
              {
                title: 'Mindfulness & Happiness',
                content: <div>Doing housework</div>,
                icon: '123'
              }
            ]}
          />
        </div>
      </section>

      <section>
        <div className="mt-50px px-5vw">
          <StepBar
            steps={[
              { label: '1111' },
              { label: '2222' },
              { label: '3333' }
            ]}
            currentStep={2}
          />
        </div>
      </section>
    </div>
  )
}

export default HomePage
