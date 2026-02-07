import { ref, computed } from 'vue'

const currentPath = ref(window.location.hash || '#/')

window.addEventListener('hashchange', () => {
    currentPath.value = window.location.hash || '#/'
})

export const useRouter = () => {
    const push = (path) => {
        window.location.hash = '#' + path
    }

    const currentRoute = computed(() => {
        const path = currentPath.value.replace(/^#/, '') || '/'
        return path
    })

    return {
        push,
        currentRoute
    }
}
