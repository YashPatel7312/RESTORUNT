// File: FourPartComponent.jsx
import React from "react";
import "./FourPartComponent.css"; // Styling file
import about1 from "../assets/about1.jpg"; // Image 1
import about2 from "../assets/about2.jpg"; // Image 2

const FourPartComponent = () => {
  return (
    <div className="container">
      {/* Part 1 */}
      <div className="part">
        <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate 
          dolores necessitatibus quaerat non, explicabo consectetur laudantium 
          vel dicta consequatur eum quo aspernatur officia? Tempore doloribus 
          enim quas nam aspernatur est nostrum sint facere iste nesciunt nemo 
          explicabo, vitae aut impedit, voluptatem reiciendis corrupti similique 
          laudantium! Quaerat itaque ipsum quo eaque?
        </p>
      </div>

      {/* Part 2 */}
      <div className="part">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio necessitatibus 
          recusandae ducimus saepe consequuntur velit dolorem similique assumenda, 
          asperiores voluptatum vel modi minima omnis a quia quo molestiae. Incidunt 
          cumque ea odit optio, iusto voluptas ratione vitae obcaecati temporibus fuga 
          minima provident aut quasi autem expedita quia dolores at placeat perferendis. 
          Nisi qui earum inventore soluta explicabo, labore ut ea nemo reprehenderit minus 
          repellat, impedit atque vel debitis autem veritatis optio laboriosam officiis 
          molestiae maxime repellendus beatae tempora sapiente! Quam!
        </p>
      </div>

      {/* Part 3 */}
      <div className="part image-row">
        <img src={about1} alt="image1" />
        <img src={about2} alt="image2" />
      </div>

      {/* Part 4 */}
      <div className="part">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, esse nulla, 
          debitis similique, ad nihil architecto maiores doloribus quis blanditiis distinctio. 
          Praesentium, harum atque fuga nobis eius laboriosam totam consequuntur officia 
          dolorem quo velit incidunt fugiat at maxime, molestias esse dignissimos accusantium 
          enim debitis. Id et quidem sapiente adipisci dolor ipsa amet tempora porro atque 
          perferendis. Libero odio, molestiae aliquam modi facere, veritatis, illo labore 
          deserunt ducimus ipsam rem ipsum perspiciatis eveniet maiores excepturi. Architecto 
          sit ducimus inventore officia porro vel? Accusantium recusandae nisi autem iste 
          suscipit distinctio, libero rem.
        </p>
      </div>
    </div>
  );
};

export default FourPartComponent;
