import React from 'react';
import './Footer.css';


export default function Footer() {
  return (
    <footer>
      <div class='disclaimer'>
        <p>
          This project was a made for fun project. I am not affiliated with Nintendo, Etsy, Amazon, Nookazon, etc. I'm just a gamer who is also an aspiring software developer. I do not own Animal Crossing and the like.  Credits to the following sites for providing the datasets files for use.
           And thank you to all my friends who sent in stuff for me to use
        </p>
        <div className='credit-links'>
        <a id ='json' href="https://github.com/Norviah/animal-crossing">
          Animal Crossing JSON
        </a>
        |
        <a id ='google' href="https://docs.google.com/spreadsheets/d/1i1nFE0GUCHQS0eWjPuUmYbdtEbeF0Pb-/edit#gid=163065426">
            SpreadSheet
        </a>
        </div>

      </div>
      </footer>
  )
}