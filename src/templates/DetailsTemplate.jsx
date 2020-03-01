import React from 'react';
import { Link } from 'react-router-dom';
import UserPageTemplate from './UserPageTemplate';

const DetailsTemplate = () => (
  <UserPageTemplate>
    <h1>Note</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
      explicabo optio commodi dignissimos esse debitis fugiat deleniti sed
      laudantium inventore? Autem fugit quod exercitationem iure, veniam nihil
      sequi, expedita consectetur asperiores perferendis dolore dolor
      aspernatur, possimus aperiam eligendi officiis? Cumque nesciunt modi magni
      voluptatibus hic maxime veritatis ipsam quos ea soluta sint laborum
      reprehenderit optio, recusandae non odio nisi rerum deleniti in
      necessitatibus consectetur veniam facilis. Fugiat magnam placeat ipsam
      aliquam quas adipisci sequi minima. Suscipit non, fugiat repellat
      doloremque qui inventore accusamus. Modi rerum, corporis recusandae sunt
      commodi asperiores vel illum possimus eos minus quae, facere quia quod
      non?
    </p>
    <Link to="/">go back</Link>
  </UserPageTemplate>
);

export default DetailsTemplate;
