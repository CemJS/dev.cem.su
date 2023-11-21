import { Cemjsx, Static } from "cemjs-all"
import tech from '@json/technologies'

Static.startTech = tech.slice(0, tech.length / 2);
Static.endTech = tech.slice(tech.length / 2);

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
                <p class="title-text">Мы команда опытных специалистов, специализирующихся на разработке и создании разноообразных <span class="text__fiolet">веб-решений</span>. Наша цель - помочь нашим клиентам воплотить их идеи в жизнь и достичь успеха в цифровом мире!</p>
            </div>

            <div class="tech-lines">
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

                <div class="marquee" ref="marqueeEnd">
                    <ul class="marquee-content marquee-content_end pt_10" ref="marqueeContentEnd">
                        {
                            Static.endTech.map(item => {
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


        </div>
    )
}