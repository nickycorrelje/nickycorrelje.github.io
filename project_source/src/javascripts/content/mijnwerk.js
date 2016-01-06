define(function() {
  'use strict';

  var $selectedCase;
  var $container;
  var $cases;
  var $articles;
  var $portfolioButtons;
  var $closeButton;

  function initialize() {
    $container = $('.mijnwerk-cases');
    $cases = $('.portfolio-case');
    $articles = $('article');
    $portfolioButtons = $('.portfolio-button');
    $closeButton = $('.button-close');

    $portfolioButtons.click(portfolioButtonClickHandler);
    $closeButton.click(closeButtonClickHandler);

    resetCasesLayout();

    $container.panelSnap({
      panelSelector: '.portfolio-case',
      delay: 0
    });
  }

  function resetCasesLayout() {
    $closeButton.hide();
    $articles.hide();
    $portfolioButtons.show();
    $cases.show();
  }

  function portfolioButtonClickHandler(e) {
    selectCase(e.currentTarget);
    setContainerSize('220%');
  }

  function closeButtonClickHandler() {
    close();
  }

  function selectCase(target) {
    $cases.hide();
    $portfolioButtons.hide();
    $closeButton.show();

    var data = $(target).data('case');
    $selectedCase = $('.' + data);
    $selectedCase.find('article').show();
    $selectedCase.scrollTop(0);
    $selectedCase.show();
  }

  function setContainerSize(size) {
    $container.css({width: size});
  }

  function scrollToSelectedCase() {
    var scrollTo = $(window).height() * $cases.index($selectedCase);
    $container.scrollTop(scrollTo);
  }

  function close() {
    resetCasesLayout();
    scrollToSelectedCase();
    resetContainerSizes();
  }

  function resetContainerSizes() {
    setContainerSize('100%');
  }

  return {
    initialize: initialize,
    resetContainerSizes: resetContainerSizes
  };
});
