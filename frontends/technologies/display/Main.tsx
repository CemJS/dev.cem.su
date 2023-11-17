import { Cemjsx, Static } from "cemjs-all"


// const RenderSkills = function ({ items }) {
//     return (
//         <div class="services-skills">
//             {
//                 items.map(item => {
//                     return (
//                         <div class="services-skills_item">
//                             <div class="services-skills_item-circle">
//                                 <img src={item.icon} alt={item.desc} />
//                             </div>
//                             <h5>{item.category}</h5>
//                             <p>{item.desc}</p>
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     )
// }

export default function () {
    return (
        <div class="tech-inner">
            <div class="title">
                <div>
                    <h2 class="title-main">Стек технологий</h2>
                    <div class="title-desc_wrap">
                        <span class="title-desc">функционал</span>
                        <div class="arrow">
                            <div class="arrow-line"></div>
                            <div class="arrow-rect"></div>
                        </div>
                    </div>
                </div>
                <p>Мы команда опытных специалистов, специализирующихся на разработке и создании разноообразных веб-решений. Наша цель - помочь нашим клиентам воплотить их идеи в жизнь и достичь успеха в цифровом мире!</p>
            </div>

            <div class="marquee" ref="marqueeStart">
                <ul class="marquee-content" ref="marqueeContentStart">
                    {
                        Static.startTech.map(item => {
                            return (
                                <li class="marquee-content_item">
                                    {item.name}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}