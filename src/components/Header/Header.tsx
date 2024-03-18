export default function Header(): JSX.Element {
  return (
    <header className='header-wrapper'>
      <div className='header'>
        <div className='logo'>
          <span>Shoppingly</span>
        </div>
        <div className='cart'>
          <div className='cart-icon'>
            <i className='fas fa-shopping-bag'></i>
          </div>
        </div>
      </div>
    </header>
  );
}
