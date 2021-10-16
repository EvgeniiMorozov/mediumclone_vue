import popularTagsApi from '@/api/populartags'

const state = {
  data: null,
  isLoading: false,
  error: null
}

export const mutationsTypes = {
  getPopularTagsStart: '[popularTags] Get popularTags start',
  getPopularTagsSuccess: '[popularTags] Get popularTags success',
  getPopularTagsFailure: '[popularTags] Get popularTags failure'
}

export const actionsTypes = {
  getPopularTags: '[popularTags] Get popularTags'
}

const mutations = {
  [mutationsTypes.getPopularTagsStart](state) {
    state.isLoading = true
    state.data = null
  },
  [mutationsTypes.getPopularTagsSuccess](state, payload) {
    state.isLoading = false
    state.data = payload
  },
  [mutationsTypes.getPopularTagsFailure](state) {
    state.isLoading = false
  }
}

const actions = {
  [actionsTypes.getPopularTags](context) {
    return new Promise(resolve => {
      context.commit(mutationsTypes.getPopularTagsStart)
      popularTagsApi
        .getPopularTags()
        .then(tags => {
          context.commit(mutationsTypes.getPopularTagsSuccess, tags)
          resolve(tags)
        })
        .catch(() => {
          context.commit(mutationsTypes.getPopularTagsFailure)
        })
    })
  }
}

export default {
  state,
  actions,
  mutations
}
