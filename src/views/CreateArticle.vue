<template>
  <div>
    Create Article
    <mcv-article-form
      :initial-values="initialValues"
      :errors="validationErrors"
      :is-submitting="isSubmitting"
      @articleSubmitt="onSubmit"
    />
  </div>
</template>

<script>
export default {
  name: 'McvCreateArticle',
  data() {
    return {
      initialValues: {
        title: '',
        description: '',
        body: '',
        tagList: []
      },
      validationErrors: null,
      isSubmitting: false
    }
  },
  methods: {
    onSubmit(data) {
      console.log('onSubmit in createArticle', data)
    }
  }
}
</script>
