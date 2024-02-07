function allowDrop(event) {
  event.preventDefault()
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id)
}

function drop(event) {
  event.preventDefault()
  var data = event.dataTransfer.getData("text")
  event.target.appendChild(document.getElementById(data))
}
const dragAndDrop = () => {
			const card = ducument.querySelector('js-cros');
      const cells = document.querySelector('js-cell');

      const dragStart = function () {
        setTimeout (() => {
          this.classList.add('hide');
        },0)
      };
      const dragEnd = function () {
        this.classList.remove('hide');
      };
      const dragOver = function (evt) {
	      evt.preventDefault();
        console.log('over');
      };
      const dragEnter = function () {
        console.log('enter');
      };
      const dragLeave = function () {
        console.log('leave');
        const dragDrop = function () {
		this.append(card)
        console.log('drop');
      };
      

      cells.forEach((cell) => {
        cell.addEventListener('dragover', dragOver);
        cell.addEventListener('dragenter', dragEnter);
        cell.addEventListener('dragleave', dragLeave);
        cell.addEventListener('drop', dragDrop);
      });
      

      card.addEventListener('dragstart', dragStart);
      card.addEventListener('dragend', dragEnd);
    };
    dragAndDrop()
