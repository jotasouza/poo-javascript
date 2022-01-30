document.addEventListener('DOMContentLoaded', () => {
    // FUNÇÕES PARA ABRIR E FECHAR O MODAL
    function openModal($el) {
      $el.classList.add('is-active');
    }
  
    function closeModal($el) {
      $el.classList.remove('is-active');
    }
  
    function closeAllModals() {
      (document.querySelectorAll('.modal') || []).forEach(($modal) => {
        closeModal($modal);
      });
    }
  
    // ADICONA O EVENTO DE CLICK PARA ABRIR UM MODAL ESPECÍFICO
    (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
      const modal = $trigger.dataset.target;
      const $target = document.getElementById(modal);
      console.log($target);
  
      $trigger.addEventListener('click', () => {
        openModal($target);
      });
    });
  
    // ADICIONA O EVENTO DE CLICK EM VARIOS ELEMENTOS FILHOS PARA FECHAR O MODAL PAI
    (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
      const $target = $close.closest('.modal');
  
      $close.addEventListener('click', () => {
        closeModal($target);
      });
    });
  
    // ADCIONA UM EVENTO DE TECLADO PARA FECHAR TODOS OS MODAIS
    document.addEventListener('keydown', (event) => {
      const e = event || window.event;
  
      if (e.keyCode === 27) { // CHAVE DE ESCAPE 27 É A TECLA ESC
        closeAllModals();
      }
    });
  });