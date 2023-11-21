import { Cemjsx, Ref, Fn } from "cemjs-all"
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
        <p class="text-main">Мы — компания полного цикла. Наши услуги включают маркетинговую стратегию, <span class="text__fiolet">брендинг</span>,
          производство рекламных материалов, разработку <span class="text__fiolet">веб-продуктов,</span> поддержку и эффективное привлечение <span class="text__fiolet">аудитории.</span></p>
        <button
          class="btn btn__primary"
          onclick={() => Fn.initOne("modalOrder", { title: "Оставить заявку на проект" })}
        >
          Заказать проект
        </button>
      </div>
      {/* <div>
        <img src={mobile} alt="Разработки компании Crypto Emergency" />
      </div> */}
    </div>
  )
}