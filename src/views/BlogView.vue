
<template>

  <div class="blog py-5 w-100 d-flex justify-content-center align-items-center flex-column">
    <span class="display-section">Blog</span>
      <br>

        <div class="categories-content container d-flex justify-content-center align-items-center text-center">
          <ul class="ks-cboxtags">
            <li v-for="category in categories" :key="category">
              <input type="checkbox" :id="category" v-bind:value="category" v-model="selectedCategories">
              <label :for="category">{{ category }}</label>
            </li>
          </ul>
        </div>

      <div class="w-100 d-flex gap-4 flex-wrap justify-content-center align-items-center">

        <div class="card-secondary card" v-for="post in filteredPosts" :key="post.id">
          <div class="img-post"><img :src="`../src/assets/img/post/${post.id}.jpg`"></div>
          <div class="img-post-text">
            <span class="text-mute d-flex category-text">
              <a v-for="category in post.categories" href="#" class="me-1">{{category}}</a>
            </span>
            <strong class="title text-start">{{ post.title }}</strong>
            <p>{{ post.content }}</p>
          </div>
          <div class="viewmore"><button class="btn button-outline">View more</button></div>
        </div>

      </div>

  </div>

  <div class="spacer"></div>

</template>

<style scoped>
  .card-secondary {
    width: 500px;
    height: 470px;
  }
  .card-secondary .img-post-text {
    height: 360px;
  }
  /*---------------------*/
  .categories-content ul.ks-cboxtags {
      list-style: none;
      padding: 20px;
  }
  .categories-content ul.ks-cboxtags li{
    display: inline;
  }
  .categories-content ul.ks-cboxtags li label{
      display: inline-block;
      background-color: rgba(255, 255, 255, .9);
      border: 2px solid var(--primary);
      color: var(--primary);
      border-radius: 25px;
      white-space: nowrap;
      margin: 3px 5px;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      -webkit-tap-highlight-color: transparent;
      transition: all .2s;
  }

  .categories-content ul.ks-cboxtags li label {
      padding: 5px 12px;
      cursor: pointer;
  }

  .categories-content ul.ks-cboxtags li label::before {
      display: inline-block;
      font-style: normal;
      font-variant: normal;
      text-rendering: auto;
      -webkit-font-smoothing: antialiased;
      font-family: "Font Awesome 5 Free";
      font-weight: 900;
      font-size: 12px;
      padding: 2px 6px 2px 2px;
      content: "\f067";
      transition: transform .3s ease-in-out;
  }

  .categories-content ul.ks-cboxtags li input[type="checkbox"]:checked + label::before {
      content: "\f00c";
      transition: transform .3s ease-in-out;
  }

  .categories-content ul.ks-cboxtags li input[type="checkbox"]:checked + label {
      border: 2px solid var(--primary);
      background-color: var(--primary);
      color: #fff;
      transition: all .2s;
  }

  .categories-content ul.ks-cboxtags li input[type="checkbox"] {
    position: absolute;
  }
  .categories-content ul.ks-cboxtags li input[type="checkbox"] {
    position: absolute;
    opacity: 0;
  }
  .categories-content ul.ks-cboxtags li input[type="checkbox"]:focus + label {
    border: 2px solid var(--primary);
  }
  /*-----------------------*/
  .category-text a:not(:last-child)::after {
  content: ' | ';
}

</style>

<script>
  export default {
    name: 'blog-component',
      data() {
      return {
        selectedCategories: [],
        categories: [
          'Therapy',
          'Anxiety',
          'Childhood',
          'Group therapy',
          'News',
          'Study'
        ],
        posts: [
          { id: 1, title: 'Understanding Anxiety: Symptoms, Causes and Treatment Options', content: 'Anxiety can manifest in many different ways, including physical symptoms such as rapid heartbeat, sweating, and muscle tension[...]', categories: ['Therapy', 'Anxiety'] }
          ,
          { id: 2, title: 'Helping Children Cope: Strategies for Supporting', content: 'As a parent, you want to do everything you can to support your child mental health and well-being. Here are some strategies[...]', categories: ['News','Therapy','Childhood'] }
          ,
          { id: 3, title: 'How Group Therapy Can Help You Improve Your Mental Health', content: 'Support and Validation from Peers: Group therapy provides a safe and supportive environment where you can connect[...]', categories: ['Therapy','Group therapy'] }
          ,
          { id: 4, title: 'Study Shows the Power of Positive Thinking: Optimism', content: 'A recent study published in the journal JAMA Network Open has found that a positive outlook on life may be linked to a lower risk of heart[...]', categories: ['News','Study'] }
          ,
          { id: 5, title: 'How Practicing Gratitude Can Improve Your Mental Health', content: 'Gratitude has numerous benefits for mental health, including increased happiness, greater satisfaction with life[...]', categories: ['Therapy','Opinion'] }
          ,
          { id: 6, title: 'Why Emotional Health in Childhood Matters', content: 'Emotional health is an important aspect of overall well-being, and this is especially true in childhood. Children who have a strong emotional[...]', categories: ['News','Therapy','Childhood'] }
        ]
      }
    },
    computed: {
      filteredPosts() {
        if (this.selectedCategories.length === 0) {
          return this.posts;
        } else {
          return this.posts.filter(post => {
            return post.categories.some(category => this.selectedCategories.includes(category));
          });
        }
      }
    }
  }
</script>
