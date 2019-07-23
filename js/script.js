//Here the global varibles are defined to be used in the functions.
const students = document.querySelectorAll('.student-item');

/***
    -Here a function is created that takes in the parameters of the
     list of students and the page number that they will be on.
    -A for loop is created so that each individual list item is iterated
     through to determine which page they will be displayed on.
***/
const showPage = (list, page) => {
      const pageItems = 10;
      const listLength = list.length;
      let startList = (page * pageItems) - pageItems;
      let endList = page * pageItems;

      for (let i = 0; i < listLength; i++)
          if ([i] >= startList && [i] < endList) {
            list[i].style.display = 'block';
          } else {
              list[i].style.display = 'none';
          }
};

/***
  - Here a function is created that appends the ul and li elements to create
    the page number links on each individual page.
  - An event listener is added so that when clicked the links will show the
    correct page number and correct number of students.
***/
const appendPageLinks = (list) => {
      const pages = Math.ceil(list.length / 10);
      let mainDiv = document.querySelector('.page');
      let div = document.createElement('div');
      div.className = 'pagination';
      let ul = document.createElement('ul');



      for (let i = 1; i <= pages; i++) {
          let li = document.createElement('li');
          let a = document.createElement('a');

          mainDiv.appendChild(div);
          div.appendChild(ul);
          ul.appendChild(li);
          li.appendChild(a);
          a.textContent = i;



          a.addEventListener('click', (e) => {
            for (let i = 1; i < pages; i++) {

            }
              showPage(students, i);
              document.querySelector('a').className = '';
              a.className = '';
              e.target.className='active';

          })



      div.appendChild(ul);
      mainDiv.appendChild(div);
        }
};
showPage(students, 1);
appendPageLinks(students);
document.querySelector('a').className = 'active';
