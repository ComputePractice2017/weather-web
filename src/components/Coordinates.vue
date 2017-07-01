<template>
  <div class="coordinates">
    <div class="container">
      <form class="form-inline">
        <label class="sr-only" for="inlineFormInput">Name</label>
        <input type="text" v-model="coordinates.latitude" class="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" placeholder="Долгота">
        
        <label class="sr-only" for="inlineFormInputGroup">Username</label>
        <div class="input-group mb-2 mr-sm-2 mb-sm-0">
          <input type="text" v-model="coordinates.longitude" class="form-control" id="inlineFormInputGroup" placeholder="Широта">
        </div>
  
        <button type="submit" class="btn btn-primary">Ввод</button>
      </form>
    </div>
  {{coordinates}}
  </div>
</template>

<<script>
export default {
  name: 'coordinates',
  data () {
    return {
      coordinates: {
        'latitude': '',
        'longitude': ''
      }
    }
  }
}
</script>

<style>
.form-inline {
  margin-top: 40px;
  margin-bottom: 20px;
}
</style>
