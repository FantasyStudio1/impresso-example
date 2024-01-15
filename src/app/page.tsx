import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import { GiCoffeeBeans } from 'react-icons/gi'
import { TiStarburst } from 'react-icons/ti'

import { Container } from '@/components/common'
import * as HomeItem from '@/components/home-item'
import { Showcase } from '@/components/showcase'

import s from './home.module.scss'

const marqueeItems = [
  'Coffee Machines',
  'Grinders',
  'Barista Tools',
  'Coffee Beans',
  'Brewers',
  'Roasters',
  'Cleaning',
  'Souping',
  'Joking',
  'Smoking',
  'Loving'
]

export default function Home() {
  return (
    <main className={s.main}>
      <Container className={s.heroContainer} borderBottom>
        <div
          className={s.heading}
          aria-label='Impresso is a premier coffee machine maker.'
          aria-level={1}
          role='heading'
        >
          <div aria-hidden>
            Impresso{' '}
            <div className={s.headingImage}>
              <Image
                src='/espresso-hero.webp'
                alt='Photo of espresso'
                quality={100}
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                fill
                priority
              />
            </div>{' '}
            is <span data-break />
            a premier coffee <span data-break />
            <GiCoffeeBeans data-icon color='black' />
            machine maker
            <TiStarburst data-icon color='var(--green)' />
          </div>
        </div>
      </Container>
      <Container className={s.marqueeSection} borderBottom>
        <Marquee pauseOnHover>
          {marqueeItems.map(value => (
            <div key={value} data-marquee-item>
              {value}
            </div>
          ))}
        </Marquee>
      </Container>
      <Container className={s.newsList} borderBottom>
        <div className={s.grid}>
          <HomeItem.Root badge='Bestseller' data-bestseller>
            <HomeItem.Title content='Sencor ses 4010ss coffee maker, 1.5l' />
            <HomeItem.HomeLink content='Shop Now' />
            <div className={s.machineBackground} aria-hidden>
              <div>
                <Image
                  src='/coffee-machine-bg.png'
                  alt='Coffee Machine'
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  fill
                />
              </div>
            </div>
          </HomeItem.Root>
          <HomeItem.Root badge='Bestseller' data-trusted>
            <div className={s.percent}>89%</div>
            <p>
              of our customers stay with us for years and recommend our coffee machines to others
            </p>
          </HomeItem.Root>
          <HomeItem.Root badge='Events' data-events>
            <HomeItem.Title content='Open Door Cofee Festival' />
            <HomeItem.HomeLink content='Details' />
          </HomeItem.Root>
        </div>
      </Container>
      <Showcase />
    </main>
  )
}
