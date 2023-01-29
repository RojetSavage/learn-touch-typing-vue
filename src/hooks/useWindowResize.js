import { ref, onMounted, onUnmounted } from 'vue';

export function useWindowResize() {
  let width = ref(window.innerWidth);
  let height = ref(window.innerHeight);
  let sidebarOpen = ref(true);

  const handleResize = () => {
    width.value = window.innerWidth;
    height.value = window.innerHeight;
	if (width < 1280) {
		sidebarOpen = true
	}
  }

  onMounted(() => {
    window.addEventListener('resize', handleResize)
  });

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })

  return {
    width,
    height,
	sidebarOpen
  }
}