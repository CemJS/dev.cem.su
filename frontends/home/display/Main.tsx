import { Cemjsx, Ref } from "cemjs-all"
import mobile from '@images/mobile.png'

export default function () {
  return (
    <div class="presa-inner">
      <div class="presa-info">
        <h1 class="title-main">
          <span class="bracket">{`{ `}</span>
          Создаём веб-продукты
          <span class="bracket">{` }`}</span>
        </h1>
        <p class="text-main">Мы — компания полного цикла. Наши услуги включают маркетинговую стратегию, брендинг, производство рекламных материалов, разработку веб-продуктов, поддержку и эффективное привлечение аудитории.</p>
        <button class="btn btn__primary">
          Заказать проект
        </button>
      </div>
      <div>
        <img src={mobile} alt="Разработки компании Crypto Emergency" />
      </div>
    </div>
  )
}