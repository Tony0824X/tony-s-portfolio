import { ref, computed, onMounted, onUnmounted } from 'vue'

const currentPath = ref(window.location.pathname)

export const useRouter = () => {
    const push = (path) => {
        window.history.pushState({}, '', path)
        currentPath.value = path
        window.scrollTo(0, 0)
    }

    const currentRoute = computed(() => {
        return currentPath.value || '/'
    })

    // Listen to back/forward button
    const onPopState = () => {
        currentPath.value = window.location.pathname
    }

    onMounted(() => {
        window.addEventListener('popstate', onPopState)
    })

    onUnmounted(() => {
        window.removeEventListener('popstate', onPopState)
    })

    return {
        push,
        currentRoute
    }
}
