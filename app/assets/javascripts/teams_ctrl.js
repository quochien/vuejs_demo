$(document).on('ready', function() {
  new Vue({
    el: '#new-team-form',
    data: {
      name: "",
      teams: [],
      players: [],
      errors: []
    },
    methods: {
      saveTeam: function(name) {
        var params = {
          name: name,
          players: JSON.stringify(this.players)
        };
        $.post('/api/v1/teams.json', params).done(function(result) {
          window.location = "/teams/" + result.id;
        }.bind(this)).fail(function(result) {
          this.errors = result.responseJSON.errors;
        }.bind(this));
      },
      addPlayer: function() {
        this.players.push({
          name: '',
          position: ''
        })
      }
    }
  })
})
