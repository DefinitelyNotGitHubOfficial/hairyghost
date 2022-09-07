<template>
  <div>
    <Header />
    <div class="everything">
        <div class="results">
          <DaySelector />
          <FilterSelector />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
        </div>
        <div class="filters">
          <Calendar />
          <Categories />
          <!-- <Contact /> -->
          <Twitter  :tweets="tweets" />
        </div>
        <!-- <div v-for="item in listings">{{item.name}}</div> -->
    </div>
  </div>
</template>


<style lang="scss" scoped>

 .everything {
   width: clamp(400px, 100%, 800px);
   display:grid;
   grid-template-columns: auto 200px;
   gap: 20px;
   margin:auto;
   margin-top:20px;
   
 }
 .filters {
   //background-color:red;
  //@for $var from start to end {
    
  
 }
 .results {
   //background-color:yellow
 }

@media only screen and (max-width: 600px) {
  .filters{display: none;}
  .everything {grid-template-columns: auto;}
  .results {margin:0 20px;}
}



</style>
<script>
export default {

async asyncData({$axios, error}){
  const {data} = await $axios.get("https://api.twitter.com/2/users/768454222773833729/tweets?tweet.fields=created_at%2Cin_reply_to_user_id%2Cconversation_id%2Cauthor_id%2Cid%2Cpublic_metrics%2Centities&media.fields=type%2Curl%2Cpublic_metrics%2Cpreview_image_url&expansions=author_id%2Cin_reply_to_user_id%2Creferenced_tweets.id%2Creferenced_tweets.id.author_id&user.fields=profile_image_url%2Cusername%2Ccreated_at%2Cdescription%2Cid&max_results=10&place.fields=&exclude=replies&poll.fields=", { headers: {
    "Authorization": "Bearer AAAAAAAAAAAAAAAAAAAAAETyggEAAAAA%2B6gWzhirUdAZa%2BG%2FzOEQ%2Fp3eeD0%3DobcrCHxx6P1bgKov0wR9Bhrwhc8f6njAA7wNR7zVYZohvWSkHn"
  }})
  return {
    tweets: data
  }
  if(error)console.log(error)
},
 methods: {
    open() {
      console.log('triggered')
    }
  }
}
</script>


@media only screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}