function Modal(overlay, anchorElement) {
    this.overlay = overlay;
    this.anchorElement = anchorElement;
    this.open = function() {
      this.overlay.classList.remove('is-hidden');
      this.overlay.style.top = this.anchorElement.offsetTop + 'px';
      this.overlay.style.left = this.anchorElement.offsetLeft + 'px';
      this.overlay.style.width = this.anchorElement.width + 'px';
      this.overlay.style.width = this.anchorElement.height + 'px';
    }
  
    this.close = function() {
      this.overlay.classList.add('is-hidden');
    }
    const closeButton = overlay.querySelector('.button-close')
    closeButton.addEventListener('click', this.close.bind(this));
    overlay.addEventListener('click', e => {
      if (e.srcElement.id === this.overlay.id) {
        this.close();
      }
    });
}
