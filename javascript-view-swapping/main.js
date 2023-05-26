const $tabContainer = document.querySelector('.tab-container');
const $tabs = document.querySelectorAll('.tab');
const $views = document.querySelectorAll('view');

$tabContainer.addEventListener('click', handleViewSwap);
function handleViewSwap(event) {
  if (!event.target.matches('.tab')) {
    return;
  }
  for (let tabIndex = 0; tabIndex < $tabs.length; tabIndex++) {
    if ($tabs[tabIndex] === event.target) {
      $tabs[tabIndex].className = 'tab active';
    } else {
      $tabs[tabIndex].className = 'tab';
    }
  }
  const viewName = event.target.getAttribute('data-view');
  for (let viewIndex = 0; viewIndex < $views.length; viewIndex++) {
    if ($views[viewIndex].getAttribute('data-view') !== viewName) {
      $views[viewIndex].className = 'view hidden';
    } else {
      $views[viewIndex].className = 'view';
    }
  }
}
