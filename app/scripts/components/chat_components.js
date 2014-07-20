Trendchattr.SidePanelComponent = Em.Component.extend({
    tagName: 'div',
    classNames: ['sidepanel'],
    classNameBindings: ['isOpen:opened:closed'], // Tests whether isOpen is true or false

    isOpen: true,

    actions: {
      toggleSidepanel: function(){
          this.toggleProperty('isOpen');
      }
    }
});