# Custom *Actions* menu

You can register a custom command in the *Actions* menu of an item. To do this, you have to implement the [**CommandProvider**](http://admin-app-extensions-docs.sitefinity.site/interfaces/commandprovider.html) interface. The interface consists of two methods:

* [**getCommands**](http://admin-app-extensions-docs.sitefinity.site/interfaces/commandprovider.html#getcommands) - returns an **Observable** of [**CommandModel[]**](http://admin-app-extensions-docs.sitefinity.site/interfaces/commandmodel.html). You can configure these commands to be placed in either the grid *Actions* menu or in the *Action* menu in the content editor. The [**token.type**](http://admin-app-extensions-docs.sitefinity.site/interfaces/tokendata.html#type) property must contain either an **InjectionToken** or a **Type**. Once the Admin App identifies the [**token.type**](http://admin-app-extensions-docs.sitefinity.site/interfaces/tokendata.html#type) property, it dynamically instantiates the [**Command**](http://admin-app-extensions-docs.sitefinity.site/interfaces/command.html) implementation and invokes it with the data provided by the [**properties**](http://admin-app-extensions-docs.sitefinity.site/interfaces/tokendata.html#properties) property.

* [**getCategories**](http://admin-app-extensions-docs.sitefinity.site/interfaces/commandprovider.html#getcategories) - returns the categories of commands, described above.

## Example

![Print preview](./../assets/print-preview.JPG)
