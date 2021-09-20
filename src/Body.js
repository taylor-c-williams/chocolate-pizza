import React, { Component } from 'react';

export default class Body extends Component {
  render() {
    return (
      <div>
        <main>

          <section class="image1">
            <img src="choco-pizza.png" alt="chocolate pizza" />
          </section>

          <section class="blog-post">

  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
  type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
  remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
  Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
  of Lorem Ipsum.



          </section>
          <section class="image1">
            <img src="list-bg.png" alt="recipe card" />

          </section>

          <section class="sub-footer">
            <div class="repeating-img"></div>
            <div class="vanessa"></div>
          </section>
        </main>
      </div>
    );
  }
}
