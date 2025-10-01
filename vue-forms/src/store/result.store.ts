import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useResultStore = defineStore('result', () => {
  const requestId = ref<string | null>(null)
  const classifier = ref<string | null>(null)

  function setResult(id: string, clf: string) {
    requestId.value = id
    classifier.value = clf
  }

  return { requestId, classifier, setResult }
})
