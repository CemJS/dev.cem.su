import { Cemjsx, Ref } from "cemjs-all"
import info from '@json/info'

export default function () {
  return (
    <div class="info-inner">
      {
        info.map(item => {
          return (
            <div class="info_item">
              <div class="info_item-title">
                <img src={item.icon} alt={item.name} />
                <span class="info_item-subtitle">{item.name}</span>
              </div>
              <span
                class={["info_item-desc", item.center ? "info_item-desc__center" : null]}
              >
                {item.desc}
              </span>
              {/* <span class="info_item-title">{item.name}</span>
                <span class="info_item-desc">{item.desc}</span> */}

            </div>
          )
        })
      }
    </div>
  )
}