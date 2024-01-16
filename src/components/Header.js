const Tital =()=>
{
 return(

  <div className="Tital">
 <h2>Food Fire</h2>
  </div>

 
 ) 
}


// export const Logo = () => (
//     <a href="/">
//       <img
//         className="logo"
//         src="https://png.pngtree.com/png-clipart/20220719/original/pngtree-food-logo-png-image_8366720.png"
//       />
//     </a>
//   );

 const Logo = () => (
  <a href="/">
    <img
      className="logo"
      src="https://png.pngtree.com/png-clipart/20220719/original/pngtree-food-logo-png-image_8366720.png"
    />
  </a>
);
  

const HeadComponent = () => (
  <div className="header">
    <Logo />
    <Tital/>
    <div className="nav_items">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Connect</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

export default HeadComponent