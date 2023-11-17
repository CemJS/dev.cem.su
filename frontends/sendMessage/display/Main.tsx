import { Cemjsx, Fn } from "cemjs-all"
import telegram from '@svg/icons/telegram.svg'

export default function () {
  return (
    <a class="sendMessage" href="https://t.me/dmitriibelov" onclick={Fn.link}>
      <div class="sendMessage_icon">
        <img src={telegram} alt="Telegram manager" />
      </div>
      <p class="sendMessage_info">Напишите менеджеру в телеграм, мы сразу ответим!</p>
    </a>
  )
}