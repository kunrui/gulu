// 单元测试
import chai from 'chai'
import spies from 'chai-spies'
import Vue from 'vue'
import Button from './button'
import ButtonGroup from './button-group'
import Icon from './icon'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)

new Vue({
    el: '#app',
    data: {
        loadingStatus: false
    }
})

chai.use(spies)
const expect = chai.expect

try {
    // 测试 button 正常状态
    {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'setting'
            }
        })

        vm.$mount()
        const useElement = vm.$el.querySelector('use')
        const href = useElement.getAttribute('xlink:href')
        expect(href).to.eq('#i-setting')

        vm.$el.remove()
        vm.$destroy()
    }

    // 测试 button loading 状态
    {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'setting',
                loading: 'loading'
            }
        })

        vm.$mount()
        const useElement = vm.$el.querySelector('use')
        const href = useElement.getAttribute('xlink:href')
        expect(href).to.eq('#i-loading')

        vm.$el.remove()
        vm.$destroy()
    }

    // 测试 button default icon 排序
    {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'setting',
            }
        })

        const div = document.createElement('div')
        document.body.appendChild(div)
        vm.$mount(div)
        const svg = vm.$el.querySelector('svg')
        const { order } = window.getComputedStyle(svg)
        expect(order).to.eq('0')

        vm.$el.remove()
        vm.$destroy()
    }

    // 测试 button left icon 排序
    {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'setting',
                iconPosition: 'left'
            }
        })

        const div = document.createElement('div')
        document.body.appendChild(div)
        vm.$mount(div)
        const svg = vm.$el.querySelector('svg')
        const { order } = window.getComputedStyle(svg)
        expect(order).to.eq('0')

        vm.$el.remove()
        vm.$destroy()
    }

    // 测试 button right icon 排序
    {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'setting',
                iconPosition: 'right'
            }
        })

        const div = document.createElement('div')
        document.body.appendChild(div)
        vm.$mount(div)
        const svg = vm.$el.querySelector('svg')
        const { order } = window.getComputedStyle(svg)
        expect(order).to.eq('1')

        vm.$el.remove()
        vm.$destroy()
    }

    // 测试 button click 事件
    {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'setting'
            }
        })

        vm.$mount()
        const spy = chai.spy(() => {

        })
        vm.$on('click', spy)

        const button = vm.$el
        button.click()
        expect(spy).to.have.been.called()

        vm.$el.remove()
        vm.$destroy()
    }
} catch (error) {
    window.errors = [error]
} finally {
    window.errors && window.errors.forEach((error) => {
        console.error(error.message)
    })
}
