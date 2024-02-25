import { FC } from 'react'
import logo from '@/assets/logo.svg'
import './css/header.css'

const Header: FC = () => {
  return (
    <div className="w-100vw h-72px bg-white py-28px flex items-center justify-between px-5vw header">
      <div>
        <img src={logo} className="header_logo" alt="logo" />
      </div>
      <div className="flex items-center gap-24px text-16px font-500 text-#03314b">
        <a
          href="https://coachingbyblinkist.com?utm_source=homepage&utm_medium=link&utm_campaign=header"
          className="hover:text-#116be9"
        >
          Coaching
        </a>
        <a
          href="https://www.blinkist.com/en/content/business?utm_source=homepage&utm_medium=link&utm_campaign=header"
          className="hover:text-#116be9"
        >
          For business
        </a>
        <a
          href="https://coachingbyblinkist.com?utm_source=homepage&utm_medium=link&utm_campaign=header"
          className="hover:text-#116be9"
        >
          Log in
        </a>
      </div>
    </div>
  )
}

export default Header
