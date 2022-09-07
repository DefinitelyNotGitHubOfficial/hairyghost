<template>
    <div class="twitterholder">
        <div class="twitterholder__header">
            <a href="https://twitter.com/hairyghost/" target="_blank">@HairyGhost</a>
        </div>
        <div class="twitterholder__tweets">
            <div class="tweet" v-for="item in birds">
                <div class="type"><span v-if="item.type"><img src="images/retweet.jpg" alt="retweet"/> retweeted</span></div>
                <div class="profile">
                    <img :src="item.img" />
                </div>
                <div class="info">
                    <div class="name">{{item.name}}</div>
                    <!-- <div class="usernName">{{item.userName}}</div> -->
                    <a :href="item.link" target="_blank">
                        <div class="text">{{item.text}}</div>
                        <span><img src="images/twitter-comment.jpg" alt="comment"/>{{formatNum(item.comments)}}</span>
                        <span><img src="images/retweet.jpg" alt="retweet"/> {{formatNum(item.retweets)}}</span>
                        <img src="images/twitter-likes.jpg" alt="likes"/>{{formatNum(item.likes)}}
                    </a>
                </div>

            </div>
        </div>

        <!-- <div class="tweet" v-for="item in birds">{{item.retweet}}</div> -->
    </div>
</template>
<script>
const birdTemplate = {
    text: '',
    time:'',
    author:''
}
export default {
    props: {
        tweets:{
            type: Object,
            required: true,
            default: () => {}
        }
    },
    methods:{
         formatNum(num) {
            if(num < 1000){ 
                return num
            }
            if(num > 999 && num < 1100){
                return num.toString().slice(0,1)+"k"
            }
            if(num > 1099 && num < 10000){ 
                return num.toString().slice(0,1)+"."+num.toString().slice(1,2)+"k"
            }
            if(num > 9999 && num < 100000){
                return num.toString().slice(0,2)+"k"
            }
            if(num > 99999 && num < 1000000){
                return num.toString().slice(0,3)+"k"
            }
            if(num > 999999 && num < 10000000){
                return num.toString().slice(0,1)+"m"
            }
            if(num > 9999999){
                return num.toString().slice(0,2)+"m"
            }
        }
    },
    data() {
      return {
        birds: []
      }
    },
    mounted(){
        //console.log(this.tweets)
        this.tweets.data.forEach((el)=>{
            var bird = Object.create(birdTemplate);
            bird.text = el.text.slice(el.text.indexOf(':')+2, 1000000)
            bird.link = 'https://twitter.com/hairyghost/status/'+el.conversation_id
            //bird.conversation_id = el.conversation_id


            bird.likes =  el.public_metrics.like_count
            bird.comments = el.public_metrics.reply_count
            bird.retweets = el.public_metrics.retweet_count


            if(typeof el.entities.mentions != 'undefined'){
                bird.author = el.entities.mentions[0].id
            }else {
                bird.author = el.author_id
            }
            
            if(typeof el.referenced_tweets != 'undefined'){
                bird.type = el.referenced_tweets[0].type
            }

            if(typeof el.referenced_tweets != 'undefined'){
                bird.retweet = true
            }
            var date =""
            switch(el.created_at.slice(5,7)) {
                case '01':
                    date = 'Jan ' + el.created_at.slice(8,10)
                    break;
                case '02':
                    date = 'Feb ' + el.created_at.slice(8,10)
                    break;
                case '03':
                    date = 'Mar ' + el.created_at.slice(8,10)
                    break;
                case '04':
                    date = 'Apr ' + el.created_at.slice(8,10)
                    break;
                case '05':
                    date = 'May ' + el.created_at.slice(8,10)
                    break;
                case '06':
                    date = 'Jun ' + el.created_at.slice(8,10)
                    break;
                case '07':
                    date = 'Jul ' + el.created_at.slice(8,10)
                    break;
                case '08':
                    date = 'Aug ' + el.created_at.slice(8,10)
                    break;
                case '09':
                    date = 'Sep ' + el.created_at.slice(8,10)
                    break;
                case '10':
                    date = 'Oct ' + el.created_at.slice(8,10)
                    break;
                case '11':
                    date = 'Nov ' + el.created_at.slice(8,10)
                    break;
                case '12':
                    date = 'Dec ' + el.created_at.slice(8,10)
                    break;
                default:
                    // code block
            } 
            bird.date = date

          
            this.tweets.includes.users.forEach((el)=>{
                if(el.id === bird.author){
                    bird.img = el.profile_image_url
                    bird.name = el.name
                    bird.userName = "@"+el.username
                }
            })

            this.tweets.includes.tweets.forEach((el)=>{
                if(el.author_id === bird.author){
                    bird.likes =  el.public_metrics.like_count
                    bird.comments = el.public_metrics.reply_count
                    bird.retweets = el.public_metrics.retweet_count 
                }
            })

            this.birds.push(bird)
        })
    }
}
</script>
<style lang="scss" scoped>
.twitterholder {
    border-radius: 4px;
    overflow:hidden;
}
.twitterholder__header {
    background-color:$purple;
    color:$green;
    padding: 5px;
    font-size:1rem;
    text-align: center;
    font-weight: 300;
    border-top-right-radius: 3px;
    border-top-left-radius: 3px;
    
    a {
        color:$green;
        text-decoration:none;
        transition: color .3s;
        &:hover {
            color:$orange;
            transition: color .3s;
        }
    }
}
.twitterholder__tweets {
    background-color: #fff;
    max-height:400px;
    overflow-y: scroll;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}
.tweet {
    padding:5px;
    display:grid;
    //grid-template-columns: 30px auto;
    grid-template-areas:
    'top top top top'
    'left right right right';
    //gap: 5px;
}
.profile {
    grid-area: left;
    img {
        height:30px;
        aspect-ratio: 1/1;
        border-radius:30px;
    }
}
.name, .userName {
    display:inline-block;
    font-weight: 400;
    padding:0 0 0 5px;
}
.info {
    grid-area: right;
    .text {
        padding:5px;
    }
    img {
        height:10px;
        padding-right:3px;
    }
    span {
        display:inline-block;
        padding-right:7px;
    }
    a {
     font-size:.8rem;
     padding:5px;
        text-decoration: none;
        color:#000;
    }
}
.type {
    grid-area: top;
    text-align: center;
    text-transform: capitalize;
    font-weight:400;
    color:#57646f;
    font-size:.8rem;
    img {
        height:10px;
    }
}
</style>