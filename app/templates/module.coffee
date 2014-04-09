define([
    'view/<%- routeName %>'
], (Views) ->
    Module = App.Module()

    Models = {}
    Module.Models = Models
    Module.Views = Views

    Models.Main = Backbone.Model.extend({
        _api: {
            url: 'hotpoint'
            data: {
                type: 'getSysHotAlbums'
            }
        }
    })

    Module.initialize = () ->
        main = new Models.Main()
        mainView = new Views.Main(model: main)

        App.useLayout().then(() ->
            App.layout.setView('#content', mainView)
            main.fetch().done((r) ->
                main.set(items: r)
            )
        )

    Module
)
