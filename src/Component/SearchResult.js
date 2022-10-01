import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
const url = 'https://amazoncloneserver.herokuapp.com/products_match';
function SearchResult(props) {
  let [products, setProducts] = useState("");
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
               in place of 'smooth' */
    });
  };
  useEffect(() => {
    scrollToTop();
    fetch(`${url}/${props.match.params.category}`, { method: 'GET' })
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  useEffect(() => {
    fetch(`${url}/${props.match.params.category}`, { method: 'GET' })
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, [props.match.params]);
  console.log(products);
  return (
    <>
      <h1>This is Search result</h1>
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis incidunt aliquam quam sapiente tenetur porro adipisci! Temporibus, quibusdam praesentium non ex pariatur deleniti qui! Ipsam commodi cum autem officia nihil eum totam reiciendis vitae natus, suscipit, vero officiis, quam perspiciatis dignissimos harum aut voluptate earum. Sapiente illo tempora unde. Voluptatum rerum, qui ullam quasi veniam magni! Natus, architecto. Tenetur tempore magnam nisi quibusdam libero, earum nam. Sapiente cumque dolorem repellat velit laboriosam architecto, aspernatur nesciunt, sed labore nisi minus facere doloribus nulla consequatur delectus ab! Eveniet maxime maiores voluptatum reiciendis, blanditiis sunt iure tempore nostrum ab animi illum autem totam vitae velit eius! Eius impedit esse natus voluptatem distinctio, ipsum libero iure aut. In quisquam harum sunt! Officiis alias, ea ex soluta quisquam ad quis sint tempora modi doloremque eius error quia laborum, cumque reiciendis tempore possimus? Placeat aperiam itaque porro officia quae id quod unde tenetur quasi aliquid, ex laborum reiciendis, quo minus error velit veritatis ipsum rerum obcaecati. Mollitia ea nesciunt cupiditate aliquam quo excepturi ut. Praesentium expedita, optio quae ullam inventore dicta odit pariatur quia. Doloribus nobis corrupti aut eius obcaecati illum, voluptatem vel atque sapiente, repellat maxime, quas laudantium. Ducimus sunt ratione porro cum consequatur excepturi delectus cupiditate! Facere, neque natus dicta nihil nulla rem asperiores explicabo aperiam consequatur, doloribus quaerat odit ullam cum deserunt unde sapiente atque perspiciatis quidem modi necessitatibus. Architecto debitis molestiae reprehenderit nisi eos quam natus porro maiores dolorum, molestias obcaecati corrupti omnis similique sit fuga provident modi corporis voluptatum animi, doloribus amet nemo tempora reiciendis officiis? Accusamus et, atque quae autem quo saepe eum reiciendis soluta cumque minima nemo exercitationem? Nulla quisquam inventore ex aperiam sunt veniam id illo non fugiat amet ducimus aliquid fuga perspiciatis optio modi molestiae iusto ipsam hic repellendus, error eligendi at ad tempora magni. Nisi ipsam, tenetur fugit harum quia quas sunt quam sint sit nulla possimus hic nam reprehenderit earum unde, laboriosam molestias. Sequi facilis numquam nostrum amet sed omnis praesentium eum, hic eos repudiandae minus culpa iste, at quidem labore explicabo dolorem deserunt veritatis! Perferendis, repellendus?</p>
      </div>
    </>
  )
}
export default withRouter(SearchResult);