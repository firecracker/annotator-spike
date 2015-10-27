import Ember from 'ember';

export default Ember.Component.extend({

  _init: Ember.on('didInsertElement', function() {
    $('body').annotator().annotator('addPlugin', 'Store', {
      prefix: 'http://localhost:5000',
      //Attach the uri of the current page to all annotations to allow search.
      annotationData: {
        // set uri here to scope annotation
        'uri': 'http://this/document/only',
        'other-thing': 'yep'
      },

    })
    .annotator('addPlugin', 'Tags')
    .annotator('addPlugin', 'Filter')
    .annotator('addPlugin', 'Touch', {
      force: true,
      useHighlighter: true
    });

  })
});
