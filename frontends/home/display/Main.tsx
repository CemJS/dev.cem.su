import { Cemjsx, Ref } from "cemjs-all"
import mobile from '@images/mobile.png'

export default function () {
  console.log('=2bb489=', Ref.text)
  return (
    <div class="presa-inner">
      <div class="presa-text_wrap">
        <div class="presa-text" ref="text" data-text="Разрабатываем Консультируем Сопровождаем">
          Разрабатываем Консультируем Сопровождаем
        </div>
      </div>

      <div>
        <img src={mobile} alt="Разработки компании Crypto Emergency" />
      </div>
    </div>
  )
}