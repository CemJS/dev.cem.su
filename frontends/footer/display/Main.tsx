import { Cemjsx, Fn } from "cemjs-all"
import logo from '@svg/logo.svg'
import socials from '@json/socials'

const RenderSocials = function ({ items }) {
  return (
    <ul class="socials_list">
      {
        items.map(item => {
          return (
            <li>
              <a
                href={item.url}
                class={["socials_link", `socials_link_${item.name.toLocaleLowerCase()}`]}
                style={`background-image: url(${item.icon});`}
                aria-label={item.name}
                onclick={Fn.link}
              >
                <span>{item.name}</span>
              </a>
            </li>
          )
        })
      }
    </ul>
  )
}

export default function () {
  return (
    <div class="footer-inner">
      <div class="footer-top">
        <a href="/" class="footer-logo">
          <img src={logo} alt="Crypto Emergency Developers" />
        </a>
        <RenderSocials items={socials} />
      </div>
      <p class="footer-text">2023 © - DEVELOPED BY THE CRYPTO EMERGENCY TEAM - ALL RIGHTS RESERVED </p>
    </div>
  )
}