export default function Header(): JSX.Element {
  return (
    <header className='header'>
      <div className='logo'>
        <i className='fas fa-shopping-bag'></i>
        <span>Shoppingly</span>
      </div>
      <div className='cart'>
        <div className='cart-icon'>
          <i className='fas fa-shopping-cart'></i>
        </div>
      </div>
    </header>
  );
}
