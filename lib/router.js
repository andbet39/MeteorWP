

PostsListController = RouteController.extend({
    template: 'posts',
    increment: 9,
    limit: function() {
        return parseInt(this.params.postsLimit) || this.increment;
    },
    findOptions: function() {
         return {sort: {date:-1} ,limit: this.limit()};
    },
    waitOn: function() {
        return Meteor.subscribe('posts', this.findOptions());
    },
    posts: function() {
        return Posts.find({}, this.findOptions());
    },
    data: function() {
        var hasMore = this.posts().count() === this.limit();
        var nextPath = this.route.path({postsLimit: this.limit() + this.increment});
        return {
            posts: this.posts(),
            nextPath: hasMore ? nextPath : null
        };
    }
});



Router.configure({
    layoutTemplate: 'layout'
});

Router.map(function() {
    this.route('posts', {
        path: '/:postsLimit?',
        controller: PostsListController
    });

    this.route('viewPost', {
        path: '/viewpost/:_id',
        waitOn: function() {
            return [
                Meteor.subscribe('singlePost', this.params._id),
            ];
        },
            data: function() { return Posts.findOne(this.params._id); }
    });
});


