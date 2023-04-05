<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="!isLoading && error">{{error}}</p>
      <p v-else-if="!isLoading && (!results || results.length === 0)">No Stored Value Found. Add New</p>
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult,
  },
  data(){
    return{
      results: [],
      isLoading: false,
      error: null,
    }
  },
  methods: {
    loadExperiences() {
      this.isLoading = true;
      this.error = null;
      fetch('https://learning-vue-f5d8f-default-rtdb.firebaseio.com/surverys.json').then((response)=>{
        if(response.ok){
          return response.json();
        }
      }).then((data) =>{
        this.isLoading = false;
        console.log(data);
        const results = [];
        for (const key in data) {
          const result = {
            id: key,
            name: data[key].name,
            rating: data[key].rating,
          };
          results.push(result);
        }
        this.results = results;
      }).catch((error) =>{
        this.isLoading = false;
        console.log(error);
        this.error = 'Something went wrong';
      });  
    },
  },
  mounted() {
    this.loadExperiences();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>