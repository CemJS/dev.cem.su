import { Cemjsx } from "cemjs-all"
import services from '@json/services'

const RenderSkills = function ({ items }) {
    return (
        <div class="services-skills">
            {
                items.map(item => {
                    return (
                        <div class="services-skills_item">
                            <div class="services-skills_item-circle">
                                <img src={item.icon} alt={item.desc} />
                            </div>
                            <h5>{item.category}</h5>
                            <p>{item.desc}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default function () {
    return (
        <div class="services-inner">
            <div class="title">
                <div>
                    <h2 class="title-main">Услуги</h2>
                    <span class="title-desc">Что мы умеем?</span>
                </div>
                <p>Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat
                    nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo
                    quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
                    lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</p>
            </div>


            <RenderSkills items={services} />

        </div>
    )
}