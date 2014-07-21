Trendchattr.SidePanelComponent = Em.Component.extend({
    // Uses a div wrapper
    tagName: 'div',
    // Gives that wrapper a default class
    classNames: ['sidepanel'],

    // Passed to by the name property
    name: null,

    // Tests whether isOpen is true or false
    classNameBindings: ['isOpen:opened:closed'],
    isOpen: true, // Passed to during component declaration
    actions: {
      toggleSidepanel: function(){
          this.toggleProperty('isOpen');
      }
    }
});