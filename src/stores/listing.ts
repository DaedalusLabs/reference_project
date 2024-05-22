// src/stores/jsonStore.ts

import { defineStore } from 'pinia'

interface JsonObject {
  // Define the structure of your JSON objects
  id: string
  name: string
  image: string
  summary: string
  price: string
  // Add other properties as needed
}

interface JsonStoreState {
  jsonObjects: JsonObject[]
}

export const useJsonStore = defineStore('jsonStore', {
  state: (): JsonStoreState => ({
    jsonObjects: []
  }),
  actions: {
    addJsonObject(jsonObject: JsonObject) {
      this.jsonObjects.push(jsonObject)
    },
    removeJsonObject(index: number) {
      this.jsonObjects.splice(index, 1)
    },
    updateJsonObject(index: number, updatedObject: JsonObject) {
      this.jsonObjects[index] = updatedObject
    },
    setJsonObjects(jsonObjects: JsonObject[]) {
      this.jsonObjects = jsonObjects
    }
  },
  getters: {
    getJsonObjectByIndex: (state) => (index: number) => {
      return state.jsonObjects[index]
    }
  }
})
