<template>
  <div class="github-user">
    <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-9">
            <span class="badge badge-success">Public Repos: {{user.public_repos}}</span>
            <span class="badge badge-info">Public Gists: {{user.public_gists}}</span>
            <span class="badge badge-warning">Followers: {{user.followers}}</span>
            <span class="badge badge-danger">Following: {{user.following}}</span>
            <br/><br/>
            <ul class="list-group">
              <li class="list-group-item">Company: {{user.company}}</li>
              <li class="list-group-item">Website/Blog: {{user.blog}}</li>
              <li class="list-group-item">Location: {{user.location}}</li>
              <li class="list-group-item">Member since: {{$moment(user.created_at).format('DD.MM.YYYY, HH:mm')}}</li>
            </ul>
          </div>
          <div class="col-md-3">
            <img class="img-fluid mb-2" :src="user.avatar_url">
            <a :href="user.html_url" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  props: {
    user: Object
  },
};
</script>

<style scoped>
.badge {
  font-size: 20px;
}
</style>