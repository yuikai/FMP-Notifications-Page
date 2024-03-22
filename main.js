const app = new Vue({
  el: '#app',

  data: {
    activities: [
      {
        source: 'Anna Kim',
        srcImg: './assets/images/avatar-anna-kim.webp',
        type: 1,
        arguments: {
          group: 'Chess Club'
        },
        time: new Date( 2024,2,4, 11,32 ),
        unread: false,
      },
      {
        source: 'Nathan Peterson',
        srcImg: './assets/images/avatar-nathan-peterson.webp',
        type: 4,
        arguments: {
          postTitle: '5 end-game strategies to increase your win rate',
        },
        time: new Date( 2024,2,7, 19,23 ),
        unread: false,
      },
      {
        source: 'Kimberly Smith',
        srcImg: './assets/images/avatar-kimberly-smith.webp',
        type: 7,
        arguments: {
          picture: './assets/images/image-chess.webp',
        },
        time: new Date( 2024,2,14, 13 ),
        unread: false,
      },
      {
        source: 'Rizky Hasanuddin',
        srcImg: './assets/images/avatar-rizky-hasanuddin.webp',
        type: 3,
        arguments: {
          message: 'Hello, thanks for setting up the Chess Club. I\'ve been a member for a few weeks now and I\'m already having lots of fun and improving my game.',
        },
        time: new Date( 2024,2,17, 20 ),
        unread: false,
      },
      {
        source: 'Jacob Thompson',
        srcImg: './assets/images/avatar-jacob-thompson.webp',
        type: 0,
        arguments: {
          group: 'Chess Club',
        },
        time: new Date( 2024,2,21, 8 ),
        unread: true,
      },
      {
        source: 'Angela Gray',
        srcImg: './assets/images/avatar-angela-gray.webp',
        type: 2,
        arguments: {},
        time: new Date( 2024,2,22, 9,37 ),
        unread: true,
      },
      {
        source: 'Mark Webber',
        srcImg: './assets/images/avatar-mark-webber.webp',
        type: 4,
        arguments: {
          postTitle: 'My first tournament today!',
        },
        time: new Date( 2024,2, 22, 9,42 ),
        unread: true,
      },
    ]
  },
  computed: {
    unreadCount() {
      var count = 0;
      for ( var i=0; i < this.activities.length; i++ ) {
        if ( this.activities[i].unread ) { count++; }
      }
      return count;
    },    
  },

  methods: {
    description( index ) {
      switch ( this.activities[index].type ) {
        case 0: // [] joining []
          return [
            ' has joined your group ',
            this.activities[index].arguments.group,
            '',
            '',
          ];
        case 1: // [] leaving []
          return [
            ' left the group ',
            this.activities[index].arguments.group,
            '',
            '',
          ];
        case 2: // [] followed //
          return [
            ' followed you',
            '',
            '',
            '',
          ];
        case 3: // [] private message // []
          return [
            ' sent you a private message',
            '',
            this.activities[index].arguments.message,
            '',
          ];
        case 4: // [] reacted post []
          return [
            ' reacted to your recent post ',
            this.activities[index].arguments.postTitle,
            '',
            '',
          ];
        case 5: // [] commented post []
          return [
            ' commented on your recent post ',
            this.activities[index].arguments.postTitle,
            '',
            '',
          ];
        case 6: // [] reacted picture // // []
          return [
            ' reacted to your picture ',
            '',
            '',
            this.activities[index].arguments.picture,
          ];
        case 7: // [] commented picture // // []
        return [
          ' commented to your picture ',
          '',
          '',
          this.activities[index].arguments.picture,
        ];
      }

      return [ 'Error','','','' ];
    },
    passedTime( index ) {
      const oneSecond = 1000;
      const oneMinute = oneSecond * 60;
      const oneHour = oneMinute * 60;
      const oneDay = oneHour * 24;
      const oneWeek = oneDay * 7;
      const oneMonth = oneDay * 30;
      const oneYear = oneDay * 365;

      var elapsed = new Date() - this.activities[index].time;
      var value = '';
      var time;

      if (Math.floor(elapsed / oneYear) > 0) {
        time = Math.floor(elapsed / oneYear);
        value += time + ' year';
      } else if (Math.floor(elapsed / oneMonth) > 0) {
        time = Math.floor(elapsed / oneMonth);
        value += time + ' month';
      } else if (Math.floor(elapsed / oneWeek) > 0) {
        time = Math.floor(elapsed / oneWeek);
        value += time + ' week';
      } else if (Math.floor(elapsed / oneDay) > 0) {
        time = Math.floor(elapsed / oneDay);
        value += time + ' day';
      } else if (Math.floor(elapsed / oneHour) > 0) {
        time = Math.floor(elapsed / oneHour);
        value += time + ' hour';
      } else if (Math.floor(elapsed / oneMinute) > 0) {
        time = Math.floor(elapsed / oneMinute);
        value += time + ' minute';
      } else if (Math.floor(elapsed / oneSecond) > 0) {
        time = Math.floor(elapsed / oneSecond);
        value += time + ' second';
      }
      return value + (time > 1 ? 's' : '');
    },
    markAllAsRead() {
      for ( var i=0; i < this.activities.length; i++ ) {
        this.activities[i].unread = false;
      }
    },
    toggleRead( index ) {
      this.activities[index].unread = !this.activities[index].unread;
    },
  },
});