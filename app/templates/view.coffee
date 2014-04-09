define(() ->
    Views = {}

    Views.Main = Backbone.View.extend({
        template: '<%- routeName %>/index'
    })

    Views
)
